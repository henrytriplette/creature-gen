import path from "path";
import vue from "@vitejs/plugin-vue";

const root = path.resolve(__dirname, "..");

// https://vitejs.dev/config/
export default {
  resolve: {
    alias: {
      "@": path.resolve(root, "./src"),
    },
  },
  optimizeDeps: {
    include: [],
  },
  plugins: [
    vue({
      template: {},
    }),
  ],
};
