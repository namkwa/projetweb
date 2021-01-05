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

<style>
  h2 {
    text-align: center;
    font-size: 1.5em;
    width: 100%;
  }
  .layout {
    border: 5px solid rgb(14, 185, 80);
    background-color: rgb(106, 228, 146);
    padding: 10px;
    border-radius: 30px;
    margin: 50px;
  }
  form {
    text-align: center;
    margin: 10px;
    padding: 10px;
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
  .redirection {
    color: rgb(116, 36, 36);
  }


</style>
