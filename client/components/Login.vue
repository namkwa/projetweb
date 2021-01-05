<template>
  <div>
    <input type="text" v-model="user.email" placeholder="email" />
    <input type="text" v-model="user.password" placeholder="password" />
    <button @click="login(user)">Se connecter</button>
  </div>
</template>

<script>
module.exports = {
  props: {},
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login(user) {
      this.$emit("login", user);
    },
  },
};
</script>

<style></style>
