import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Vertuallr/', // Base path, must match the repository name
  plugins: [react()],
});
