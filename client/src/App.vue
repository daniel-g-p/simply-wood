<template>
  <div>
    <router-view v-slot="slotProps">
      <transition name="route-animation-" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    onMounted(() => {
      const language = window.localStorage.getItem("lang") || "fr";
      store.dispatch("language/setActiveLanguage", language);
    });
  },
};
</script>

<style lang="scss">
@use "./assets/styles/index.scss" as *;
@include css-reset();
@include font-face("Amiri", "amiri/bold-italic", 700, "italic");
@include font-face("Amiri", "amiri/bold", 700, "normal");
@include font-face("Amiri", "amiri/italic", 400, "italic");
@include font-face("Amiri", "amiri/regular", 400, "normal");
@include font-face("Open Sans", "open-sans/bold", 700, "normal");
@include font-face("Open Sans", "open-sans/regular", 400, "normal");
html {
  font: 100%/1 "Amiri", serif;
  color: $color-blue;
  background-color: $color-blue;
  letter-spacing: 0.1em;
}
::selection {
  background-color: $color-purple;
  color: $color-white;
}
.route-animation {
  &--enter-active,
  &--leave-active {
    transition: opacity 0.5s ease;
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
</style>
