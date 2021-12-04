<template>
  <main class="images">
    <admin-navigation></admin-navigation>
    <admin-title>Images</admin-title>
    <category-options :categories="categories"></category-options>
  </main>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

import AdminTitle from "../components/AdminTitle.vue";
import AdminNavigation from "../components/AdminNavigation.vue";
import CategoryOptions from "../components/CategoryOptions.vue";

export default {
  components: {
    AdminTitle,
    AdminNavigation,
    CategoryOptions,
  },
  setup() {
    const store = useStore();
    const categories = computed(() => {
      return store.getters["admin/categories"];
    });
    onMounted(() => {
      const request = {
        url: `${process.env.VUE_APP_API}/images/categories`,
        options: { credentials: "include" },
      };
      fetch(request.url, request.options)
        .then((res) => res.json())
        .then((res) => {
          if (res.categories) {
            store.dispatch("admin/setCategories", res.categories);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
    return { categories };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.images {
  max-width: 40rem;
  margin: 0 auto;
}
</style>
