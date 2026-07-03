import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // json-server Server/Contacts.json ga yozadi. Uni kuzatmaymiz,
      // aks holda har POST'da Vite butun sahifani qayta yuklaydi.
      ignored: ["**/Server/**"],
    },
  },
})
