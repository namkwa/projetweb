<template>
  <div>
    <article v-for="chalet in listChalet" :key="chalet.id">
      
    </article>
  </div>
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

<style>

</style>