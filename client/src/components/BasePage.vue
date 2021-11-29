<template>
  <div class="page">
    <transition name="transition__header-">
      <header class="page__header" v-if="showHeader">
        <base-link
          class="page__link"
          :color="'blue'"
          :route-name="homeLink.routeName"
          >&#8592; {{ homeLink.label }}</base-link
        >
        <h1 class="page__title">{{ title }}</h1>
        <p class="page__description">{{ description }}</p>
      </header>
    </transition>
    <transition name="transition__main-">
      <main class="page__content" v-if="showMain">
        <slot></slot>
      </main>
    </transition>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
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
    const showPage = ref(false);
    const showHeader = ref(false);
    const showMain = ref(false);
    onMounted(() => {
      setTimeout(() => {
        showHeader.value = true;
      }, 250);
      setTimeout(() => {
        showMain.value = true;
      }, 500);
    });
    return { homeLink, showPage, showHeader, showMain };
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
.transition {
  &__page {
    &--enter-active,
    &--leave-active {
      transition: opacity 1s ease;
    }
    &--enter-from,
    &--leave-to {
      opacity: 0;
    }
    &--enter-to,
    &--leave-from {
      opacity: 1;
    }
  }
  &__header,
  &__main {
    &--enter-active {
      transition: transform 0.75s ease, opacity 1s ease;
    }
    &--enter-from {
      opacity: 0;
      transform: translateY(-1rem);
    }
    &--leave-from {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
