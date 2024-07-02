<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
  <div>
    <h1>Adventkalender 2024</h1>
  </div>
  <div>
    <h2>erster Test axios</h2>
    <ul>
      <li v-for="item in data" :key="item.dayId">{{ item.dayId }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      data: [],
      daydata: []
    };
  },
  mounted() {
    this.fetchData();
   // this.fetchDayData();
  },
  methods: {
    // version with nodejs
    // fetchData() {
    //   axios.get('http://localhost:5000/api/data')
    //     .then(response => {
    //       this.data = response.data;
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //     });
    // },
    // fetchDayData() {
    //   axios.get('http://localhost:5000/api/daydata')
    //     .then(response => {
    //       this.daydata = response.data;
    //     })
    //     .catch(error => {
    //       console.error('Error fetching data:', error);
    //     });
    // },
    fetchData() {
      axios.get('http://localhost/vue-php-backend/data.php') // Adjust the URL as per your setup
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #b99f42;
}
</style>
