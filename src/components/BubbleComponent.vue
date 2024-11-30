<template>
    <div class="bubble-container">
        <div class="background"></div>
        <img src="../assets/img/schneeschaufeln_transparent.png" alt="Hervorgehobenes Bild" class="highlighted-image">
      <div 
        v-for="person in people" 
        :key="person.name" 
        class="bubble"
        :style="person.style"
      >
        <a :href="person.instagram" target="_blank" class="bubble-link">
          {{ person.name }}
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "PersonBubbles",
    data() {
      return {
        people: [
          { name: "Jackie", instagram: "https://instagram.com/jaumeyr" },
          { name: "Hanni", instagram: "https://instagram.com/hannerlgrotz" },
          { name: "Carmen", instagram: "https://instagram.com/carmenkulterer" },
          { name: "Nina", instagram: "https://instagram.com/ninaslchnr" },
          { name: "Karin", instagram: "https://instagram.com/karin_project_you" },
          { name: "Claudia", instagram: "https://instagram.com/claudia.zazz" },
          { name: "Basti", instagram: "https://instagram.com/basti.rieder" },
          { name: "Heinz", instagram: "https://instagram.com/langatium" },
          { name: "Emina", instagram: "https://instagram.com/emi__holy" },
          { name: "Babsi", instagram: "https://instagram.com/babra_ann" },
          { name: "Sandra", instagram: "https://instagram.com/sandrakammermayer" },
          { name: "Marcelina", instagram: "https://instagram.com/marcelinazappe" },
        ].map((person) => ({
          ...person,
          style: {
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
          },
        })),
      };
    },
  };
  </script>
  
  <style scoped>
  .bubble-container {
    position: relative;
    width: 100%;
    height: 500px;
    background-color: rgb(102, 102, 51);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    overflow: hidden;
    border: 2px dashed #ddd;
    border-radius: 12px;
  }
  
  .bubble {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: rgb(153, 0, 0);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    font-size: 12px;
    font-weight: bold;
    transition: transform 0.3s;
    cursor: pointer;
  }
  
  .bubble:hover {
    transform: scale(1.5);
  }
  
  .bubble-link {
    color: white;
    text-decoration: none;
  }
  
  .bubble-link:hover {
    text-decoration: underline;
  }
  </style>
  