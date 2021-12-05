<template>
  <main class="images">
    <admin-navigation></admin-navigation>
    <admin-title>Images</admin-title>
    <category-options v-model="activeCategory"></category-options>
    <div class="images__list" v-if="images.length">
      <div class="images__item" v-for="image in images" :key="image._id">
        <img :src="image.imageUrl" alt="Image" class="images__image" />
      </div>
    </div>
    <p v-else class="images__info-message">Aucune catégorie choisie.</p>
  </main>
</template>

<script>
import { ref, watch } from "vue";
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
    const activeCategory = ref("");
    const images = ref([]);
    watch(activeCategory, (value) => {
      const categories = store.getters["admin/categories"];
      const { _id } = categories.find((category) => {
        return category.tag.toString() === value;
      });
      const categoryId = _id.toString();
      const requestUrl = `${process.env.VUE_APP_API}/images/categories/${categoryId}`;
      fetch(requestUrl)
        .then((res) => res.json())
        .then((res) => {
          images.value = res.images;
        })
        .catch((error) => {
          console.log(error);
        });
    });
    return { activeCategory, images };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.images {
  max-width: 40rem;
  margin: 0 auto;
  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    @include responsive($screen-tablet-m) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  &__item {
    display: block;
    padding-bottom: 100%;
    position: relative;
  }
  &__image {
    position: absolute;
    height: 100%;
    width: 100%;
  }
}
</style>
