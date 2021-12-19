<template>
  <div class="category" :class="alignmentClass">
    <div class="category__image-box">
      <div class="category__decoration category__decoration--1"></div>
      <div class="category__decoration category__decoration--2"></div>
      <img :src="src" :alt="alt" class="category__image" />
    </div>
    <div class="category__text-box">
      <h2 class="category__title">{{ categoryName }}</h2>
      <base-button @click="selectCategory">{{ buttonText }}</base-button>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    categoryId: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
    alignment: {
      type: String,
      default: "left",
      validator: (value) => {
        return ["left", "right"].includes(value);
      },
    },
    language: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const selectCategory = () => {
      emit("select-category", props.categoryId);
    };
    const alignmentClass = computed(() => {
      return props.alignment === "right"
        ? { "category--left": true }
        : { "category--right": true };
    });
    const buttonText = computed(() => {
      const language = props.language;
      switch (language) {
        case "en":
          return "See more";
        case "nl":
          return "Bekijk meer";
        case "de":
          return "Mehr sehen";
        default:
          return "Voir plus";
      }
    });
    return { alignmentClass, buttonText, selectCategory };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.category {
  padding: 1.5rem 0;
  border-top: 1px solid $color-shadow;
  border-bottom: 1px solid $color-shadow;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @include responsive($screen-mobile-l) {
    flex-direction: row;
    align-items: center;
    &--right {
      flex-direction: row-reverse;
      text-align: right;
    }
  }
  @include responsive($screen-tablet-m) {
    gap: 3rem;
  }
  &__image-box {
    display: block;
    max-width: 30rem;
    padding: 2rem;
    position: relative;
    z-index: 5;
    @include responsive($screen-mobile-l) {
      flex-basis: 50%;
      flex-grow: 0.25;
    }
  }
  &__decoration {
    position: absolute;
    display: block;
    &--1 {
      z-index: -1;
      top: 0;
      left: 0;
      width: 75%;
      height: 75%;
      background-color: $color-blue;
      clip-path: polygon(0 0, 100% 0, 50% 100%, 0 100%);
    }
    &--2 {
      bottom: 0;
      right: 0;
      width: 12.5%;
      height: 25%;
      background-color: $color-grey-light;
      transform-origin: top right;
      transform: skew(-45deg);
      box-shadow: 0rem 0rem 1rem $color-shadow;
    }
  }
  &__image {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  &__text-box {
    @include responsive($screen-tablet-s) {
      font-size: 1.25rem;
    }
  }
  &__title {
    font-size: 2.25rem;
    font-weight: 400;
    margin-bottom: 1rem;
    @include responsive($screen-mobile-l) {
      font-size: 3rem;
    }
    @include responsive($screen-desktop-s) {
      font-size: 4.5rem;
    }
  }
}
</style>
