<template>
  <form class="form" @submit.prevent="submit">
    <h2 class="form__heading">{{ fields.formTitle }}</h2>
    <div class="form__field--first-name">
      <base-textbox
        id="firstName"
        :label="fields.firstName"
        :error="errors.firstName"
        v-model="form.firstName"
      ></base-textbox>
    </div>
    <div class="form__field--last-name">
      <base-textbox
        id="lastName"
        :label="fields.lastName"
        :error="errors.lastName"
        v-model="form.lastName"
      ></base-textbox>
    </div>
    <div class="form__field--zip-code">
      <base-textbox
        id="zipCode"
        :label="fields.zipCode"
        :error="errors.zipCode"
        v-model="form.zipCode"
      ></base-textbox>
    </div>
    <div class="form__field--phone">
      <base-textbox
        id="phone"
        :label="fields.phone"
        :error="errors.phone"
        v-model="form.phone"
      ></base-textbox>
    </div>
    <div class="form__field--email">
      <base-textbox
        id="email"
        :label="fields.email"
        :error="errors.email"
        v-model="form.email"
      ></base-textbox>
    </div>
    <div class="form__field--subject">
      <base-textbox
        id="subject"
        :label="fields.subject"
        :error="errors.subject"
        v-model="form.subject"
      ></base-textbox>
    </div>
    <div class="form__field--message">
      <base-textbox
        type="textarea"
        id="message"
        :label="fields.message"
        :error="errors.message"
        v-model="form.message"
      ></base-textbox>
    </div>
    <div class="form__button-box">
      <base-button>{{ fields.button }}</base-button>
    </div>
  </form>
</template>

<script>
import { computed, reactive } from "@vue/reactivity";
import { useStore } from "vuex";

import international from "../../../international.js";

export default {
  setup() {
    const store = useStore();
    const activeLanguage = computed(() => {
      return store.getters["language/activeLanguage"];
    });
    const fields = computed(() => {
      return international(activeLanguage.value, "contact", "fields");
    });
    const form = reactive({
      firstName: "",
      lastName: "",
      zipCode: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
    const errors = reactive({
      firstName: false,
      lastName: false,
      zipCode: false,
      phone: false,
      email: false,
      subject: false,
      message: false,
    });
    const submit = () => {
      const data = form;
      data.language = activeLanguage.value;
      const request = {
        url: `${process.env.VUE_APP_API}/contact`,
        options: {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: data }),
        },
      };
      fetch(request.url, request.options)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return { fields, form, errors, submit };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.form {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1.5rem;
  padding: 1.5rem;
  border: 1px solid $color-shadow;
  &__heading {
    grid-column: span 6;
  }
  &__field {
    &--first-name,
    &--last-name {
      grid-column: span 3;
    }
    &--zip-code {
      grid-column: span 2;
    }
    &--phone {
      grid-column: span 4;
    }
    &--email,
    &--subject,
    &--message {
      grid-column: span 6;
    }
    @include responsive($screen-tablet-s) {
      &--first-name,
      &--last-name {
        grid-column: span 2;
      }
      &--phone,
      &--email {
        grid-column: span 3;
      }
    }
  }
  &__button-box {
    grid-column: span 6;
  }
}
</style>
