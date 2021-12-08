<template>
  <label class="button" for="images">
    <input
      class="button__input"
      type="file"
      name="images"
      id="images"
      accept="image/png, image/jpeg"
      multiple
      @change="uploadImages"
    />
    <div class="button__content">
      <svg
        class="button__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path
          d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"
        />
        <path
          d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
        />
      </svg>
      <p class="button__text">Ajouter</p>
    </div>
  </label>
</template>

<script>
import { useStore } from "vuex";

export default {
  props: {
    categoryId: {
      type: String,
      required: true,
    },
  },
  emits: ["add-images", "failed"],
  setup(props, { emit }) {
    const store = useStore();
    const uploadImages = (event) => {
      const { files } = event.target;
      const formData = new FormData();
      for (let file of files) {
        formData.append("images", file);
      }
      const request = {
        url: `${process.env.VUE_APP_API}/images/upload-images/${props.categoryId}`,
        options: {
          method: "POST",
          body: formData,
        },
      };
      store.dispatch("admin/toggleLoader");
      fetch(request.url, request.options)
        .then((res) => res.json())
        .then((res) => {
          if (res.ok) {
            emit("add-images");
          } else {
            emit("failed", res.message);
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch("admin/toggleLoader");
        });
    };
    return { uploadImages };
  },
};
</script>

<style lang="scss">
@use "../../../assets/styles/index.scss" as *;
.button {
  background-color: $color-white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100%;
  transition: background-color 0.25s ease;
  cursor: pointer;
  position: relative;
  &:hover,
  &:focus {
    background-color: $color-grey-light;
  }
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  &__input {
    display: none;
  }
  &__icon {
    height: 2.25rem;
    fill: $color-blue;
    margin-bottom: 0.25rem;
  }
  &__text {
    font-size: 0.75rem;
  }
}
</style>
