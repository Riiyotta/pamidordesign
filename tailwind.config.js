/** Tailwind v3. Preflight is disabled because the original site's compiled
 *  stylesheet (src/original.css) ships its own reset + every utility it uses. */
export default {
  content: ['./src/tw/**/*.{js,jsx}'],
  corePlugins: { preflight: false },
  theme: { extend: {} },
  plugins: [],
};
