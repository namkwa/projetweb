<template>
  <p>{{ currentUser.email }}</p>
</template>

<script>
module.exports = {
  props: {
    currentUser: { type: Object},
    },
  data() {
    return{
      
    }
  }
}
</script>

<style>

</style>