<template>
  <section class="layout">
    <div class="container">
      <article v-for="chalet in listChalet" :key="chalet.id">
        <div class="card">
          <img :src="chalet.image">
          <p>desciption : <br>{{chalet.description}}</p>
          <p>localisation : <br>{{chalet.location}}</p>
          <p>prix : {{chalet.price}}</p>
          <button>Réserver</button>
        </div>
        
      </article>
    </div>
    </section>
</template>

<script>
module.exports = {
  props: {
    listChalet: { type: Array, default: []}
  },
  data() {
    return {

    };
  },
  methods: {

  }

}
</script>

<style scoped>
img{
  height: 10em;
  width: 15em;
}

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

p {
  padding: 5px;
}

button {
  text-transform: uppercase;
}
</style>