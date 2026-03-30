/**
 * ─────────────────────────────────────────────────────────────
 *  Brand Configuration — MAST Security LTD
 *  Edit this file when deploying for a new company.
 * ─────────────────────────────────────────────────────────────
 */
export const brand = {
  /** Company name shown in the app header and login page */
  companyName:    'MAST Security LTD',

  /** Short name / abbreviation (used in browser tab title) */
  appName:        'Certificate Generator',

  /**
   * Path to the company logo.
   * Place the file in /public/ and set the path here,
   * e.g. '/logo.svg' or '/logo.png'.
   * Set to null to show the text name instead.
   */
  logoPath:       '/mast-logo.svg' as string | null,

  /** Logo alt text for screen readers */
  logoAlt:        'MAST Security LTD logo',

  /**
   * Primary accent colour for the *app UI* (not certificates).
   * Uses a CSS colour string — hex, rgb, oklch, etc.
   * Certificate template colours are set in src/styles/global.css.
   */
  primaryColor:   '#B39A61',   // MAST gold

  /** Footer line shown at the bottom of the app */
  footerText:     `© ${new Date().getFullYear()} MAST Security LTD`,

  /**
   * Default field values pre-filled in the form.
   * Users can edit these before generating a certificate.
   */
  defaults: {
    companyName:  'MAST Security LTD',
    issuerTitle:  'Director of Security',
  },
} as const;
