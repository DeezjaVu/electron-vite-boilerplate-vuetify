/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
// import "@mdi/font/css/materialdesignicons.css";
import "@renderer/assets/mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Custom styles
import "@renderer/styles/main.scss";

// Components

// Composables
import { createVuetify } from "vuetify";
import VuetifyTheme from "./vuetify-theme";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
    variations: {
      colors: ["primary", "secondary", "tertiary", "primary-variant", "secondary-variant"],
      lighten: 2,
      darken: 2
    },
    themes: {
      dark: {
        dark: true,
        colors: {
          primary: VuetifyTheme.dark.primary,
          secondary: VuetifyTheme.dark.secondary,
          tertiary: VuetifyTheme.dark.tertiary,
          "primary-variant": VuetifyTheme.dark.primaryVariant,
          "secondary-variant": VuetifyTheme.dark.secondaryVariant,
          error: VuetifyTheme.dark.error,
          info: VuetifyTheme.dark.info,
          success: VuetifyTheme.dark.success,
          warning: VuetifyTheme.dark.warning,
          surface: VuetifyTheme.dark.surface,
          "surface-variant": VuetifyTheme.dark.surfaceVariant,
          "surface-light": VuetifyTheme.dark.surfaceLight,
          background: VuetifyTheme.dark.background
        }
      }
    }
  }
});
