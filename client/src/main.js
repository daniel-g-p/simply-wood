import { createApp } from "vue";

import App from "./App.vue";

import BasePage from "./components/BasePage.vue";
import BaseLink from "./components/BaseLink.vue";
import BaseTextbox from "./components/BaseTextbox.vue";
import BaseButton from "./components/BaseButton.vue";
import BaseAlert from "./components/BaseAlert.vue";
import BaseLoader from "./components/BaseLoader.vue";
import BaseModal from "./components/BaseModal.vue";

import router from "./router.js";
import store from "./store.js";

const app = createApp(App);

app.component("BasePage", BasePage);
app.component("BaseLink", BaseLink);
app.component("BaseTextbox", BaseTextbox);
app.component("BaseButton", BaseButton);
app.component("BaseAlert", BaseAlert);
app.component("BaseLoader", BaseLoader);
app.component("BaseModal", BaseModal);

app.use(store);
app.use(router);

app.mount("#app");
