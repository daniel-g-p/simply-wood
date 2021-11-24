<template>
  <button class="toggle" :class="toggleClass" @click="toggleMenu">
    <svg
      v-if="type === 'open'"
      class="toggle__icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="toggle__icon"
      viewBox="0 0 16 16"
    >
      <path
        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  </button>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    type: {
      type: String,
      required: true,
      validator(value) {
        return ["open", "close"].includes(value);
      },
    },
    color: {
      type: String,
      default: "gold",
      validator(value) {
        return ["gold", "blue"].includes(value);
      },
    },
  },
  setup(props, context) {
    const toggleMenu = () => {
      context.emit("toggle-menu");
    };
    const toggleClass = computed(() => {
      switch (props.color) {
        case "gold": {
          return { "toggle--gold": true };
        }
        case "blue": {
          return { "toggle--blue": true };
        }
        default: {
          return { "toggle--gold": true };
        }
      }
    });
    return { toggleMenu, toggleClass };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.toggle {
  transition: color 0.125s ease;
  cursor: pointer;
  &--gold {
    color: $color-gold-transparent;
    &:hover,
    &:focus {
      color: $color-gold;
    }
  }
  &--blue {
    color: $color-blue-transparent;
    &:hover,
    &:focus {
      color: $color-blue;
    }
  }
  &__icon {
    height: 2rem;
    fill: currentColor;
  }
}
</style>
