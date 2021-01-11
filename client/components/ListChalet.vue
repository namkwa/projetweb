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
  background-size: cover;
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
  background: rgba(255, 255, 255, 0.164);
  box-shadow: 0 8px 32px 0 rgba(190, 135, 62, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
  border-radius: 10px;
  padding: 30px;
  min-width: 50rem;
  display: flex;
  margin: 5px;
}

p{
  padding: 30px;
}

</style>