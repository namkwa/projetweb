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
  color: darkslategrey;
}

article {
  height: auto;
}

.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.card {
  background: rgba(255, 255, 255, 0.164);
  box-shadow: 0 8px 32px 0 rgba(190, 135, 62, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 10px;
  padding: 30px;
  min-width: 50rem;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input {
  border: 2px solid white;
  background: transparent;
  color: white;
  margin: 10px;
  border-radius: 50px;
  padding: 10px;
  background-color: none;
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
  width: 105px;
  height: 5px;
  background: rgb(197, 118, 72);
}
</style>
