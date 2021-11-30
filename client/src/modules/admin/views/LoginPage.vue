<template>
  <form class="login" @submit.prevent="submit" novalidate>
    <h1 class="login__title">Identification</h1>
    <base-textbox
      :id="'email'"
      :label="'Adresse email'"
      :type="'email'"
      :error="errors.email.hasError"
      :error-message="errors.email.message"
      v-model="email"
    ></base-textbox>
    <base-textbox
      :id="'password'"
      :label="'Mot de passe'"
      :type="'password'"
      :error="errors.password.hasError"
      :error-message="errors.password.message"
      v-model="password"
    ></base-textbox>
    <base-button :color="'purple'">S'identifier</base-button>
  </form>
</template>

<script>
import { ref, reactive, watch } from "vue";

export default {
  setup() {
    const email = ref("");
    const password = ref("");
    const errors = reactive({
      email: {
        hasError: false,
        message: "Adresse email non valide.",
      },
      password: {
        hasError: false,
        message: "Mot de passe requis.",
      },
    });
    watch(email, () => {
      errors.email.hasError = false;
    });
    watch(password, () => {
      errors.password.hasError = false;
    });
    const submit = () => {
      const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (!email.value || !emailFormat.test(email.value)) {
        errors.email.hasError = true;
      }
      if (!password.value) {
        errors.password.hasError = true;
      }
    };
    return { email, password, errors, submit };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.login {
  width: 100%;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 2.5rem;
}
</style>
