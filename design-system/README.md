# Curalinx design system (reference)

The website implements this system. The live, browsable version with component previews lives in the Curalinx Design System artifact on claude.ai.

- `brand-book.md`: principles, colour, typography, motifs, motion, page blueprint and accessibility rules.
- `tokens.json`: every design token (colours in light and dark themes, type scale, spacing, radii, shadows).
- `assets/Logos`: the supplied logo and transparent variants (never redraw them).
- `assets/Icons`: the Lucide icon subset used by the site.

In the React app the tokens live in `src/index.css` (the Tailwind `@theme` block).
