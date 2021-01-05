<template>
  <div>
    <input type="text" v-model="newUser.email" placeholder="email" />
    <input type="text" v-model="newUser.password" placeholder="password" />
    <button @click="addUser(newUser)">S'enregistrer</button>
  </div>
</template>

<script>
module.exports = {
  props: {},
  data() {
    return {
      newUser: {
        password: "",
        email: "",
      },
    };
  },
  methods: {
    addUser(newUser) {
      this.$emit("add-user", newUser);
    },
  },
};
</script>

<style></style>
