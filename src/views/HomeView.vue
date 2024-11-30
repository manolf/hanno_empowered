<template>

  <div class="container">
    <!-- Header with countdownComponent -->
    <div v-if="!timeReady" class="row">
        <div class="col">
          <countdown-component></countdown-component>
        </div>
    </div>

    <div v-if="timeReady" class="calendar">
      <h1>Hurra</h1>
      <h4>Endlich ist es wieder soweit! Viel Spaß beim Mitmachen! </h4>
      <CalendarComponent></CalendarComponent>
      
    </div>

    <div v-else class="row">
        <div class="col-md-6 mb-4">
            <a href="#">
                <img v-if="showStartImage" src="../assets/img/schneeschaufeln_transparent.png" class="img-fluid" alt="logo_hanno_and_rudolph coloured" @click="toggleImage">

                <img v-else src="../assets/img/vector_logo_color.svg" class="img-fluid" alt="logo_hanno_and_rudolph black_and_white" @click="toggleImage">
            </a>
        </div>

        <div class="col-md-6 mb-4">
          <div class="p-4 border rounded">
              <br><br><br>
              <h2 class="pb-4">Liebe Freund:Innen einer bewegten Adventzeit!!</h2>
              <p class="fw-bold">bald ist es soweit..</p>
              <p>..nur noch wenige Stunden und dann ist der sportliche Adventskalender - gespickt mit 
              lustigen Tabata-Workouts für Euch freigegeben!
              </p>
              <p>Wärmt Euch schon mal auf! </p>

              <p>Wir sehen uns in Kürze und scharren schon mit den Hufen!</p>
              <p class="fw-bold">Euer Fit-Mit-Hanno Team</p>
          </div>
      </div>
    </div>

    <div class="row">
        <!-- <div class="col-md-6 mb-4">
            <a href="#">
                <img v-if="showStartImage" src="../assets/img/schubkarre_transparent.png" class="img-fluid" alt="logo_hanno_and_rudolph coloured" @click="toggleImage">

                <img v-else src="../assets/img/schneeschaufeln_transparent.png" class="img-fluid" alt="logo_hanno_and_rudolph black_and_white" @click="toggleImage">
            </a>
        </div> -->

        <!-- <div class="col-md-6 mb-4">
          <h2>Zum Adventkalender</h2>

          <p>.. unser sportlicher Klassiker - click and enjoy</p>
           <router-link to="/calendar">
              <img src="../assets/img/screenshot_calendar.png" class="img-fluid" alt="adventkalender">
            </router-link>
        </div> -->

        <!-- <div class="col-md-6 mb-4">
          <div class="p-4 border rounded">
              <br><br><br>
              <h2 class="pb-4">Willkommen liebe Freund:Innen einer bewegten Adventzeit!! </h2>
              <p class="fw-bold">bald ist es soweit..</p>
              <p>..seid Ihr auch schon so aufgeregt wie wird? Mit 1.Dezember startet die große Adventszeit und wir geben wieder unser Bestes, um euch mit den tägnlichen 4 Minuten sportlichen Spaß zu beglücken!
              Lustige Tabata-Workouts, gespickt mit Weihnachtsmusik und vorgetragen sowohl von routinierten SportlerInnen als auch Sprößlingen der Hobby- und Couchliga warten auf euch. 
              </p>

              <p>Für jeden ist etwas dabei! Außerdem wird es heuer ein paar Überraschungen geben, 
                also bleibt dran!</p>
              <p>Also schnell dem Ruf Hannos und Rudis auf unseren sozialen Plattformen auf dem Laufenden folgen, um nichts zu versäumen!</p>
              <p class="fw-bold">Euer Fit-Mit-Hanno Team</p>
          </div>
      </div> -->

      <!-- <div class="row">
        
        <div class="col-md-6 mb-4">
          <div class="p-4 border rounded">

              <h2>Hannos Geschichte</h2>
              <div class="row">
                <div class="col-6"><img src="../assets/img/baerenstarker_hanno.png" class="img-fluid" alt="logo_hanno"></div>
                <div class="col-6 mt-4">
                  <br><br><br><br><br><br><router-link to="/tale">
                    es war einmal...
                  </router-link><br><br><br><br><br><br>
                  <p>Hier kannst du unseren Held kennenlernen.. Wie kam es eigentlich dazu, dass er nun heute mit Santa Geschenke austragen darf?</p></div>
    
              </div>

              

              
          </div>
        </div>

        <div class="col-md-6 mb-4">
              <h2>Zum Adventkalender</h2>

              <p>.. unser sportlicher Klassiker - click and enjoy</p>
               <router-link to="/calendar">
                  <img src="../assets/img/screenshot_calendar.png" class="img-fluid" alt="adventkalender">
                </router-link>
        </div>

      </div> -->

  </div>

  <footer-component></footer-component>

</div>

</template>

<script>
// @ is an alias to /src
import CountdownComponent from '../components/CountdownComponent.vue'
import CalendarComponent from '@/components/CalendarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'Hanno-Advent',
  components: {
    CountdownComponent,
    CalendarComponent,
    FooterComponent,

  },
  data(){
    return{
      showStartImage: true,
      TimeIsCome: true
    }
  },
  methods:{
    toggleImage() {
      this.showStartImage = !this.showStartImage;
    }
  },
  computed: {
    timeReady() {
      const now = new Date();
      const targetDate = new Date('2025-12-01T00:00:00');
      return now >= targetDate;
    },
  },
  // mounted()
  //   this.calculateTime();
}
</script>

<style scoped>

font-family: "Fahkwang", sans-serif, -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
sans-serif;
margin: 0;

h2, h3, h4{
      color: rgb(153, 0, 0);
}

h2{
      color: rgb(153, 0, 0);
}

ul {
  /* background-color: rgb(102, 102, 51) !important; */
  background-color: black;
      color: rgb(153, 0, 0);
  font-weight: bold;
}

li a {
      color: rgb(153, 0, 0);
  font-weight: bold;
}

.icon{
      color: rgb(153, 0, 0);
  font-weight: bold;
}

</style>
