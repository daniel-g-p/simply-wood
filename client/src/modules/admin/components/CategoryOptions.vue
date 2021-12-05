<template>
  <div class="category">
    <div class="category__select-box">
      <select
        name="category"
        id="category"
        class="category__select"
        :value="modelValue"
        @change="setCategory"
      >
        <option disabled selected value>-- Catégorie --</option>
        <option
          v-for="category in categories"
          :key="category.tag"
          :value="category.tag"
        >
          {{ category.name }}
        </option>
      </select>
      <div class="category__select-icon-box">
        <svg
          class="category__select-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
    <button class="category__add">
      <svg
        class="category__icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const store = useStore();
    const categories = computed(() => {
      return store.getters["admin/categories"];
    });
    const setCategory = (event) => {
      emit("update:modelValue", event.target.value);
    };
    onMounted(() => {
      const request = {
        url: `${process.env.VUE_APP_API}/images/categories`,
        options: { credentials: "include" },
      };
      fetch(request.url, request.options)
        .then((res) => res.json())
        .then((res) => {
          if (res.categories) {
            console.log(res.categories);
            store.dispatch("admin/setCategories", res.categories);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
    return { categories, setCategory };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.category {
  display: flex;
  gap: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid $color-blue-transparent;
  margin-bottom: 1rem;
  &__select-box {
    flex-grow: 1;
    position: relative;
  }
  &__select {
    width: 100%;
    background-color: $color-white;
    padding: 0.5em 3em 0.5em 1em;
    line-height: 2;
    transition: background-color 0.25s ease;
    &:hover,
    &:focus {
      background-color: darken($color-white, 3);
    }
  }
  &__select-icon-box {
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%);
    pointer-events: none;
  }
  &__select-icon {
    height: 1.5rem;
  }
  &__add {
    width: 3rem;
    height: 3rem;
    background-color: $color-white;
    transition: background-color 0.25s ease;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: darken($color-white, 3);
    }
  }
  &__icon {
    height: 75%;
  }
}
</style>
