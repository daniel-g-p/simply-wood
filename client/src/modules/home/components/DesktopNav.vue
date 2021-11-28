<template>
  <header class="menu">
    <nav class="menu__nav">
      <base-link
        v-for="link in links"
        :key="link.label"
        :route-name="link.routeName"
        >{{ link.label }}</base-link
      >
    </nav>
    <language-toggle></language-toggle>
  </header>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import international from "../../../international.js";

import LanguageToggle from "./LanguageToggle.vue";

export default {
  components: {
    LanguageToggle,
  },
  setup() {
    const store = useStore();
    const activeLanguage = computed(() => {
      return store.getters["language/activeLanguage"];
    });
    const links = computed(() => {
      return international(activeLanguage.value, "home", "nav");
    });
    return { links };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__nav {
    display: flex;
    gap: 2rem;
  }
}
</style>
