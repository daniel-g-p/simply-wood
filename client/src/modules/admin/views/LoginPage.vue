<template>
  <main class="login">
    <form class="login__form" @submit.prevent="submit" novalidate>
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
      <base-alert :visible="alert.visible" @close="closeAlert">{{
        alert.text
      }}</base-alert>
    </form>
  </main>
</template>

<script>
import { ref, reactive, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const store = useStore();
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
    const alert = reactive({
      text: "",
      visible: false,
    });
    const closeAlert = () => {
      alert.visible = false;
    };
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
      if (!errors.email.hasError && !errors.password.hasError) {
        const request = {
          url: `${process.env.VUE_APP_API}/users/login`,
          options: {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email.value,
              password: password.value,
            }),
          },
        };
        store.dispatch("admin/toggleLoader");
        fetch(request.url, request.options)
          .then((res) => res.json())
          .then((res) => {
            if (res.ok) {
              router.push({ name: "adminImages" });
            } else {
              alert.text = res.message;
              alert.visible = true;
            }
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            store.dispatch("admin/toggleLoader");
          });
      }
    };
    return {
      email,
      password,
      errors,
      submit,
      alert,
      closeAlert,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../../assets/styles/index.scss" as *;
.login {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  &__form {
    width: 100%;
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2.5rem;
  }
  &__title {
    font-size: 1.5rem;
  }
}
</style>
