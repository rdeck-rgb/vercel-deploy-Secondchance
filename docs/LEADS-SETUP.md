# Lead capture → Google Sheet

All three site forms post to one Google Apps Script, which writes each lead into
the **SecondChance Media — Website Leads** sheet.

The script **only writes rows — it sends no email.** Notifications are handled
separately, outside this script.

**Sheet:** https://docs.google.com/spreadsheets/d/13U2SKqSkVz06S-24HXN_XFZDVHGePTV9S0e1AIKfJSQ/edit

| Form | Page | Tab it writes to |
|---|---|---|
| Free Eligibility Check | `/audit` | Eligibility Checks |
| Contact | `/contact` | Contact |
| Onboarding intake | `/get-started` | Onboarding |

Tabs and header rows are created automatically on the first submission — you do
not need to set them up by hand.

Files involved:

- `google-apps-script/leads-sync.gs` — the server side; paste into the sheet
- `src/lib/leads.ts` — the client side; holds the endpoint URL and token

## Setup (about 5 minutes, one time)

### The token is already set — nothing to do

Both files already contain the same generated token
(`899a77f377ecaacfbaf2bec53e7f88b0`), so you can skip straight to step 1.

It's just a shared password: the website sends it with every submission, and the
script ignores anything that doesn't carry it. The only rule is that the value
in `leads-sync.gs` and in `src/lib/leads.ts` must match — which they already do.

To change it later, put any random string in both places. On Windows:

```bash
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

### 1. Add the script to the sheet

1. Open the sheet, then **Extensions → Apps Script**.
2. Delete the placeholder `myFunction`, paste the whole contents of
   `google-apps-script/leads-sync.gs`.
3. **Save.** Nothing in the script needs editing.

### 2. Deploy it

**Deploy → New deployment → Web app**

- **Execute as:** Me
- **Who has access:** Anyone

Click **Deploy**, then **Authorize access** and accept the permission prompt
(it only needs permission to edit this spreadsheet). Copy the `/exec` URL.

> Google shows an "unverified app" warning during authorization. That is normal
> for your own Apps Script — click **Advanced → Go to (project name)**.

### 3. Turn it on in the site

Paste the `/exec` URL into `src/lib/leads.ts` — this is the only line you edit:

```ts
export const LEADS_ENDPOINT = 'https://script.google.com/macros/s/AKfyc.../exec'
```

Leave `LEADS_TOKEN` alone. Commit and redeploy. Until `LEADS_ENDPOINT` is set,
the forms still show the normal thank-you but send nothing — so the site is
never broken mid-setup.

### 4. Test

Submit a real entry on `/contact`. Within a few seconds you should see a row on
the **Contact** tab. If nothing arrives, open the Apps Script editor →
**Executions** to see the error.

**Take longer than 3 seconds to fill the form**, or your own test will be
dropped as a bot (see below).

## Redeploying after script edits

Apps Script keeps serving the deployed version, not your latest save. After
editing the `.gs`, do **Deploy → Manage deployments → edit (pencil) → Version:
New version → Deploy**. The `/exec` URL stays the same.

## Spam protection

Four layers, all server-enforced. Bots are **silently accepted and dropped** —
the response is always `ok`, so a bot gets no signal about what tripped it and
can't tune around the filter.

1. **Honeypot** — a `Company website` field, positioned off-screen (not
   `display:none`, which bots skip). Real people never see or tab to it. Filled
   in ⇒ dropped.
2. **Timing trap** — submissions faster than 3 seconds after the form loads are
   dropped. Bots post near-instantly.
3. **Shared token** — a POST without the matching token is dropped, which stops
   generic bots that scrape `/exec` URLs and blast them.
4. **Rate limit** — max 5 submissions per email address per hour.

Also hardened:

- **Formula injection** — a lead who types `=IMPORTXML(...)` is stored as text,
  not executed when you open the sheet.
- **Field caps** — anything over 2,000 characters is truncated.
- **Email validation** — entries without a usable email are dropped.
- **Lock** — concurrent submissions can't collide and overwrite a row.

### Limits — worth knowing

The token ships inside the site's JavaScript, so it is **not** a secret. Anyone
who views source can read it. It stops automated drive-by spam, not a person who
deliberately targets this form. The honeypot and timing trap have the same
character: they defeat the overwhelming majority of bots at zero friction to
real users, but they aren't a hard guarantee.

If the forms ever get targeted specifically, the real fix is
**Cloudflare Turnstile** (free, privacy-friendly, usually invisible): add the
widget, send its token with the submission, and verify it server-side in
`doPost` before writing the row. Ask and I'll wire it up — but start here; this
is usually enough.

## Changing what's collected

Add the field to the form component, then add a matching row to that form's
`fields` array in `leads-sync.gs` (`['Column Header', 'payloadKey']`) and
redeploy. New columns only appear on tabs created after the change — for an
existing tab, add the header cell yourself or rename the tab so it's recreated.
