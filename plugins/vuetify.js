import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import colors from "vuetify/lib/util/colors";

export default defineNuxtPlugin((nuxtApp) => {
  const myCustomRedTheme = {
    dark: true,
    colors: {
      background: "#414833",
      surface: "#414833",
      primary: "#7f4f24",
      "primary-darken-1": "#582f0e",
      secondary: "#656d4a",
      "secondary-darken-1": "#333d29",
      error: "#6f1d1b",
      info: "#a68a64",
      success: "#49a078",
      warning: "#fb8b24",
    },
  };
  const myCustomLightTheme = {
    dark: false,
    colors: {
      background: "#ccd5ae",
      surface: "#ccd5ae",
      primary: "#d4a373",
      "primary-darken-1": "#3700B3",
      secondary: "#e9edc9",
      "secondary-darken-1": "#018786",
      error: "#B00020",
      info: "#2196F3",
      success: "#4CAF50",
      warning: "#FB8C00",
    },
  };
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: "myCustomRedTheme",
      themes: {
        myCustomLightTheme,
        myCustomRedTheme,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
