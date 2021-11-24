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
        fill-rule="evenodd"
        d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
      />
      <path
        fill-rule="evenodd"
        d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
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
    height: 1.5rem;
    fill: currentColor;
  }
}
</style>
