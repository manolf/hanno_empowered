<template>
  <div>
    <h1>Adventkalender 2024</h1>
    <p>Kachel clicked: {{ clicked }}</p>
    <p>DayId: {{ testId }}</p>
    <p>userId: {{userId}}</p>

    {{ userData }}
    <!-- <KachelComponent :clicked="clicked" :dayId="testId"></KachelComponent> -->
  </div>
  

  <!-- <div>
    <h2>erster Test axios</h2>
{{ data }}
    <ul>
      <li v-for="item in data" :key="item.dayId">{{ item.dayId }}</li>
    </ul>
  </div> -->

  <div class="container container-cal pb-5" id="adventtage">

    <div v-for="item in this.data" :key="item.dayId">
      <KachelComponent 
        v-if="item.dayId < 100"  
        :clicked="clicked" 
        :dayId="item.dayId">
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
      }
    },
  data() {
    return {
      data: [],
      userData: {},
      clicked: true,
      testId: 13,
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
          this.userData = response.data;
        })
        .catch(error => {
          console.error('Error fetching userData:', error);
        });
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
