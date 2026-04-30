/**
 * Certificate Template Registry — MAST Security LTD
 * ─────────────────────────────────────────────────────────────
 * This is the single place to register templates so they appear
 * in the picker on every certificate page.
 *
 * HOW TO ADD A NEW TEMPLATE
 * ─────────────────────────
 * 1. Create  src/pages/certificates/<your-id>.astro
 *    (use mast-recognition.astro as a starting point)
 *
 * 2. Add an entry to TEMPLATES below.
 *    The `id` must match the filename (without .astro).
 *
 * That's it. No other files to touch.
 */

export interface TemplateMeta {
  /** Must match the filename in src/pages/certificates/<id>.astro */
  id:          string;
  name:        string;
  category:    string;
  orientation: 'landscape' | 'portrait';
  emoji:       string;
}

export const TEMPLATES: TemplateMeta[] = [
  // ── MAST Security certificate styles ────────────────────────
  {
    id:          'mast-recognition-portrait',
    name:        'Recognition (Portrait)',
    category:    'MAST Security',
    orientation: 'portrait',
    emoji:       '🏅',
  },
  {
    id:          'mast-recognition',
    name:        'Recognition',
    category:    'MAST Security',
    orientation: 'landscape',
    emoji:       '🏅',
  },
  {
    id:          'mast-prestige',
    name:        'Prestige',
    category:    'MAST Security',
    orientation: 'landscape',
    emoji:       '✦',
  },
  {
    id:          'mast-classic',
    name:        'Classic',
    category:    'MAST Security',
    orientation: 'landscape',
    emoji:       '📋',
  },
  // ↑ Add new entries here
];
