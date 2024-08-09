<template>
  <div>

    <!-- style='width: 150px; height: 150px; background-color: white' -->

    <!-- own page -->
    <div v-if="clicked" class="card window">
      <!-- <router-link :to="{ name: 'DayView', params: { id: dayId}}"> -->
        <div>
          <img
            :class="clicked"     
          />
          {{dayId}}<br><br>
          <a :href="itemArray[0].linkShort">{{itemArray[0].tabataName}}</a>
          
      </div>
    </div>
    <div v-else class="card window">
      <router-link :to="{ name: 'DayView', params: { id: dayId}}">
        <img
          :class="[ today < dayId ? 'notReady' : '', unclicked]"
          :src="getImageSrc(dayId)"
          alt="icon"
          style='width: 150px; height: 150px; background-color: white'
        />
      </router-link>
    </div>



  </div>             
</template>

<script>

//import ModalComponent from './ModalComponent.vue';
//import DayComponent from './DayComponent.vue';

export default {
  name: 'KachelComponent',
  components: {
  },
  props: {
    clicked: {
      type: Boolean,
      required: true
    },
    dayId: {
      type: Number,
      required: true
    },
    itemArray: {
      type: Array,
      required: false
    }
  },
  data(){
    return {
      today: null
    }
  },
  created() {
    this.today = this.calculateToday();
  },
  methods: {
    getImageSrc(dayId) {
      return require(`../assets/img/icon/${dayId}.png`);
    },
    calculateToday() {
      const currentDate = new Date();
      const dayNumber = currentDate.getDate();

      return dayNumber;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  text-decoration: none;
  color:white;
}

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
    /*font-size: 24px;*/
    min-width: 150px;
    /* -webkit-transition-duration: 1s;
    -moz-transition-duration: 1s;
    -o-transition-duration: 1s;
    transition-duration: 1s;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    transition-property: transform; */
    color: white;
    font-size: 12pt !important;
  }
  
  .notReady:hover {
    transform: rotate(90deg);
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transition: 1s;
  }
  
   .clicked {
    background-color: red;
    border-radius: 5pt;

  }
  
  .unclicked {
    color: white;
    font-size: 12pt !important;
    background-color: white;
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
