<template>
  <base-page :title="content.title" :description="content.description">
    <div class="features">
      <div
        v-for="feature in content.features"
        :key="feature.title"
        class="features__item"
      >
        <h3 class="features__title">{{ feature.title }}</h3>
        <p class="features__text">{{ feature.text }}</p>
      </div>
    </div>
  </base-page>
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
    const content = computed(() => {
      return {
        title: international(activeLanguage.value, "about", "title"),
        description: international(
          activeLanguage.value,
          "about",
          "description"
        ),
        features: international(activeLanguage.value, "about", "features"),
      };
    });
    return { content };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.features {
  display: grid;
  gap: 1.5rem;
  margin: 1.5rem 0;
  @include responsive($screen-tablet-s) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.25rem;
    margin: 2.25rem 0;
  }
  @include responsive($screen-desktop-s) {
    gap: 3rem;
    margin: 3rem 0;
  }
  &__title {
    margin-bottom: 0.5em;
  }
  &__text {
    font-family: "Open Sans", sans-serif;
    font-size: 0.875rem;
    line-height: 1.5;
  }
}
</style>
