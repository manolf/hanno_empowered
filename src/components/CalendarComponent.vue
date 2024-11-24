<template>
  <div>
    Testversion 3 - mit Async and Loading and debug_log extended
    <p>Kachel clicked: {{ clicked }}</p>
    <p>userId: {{userId}}</p>
    <p>calendar</p>

    <span v-for="item in this.data" :key="item.dayId">
      {{item.dayId}} |
    </span>
    <br>
    <p>Kacheln clicked by user</p>

    <div v-for="item in this.kachelOpened" :key="item.dayId">
      {{item.dayId}} | {{item.tabataName}} 
    </div>

    <!-- <p>all kacheln</p>
    <div v-for="item in this.allKacheln" :key="item.dayId">
      {{item.dayId}} | {{item.tabataName}} | {{ item.userId }}
    </div> -->

    <h4>backend: {{backend}} </h4>

   <!-- <p>this.isDayWithTabata(5); {{ arrayTest }} </p>
   <p>this.filterByDayId(5); {{ arrayTest2 }} </p> -->

    <!-- {{data}}
    <hr>
    {{kachelOpened}} -->

    <!-- {{ kachelOpened }}
    {{ kachelOpened.dayId }} -->
    <!-- <KachelComponent :clicked="clicked" :dayId="testId"></KachelComponent> -->
  </div>
  

  <div v-if="!loading" class="container container-cal pb-5" id="adventtage">

    <!-- <div v-for="item in this.data" :key="item.dayId">
      <KachelComponent 
        v-if="item.dayId < 100"  
        :clicked="isDayWithTabata(item.dayId)"
        :dayId="item.dayId"
        :itemArray="filterByDayId(item.dayId)" 
        >
      </KachelComponent>
    </div> -->

    <div v-for="item in this.allKacheln" :key="item.dayId">
      <KachelComponent 
        v-if="item.dayId < 100"  
        :clicked="item.userId !== undefined && item.userId !== null"
        :dayId="item.dayId"
        :itemArray="createItemArray(item)" 
        >
      </KachelComponent>
    </div>


  </div>
  <div v-else> ... loading
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
      },
    // arrayTest(){
    //   return this.isDayWithTabata(5);
    // },
    // arrayTest2(){
    //   return this.filterByDayId(5);
    // },
  },
  data() {
    return {
      data: [],
      kachelOpened: [],
      allKacheln: [],
      loading: true, // Indicates whether data is still being fetched
    };
  },
  mounted() {
    this.fetchAllData();
   console.log('Component mounted, userId:', this.$userId); 
  },
  methods: {
    createItemArray(item) {
      return [{
        dayId: item.dayId,
        tatataId: item.tabataId,
        linkShort: item.linkShort,
        tabataName: item.tabataName
      }];
    },
    async fetchAllData() {
    try {
     // await this.getOffeneKachelnByUserId();
     // await this.fetchData();
      await this.getAllKachelnByUserId();
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      this.loading = false; // Ensure loading is false regardless of success or failure
    }
  },
    // fetchData() {
    //   axios.get(this.backend + '/calendar.php')
    //     .then(response => {
    //       this.data = response.data;
    //     })
    //     .catch(error => {
    //       console.error('Error fetching calendardata:', error);
    //     });
    // },
    // getOffeneKachelnByUserId() {
    //   axios.get(this.backend + '/user.php', {
    //     params: {
    //       action: 'fetchuserdata',
    //       userId: this.$userId
    //     }
    //   })
    //     .then(response => {

    //   console.log('Response data CHECK 1 :', response.data); // Debugging: check response
    //   if (Array.isArray(response.data)) {
    //     this.kachelOpened = response.data; // Assign only if it's an array
    //   } else {
    //     console.error('Response data is not an array:', response.data);
    //     this.kachelOpened = []; // Fallback to an empty array
    //   }
    //   })
    //   .catch(error => {
    //     console.error('Error fetching userData:', error);
    //     this.kachelOpened = []; // Fallback to an empty array in case of an error
    //   });
    // },
    getAllKachelnByUserId() {
      axios.get(this.backend + '/user.php', {
        params: {
          action: 'fetchnewdata',
          userId: this.$userId
        }
      })
        .then(response => {

      console.log('Response data CHECK 1 :', response.data); // Debugging: check response
      if (Array.isArray(response.data)) {
        this.allKacheln = response.data; // Assign only if it's an array
      } else {
        console.error('Response data is not an array:', response.data);
        this.allKacheln = []; // Fallback to an empty array
      }
      })
      .catch(error => {
        console.error('Error fetching userData:', error);
        this.kachelOpened = []; // Fallback to an empty array in case of an error
      });
    },
    //TODO(Manu) maybe not necessary, check if existing Array might be sufficent
    // isDayWithTabata(searchId) {
    //   const answer = this.kachelOpened.some(item => item.dayId === Number(searchId));
    //   console.log("loading " + this.loading + " id: " + searchId + " - " + answer);
    //  // return this.kachelOpened.some(item => item.dayId === Number(searchId));
    //   return answer;
    // },
    // filterByDayId(searchId) {
    //   const answ2 = this.kachelOpened.filter(item => item.dayId === Number(searchId));
    //   console.log("id: " + searchId + " - " + answ2);
    //   //return this.kachelOpened.filter(item => item.dayId === Number(searchId));
    //   return answ2;
    // }
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
