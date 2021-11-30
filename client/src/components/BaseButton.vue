<template>
  <button class="button" :class="buttonColor">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    color: {
      type: String,
      default: "blue",
      validator(value) {
        return ["blue", "gold", "purple", "red"].includes(value);
      },
    },
  },
  setup(props) {
    const buttonColor = computed(() => {
      if (props.color === "gold") {
        return { "button--gold": true };
      } else if (props.color === "purple") {
        return { "button--purple": true };
      } else if (props.color === "red") {
        return { "button--red": true };
      } else {
        return { "button--blue": true };
      }
    });
    return { buttonColor };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/index.scss" as *;
.button {
  text-align: center;
  padding: 0.5em 2em;
  cursor: pointer;
  transition: background-color 0.25s ease, transform 0.25s ease;
  &--blue {
    background-color: $color-blue;
    color: $color-white;
    &:hover,
    &:focus {
      transform: translateY(-0.125rem);
      background-color: lighten($color-blue, 5);
    }
  }
  &--gold {
    background-color: $color-gold;
    color: $color-blue;
    &:hover,
    &:focus {
      transform: translateY(-0.125rem);
      background-color: darken($color-gold, 5);
    }
  }
  &--purple {
    background-color: $color-purple;
    color: $color-white;
    &:hover,
    &:focus {
      transform: translateY(-0.125rem);
      background-color: lighten($color-purple, 5);
    }
  }
  &--red {
    background-color: $color-red;
    color: $color-white;
    &:hover,
    &:focus {
      transform: translateY(-0.125rem);
      background-color: lighten($color-red, 5);
    }
  }
}
</style>
