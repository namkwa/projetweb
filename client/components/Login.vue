<template>
  <section class ="layout">
    <article>
      <div class="form">
          <h2>Connexion</h2>
        <div>
          <input type="text" v-model="user.email" placeholder="email" />
        </div>
        <div>
          <input type="text" v-model="user.password" placeholder="password" />
        </div>
        <div>
          <button @click="login(user)">Se connecter</button>
        </div>
        <span class="redirection">Pas de compte ?</span>
        <router-link to="/register">S'inscrire</router-link>
      </div>
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


<style scoped>

/*test*/

  h2 {
    text-align: center;
    font-size: 1.4em;
    font-family: Gill Sans, sans-serif;
  }
  .layout {
    border: 5px solid rgb(85, 87, 85);
    background: linear-gradient(violet, lightblue);
    padding: 5px;
    border-radius: 30px;
    width: 30%;
    height: 30%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }
  .form {
    text-align: center;
  
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
  button {
    border-radius: 20px;
    margin: 20px;
    padding: 5px 15px;
  }
  .redirection {
    color: rgb(10, 10, 10);
  }


</style>
