<template>
  <div>
    HOHOHO
    <p>Kachel clicked: {{ clicked }}</p>
    <p>DayId: {{ testId }}</p>
    <p>userId: {{userId}}</p>

    <p>backend: {{ backendlink }} {{backend}} </p>

    <hr>
    {{kachelOpened}}

    <!-- {{ kachelOpened }}
    {{ kachelOpened.dayId }} -->
    <!-- <KachelComponent :clicked="clicked" :dayId="testId"></KachelComponent> -->
  </div>
  

  <div class="container container-cal pb-5" id="adventtage">

    <div v-for="item in this.data" :key="item.dayId">
      <KachelComponent 
        v-if="item.dayId < 100"  
        :clicked="checkDayIdExists(item.dayId)" 
        :dayId="item.dayId"
        :itemArray="filterByDayId(item.dayId)" 
        >
      </KachelComponent>
    </div>

  </div>
</template>

<script>
import axios from 'axios';
import KachelComponent from './KachelComponent.vue';

export default {
  name: 'CalendarComponent',
  components: { 
      KachelComponent
    },
    computed: {
      userId() {
        return this.$userId; // Access global property
      },
      backend(){
        return this.$backendlink;
      }
      // kachelOpened(dayId){
      //   return this.kachelOpened.dayId
      // }
    },
  data() {
    return {
      data: [],
      kachelOpened: [],
      //backend: "http://localhost/backend-hanno-empowered"
     // kachelArray: [],
      //unclicked: false,
      //testId: 13,
    };
  },
  // provide(){
  //   return {
  //     userId: 112233
  //   }
  // },
  mounted() {
    this.fetchData();
   // this.fetchDayData();
   console.log('Component mounted, userId:', this.$userId); 
   this.getOffeneKachelnByUserId()
  },
  methods: {
    fetchData() {
      axios.get(this.backend+'/calendar.php') // Adjust the URL as per your setup
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    getOffeneKachelnByUserId() {
      axios.get(this.backend+'/user.php', {
                params: {
                    action: 'fetchuserdata',
                    userId: this.$userId
                }
            })
        .then(response => {
            console.log('Response data kachelOpened: null, undefined or Object?:', response.data); // Debugging: check response
          this.kachelOpened = response.data || [];
        })
        .catch(error => {
          console.error('Error fetching userData:', error);
        });
    },
    //TODO(Manu) maybe not necessary, check if existing Array might be sufficent
    checkDayIdExists(searchId) {
      console.log("id: " + searchId);
      // console.log("kachelOpened:", this.kachelOpened);
      console.log("Type:", typeof this.kachelOpened);
     /*   if (!Array.isArray(this.kachelOpened)) {
          throw new Error("DEBUG!! kachelOpened is not an array");
        }*/
      if (!Array.isArray(this.kachelOpened)) {
        this.kachelOpened = [this.kachelOpened];
      }
      return this.kachelOpened.some(item => item.dayId === Number(searchId));
    },
    filterByDayId(searchId) {
        if (!Array.isArray(this.kachelOpened)) {
          this.kachelOpened = [this.kachelOpened];
        }
      return this.kachelOpened.filter(item => item.dayId === Number(searchId));
}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-cal {
  background-color: rgb(102, 102, 51) !important;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
