/**
 * SecondChance Media — website forms → Google Sheets lead capture.
 *
 * Paste this into Extensions → Apps Script of the
 * "SecondChance Media — Website Leads" sheet, then deploy as a Web App.
 * Full walkthrough in docs/LEADS-SETUP.md.
 *
 * Three forms post here; each gets its own tab:
 *   eligibility → "Eligibility Checks"   (/audit)
 *   contact     → "Contact"              (/contact)
 *   onboarding  → "Onboarding"           (/get-started)
 *
 * This script only writes rows — it sends no email. Notifications are handled
 * separately outside this script.
 *
 * Spam handling: bots are silently accepted and dropped (we return ok:true and
 * write nothing) so they get no signal about what tripped the filter.
 */

// ── Settings ────────────────────────────────────────────────────────────────

// Must match LEADS_TOKEN in src/lib/leads.ts. Any random string.
// This is not a secret (it ships in the site's JS) — it only stops drive-by
// bots that scrape /exec URLs and post junk. See "Limits" in LEADS-SETUP.md.
var SHARED_TOKEN = '899a77f377ecaacfbaf2bec53e7f88b0';

var MIN_ELAPSED_MS = 3000; // a human takes at least this long to fill a form
var MAX_FIELD_LEN = 2000;  // truncate anything longer, so one lead can't flood a cell
var MAX_PER_EMAIL_PER_HOUR = 5;

// ── Form definitions ────────────────────────────────────────────────────────

var FORMS = {
  eligibility: {
    tab: 'Eligibility Checks',
    fields: [
      ['Legal Nonprofit Name', 'legalName'],
      ['EIN', 'ein'],
      ['Website', 'website'],
      ['Contact Name', 'contactName'],
      ['Phone', 'phone'],
      ['Email', 'email'],
    ],
  },
  contact: {
    tab: 'Contact',
    fields: [
      ['Name', 'name'],
      ['Organization', 'org'],
      ['Email', 'email'],
      ['Topic', 'topic'],
      ['Message', 'message'],
    ],
  },
  onboarding: {
    tab: 'Onboarding',
    fields: [
      ['Legal Nonprofit Name', 'legalName'],
      ['EIN', 'ein'],
      ['Website', 'website'],
      ['Contact Name', 'contactName'],
      ['Phone', 'phone'],
      ['Email', 'email'],
      ['Goodstack ID', 'goodstack'],
      ['Determination Letter', 'determinationLetter'],
      ['Goodstack Status', 'goodstackStatus'],
      ['Google for Nonprofits', 'googleNonprofits'],
      ['Admin Access', 'websiteAccess'],
      ['Platforms', 'platforms'],
      ['GA4', 'ga4'],
      ['Search Console', 'searchConsole'],
      ['Current Pages', 'currentPages'],
      ['Website Condition', 'websiteHealth'],
      ['Goals', 'goals'],
      ['Audience', 'audience'],
      ['Geography', 'geography'],
      ['Timeline', 'timeline'],
      ['Notes', 'notes'],
    ],
  },
};

// ── Entry point ─────────────────────────────────────────────────────────────

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(15000);
  try {
    var d = JSON.parse((e && e.postData && e.postData.contents) || '{}');

    // Silently accept-and-drop bots — never tell them which check failed.
    if (d.hp) return ok_();                                        // honeypot filled
    if (d.elapsedMs != null && d.elapsedMs < MIN_ELAPSED_MS) return ok_(); // too fast
    if (SHARED_TOKEN && d.token !== SHARED_TOKEN) return ok_();     // no/!wrong token

    var form = FORMS[d.form];
    if (!form) return ok_();                                       // unknown form name
    if (!isEmail_(d.email)) return ok_();                          // unusable lead
    if (rateLimited_(String(d.email).toLowerCase())) return ok_();

    var when = d.ts ? new Date(d.ts) : new Date();
    var values = form.fields.map(function (f) { return clean_(d[f[1]]); });
    var row = [when].concat(values).concat([clean_(d.page)]);

    sheetFor_(form).appendRow(row);

    return ok_();
  } catch (err) {
    // Log for debugging (View → Executions) but don't leak details to the caller.
    console.error(err);
    return json_({ ok: false });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return ContentService.createTextOutput('OK — SecondChance leads endpoint is live.');
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function sheetFor_(form) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(form.tab);
  if (!sheet) sheet = ss.insertSheet(form.tab);
  if (sheet.getLastRow() === 0) {
    var headers = ['Timestamp']
      .concat(form.fields.map(function (f) { return f[0]; }))
      .concat(['Submitted From']);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/**
 * Trim, cap length, and neutralise spreadsheet formula injection — a lead who
 * types "=IMPORTXML(...)" must land as text, not run when the sheet opens.
 */
function clean_(v) {
  if (v == null) return '';
  var s = Array.isArray(v) ? v.join(', ') : String(v);
  s = s.trim();
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s;
  return s.length > MAX_FIELD_LEN ? s.slice(0, MAX_FIELD_LEN) + '…' : s;
}

function isEmail_(v) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(String(v || '').trim());
}

function rateLimited_(key) {
  var cache = CacheService.getScriptCache();
  var k = 'rl_' + Utilities.base64EncodeWebSafe(key).replace(/=/g, '').slice(0, 100);
  var n = Number(cache.get(k) || 0);
  if (n >= MAX_PER_EMAIL_PER_HOUR) return true;
  cache.put(k, String(n + 1), 3600);
  return false;
}

function ok_() {
  return json_({ ok: true });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
