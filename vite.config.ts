import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { env } from "process";
import { fileURLToPath } from "url";

const target = env.ASPNETCORE_HTTPS_PORT
  ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
  : env.ASPNETCORE_URLS
  ? env.ASPNETCORE_URLS.split(";")[0]
  : "https://localhost:7261";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: "./env",
  server: {
    proxy: {
      "^/graphql": {
        target,
        secure: false,
      },
    },
    port: 5173,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    cssMinify: true,
    manifest: true,
    minify: "terser",
    emptyOutDir: true,
    cssCodeSplit: true,
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      sourceMap: true,
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info", "console.debug"],
        dead_code: true,
        unused: true,
        loops: true,
      },
    },

    // rollupOptions: {
    //   watch: {
    //     include: ['src/**', 'node_modules/**'],
    //     exclude: ['node_modules/**/node_modules/**']
    //   }
    // },
  },
});
