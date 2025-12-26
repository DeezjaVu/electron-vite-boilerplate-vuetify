import { resolve } from "path";
import { defineConfig } from "electron-vite";
import Vue from "@vitejs/plugin-vue";
import Unfonts from "unplugin-fonts/vite";
import Vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineConfig({
  main: {},
  preload: {},
  renderer: {
    plugins: [
      Vue({
        template: { transformAssetUrls }
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
      Vuetify({
        autoImport: true,
        styles: {
          configFile: "src/styles/settings.scss"
        }
      }),
      Unfonts({
        google: {
          preconnect: false,
          families: [
            { name: "Quicksand", styles: "wght@100;300;400;500;700;900" },
            { name: "IBM Plex Mono", styles: "wght@100;300;400;500;700;900" }
          ]
        }
      })
    ],
    resolve: {
      alias: {
        "@renderer": resolve("src/renderer/src")
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler"
        },
        sass: {
          api: "modern-compiler"
        }
      }
    }
  }
});
