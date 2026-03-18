// vite.config.ts
import { defineConfig } from "file:///C:/Users/user/Desktop/Belaya_Reka_Local/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/user/Desktop/Belaya_Reka_Local/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  // base: "src/",
  plugins: [react()],
  preview: {
    port: 1e3,
    strictPort: true
  },
  server: {
    port: 1e3,
    strictPort: true,
    host: true
  },
  resolve: {
    alias: {
      assets: "/src/app/assets",
      pages: "/src/pages",
      styles: "/src/app/assets/styles",
      core: "/src/core",
      components: "/src/components",
      common: "/src/common",
      layout: "/src/layout",
      test: "/src/test",
      ts: "/src/fusion/ts",
      helpers: "/src/fusion/helpers",
      hooks: "/src/fusion/hooks",
      data: "/src/fusion/data",
      store: "/src/fusion/store"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXERlc2t0b3BcXFxcQmVsYXlhX1Jla2FfTG9jYWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHVzZXJcXFxcRGVza3RvcFxcXFxCZWxheWFfUmVrYV9Mb2NhbFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdXNlci9EZXNrdG9wL0JlbGF5YV9SZWthX0xvY2FsL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAvLyBiYXNlOiBcInNyYy9cIixcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgcHJldmlldzoge1xyXG4gICAgcG9ydDogMTAwMCxcclxuICAgIHN0cmljdFBvcnQ6IHRydWUsXHJcbiAgfSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIHBvcnQ6IDEwMDAsXHJcbiAgICBzdHJpY3RQb3J0OiB0cnVlLFxyXG4gICAgaG9zdDogdHJ1ZSxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgIGFzc2V0czogXCIvc3JjL2FwcC9hc3NldHNcIixcclxuICAgICAgcGFnZXM6IFwiL3NyYy9wYWdlc1wiLFxyXG4gICAgICBzdHlsZXM6IFwiL3NyYy9hcHAvYXNzZXRzL3N0eWxlc1wiLFxyXG5cclxuICAgICAgY29yZTogXCIvc3JjL2NvcmVcIixcclxuICAgICAgY29tcG9uZW50czogXCIvc3JjL2NvbXBvbmVudHNcIixcclxuICAgICAgY29tbW9uOiBcIi9zcmMvY29tbW9uXCIsXHJcbiAgICAgIGxheW91dDogXCIvc3JjL2xheW91dFwiLFxyXG4gICAgICB0ZXN0OiBcIi9zcmMvdGVzdFwiLFxyXG5cclxuICAgICAgdHM6IFwiL3NyYy9mdXNpb24vdHNcIixcclxuICAgICAgaGVscGVyczogXCIvc3JjL2Z1c2lvbi9oZWxwZXJzXCIsXHJcbiAgICAgIGhvb2tzOiBcIi9zcmMvZnVzaW9uL2hvb2tzXCIsXHJcbiAgICAgIGRhdGE6IFwiL3NyYy9mdXNpb24vZGF0YVwiLFxyXG4gICAgICBzdG9yZTogXCIvc3JjL2Z1c2lvbi9zdG9yZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpVCxTQUFTLG9CQUFvQjtBQUM5VSxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQSxFQUUxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFFUixNQUFNO0FBQUEsTUFDTixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFFTixJQUFJO0FBQUEsTUFDSixTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
