<template>
  <div>
    <header class="menu" :class="menuClass">
      <nav-toggle class="menu__open" @toggle-menu="toggleMenu"></nav-toggle>
      <div class="menu__sidebar">
        <language-toggle class="menu__language" color="blue"></language-toggle>
        <nav-toggle
          class="menu__close"
          :type="'close'"
          :color="'blue'"
          @toggle-menu="toggleMenu"
        ></nav-toggle>
        <nav class="menu__nav">
          <base-link
            v-for="link in links"
            :key="link.label"
            :route-name="link.routeName"
            color="blue"
            >{{ link.label }}</base-link
          >
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import international from "../../../international.js";

import NavToggle from "./NavToggle.vue";
import LanguageToggle from "./LanguageToggle.vue";

export default {
  components: {
    NavToggle,
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
    const menuOpen = ref(false);
    const menuClass = computed(() => {
      return { "menu--closed": !menuOpen.value };
    });
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };
    return { links, menuClass, toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.menu {
  position: relative;
  &--closed > &__sidebar {
    transform: translateX(-100%);
  }
  &__open {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
  }
  &__sidebar {
    position: absolute;
    top: 0;
    left: 0;
    background-color: $color-gold;
    height: 100vh;
    padding: 1rem;
    display: grid;
    grid-template-columns: repeat(2, max-content);
    grid-template-rows: repeat(2, max-content);
    align-items: center;
    box-shadow: 0.5rem 0 0.5rem $color-blue-transparent;
    transition: transform 0.5s ease;
  }
  &__language {
    margin-right: 2rem;
  }
  &__nav {
    grid-column: span 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    margin-top: 2rem;
  }
}
</style>
