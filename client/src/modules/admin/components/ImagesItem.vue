<template>
  <div class="item">
    <img :src="imageUrl" alt="Image" class="item__image" />
    <div class="item__controls">
      <button class="item__button">
        <svg
          class="item__icon"
          :class="isMainImageClass"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
          />
        </svg>
      </button>
      <button class="item__button">
        <svg
          class="item__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"
          />
        </svg>
      </button>
      <button class="item__button">
        <svg
          class="item__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
          />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    isMainImage: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const isMainImageClass = computed(() => {
      return { "item__icon--highlight": props.isMainImage };
    });
    return { isMainImageClass };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.item {
  display: block;
  padding-bottom: 100%;
  position: relative;
  &__image {
    position: absolute;
    height: 100%;
    width: 100%;
  }
  &__controls {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: $color-blue-transparent;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 0.25rem 0;
  }
  &__button {
    cursor: pointer;
    &:hover,
    &:focus {
      .item__icon {
        opacity: 0.5;
      }
    }
  }
  &__icon {
    display: block;
    fill: $color-white;
    height: 1.5rem;
    transition: opacity 0.125s ease;
    &--highlight {
      fill: $color-purple;
    }
  }
}
</style>
