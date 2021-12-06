<template>
  <main class="images">
    <base-alert :visible="alertData.active" @close="toggleAlert">{{
      alertData.message
    }}</base-alert>
    <admin-navigation></admin-navigation>
    <admin-title>Images</admin-title>
    <category-options v-model="activeCategory"></category-options>
    <div class="images__list" v-if="images.length">
      <images-item
        v-for="image in images"
        :key="image._id"
        :imageUrl="image.imageUrl"
        :isMainImage="image.imageUrl === mainImage"
        @emit-error="toggleAlert"
      ></images-item>
    </div>
    <p v-else class="images__info-message">Aucune catégorie choisie.</p>
  </main>
</template>

<script>
import { computed, reactive, ref, watch } from "vue";
import { useStore } from "vuex";

import AdminTitle from "../components/AdminTitle.vue";
import AdminNavigation from "../components/AdminNavigation.vue";
import CategoryOptions from "../components/CategoryOptions.vue";
import ImagesItem from "../components/ImagesItem.vue";

export default {
  components: {
    AdminTitle,
    AdminNavigation,
    CategoryOptions,
    ImagesItem,
  },
  setup() {
    const alertData = reactive({
      active: false,
      message: "",
    });
    const toggleAlert = (message) => {
      alertData.message = message || "";
      alertData.active = message ? true : false;
    };
    const store = useStore();
    const activeCategory = ref("");
    const mainImage = computed(() => {
      const categories = store.getters["admin/categories"];
      const { mainImage } = categories.find((category) => {
        return category._id === activeCategory.value;
      });
      return mainImage;
    });
    const images = ref([]);
    const fetchImages = (categoryId) => {
      const requestUrl = `${process.env.VUE_APP_API}/images/categories/${categoryId}`;
      store.dispatch("admin/toggleLoader");
      fetch(requestUrl)
        .then((res) => res.json())
        .then((res) => {
          images.value = res.images;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch("admin/toggleLoader");
        });
    };
    watch(activeCategory, (value) => {
      store.dispatch("admin/setActiveCategory", value);
      fetchImages(value);
    });
    return { activeCategory, images, mainImage, alertData, toggleAlert };
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
