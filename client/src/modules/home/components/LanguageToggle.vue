<template>
  <div>
    <div class="language" :class="toggleColor">
      <button
        v-for="(button, index) in buttons"
        :key="button"
        class="language__button"
        :class="[
          `language__button--${index + 1}`,
          activeLanguage === button ? 'language__button--active' : '',
        ]"
        @click="setLanguage(button)"
      >
        {{ button }}
      </button>
      <div class="language__background"></div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  props: {
    color: {
      type: String,
      default: "gold",
      validator(value) {
        return ["gold", "blue"].includes(value);
      },
    },
  },
  setup(props) {
    const buttons = ["fr", "nl", "de", "en"];
    const store = useStore();
    const router = useRouter();
    const toggleColor = computed(() => {
      return props.color === "gold"
        ? { "language--gold": true }
        : { "language--blue": true };
    });
    const activeLanguage = computed(() => {
      return store.getters["language/activeLanguage"];
    });
    const setLanguage = (language) => {
      store.dispatch("language/setActiveLanguage", language);
      router.push({ name: `${language}Home` });
    };
    return { buttons, toggleColor, activeLanguage, setLanguage };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;

.language {
  position: relative;
  z-index: 1;
  display: flex;
  text-align: center;
  &--gold {
    .language__button {
      color: $color-gold-transparent;
      &--active {
        color: $color-gold;
      }
      &:hover,
      &:focus {
        color: $color-blue;
        ~ .language__background {
          background-color: $color-gold;
        }
      }
    }
  }
  &--blue {
    .language__button {
      color: $color-blue-transparent;
      &--active {
        color: $color-blue;
      }
      &:hover,
      &:focus {
        color: $color-gold;
        ~ .language__background {
          background-color: $color-blue;
        }
      }
    }
  }
  &__button {
    width: 2.5em;
    height: 1.5em;
    text-transform: uppercase;
    font-weight: 700;
    color: $color-gold-transparent;
    cursor: pointer;
    transition: color 0.25s ease;
    &--active {
      &.language__button--1 ~ .language__background {
        left: 0;
      }
      &.language__button--2 ~ .language__background {
        left: 2.5em;
      }
      &.language__button--3 ~ .language__background {
        left: 5em;
      }
    }
    &:hover,
    &:focus {
      ~ .language__background {
        transition: left 0.125s ease, background-color 0.125s ease 0.125s;
      }
      &.language__button--1 ~ .language__background {
        left: 0;
      }
      &.language__button--2 ~ .language__background {
        left: 2.5em;
      }
      &.language__button--3 ~ .language__background {
        left: 5em;
      }
      &.language__button--4 ~ .language__background {
        left: 7.5em;
      }
    }
  }
  &__background {
    display: block;
    position: absolute;
    z-index: -1;
    pointer-events: none;
    top: 0;
    height: 100%;
    width: 2.5em;
  }
}
</style>
