<template>
  <header class="header" :class="menuClass">
    <nav class="header__nav">
      <navigation-toggle
        class="header__toggle"
        :type="'close'"
        :color="'blue'"
        @toggle-menu="toggleMenu"
      ></navigation-toggle>
      <a href="/" class="header__link">A propos</a>
      <a href="/" class="header__link">Nos créations</a>
      <a href="/" class="header__link">Avis de nos clients</a>
      <a href="/" class="header__link">Contact</a>
    </nav>
    <div class="header__background"></div>
  </header>
</template>

<script>
import { computed } from "vue";

import NavigationToggle from "../components/NavigationToggle.vue";

export default {
  components: {
    NavigationToggle,
  },
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, context) {
    const menuClass = computed(() => {
      return { "header--closed": !props.open };
    });
    const toggleMenu = () => {
      context.emit("toggle-menu");
    };
    return { menuClass, toggleMenu };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.header {
  position: absolute;
  z-index: 1;
  top: 2rem;
  left: 10vw;
  @include responsive($screen-tablet-s, "max") {
    top: 0;
    left: 0;
    &--closed {
      pointer-events: none;
      .header__nav {
        transform: translateX(-100%);
      }
      .header__background {
        opacity: 0;
      }
    }
  }
  &__nav {
    position: relative;
    display: flex;
    gap: 2rem;
    transition: transform 0.5s ease;
    @include responsive($screen-tablet-s, "max") {
      flex-direction: column;
      align-items: flex-start;
      height: 100vh;
      padding: 4.5rem 1.5rem;
      background-color: $color-gold;
    }
  }
  &__link {
    position: relative;
    text-decoration: none;
    font-style: italic;
    color: $color-gold-transparent;
    transition: color 0.25s ease;
    &::after {
      content: "";
      position: absolute;
      bottom: -0.25em;
      display: block;
      width: 0;
      height: 1px;
      background-color: currentColor;
      transition: width 0.5s ease-out;
    }
    &:hover,
    &:focus {
      color: $color-gold;
      &::after {
        width: 100%;
      }
    }
    @include responsive($screen-tablet-s, "max") {
      color: $color-blue-transparent;
      &:hover,
      &:focus {
        color: $color-blue;
      }
    }
  }
  &__background {
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    background-color: $color-blue-transparent;
    backdrop-filter: blur(0.25rem);
    width: 100vw;
    height: 100vh;
    opacity: 1;
    transition: opacity 0.25s ease;
    @include responsive($screen-tablet-s) {
      display: none;
    }
  }
  &__toggle {
    position: absolute;
    top: 1rem;
    right: 1rem;
    @include responsive($screen-tablet-s) {
      display: none;
    }
  }
}
</style>
