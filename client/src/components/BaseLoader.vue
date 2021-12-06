<template>
  <teleport to="body">
    <transition name="loader-">
      <div class="loader" v-if="loaderActive">
        <div class="loader__background">
          <div class="loader__box">
            <div class="loader__spinner">
              <div class="loader__ball loader__ball--1"></div>
              <div class="loader__ball loader__ball--2"></div>
              <div class="loader__ball loader__ball--3"></div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const loaderActive = computed(() => store.getters["admin/loaderActive"]);
    return { loaderActive };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/index.scss" as *;
.loader {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  transition: opacity 0.5s ease;
  &--enter-from,
  &--leave-to {
    opacity: 0;
  }
  &--enter-to,
  &--leave-from {
    opacity: 1;
  }
  &__background {
    background-color: $color-shadow;
    min-width: 100vw;
    min-height: 100vh;
    position: relative;
  }
  &__box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: $color-white;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem $color-shadow;
    padding: 2rem;
  }
  &__spinner {
    display: flex;
    gap: 0.375rem;
  }
  &__ball {
    display: block;
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: $color-blue;
    &--1 {
      animation: ball-bounce 1s ease-in infinite;
    }
    &--2 {
      animation: ball-bounce 1s 0.125s ease-in infinite;
    }
    &--3 {
      animation: ball-bounce 1s 0.25s ease-in infinite;
    }
  }
}
@keyframes ball-bounce {
  0% {
    background-color: $color-blue-transparent;
    transform: scale(1);
  }
  25% {
    background-color: $color-blue;
    transform: scale(1.25);
  }
  50% {
    background-color: $color-blue-transparent;
    transform: scale(1);
  }
  100% {
    background-color: $color-blue-transparent;
    transform: scale(1);
  }
}
</style>
