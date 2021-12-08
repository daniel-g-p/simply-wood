<template>
  <div class="item">
    <img :src="imageUrl" alt="Image" class="item__image" />
    <div class="item__controls">
      <button class="item__button" @click="makeFavorite">
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
      <button class="item__button" @click="deleteImage">
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
import { useStore } from "vuex";

export default {
  props: {
    imageId: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    isMainImage: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["emit-error", "delete-image"],
  setup(props, { emit }) {
    const store = useStore();
    const activeCategory = computed(() => {
      return store.getters["admin/activeCategory"];
    });
    const isMainImageClass = computed(() => {
      return { "item__icon--highlight": props.isMainImage };
    });
    const makeFavorite = () => {
      if (props.isMainImage) {
        return;
      }
      const url = `${process.env.VUE_APP_API}/images/categories/set-main-image/${activeCategory.value}`;
      const options = {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageUrl: props.imageUrl }),
      };
      store.dispatch("admin/toggleLoader");
      fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
          if (res.ok) {
            const payload = {
              categoryId: activeCategory.value,
              imageUrl: props.imageUrl,
            };
            store.dispatch("admin/updateMainImage", payload);
          } else {
            emit("emit-error", res.message);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch("admin/toggleLoader");
        });
    };
    const deleteImage = () => {
      if (props.isMainImage) {
        emit("emit-error", "Impossible de supprimer l'image principale.");
        return;
      }
      const { imageId } = props;
      const url = `${process.env.VUE_APP_API}/images/${imageId}`;
      const options = {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageId }),
      };
      store.dispatch("admin/toggleLoader");
      fetch(url, options)
        .then((res) => res.json())
        .then((res) => {
          if (res.ok) {
            emit("delete-image", imageId);
          } else {
            emit("emit-error", res.message);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch("admin/toggleLoader");
        });
    };
    return { isMainImageClass, makeFavorite, deleteImage };
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
