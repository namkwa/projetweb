<template>
  <section class="layout">
    <div class="container">
      <div class="card">
        <div class="image-container">
          <img :src="currentReservation.image" alt="" />
        </div>
        <div class="content-container">
          <div class="first-line">
            <h3 class="title">{{ currentReservation.title}}</h3>
            <div class="price">${{ currentReservation.price }}</div>
          </div>
          <div class="description">
            {{currentReservation.description}}
          </div>
          <div class="items">
            <div class="item-container">
              <button class="item" :class="{active: d1}" @click="changeButton('1')">1D</button>
              <button class="item" :class="{active: d2}" @click="changeButton('2')">2D</button>
              <button class="item" :class="{active: w1}" @click="changeButton('3')">1W</button>
            </div>
            <button class="reserver" @click="book(duration, date)">reserver</button>
          </div>
        </div>
      </div>
      <input type="date" value="2021-01-12" v-model="date">
    </div>
  </section>
</template>

<script>
module.exports = {
  props: {
    listChalet: { type: Array, default: []},
    currentReservation: {type: Object}
  },
  data() {
    return {
      d1: true,
      d2: false,
      w1:false,
      duration: 'd1',
      date: null
    };
  },
  methods: {
    changeButton (number) {
      switch (number) {
        case '1':
          d1 = true
          d2 = false
          w1 = false
          duration = 'd1'
          break;
        case '2':
          d1 = false
          d2 = true
          w1 = false
          duration = 'd2'
          break;
          case '3':
          d1 = false
          d2 = false
          w1 = true
          duration = 'w1'
          break;
      }
    },
    book (duration,date) {
      this.$emit("book", duration, date)
    }
  }
}
</script>

<style scoped>
img{
  height: 10em;
  width: 15em;
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

.item {
  color: darkgrey;
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

.container {
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  padding: 30px;
}
</style>
