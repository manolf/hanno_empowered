<template>
  <div>
    <h1>Adventkalender 2024</h1>
    <p>Kachel clicked: {{ clicked }}</p>
    <p>DayId: {{ testId }}</p>
    <p>userId: {{userId}}</p>

    {{ kachelOpened }}
    {{ kachelOpened.dayId }}
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
      // kachelOpened(dayId){
      //   return this.kachelOpened.dayId
      // }
    },
  data() {
    return {
      data: [],
      kachelOpened: [],
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
      axios.get('http://localhost/backend-hanno-empowered/calendar.php') // Adjust the URL as per your setup
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    },
    getOffeneKachelnByUserId() {
      console.log(this.$userId);
      axios.get('http://localhost/backend-hanno-empowered/user.php', {
                params: {
                    action: 'fetchuserdata',
                    userId: this.$userId
                }
            })
        .then(response => {
                  console.log('Response data:', response.data); // Debugging: check response
          this.kachelOpened = response.data;
        })
        .catch(error => {
          console.error('Error fetching userData:', error);
        });
    },
    //TODO(Manu) maybe not necessary, check if existing Array might be sufficent
    checkDayIdExists(searchId) {
      return this.kachelOpened.some(item => item.dayId === Number(searchId));
    },
    filterByDayId(searchId) {
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
