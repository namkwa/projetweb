<template>
  <section class="layout">
    <div class="form">
      <h2>Inscription</h2>
      <div>
        <input type="text" v-model="newUser.email" placeholder="email" />
      </div>
      <div>
        <input type="text" v-model="newUser.password" placeholder="password" />
      </div>
      <input type="text" v-model="newUser.age" placeholder="age" />
      <div class="list"> 
        <select v-model="newUser.status">
        <option value="locataire">locataire</option>
        <option value="proprietaire">propriétaire</option>
      </select>
      </div>
      <div>
        <button @click="addUser(newUser)">S'inscrire</button>
      </div>
      <span class="redirection">Déjà inscrit ?</span>
      <router-link to="/login">Se connecter</router-link>
    </div>
  </section>
</template>

<script>
module.exports = {
  props: {},
  data() {
    return {
      newUser: {
        password: "",
        email: "",
        status: "",
        age:"",
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
    height: 35%;
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
  .list {
    margin: 10px;
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