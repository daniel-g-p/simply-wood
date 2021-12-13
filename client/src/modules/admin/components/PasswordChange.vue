<template>
  <div class="password">
    <base-button @click="toggleModal">Changer mot de passe</base-button>
    <base-modal :open="modalOpen" @close="toggleModal">
      <form class="password__form" @submit.prevent="submit">
        <base-textbox
          :type="'password'"
          :id="'password'"
          :label="'Ancien mot de passe'"
          v-model="password"
        ></base-textbox>
        <base-textbox
          :type="'password'"
          :id="'newPassword'"
          :label="'Nouveau mot de passe'"
          v-model="newPassword"
        ></base-textbox>
        <base-textbox
          :type="'password'"
          :id="'confirmPassword'"
          :label="'Confirmer mot de passe'"
          v-model="confirmPassword"
        ></base-textbox>
        <base-button>Confirmer</base-button>
      </form>
    </base-modal>
    <base-alert :visible="alertText ? true : false" @close="closeAlert">{{
      alertText
    }}</base-alert>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  emits: ["ok"],
  setup(props, { emit }) {
    const store = useStore();
    const modalOpen = ref(false);
    const alertText = ref("");
    const alertVisible = computed(() => {
      return alertText.value ? true : false;
    });
    const toggleModal = () => {
      closeAlert();
      modalOpen.value = !modalOpen.value;
    };
    const closeAlert = () => {
      alertText.value = "";
    };
    const password = ref("");
    const newPassword = ref("");
    const confirmPassword = ref("");
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    const validate = () => {
      const data = {
        password: password.value,
        newPassword: newPassword.value,
        confirmPassword: confirmPassword.value,
      };
      alertText.value = "";
      if (!data.password) {
        alertText.value = "Ancien mot de passe requis.";
      } else if (!data.newPassword) {
        alertText.value = "Nouveau mot de passe requis.";
      } else if (!passwordRegex.test(data.newPassword)) {
        alertText.value =
          "Le mot de passe doit comprendre au moins 8 caractères, 1 lettre majuscule, et 1 chiffre.";
      } else if (!data.confirmPassword) {
        alertText.value = "Confirmation du mot de passe requise.";
      } else if (data.confirmPassword !== data.newPassword) {
        alertText.value = "Confirmation du mot de passe incorrecte.";
      }
      return alertText.value ? false : data;
    };
    const submit = () => {
      const data = validate();
      if (!data) {
        return;
      }
      const request = {
        url: `${process.env.VUE_APP_API}/users/change-password`,
        options: {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      };
      store.dispatch("admin/toggleLoader");
      fetch(request.url, request.options)
        .then((res) => res.json())
        .then((res) => {
          if (res.ok) {
            password.value = "";
            newPassword.value = "";
            confirmPassword.value = "";
            toggleModal();
            emit("ok");
          } else {
            alertText.value = res.message;
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          store.dispatch("admin/toggleLoader");
        });
    };
    return {
      modalOpen,
      toggleModal,
      closeAlert,
      password,
      newPassword,
      confirmPassword,
      submit,
      alertText,
      alertVisible,
    };
  },
};
</script>

<style lang="scss" scoped>
.password {
  &__form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}
</style>
