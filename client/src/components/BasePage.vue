<template>
  <div class="page">
    <header class="page__header">
      <base-link
        class="page__link"
        :color="'blue'"
        :route-name="homeLink.routeName"
        >&#8592; {{ homeLink.label }}</base-link
      >
      <h1 class="page__title">{{ title }}</h1>
      <p class="page__description">{{ description }}</p>
    </header>
    <main class="page__content">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import international from "../international.js";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const activeLanguage = computed(() => {
      return store.getters["language/activeLanguage"];
    });
    const homeLink = computed(() => {
      return international(activeLanguage.value, "home", "route");
    });
    return { homeLink };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/index.scss" as *;
.page {
  min-height: 100vh;
  background-image: linear-gradient(
    to right bottom,
    $color-grey-light,
    $color-gold
  );
  padding: 2rem 1rem;
  @include responsive($screen-mobile-m) {
    padding: 3rem 2.25rem;
  }
  @include responsive($screen-tablet-s) {
    padding: 3rem 10vw;
  }
  @include responsive($screen-desktop-s) {
    padding: 4.5rem 10vw;
  }
  &__header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__title {
    font-size: 2.25rem;
    margin: 0.5em 0;
    @include responsive($screen-tablet-s) {
      font-size: 3rem;
    }
  }
  &__description {
    font-family: "Open Sans", sans-serif;
    line-height: 1.5;
  }
}
</style>
