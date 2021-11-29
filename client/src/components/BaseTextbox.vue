<template>
  <div class="input">
    <label class="input__label" :for="id">{{ label }}</label>
    <input
      class="input__input"
      :type="type"
      :id="id"
      :value="modelValue"
      @input="updateValue"
    />
    <div class="input__underline"></div>
  </div>
</template>

<script>
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
    modelValue: {
      required: true,
    },
  },
  setup(props, { emit }) {
    const updateValue = (event) => {
      emit("update:modelValue", event.target.value);
    };
    return { updateValue };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/index.scss" as *;
.input {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  &__label {
    font-size: 0.75rem;
    margin-bottom: 0.25rem;
  }
  &__input {
    border-bottom: 1px solid $color-blue;
    padding: 0.25em 0;
    &:focus {
      & + .input__underline {
        width: 100%;
        left: 0;
        opacity: 1;
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
}
</style>
