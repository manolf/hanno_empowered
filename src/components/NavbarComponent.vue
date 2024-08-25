<!-- src/components/Navbar.vue -->
<template>
    <!-- <div class="container-nav collapse navbar-collapse" id="navbarTogglerDemo02"> -->

        
        <nav class="navbar sticky-top navbar navbar-expand-sm navbar-dark" style="background-color: rgb(102, 102, 51)">

            <button class="navbar-toggler navbar-toggler-left btn-lg" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div 
                class="container-nav collapse navbar-collapse" 
                id="navbarTogglerDemo02"
                >

                <div class="navbar-left">
                    <img class="icon border" src="../assets/img/icon/rudolf_glasses.png"/>
        
                </div>

                <!-- <div> -->
                    <ul  class="navbar-middle">
                        <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link to="/calendar" class="nav-link">Adventkalender</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/tale" class="nav-link">Hannos Geschichte</router-link>
                        </li>
                    </ul>

                <!-- </div> -->

                <div class="navbar-right">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <img class="icon border" src="../assets/img/icon/rudolf_glasses.png" />
                        </li>
        
                    </ul>
                </div>
            
            </div>


        </nav>

    <!-- </div> -->

  </template>
  
  <script>
  export default {
    name: 'NavbarComponent',
  };
  </script>
  
  <style scoped>
  nav {
    background-color: rgb(102, 102, 51) !important;
  }
  
  .container-nav {
    display: flex;
   /*align-items: center;*/
    justify-content: space-between;
    /*padding: 1rem;*/
  }

  .navbar-middle{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
  .navbar-right {
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .navbar-left {
    width: 10%;
  }

  .icon {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
  }

  li{
    color: darkred;
  }

  .nav-link{
    color: white;
  }

  /*nav {
    background-color: #333;
    padding: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 1rem;
  }
  
  li {
    color: white;
  } */
  </style>
  