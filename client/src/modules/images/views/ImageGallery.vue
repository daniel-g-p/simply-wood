<template>
  <teleport to="body">
    <transition name="images-">
      <div v-if="open" class="images">
        <div class="images__content">
          <header class="images__header">
            <button class="images__button" @click="close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="images__icon"
                viewBox="0 0 16 16"
              >
                <path
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                />
                <path
                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                />
              </svg>
            </button>
          </header>
          <div class="images__list">
            <div
              v-for="image in images"
              :key="image.id"
              class="images__container"
            >
              <img
                class="images__image"
                :src="image.url"
                :alt="`Image ${image.id}`"
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    open: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    return { close };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.images {
  position: fixed;
  display: block;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  background-color: rgba($color-grey-light, 0.75);
  backdrop-filter: blur(0.5rem);
  transition: opacity 0.25s ease;
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
  &--enter-from,
  &--leave-to {
    opacity: 0;
  }
  &--enter-to,
  &--leave-from {
    opacity: 1;
  }
  &__content {
    max-width: 72rem;
    margin: 0 auto;
  }
  &__header {
    text-align: right;
    margin-bottom: 2rem;
  }
  &__button {
    cursor: pointer;
    color: $color-blue;
    transition: opacity 0.25s ease;
    &:hover,
    &:focus {
      color: $color-gold;
      opacity: 0.25;
    }
  }
  &__icon {
    height: 2.25rem;
    fill: $color-blue;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
    gap: 1rem;
    @include responsive($screen-tablet-s) {
      grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    }
    @include responsive($screen-desktop-s) {
      grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    }
  }
  &__container {
    box-shadow: 0 0.5rem 1rem $color-shadow;
    overflow: hidden;
  }
  &__image {
    display: block;
    width: 100%;
    transition: transform 0.75s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
