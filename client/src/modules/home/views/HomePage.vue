<template>
  <div class="home">
    <navigation-toggle
      class="home__toggle"
      :type="'open'"
      @toggle-menu="toggleMenu"
    ></navigation-toggle>
    <navigation-menu
      :open="menuOpen"
      @toggle-menu="toggleMenu"
    ></navigation-menu>
    <intro-text></intro-text>
  </div>
</template>

<script>
import { ref } from "vue";

import IntroText from "../components/IntroText.vue";
import NavigationMenu from "../components/NavigationMenu.vue";
import NavigationToggle from "../components/NavigationToggle.vue";

export default {
  components: {
    IntroText,
    NavigationMenu,
    NavigationToggle,
  },
  setup() {
    const menuOpen = ref(false);
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
    };
    return { menuOpen, toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.home {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      $color-blue,
      $color-blue-transparent
    ),
    url("../../../assets/images/main-background.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  @include responsive($screen-tablet-s) {
    justify-content: flex-start;
    padding: 10vw;
  }
  &__toggle {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    @include responsive($screen-tablet-s) {
      display: none;
    }
  }
}
</style>
