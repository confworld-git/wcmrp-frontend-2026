import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
  chunkSizeWarningLimit: 1500, // in KB
}
});

// https://colorhunt.co/palette/80cbc4b4ebe6fbf8efffb433

// #80CBC4
// #B4EBE6
// #FBF8EF
// #FFB433
