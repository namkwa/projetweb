<template>
  <section class="layout">
    <div class="container">
      <p>email: {{currentUser.email}}</p>
      <p>historique des réservations</p>
      <article v-for="chalet in history" :key="chalet.id">
        <p>{{chalet.location}}</p>
      </article>
    </div>
  </section>
</template>


<script>
module.exports = {
  props: {
    currentUser: { type: Object},
    history: { type: Array, default: []}
    },
  data() {
    return{
      
    }
  },
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
</style>