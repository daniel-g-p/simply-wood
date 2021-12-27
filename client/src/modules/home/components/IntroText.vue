<template>
  <div class="intro">
    <h1 class="intro__heading">Simply Wood</h1>
    <p class="intro__text">
      {{ text }}
    </p>
    <router-link :to="aboutLink">
      <base-button color="gold">{{ aboutLinkText }}</base-button>
    </router-link>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import international from "../../../international.js";

export default {
  setup() {
    const store = useStore();
    const activeLanguage = computed(() => {
      return store.getters["language/activeLanguage"];
    });
    const text = computed(() => {
      return international(activeLanguage.value, "home", "text");
    });
    const aboutLink = computed(() => {
      return { name: `${activeLanguage.value}About` };
    });
    const aboutLinkText = computed(() => {
      switch (activeLanguage.value) {
        case "en":
          return "Learn more";
        case "nl":
          return "Leer meer";
        case "de":
          return "Mehr erfahren";
        default:
          return "En savoir plus";
      }
    });
    return { text, aboutLink, aboutLinkText };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.intro {
  color: $color-gold;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include responsive($screen-tablet-m) {
    align-items: flex-start;
  }
  &__heading {
    color: $color-gold;
    font-weight: 400;
    font-size: 3rem;
    text-align: center;
    line-height: 1.25;
    @include responsive($screen-tablet-m) {
      text-align: left;
      font-size: 4.5rem;
    }
    @include responsive($screen-desktop-m) {
      font-size: 6rem;
    }
  }
  &__text {
    display: block;
    text-align: center;
    font-family: "Open Sans";
    line-height: 1.5;
    margin-top: 1rem;
    max-width: 20rem;
    margin-bottom: 2rem;
    @include responsive($screen-tablet-m) {
      text-align: left;
      max-width: initial;
    }
  }
}
</style>
