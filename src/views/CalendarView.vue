<template>
  <div class="calendar">
    <h1>Kalender</h1>
    <CalendarComponent></CalendarComponent>
    
  </div>
</template>

<script>
// @ is an alias to /src
import CalendarComponent from '@/components/CalendarComponent.vue';
import axios from 'axios';


export default {
  name: 'CalendarView',
  components: {
    CalendarComponent
  },
  data() {
    return {
      data: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      axios.get('http://localhost:5000/api/data')  // Adjust URL as per your backend setup
        .then(response => {
          this.data = response.data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }

}
</script>
