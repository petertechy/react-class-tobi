import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: "autoUpdate",
 includeAssets: ["favicon.ico", "apple-touch-icon-180x180.png"],
 manifest: {
 name: "Foodie App",
 short_name: "Foodie",
 description: "This is a Food Restaurant Application",
 theme_color: "#4f46e5",
 background_color: "#f4f4f5",
 display: "standalone",
 start_url: "/",
 icons: [
 { src: "pwa-64x64.png", sizes: "64x64", type: "image/png" },
 { src: "pwa-192x192.png", sizes: "192x192", type: "image/png" },
 { src: "pwa-512x512.png", sizes: "512x512", type: "image/png" },
 {
 src: "maskable-icon-512x512.png",
 sizes: "512x512",
 type: "image/png",
 purpose: "maskable",
 },
 ],
 },
 workbox: {
 globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
 },
    })
  ],
})
