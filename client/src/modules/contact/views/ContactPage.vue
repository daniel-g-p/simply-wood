<template>
  <base-page :title="content.title" :description="content.description">
    <contact-buttons></contact-buttons>
    <contact-form></contact-form>
  </base-page>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import international from "../../../international.js";

import ContactButtons from "../components/ContactButtons.vue";
import ContactForm from "../components/ContactForm.vue";

export default {
  components: {
    ContactButtons,
    ContactForm,
  },
  setup() {
    const store = useStore();
    const activeLanguage = computed(() => {
      return store.getters["language/activeLanguage"];
    });
    const content = computed(() => {
      return {
        title: international(activeLanguage.value, "contact", "title"),
        description: international(
          activeLanguage.value,
          "contact",
          "description"
        ),
      };
    });
    return { content };
  },
};
</script>
