<template>
    <div>
        debuginfo last day
        
        <hr>
        <p>TODAY: {{today }} ||  dayData.Id: {{ dayData.dayId}} || id: {{id}}</p>
        <div>
            <h1>Day {{ id }}</h1>
            <h4 class="text-success">calculated dayId {{dayId}}</h4>
            <!-- Use the id prop directly -->
            <p>Here is the content for day {{ id }}.</p>
          </div>

          <hr>

          {{ dayData }}
          <hr>

        
        <div v-if="loading">
            ... loading

        </div>

        <div v-else>
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
                                            <p v-html="dayData.description"></p>
                                            <p> <strong>Musik: </strong><span v-html="dayData.music"></span></p>
                                            
                                            <p> <strong>performed by: </strong>  {{dayData.performedBy}} </p>
        
                                            <h6>Wenn du das Workout geschafft hast, einfach den grünen Button klicken.</h6>
        
                                            <div>
                                                <button
                                                    class="btn btn-outline btn-success"
                                                    @click="saveTabata(userId, dayData.tabataId, dayId)"
                                                    >
                                                    Workout absolviert
                                                </button>
                                            </div> 
                                            <hr>
                                    </div>
                                </section>
                            </div>
        
                            <!-- rechts -->
                            <div class="col-md-5 d-flex align-items-center mb-4">
                                <div id="video" style="width:100%;">                      
                                    <span v-html="dayData.link"></span>       
                                </div>
                                <hr>
                            </div>
                        </div>
                    </section>
                    <!--Section: Content-->
                </div>
            </div>

        </div>
    

    </div>
    
    </template>
    
    <script>
    import axios from "axios";
    
    export default {
        props: {
            id: {
                type: Number, // or Number if you know `id` is numeric
                required: true,
            },
        },
        data(){
            return {
              //  data: [],
              // allData: [],
                dayData: {},
                imgSrc: '',
                message: '',
                today: null,
                loading: true
            }
        },
        computed: {
            dayId() {
             //   const day = null;
                // Use prop if provided, otherwise fallback to route
                console.log( "1 Number(this.$route.params.id " + Number(this.$route.params.id));
                console.log ("2 this.id " + this.id);
                console.log("3 this.$route.query.id" + this.$route.query.id);

                return this.id ? this.id : Number(this.$route.params.id);

               // return this.id; //|| Number(this.$route.params.id) || this.$route.query.id;

            },
            userId() {
                return this.$userId; // Access global property
            },
            backend(){
            return this.$backendlink;
          }
        },
        beforeRouteEnter(to, from, next) {
            const id = Number(to.params.id); // Ensure valid id
            if (isNaN(id)) {
                // Redirect to an error page or handle gracefully
                next('/error');
            } else {
                next();
            }
        },
        mounted() {
            this.fetchAllData();
            const now = new Date();
            this.today = now.getDate(); // Sets today's day (1-31)

        console.log("Today's day:", this.today);
        console.log('Route params:', this.$route.params);
        if (!this.dayId) {
            console.error("ID not found in props or route!");
        } else {
            console.log("Day ID:", this.dayId);
        }
        console.log("Received ID as prop:", this.id);
    
        },
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
    
                let newStr = this.dayData.elfPic.trim();
                let constructedString = newStr.slice(2); // Remove the first two characters
    
                // Use require to load the image
                constructedString = require(`@/assets${newStr.slice(1)}`);
                this.imgSrc = constructedString;
            },
            async saveTabata(userId, tabataId, dayId){
                try {
                    const data = {
                        action: 'inserttabata',
                        dayId: dayId,
                        tabataId: tabataId,
                        userId: userId
                    };
                    console.log("Gesendete Daten:", data); 
                    const response = await axios.post(this.backend + '/user.php', data);
                    this.message = response.data.message; 
                    alert("Hurra, dein Workout wurde erfolgreich gespeichert!");
    
                    //danach Weiterleitung auf Kalenderseite
                    this.$router.push('/calendar');
    
    
                } 
                catch (error) {
                    console.error('Fehler beim Speichern:', error);
                    this.message = 'Fehler beim Speichern der Daten.';
                }
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
            async fetchAllData() {
                console.log("in async fetch");
                try {
                    await this.fetchSingleDay();

                    } catch (error) {
                    console.error('Error fetching data:', error);
                    } finally {
                    this.loading = false;
                }
            },
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