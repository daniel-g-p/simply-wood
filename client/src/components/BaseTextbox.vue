<template>
  <div class="input">
    <input
      class="input__input"
      :class="inputError"
      :type="type"
      :id="id"
      :value="modelValue"
      @input="updateValue"
    />
    <label class="input__label" :for="id">{{ label }}</label>
    <p class="input__error">{{ errorMessage }}</p>
    <div class="input__underline"></div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    type: {
      type: String,
      default: "text",
      validator(value) {
        return ["text", "email", "password", "number"].includes(value);
      },
    },
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
      type: String,
      default: "",
    },
    modelValue: {
      required: true,
    },
  },
  setup(props, { emit }) {
    const updateValue = (event) => {
      emit("update:modelValue", event.target.value);
    };
    const inputError = computed(() => {
      return { "input__input--error": props.error };
    });
    return { updateValue, inputError };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/index.scss" as *;
.input {
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  &__label {
    font-weight: 700;
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
    align-self: flex-start;
    transition: color 0.25s ease;
  }
  &__input {
    border-bottom: 1px solid $color-blue;
    padding: 0.25em 0;
    transition: border-color 0.25s ease;
    &:focus {
      & ~ .input__label {
        color: $color-purple;
      }
      & ~ .input__underline {
        width: 100%;
        left: 0;
        opacity: 1;
      }
    }
    & ~ .input__error {
      display: none;
    }
    &--error {
      border-color: $color-red;
      & ~ .input__error {
        display: block;
      }
    }
  }
  &__underline {
    position: absolute;
    bottom: 0;
    left: 50%;
    display: block;
    width: 0;
    height: 2px;
    background-color: $color-purple;
    opacity: 0;
    transition: width 0.25s ease, left 0.25s ease, opacity 0.25s ease;
  }
  &__error {
    position: absolute;
    top: 100%;
    color: $color-red;
    font-size: 0.75rem;
    padding-top: 0.25rem;
    pointer-events: none;
  }
}
</style>