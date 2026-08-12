/**
 * Lead capture — posts the site's three forms to the Google Apps Script that
 * writes them into the "SecondChance Media — Website Leads" sheet.
 *
 * Setup (endpoint URL + token) is in docs/LEADS-SETUP.md. Until LEADS_ENDPOINT
 * is filled in, submitLead() resolves 'ok' without sending, so the forms still
 * thank the user rather than showing an error.
 */

// Apps Script Web App endpoint, bound to the "SecondChance Media — Website
// Leads" sheet. See docs/LEADS-SETUP.md to redeploy or change it.
export const LEADS_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbxXwSkQ1z2Lua5PvDXsukGFtkNd_tTm6iW7TdJArn-Alnk-5eJPPB3_rvXuDXKXsUd4pQ/exec'

// Must match SHARED_TOKEN in google-apps-script/leads-sync.gs.
export const LEADS_TOKEN = '899a77f377ecaacfbaf2bec53e7f88b0'

/** A human takes at least this long to fill in a form; bots do not. */
export const MIN_ELAPSED_MS = 3000

export type LeadForm = 'eligibility' | 'contact' | 'onboarding' | 'order'

export type LeadGuard = {
  /** Value of the honeypot input — must be empty for a real person. */
  hp: string
  /** Date.now() from when the form mounted. */
  startedAt: number
}

/**
 * Off-screen rather than display:none — bots skip hidden fields but happily
 * fill ones that are merely positioned away. aria-hidden + tabIndex={-1} keep
 * it away from real people and screen readers.
 */
export const honeypotWrapCls =
  'absolute left-[-9999px] top-auto h-px w-px overflow-hidden'

export async function submitLead(
  form: LeadForm,
  fields: Record<string, unknown>,
  guard: LeadGuard
): Promise<'ok' | 'error'> {
  const elapsedMs = Date.now() - guard.startedAt

  // Drop obvious bots without telling them why — and without a network call.
  // Returning 'ok' means the UI shows the normal thank-you.
  if (guard.hp || elapsedMs < MIN_ELAPSED_MS) return 'ok'

  if (!LEADS_ENDPOINT) return 'ok' // not wired up yet

  try {
    await fetch(LEADS_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        ...fields,
        form,
        token: LEADS_TOKEN,
        ts: new Date().toISOString(),
        elapsedMs,
        hp: guard.hp, // the server re-checks both signals
        page: typeof window !== 'undefined' ? window.location.pathname : '',
      }),
    })
    return 'ok'
  } catch {
    return 'error'
  }
}
