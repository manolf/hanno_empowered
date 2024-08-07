<template>


<!-- <h2>Day Component</h2>
<div v-if="dayData">
    {{ dayData.elfPic}}
    <div v-if="dayData">
        <p v-html="dayData.beschreibung"></p>
      </div>
</div>
<br> -->

{{ dayData }}
<br>
<div>userId: {{userId}} </div>
<div>dayId: {{dayId}} </div>


<div class="wrapper">
    <div class="left container container-day my-5 z-depth-1 rounded bg-white">
        <!--Section: Content-->
        <section class="dark-grey-text">
            <div class="row pr-lg-5">
                <div class="col-md-7 mb-4">
                    <div class="view">
                        <img
                            class="img-fluid mt-4 rounded"
                            :src="imgSrc"
                            alt="picture"
                            style="width: 100%; height: auto;"
                        />
                    </div>
                </div>
                <div class="col-md-5 d-flex align-items-center mb-4">
                    <div>
                        <h3 class="font-weight-bold mb-4"> Tag {{dayData.dayId}}</h3>
                        <h6 v-html="dayData.beschreibung"></h6>

                    </div>
                </div>
            </div>
        </section>
        <!--Section: Content-->
    </div>
</div>

<div class="wrapper">

    <div class="left container container-day my-5 z-depth-1 rounded bg-white">
            <!--Section: Content-->
            <section class="dark-grey-text">
                <div class="row pr-lg-5">

                    <!-- links -->
                    <div class="col-md-7 mb-4">

                        <section>
                            <p> Hier ist dein Wod! </p>
                            <div class="form-group">

                                <h3 class="text-success font-weight-bold">{{dayData.tabataName}}</h3>

                                    <p>
                                        {{dayData.description}}
                                    </p>
                                    <p> <strong>Musik: </strong> {{dayData.music}} </p>
                                    <p> <strong>performed by: </strong>  {{dayData.performedBy}} </p>

                                    <h6>Wenn ihr das Workout geschafft habt, einfach den grünen Button klicken.</h6>


                                    <a href="#index.php/tabata/add/<?=$dataEasy['tabataId']?>/<?=$dayId?>" class="btn btn-outline btn-success">Workout absolviert</a>

                                
                                    <hr>
                            </div>
                        </section>
                    </div>

                    <!-- rechts -->
                    <div class="col-md-5 d-flex align-items-center mb-4">

                    <div id="video" style="width:100%;">
                        
                        {{ dayData.link}}


                        
                        </div>

                    </div>
                </div>
            </section>
            <!--Section: Content-->
        </div>
    </div>

</template>

<script>
import axios from "axios";

export default {
    props: {
        id: {
            type: Number,
            required: true
        },

        //['id'],
    },
    data(){
        return {
          //  data: [],
          // allData: [],
            dayData: {},
            imgSrc: ''
        }
    },
    computed: {
        dayId() {
            return this.$route.params.id;
        },
        userId() {
            return this.$userId; // Access global property
        }
    },
    mounted() {

       // this.fetchAllData();
        this.fetchSingleDay();

    },
    // created(){
    //      this.fetchSingleDay();
    //      this.processImageString();
    // },
    methods:{
        decodeHtmlEntities(str) {
            var txt = document.createElement("textarea");
            txt.innerHTML = str;
            return txt.value;
        },
        processImageString() {
            // Check if dayData is available and has the elfPic property
            if (!this.dayData || !this.dayData.elfPic) {
                console.error("dayData or elfPic is undefined");
                return; // Exit if data is not ready
            }

            // Get the string from dayData
            let newStr = this.dayData.elfPic.trim();

            // Optionally, validate or modify the string if necessary
            // For example, ensure it starts with the correct path
            // if (!newStr.startsWith('.img/')) {
            // newStr = `./img/${newStr}`;
            // }

            let constructedString = newStr.slice(2); // Remove the first two characters

           //constructedString = `../assets/${constructedString}`;
            // Use require to load the image
            constructedString = require(`@/assets${newStr.slice(1)}`);


            // Set the processed string as the image source
            console.log(constructedString);
            //console.log result:
            //../assets/img/handstand.png --> /img/handstand.5ac36bd3.png

            this.imgSrc = constructedString;
        },
        // fetchAllData() {
        //     axios.get('http://localhost/backend-hanno-empowered/day.php', {
        //         params: {
        //             action: 'fetchall'
        //         }
        //     })
        //     .then((response) => {
        //   this.allData = response.data.map((item) => ({
        //     ...item,
        //     beschreibung: this.decodeHtmlEntities(item.beschreibung),
        //   }));
        // })
        // .catch((error) => {
        //   console.error("Error fetching all data:", error);
        // });
        // },
        fetchSingleDay() {
            console.log(this.dayId);
            console.log(this.id);
            axios.get('http://localhost/backend-hanno-empowered/day.php', {
                params: {
                    action: 'fetchsingle',
                    dayId: this.dayId
                }
            })
            .then(response => {

                // Decode textfields
                response.data.beschreibung = this.decodeHtmlEntities(
                    response.data.beschreibung
                );

                //warum haut decodieren in diesem Fall nicht hin?
                response.data.description = this.decodeHtmlEntities(
                    response.data.description
                );

                this.dayData = response.data;

                // Call processImageString after dayData has been set
                this.processImageString();
            })
            .catch(error => {
                console.error('Error fetching All Day data:', error);
            });
        },
        // addWorkout(){
        //     axios.get('http://localhost/backend-hanno-empowered/day.php', {
        //         params: {
        //             action: 'inserttabata',
        //             dayId: this.dayId,
        //             tabataId: this.tabataId,
        //             userId: this.userId
        //         }
        //     })
        //     .then(response => {

        //         // Decode textfields
        //         response.data.beschreibung = this.decodeHtmlEntities(
        //             response.data.beschreibung
        //         );

        //         //warum haut decodieren in diesem Fall nicht hin?
        //         response.data.description = this.decodeHtmlEntities(
        //             response.data.description
        //         );

        //         this.dayData = response.data;

        //         // Call processImageString after dayData has been set
        //         this.processImageString();
        //     })
        //     .catch(error => {
        //         console.error('Error fetching All Day data:', error);
        //     });
        //     //axios action: 
        //     //$sql = "INSERT INTO calendar SET userId = $userId, tabataId = $tabataId, dayId = $dayId";
        // }

    },
}
</script>

<style scoped>
.container {
    border: none;
  }

  .container-day {
    /* background: white; */
    width: 100%;
    border: none;
  }

  .wrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .left {
    width: 100%;
  }

  .right {
    width: 100%;
    border: none;
  }

</style>