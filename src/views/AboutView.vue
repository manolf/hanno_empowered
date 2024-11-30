<template>
  <div class="about">
    
    <br><br>


    <div class="row">
      <div class="col-md-6 mb-4">
          <a href="#">
              <img v-if="showStartImage" src="../assets/img/movie_night_transp2.png" class="img-fluid" alt="logo_hanno_and_rudolph coloured" @click="toggleImage">

              <img v-else src="../assets/img/handstand_anim.gif" class="img-fluid" alt="logo_hanno_and_rudolph black_and_white" @click="toggleImage">
          </a>
      </div>

      <div class="col-md-6 mb-4">
        <div class="p-4 border rounded">

            <br><br><br>
            <!-- <h1>Warum Adventkalender, warum Tabata</h1> -->


            <h2 class="pb-4">..wie alles begann..</h2>
            <p class="fw-bold">mit Schwung zum Christbaum!</p>
            <p>..Hektik vor Weihnachten.. Weihnachtsfeiern, unzählige Gelegenheiten sich den Bauch vollzugschlagen... Keks für Keks, Glühwein für Glühwein... .. Und keine Aussicht auf Besserung...</p>

            <p>Kommt dir das bekannt vor?</p>

            <p>Schon seit Jahren hat uns dieses süße Völlern - trotz all der feierlichen Freude mit FreundInnen, Familien und Bekannten - zugesetzt.</p>

            <p>So ist die Idee entstanden, einen gesünderen Adventkalender zu entwickeln, um mit Spaß auch während der Adventzeit etwas Gutes für seinen Körper zu tun!</p>
              
            <p>Was als kleines Geschenk für Freundin Hanni zur Zeit des Lockdowns entstanden ist, geht nun schon in die 4.Runde! Damals haben wir kurze Workouts gesammelt und diese zum Selbsttraining geteilt.</p>
        
        </div>
      </div>
    </div>

    <div class="row">
      
      <div class="col-md-6 mb-4">
        <div class="p-4 border rounded">

            <br><br>
            <h2 class="pb-4">Warum Tabata? </h2>

            <p>Es gibt viele Gründe, warum wir uns für diese Workoutform entschieden haben:</p>
            <ul class="list-unstyled">
              <li> 🎄 es dauert nur 4 Minuten</li>
              <li>🎄 es ist abwechslungsreich</li>
              <li>🎄 Herz- und Kreislauf kommen in Schwung</li>
              <li>🎄 man kann es von überall bequem ausführen</li>

            </ul>



          <p>... und last but not least: <b>der Spaß an der Sache!</b> </p>
          <p>Sportvideos im Adventoutfit - vorgetragen sowohl von routinierten SportlerInnen, Coaches, aber auch von Sprößlingen der Hobby- und Couchliga - begleitet von Weihnachtsmusik - wo gibts das sonst?
            </p>
            <p>💪 Jeden Tag ein anderes Tabata, von Squats bis Burpees, du bist niemals allein</p>

            <p>Lass dich von FITMITHANNO inspirieren! </p>

            <!-- <div class="row">
              <p> Effektiv durch den Advent:
      
                Verbrenne Kalorien, bevor du sie genießt!
                Kurze Einheiten – ideal zwischen Weihnachtsvorbereitungen.
                Kein Fitnessstudio nötig, trainiere bequem zu Hause.
                💪 Dein Adventskalender der Fitness:
                
                
                </p>
            
                  <p> Angefangen mit gesammelten Übungen, kam die Idee, Tabatas in Echtzeit anzubieten: 
                  mit echten Menschen, echtem Einsatz, Verkleidungen, Schwitzen und Spaß! </p>
                  <p>Möchtest auch du den Geist der Vorweihnacht mit uns teilen? lass uns dein Sport-Advent Video zukommen!</p>
                  <p><span class="font-weight-bold mr-2">Email:</span><a href="">feedback@fitmithanno.fun</a></p>
                
            </div>   -->
        </div>
      </div>

      <div class="col-md-6 mb-4">
        <a href="#">
            <img src="../assets/img/schubkarre_transparent.png" class="img-fluid" alt="logo_hanno_and_rudolph coloured">

            <!-- <img v-else src="../assets/img/rudi_der_baumschlaegerer2.png" class="img-fluid" alt="logo_hanno_and_rudolph black_and_white" @click="toggleImage"> -->
        </a>
    </div>

    </div>

    <footer-component></footer-component>

</div>


</template>

<script>

import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'Hanno-AboutUs',
  components: {
    FooterComponent,
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
