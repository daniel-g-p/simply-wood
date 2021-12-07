<template>
  <transition name="modal-">
    <div class="modal" v-if="open">
      <div class="modal__box">
        <button class="modal__button" @click="closeModal">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="modal__icon"
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
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const closeModal = () => {
      emit("close");
    };
    return { closeModal };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/index.scss" as *;
.modal {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: $color-shadow;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.25s ease;
  &--enter-from,
  &--leave-to {
    opacity: 0;
  }
  &--enter-to,
  &--leave-from {
    opacity: 1;
  }
  &__box {
    background-color: $color-white;
    padding: 1rem;
    min-width: 16rem;
    position: relative;
  }
  &__button {
    background-color: $color-white;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    top: -2rem;
    right: 0;
    border-radius: 50%;
    cursor: pointer;
    transition: background-color 0.25s ease;
    &:hover,
    &:focus {
      background-color: $color-grey-light;
    }
  }
  &__icon {
    height: 50%;
    fill: $color-blue;
  }
}
</style>
