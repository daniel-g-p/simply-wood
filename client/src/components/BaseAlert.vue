<template>
  <teleport to="body">
    <transition name="alert-">
      <div class="alert" v-if="visible">
        <div class="alert__box">
          <p class="alert__text"><slot></slot></p>
          <button class="alert__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="alert__icon"
              viewBox="0 0 16 16"
              @click="closeModal"
            >
              <path
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
export default {
  props: {
    visible: {
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
.alert {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 32rem;
  padding: 1.5rem;
  &--enter-active,
  &--leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
  }
  &--enter-from,
  &--leave-to {
    transform: translate(-50%, -0.5rem);
    opacity: 0;
  }
  &--enter-to,
  &--leave-from {
    transform: translate(-50%, 0);
    opacity: 1;
  }
  &__box {
    background-color: $color-white;
    color: $color-red;
    display: flex;
    padding: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem $color-shadow;
  }
  &__text {
    flex-grow: 1;
    font-family: "Open Sans", sans-serif;
    margin-top: 0.25rem;
    margin-right: 1rem;
  }
  &__button {
    height: 1.5rem;
    &:hover,
    &:focus {
      opacity: 0.75;
    }
  }
  &__icon {
    height: 100%;
    fill: currentColor;
    cursor: pointer;
  }
}
</style>
