<template>
  <div class="home">
    <mobile-nav class="home__nav--mobile"></mobile-nav>
    <desktop-nav class="home__nav--desktop"></desktop-nav>
    <intro-text></intro-text>
  </div>
</template>

<script>
import { ref } from "vue";

import IntroText from "../components/IntroText.vue";
import DesktopNav from "../components/DesktopNav.vue";
import MobileNav from "../components/MobileNav.vue";

export default {
  components: {
    IntroText,
    DesktopNav,
    MobileNav,
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
  padding: 1.5rem;
  @include responsive($screen-tablet-m) {
    display: grid;
    grid-template-rows: 3rem 1fr 3rem;
    justify-content: stretch;
    padding: 3rem 10vw;
  }
  &__nav {
    &--mobile {
      position: absolute;
      top: 0;
      left: 0;
      @include responsive($screen-tablet-m) {
        display: none;
      }
    }
    &--desktop {
      display: none;
      @include responsive($screen-tablet-m) {
        display: flex;
      }
    }
  }
  &__toggle {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
    @include responsive($screen-tablet-s) {
      display: none;
    }
  }
  &__contact {
    position: absolute;
    bottom: 2rem;
    right: 50%;
    transform: translateX(50%);
    @include responsive($screen-desktop-s) {
      bottom: 50%;
      right: 3rem;
      transform: translate(0, 50%);
    }
  }
}
</style>
