<template>
  <div>
    <p>{{listChalet[0].location}}</p>
    <article v-for="chalet in listChalet" :key="chalet.id">
      <p>{{chalet.description}}</p>
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