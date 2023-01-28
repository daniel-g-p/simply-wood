<template>
  <div class="intro">
    <h1 class="intro__heading">Simply Wood</h1>
    <p class="intro__text">
      {{ text }}
    </p>
    <div class="intro__links">
      <router-link :to="aboutLink" class="intro__links__link">
        <base-button color="gold" class="intro__links__link__button">{{
          aboutLinkText
        }}</base-button>
      </router-link>
      <router-link :to="imagesLink" class="intro__links__link">
        <base-button color="blue" class="intro__links__link__button">{{
          imagesLinkText
        }}</base-button>
      </router-link>
      <router-link :to="contactLink" class="intro__links__link">
        <base-button color="purple" class="intro__links__link__button">{{
          contactLinkText
        }}</base-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

import international from "../../../international.js";

export default {
  setup() {
    const store = useStore();
    const activeLanguage = computed(() => {
      return store.getters["language/activeLanguage"];
    });
    const text = computed(() => {
      return international(activeLanguage.value, "home", "text");
    });
    const aboutLink = computed(() => {
      return { name: `${activeLanguage.value}About` };
    });
    const aboutLinkText = computed(() => {
      switch (activeLanguage.value) {
        case "en":
          return "Learn more";
        case "nl":
          return "Leer meer";
        case "de":
          return "Mehr erfahren";
        default:
          return "En savoir plus";
      }
    });
    const imagesLink = computed(() => {
      return { name: `${activeLanguage.value}Images` };
    });
    const imagesLinkText = computed(() => {
      switch (activeLanguage.value) {
        case "en":
          return "Our creations";
        case "nl":
          return "Onze creaties";
        case "de":
          return "Unsere Werke";
        default:
          return "Nos créations";
      }
    });
    const contactLink = computed(() => {
      return { name: `${activeLanguage.value}Contact` };
    });
    const contactLinkText = computed(() => {
      switch (activeLanguage.value) {
        case "en":
          return "Contact us";
        case "nl":
          return "Contact opnemen";
        case "de":
          return "Kontakt aufnehmen";
        default:
          return "Contactez-nous";
      }
    });
    return {
      text,
      aboutLink,
      aboutLinkText,
      imagesLink,
      imagesLinkText,
      contactLink,
      contactLinkText,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.intro {
  color: $color-gold;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include responsive($screen-tablet-m) {
    align-items: flex-start;
  }
  &__heading {
    color: $color-gold;
    font-weight: 400;
    font-size: 3rem;
    text-align: center;
    line-height: 1.25;
    @include responsive($screen-tablet-m) {
      text-align: left;
      font-size: 4.5rem;
    }
    @include responsive($screen-desktop-m) {
      font-size: 6rem;
    }
  }
  &__text {
    display: block;
    text-align: center;
    font-family: "Open Sans";
    line-height: 1.5;
    margin-top: 1rem;
    max-width: 20rem;
    margin-bottom: 2rem;
    @include responsive($screen-tablet-m) {
      text-align: left;
      max-width: initial;
    }
  }
  &__links {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    width: 100%;
    max-width: 14rem;
    @include responsive($screen-tablet-s) {
      grid-template-columns: 1fr 1fr 1fr;
      max-width: 42rem;
    }
    &__link {
      width: 100%;
      &__button {
        width: 100%;
      }
    }
  }
}
</style>
