<template>
  <div class="category">
    <category-form
      :mode="modalMode"
      :category-id="activeCategory"
      @close="setModalMode"
      @failed="formFailed"
    ></category-form>
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
          :key="category._id"
          :value="category._id"
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
    <div class="category__buttons">
      <button class="category__button" @click="setModalMode('add')">
        <svg
          class="category__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
          />
        </svg>
      </button>
      <button
        class="category__button"
        @click="setModalMode('edit')"
        :disabled="!activeCategory"
      >
        <svg
          class="category__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
        >
          <path
            d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
          />
        </svg>
      </button>
      <button
        class="category__button"
        @click="setModalMode('delete')"
        :disabled="!activeCategory"
      >
        <svg
          class="category__icon"
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
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

import CategoryForm from "./CategoryForm.vue";

export default {
  components: {
    CategoryForm,
  },
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue", "failed"],
  setup(props, { emit }) {
    const store = useStore();
    const categories = computed(() => {
      return store.getters["admin/categories"];
    });
    const activeCategory = computed(() => {
      return store.getters["admin/activeCategory"];
    });
    const setCategory = (event) => {
      emit("update:modelValue", event.target.value);
    };
    const modalMode = ref("");
    const setModalMode = (mode) => {
      modalMode.value = mode || "";
    };
    const formFailed = (message) => {
      emit("failed", message);
    };
    onMounted(() => {
      store.dispatch("admin/setCategories");
    });
    return {
      categories,
      activeCategory,
      setCategory,
      modalMode,
      setModalMode,
      formFailed,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.category {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  border-bottom: 1px solid $color-blue-transparent;
  margin-bottom: 1rem;
  &__select-box {
    flex-grow: 1;
    position: relative;
    min-width: 6rem;
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
  &__buttons {
    display: flex;
    gap: 0.5rem;
  }
  &__button {
    width: 3rem;
    height: 3rem;
    background-color: $color-white;
    transition: background-color 0.25s ease, opacity 0.25s ease;
    cursor: pointer;
    &:hover,
    &:focus {
      background-color: darken($color-white, 3);
    }
    &:disabled {
      opacity: 0.5;
    }
  }
  &__icon {
    height: 50%;
  }
}
</style>
