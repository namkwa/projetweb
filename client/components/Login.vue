<template>
  <section class="layout">
    <div class="container">
      <div class="card">
        <div class="title">
          <h2>Connexion</h2>
        </div>
        <form action="">
          <input type="text" v-model="user.email" placeholder="email" />
          <input type="text" v-model="user.password" placeholder="password" />
          <button type="button" @click="login(user)">Se connecter</button>
        </form>
        <router-link class="redirection" to="/register"
          >Pas de compte ? S'inscrire</router-link
        >
      </div>
    </div>
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

<style scoped>
h2 {
  font-family: "Indie Flower", cursive;
  text-align: center;
  font-size: 3rem;
  color: rgb(54, 47, 79);
}

article {
  height: auto;
}

.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.card {
  padding: 30px;
  min-width: 50rem;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

button {
  max-width: 8rem;
  border-radius: 20px;
  padding: 5px 15px;
  background-color: darkslategrey;
  color: antiquewhite;

  font-size: 14px;
  
  border: none;
  margin: 20px;
}
.redirection {
  display: block;
  color: darkslategrey;
  text-decoration: none;
  margin-bottom: 5px;
}

.redirection:hover {
  margin-bottom: 0;
}

.redirection:hover::after {
  content: "";
  display: block;
  width: 187px;
  height: 5px;
  background: rgb(197, 118, 72);
}
</style>
