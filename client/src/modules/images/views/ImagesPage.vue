<template>
  <base-page :title="content.title">
    <main class="images">
      <images-item
        v-for="(category, index) in categories"
        :key="category._id"
        :categoryId="category.id"
        :categoryName="category.name"
        :src="category.image"
        :alt="category.name"
        :alignment="index % 2 ? 'left' : 'right'"
        :language="activeLanguage"
        @select-category="selectCategory"
      ></images-item>
    </main>
    <image-gallery
      :open="modalOpen"
      :images="activeImages"
      @close="closeGallery"
    ></image-gallery>
    <base-loader></base-loader>
  </base-page>
</template>

<script>
import { ref, computed } from "@vue/reactivity";
import { useStore } from "vuex";
import international from "../../../international.js";
import { onMounted } from "@vue/runtime-core";

import ImagesItem from "../components/ImagesItem.vue";
import ImageGallery from "./ImageGallery.vue";

export default {
  components: {
    ImagesItem,
    ImageGallery,
  },
  setup() {
    const store = useStore();
    const activeLanguage = computed(() => {
      return store.getters["language/activeLanguage"];
    });
    const content = computed(() => {
      return {
        title: international(activeLanguage.value, "images", "title"),
        description: international(
          activeLanguage.value,
          "images",
          "description"
        ),
      };
    });
    const categories = computed(() => {
      return store.getters["images/getCategories"].map((category) => {
        return {
          id: category._id,
          name: category[`${activeLanguage.value}Name`],
          image: category.mainImage,
        };
      });
    });
    const activeImages = ref([]);
    const modalOpen = ref(false);
    const selectCategory = (categoryId) => {
      store.dispatch("admin/toggleLoader");
      fetch(`${process.env.VUE_APP_API}/images/categories/${categoryId}`)
        .then((res) => res.json())
        .then((res) => {
          const { images } = res;
          activeImages.value = images.map((image) => {
            return { id: image._id, url: image.imageUrl };
          });
          modalOpen.value = true;
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch("admin/toggleLoader");
        });
      modalOpen.value = true;
    };
    const closeGallery = () => {
      modalOpen.value = false;
    };
    onMounted(() => {
      if (!categories.value.length) {
        store.dispatch("images/fetchCategories");
      }
    });
    return {
      content,
      activeLanguage,
      categories,
      activeImages,
      modalOpen,
      selectCategory,
      closeGallery,
    };
  },
};
</script>
