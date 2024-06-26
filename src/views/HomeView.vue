<template>

  <div class="container">
    <!-- Header with countdownComponent -->
    <div class="row">
        <div class="col">
          <countdown-component></countdown-component>
        </div>
    </div>

    <div class="row">
        <div class="col-md-6 mb-4">
            <a href="#">
                <img v-if="showStartImage" src="../assets/img/vector_logo_color.svg" class="img-fluid" alt="logo_hanno_and_rudolph coloured" @click="toggleImage">

                <img v-else src="../assets/img/vector_logo_white_fill_bw.svg" class="img-fluid" alt="logo_hanno_and_rudolph black_and_white" @click="toggleImage">
            </a>
        </div>

        <div class="col-md-6 mb-4">
          <div class="p-4 border rounded">
              <br><br><br>
              <h2 class="pb-4">Willkommen liebe Freund:Innen einer bewegten Adventzeit!! </h2>
              <p class="fw-bold">noch soooo lange hin..</p>
              <p>..trotzdem bereiten wir uns schon jetzt intensiv auf die große Adventszeit vor!
              Es wird wieder Tabata-Workoutmat im gewohnten Format geben, die euch in Schwung und Form bringen werden. 
              Die Yogis unter euch werden auch auf ihre Kosten kommen, versprochen!
              </p>

              <p>Aber wir haben auch heuer etwas ganz Neues geplant: Wir wollen noch nicht zuviel verraten, nur: es wird eine Überraschung für die Kleineren unter uns werden... aber... psst! Die Zeit ist noch nicht reif!</p>
              <p>Viel Spaß inzwischen! Und vergesst nicht auf ausreichende Bewegung!</p>
              <p class="fw-bold">Euer Fit-Mit-Hanno Team</p>
          </div>
      </div>

      <!-- Footer meanwhile -->
      <div class="row">
          <div class="col text-center my-4"> 
            <a class="icon px-3" href="https://www.facebook.com/profile.php?id=100087709973763" target="_blank"><font-awesome-icon :icon="['fab', 'facebook-f']" size="2x"/></a>
            <a class="icon px-3" href="https://www.instagram.com/elf.hanno/" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" size="2x"/></a>
          </div>
      </div>
  </div>

</div>

</template>

<script>
// @ is an alias to /src
import CountdownComponent from '../components/CountdownComponent.vue'

export default {
  name: 'Hanno-Advent',
  components: {
    CountdownComponent
  },
  data(){
    return{
      showStartImage: true
    }
  },
  methods:{
    toggleImage() {
      this.showStartImage = !this.showStartImage;
    }
  }
}
</script>

<style scoped>
font-family: "Fahkwang", sans-serif, -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
sans-serif;
margin: 0;

h1,
h2,
h3,
h4 {
  color:#c8560f;
}


h2 {
  color:#c8560f;
}

ul {
  /* background-color: rgb(102, 102, 51) !important; */
  background-color: black;
  color:#c8560f;
  font-weight: bold;
}

li a {
  color:#c8560f;
  font-weight: bold;
}

.icon{
  color:#c8560f;
  font-weight: bold;
}

</style>
