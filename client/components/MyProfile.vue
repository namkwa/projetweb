<template>
  <section class="layout">
    <div class="container">
      <div class="card">
        <p>email: {{currentUser.email}}</p>
        <button @click="deconnect()">déconnexion</button>
      </div>
      
      <p>historique des réservations</p>
      <article v-for="chalet in history" :key="chalet.id">
        <div class="card">
          <img :src="chalet.image">
          <p>desciption : <br>{{chalet.description}}</p>
          <p>localisation : <br>{{chalet.location}}</p>
          <p>prix : {{chalet.price}}</p>
        </div>
      </article>
    </div>
  </section>
</template>


<script scoped>
module.exports = {
  props: {
    currentUser: { type: Object},
    history: { type: Array, default: []}
    },
  data() {
    return{
      
    }
  },
  methods: {
    deconnect () {
      this.$emit("deconnect")
    }
  }
}
</script>

<style scoped>
.container {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  padding: 30px;
}

.card {
  padding: 30px;
  min-width: 50rem;
  max-width: 50rem;
  max-height: 200px;
  display: flex;
  margin: 5px;
  align-items: center;
  
}

img {
  height: 10em;
  width: 15em;
}

p {
  padding: 30px;
}
</style>