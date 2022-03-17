import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "./main.sass";
import "@fortawesome/fontawesome-free/css/all.css";
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "fa",
  },
  theme: {
    themes: {
      light: {
        primary: "#ff0000",
        secondary: "#0B2154",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});
