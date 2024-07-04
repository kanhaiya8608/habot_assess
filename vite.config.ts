import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Base alias for src directory
      '@assets': path.resolve(__dirname, '../src/assets'), // Example alias for ../../assets
      '@components': path.resolve(__dirname, '../components'), // Example alias for ../components
      // Add more aliases as needed
    },
  },
});
