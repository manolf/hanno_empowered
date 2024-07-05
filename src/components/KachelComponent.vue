<template>
  <div>
    <!-- <h1>KachelComponent</h1>
    <p>Received clicked: {{ clicked }}</p>
    <p>Received dayId: {{ dayId }}</p> -->

    <div>
      <a href="#" @click.prevent="openModal">Open Modal</a>
      <ModalComponent :dayId="dayId" :isVisible="isModalVisible" @close="closeModal" />
    </div>


    <!-- <div class='card  window bild_beschriftung id= <?= $day['dayId'] ?>'>
      <a <?= $notClickable ?> href='day.php?dayId= <?= $day['dayId'] ?>'>  <img class='caro <?= $kachelType ?>'
       src= "./assets/img/icon/<?= $day['dayId'] ?>.png" 
      style='width: 150px; height: 150px; background-color: white' alt='icon'></a>
      <input type='hidden' name='dayId' value= <?= $day['dayId'] ?>>
  </div> -->

  <!-- <div class="card window">
    <a href='#'>  <img class='caro' src='../assets/img/icon/1.png'
      style='width: 150px; height: 150px; background-color: white' alt='icon'>
      
     </a>
  </div> -->
  <div class="card window">
    <a href="#" @click.prevent="openModal">
      <img
        class="unclicked"
        :src="getImageSrc(dayId)"
        alt="icon"
        style='width: 150px; height: 150px; background-color: white'
      />
    </a>
  </div>

  </div>
</template>

<script>

import ModalComponent from './ModalComponent.vue';

export default {
  name: 'KachelComponent',
  components: {
    ModalComponent
  },
  props: {
    clicked: {
      type: Boolean,
      required: true
    },
    dayId: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      isModalVisible: false
    }
  },
  methods: {
    getImageSrc(dayId) {
      return require(`../assets/img/icon/${dayId}.png`);
    },
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
    // getLinkToDayModal(dayId) {
    //   return require ()
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card:hover {
  transform: scale(1.05);
}
.card {
  margin: 20px 10px 20px 10px;
  padding: 20px 20px 20px 20px;
  transition: all 0.5s;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 600px;
}

.icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

  /* .notReady {
    background-color: white !important;
  } */
  
  .window {
    width: 150px;
    height: 150px;
    background-color: rgb(153, 0, 0);
    border-radius: 5%;
    margin: 1rem;
    /* color: red; */
    font-size: 24px;
    min-width: 150px;
    /* -webkit-transition-duration: 1s;
    -moz-transition-duration: 1s;
    -o-transition-duration: 1s;
    transition-duration: 1s;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    transition-property: transform; */
  }
  
  .notReady:hover {
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transition: 1s;
  }
  
  /* .clicked {
    background-color: red;
    border-radius: 5pt;
    transition: 1s;
  } */
  
  .clicked {
    color: white;
    font-size: 12pt !important;
  }

  /* .clickable{
    pointer-events: none;
    cursor: default;
  } */
  
  .bild_beschriftung {
    position: relative;
    color: black;
  }
  .caro {
    display: block;
    background: red;
    /* background: rgb(240, 236, 187); */
    /* background: rgb(211, 25, 25); */
  }

  .unclicked {
    width: 150px; 
    height: 150px; 
    background-colour: 'white';
  }

</style>
