<!-- ModalComponent.vue -->
<template>
    <div class="container">
        
        <div v-if="isVisible" class="modal-overlay" @click="closeModal">
            <h2>Tag {{dayId}}</h2>
        <div class="modal-content" @click.stop>
            <div class="tile" v-for="(tile, index) in tiles" :key="index">
            <template v-if="tile.type === 'image'">
                <img :src="tile.src" :alt="tile.alt" class="tile-image">
            </template>
            <template v-else>
                <p class="tile-text">{{ tile.text }}</p>
            </template>
            </div>
            <button @click="closeModal" class="close-button">Close</button>
        </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ModalComponent',
    props: {
      isVisible: {
        type: Boolean,
        required: true
      },
      dayId: {
      type: Number,
      required: true
    }
    },
    data() {
      return {
        tiles: [
          { type: 'image', src: 'path/to/image1.jpg', alt: 'Image 1' },
          { type: 'text', text: 'This is some text' },
          { type: 'text', text: 'This is more text' },
          { type: 'image', src: 'path/to/image2.jpg', alt: 'Image 2' }
        ]
      };
    },
    methods: {
      closeModal() {
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style>
  .container {
    background: yellow;
  }

  .modal-overlay {
    position: fixed;
    top: 20%;
    left: 20%;
    width: 60%;
    height: 70%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    border-radius: 5pt;
    margin: 1rem;
    border: 5px solid black;
  }
  
  .modal-content {
    background: orangered;
    width: 40%;
    padding: 20px;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  
  .tile {
    width: 48%;
    margin-bottom: 10px;
  }
  
  .tile-image {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  
  .tile-text {
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
  }
  
  .close-button {
    width: 100%;
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .close-button:hover {
    background-color: #0056b3;
  }
  </style>
  