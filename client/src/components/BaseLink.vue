<template>
  <router-link :to="route">
    <div class="link" :class="linkClass"><slot></slot></div>
  </router-link>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    color: {
      type: String,
      default: "gold",
      validator(value) {
        return ["gold", "blue"].includes(value);
      },
    },
    routeName: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const linkClass = computed(() => {
      return props.color === "gold"
        ? { "link--gold": true }
        : { "link--blue": true };
    });
    const route = computed(() => {
      return { name: props.routeName };
    });
    return { linkClass, route };
  },
};
</script>

<style lang="scss">
@use "../assets/styles/index.scss" as *;
.link {
  position: relative;
  font-style: italic;
  transition: color 0.25s ease;
  &::after {
    content: "";
    position: absolute;
    bottom: -0.125em;
    display: block;
    width: 0;
    height: 1px;
    background-color: currentColor;
    transition: width 0.25s ease-out;
  }
  &:hover,
  &:focus {
    &::after {
      width: 100%;
    }
  }

  &--gold {
    color: $color-gold-transparent;
    &:hover,
    &:focus {
      color: $color-gold;
    }
  }
  &--blue {
    color: $color-blue;
    &:hover,
    &:focus {
      color: $color-blue-transparent;
    }
  }
}
</style>
