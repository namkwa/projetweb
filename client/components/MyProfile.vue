<template>
  <div>
    <p>email: {{currentUser.email}}</p>
    <p>historique des réservations</p>
    <article v-for="chalet in history" :key="chalet.id">
      <p>{{chalet.location}}</p>
    </article>
  </div>
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

<style>

</style>