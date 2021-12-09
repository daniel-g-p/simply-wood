<template>
  <base-modal :open="mode ? true : false" @close="closeModal">
    <form class="form" @submit.prevent="submitForm">
      <base-textbox
        :id="'categoryName'"
        :label="inputLabel"
        v-model="input"
      ></base-textbox>
      <base-button>{{ buttonText }}</base-button>
    </form>
  </base-modal>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useStore } from "vuex";

export default {
  props: {
    mode: {
      type: String,
      required: true,
      validator: (value) => {
        return ["", "add", "edit", "delete"].includes(value);
      },
    },
    categoryId: {
      type: String,
      default: "",
    },
  },
  emits: ["close", "failed"],
  setup(props, { emit }) {
    const store = useStore();
    const input = ref("");
    const watchMode = computed(() => {
      return props.mode;
    });
    watch(watchMode, (value) => {
      if (value === "edit" && props.categoryId) {
        const categories = store.getters["admin/categories"];
        const { name } = categories.find((category) => {
          return category._id === props.categoryId;
        });
        input.value = name;
      } else {
        input.value = "";
      }
    });
    const inputLabel = computed(() => {
      switch (watchMode.value) {
        case "add":
          return "Nouvelle catégorie";
        case "edit":
          return "Nom de la catégorie";
        default:
          return "";
      }
    });
    const buttonText = computed(() => {
      switch (watchMode.value) {
        case "add":
          return "Ajouter";
        case "edit":
          return "Modifier";
        case "delete":
          return "Supprimer";
        default:
          return "";
      }
    });
    const closeModal = () => {
      emit("close");
    };
    const submitForm = () => {
      if (!input.value) {
        return;
      }
      const isAddMode = watchMode.value === "add";
      const request = {
        url: isAddMode
          ? `${process.env.VUE_APP_API}/images/categories`
          : `${process.env.VUE_APP_API}/images/categories/${props.categoryId}`,
        options: {
          method: isAddMode ? "POST" : "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ categoryName: input.value }),
        },
      };
      closeModal();
      store.dispatch("admin/toggleLoader");
      fetch(request.url, request.options)
        .then((res) => res.json())
        .then((res) => {
          if (res.ok) {
            store.dispatch("admin/setCategories");
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
    return { buttonText, closeModal, input, inputLabel, submitForm };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
