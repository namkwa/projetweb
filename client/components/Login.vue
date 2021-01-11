<template>
  <section class ="layout">
    <article>
      <div class="title">
          <h2>Connexion</h2>
      </div>
      <input type="text" v-model="user.email" placeholder="email" />
      <input type="text" v-model="user.password" placeholder="password" />
      <button @click="login(user)">Se connecter</button>
      <span class="redirection">Pas de compte ?</span>
      <router-link to="/register">S'inscrire</router-link>
    </article>
  </section>
</template>

<script>
module.exports = {
  props: {
  },
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

<style>
  h2 {
    text-align: center;
    font-size: 1.5em;
  }
  .layout {
    border: 5px solid rgb(85, 87, 85);
    background: linear-gradient(violet, lightblue);
    padding: 5px;
    border-radius: 30px;
    margin: 50px;
  }
  .form {
    text-align: center;
    margin: 20px;
  }
  input{
    border: 2px solid white;
    background: transparent;
    color: white;
    margin: 10px;
    border-radius: 50px;
    padding: 10px;
    background-color: none;
  }
  .btn {
    border-radius: 20px;
    margin: 20px;
    padding: 5px 15px;
  }
  .redirection {
    color: rgb(10, 10, 10);
  }


</style>
