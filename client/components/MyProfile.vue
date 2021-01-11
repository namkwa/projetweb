<template>
  <section class="layout">
    <div class="container">
      <div class="card-user">
        <p>email: {{currentUser.email}}</p>
        <button class="reserver" @click="deconnect()">déconnexion</button>
      </div>
      
      <p>historique des réservations</p>
      <article v-for="chalet in history" :key="chalet.id">
        <div class="card">
          <div class="image-container">
            <img :src="chalet.image" alt="" />
          </div>
          <div class="content-container">
            <div class="first-line">
              <h3 class="title">{{ chalet.title }}</h3>
              <div class="price">{{ chalet.price }}</div>
            </div>
            <div class="description">
              {{chalet.description}}
            </div>
            <div class="items">
              <div class="item-container">
                <button class="item active">1D</button>
                <button class="item">2D</button>
                <button class="item">1W</button>
              </div>
              <button class="reserver" @click="startBook(chalet)">reserver</button>
            </div>
          </div>
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
    },
    startBook(chalet) {
      this.$emit("start-book", chalet)
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

.items .item {
  height: 3rem;
  width: 3rem;
  border-radius: 0.5rem;
  justify-items: center;
  background: white;
  border: 1px solid darkgrey;
}

.items {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: auto;
}

.items .item.active {
  background: grey;
}

.item-container {
  display: flex;
  justify-content: space-around;
  width: 50%;
}

.reserver {
  display: inline;
  background-color: black;
  border: none;
  padding: 1rem;
  border-radius: 0.3rem;
  color: white;
}

.card {
  background-color: #faebd7;
  border-radius: 10px;
  display: flex;
  min-width: 70vw;
}

.card-user {
  background-color: #faebd7;
  border-radius: 10px;
  display: flex;
  min-width: 70vw;
  padding: 30px;
}

.card .image-container {
  flex: none;
  width: 24rem;
  height: 20rem;
  position: relative;
}

.card .image-container img {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card .content-container {
  flex: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.first-line {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.price {
  font-weight: 700;
  font-size: 17px;
  line-height: 19px;
  color: rgba(0, 0, 0, 0.637);
}

.title {
  margin: 0;
}

p {
 margin: 30px;
}
</style>