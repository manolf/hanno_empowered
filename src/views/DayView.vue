<template>
  <HeaderComponent></HeaderComponent>
    <div class="calendar">
      <h1>TagView</h1>
      <DayComponent></DayComponent>
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import DayComponent from '@/components/DayComponent.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  
  
  export default {
    name: 'DayView',
    components: {
      HeaderComponent,
      DayComponent
    }
  
  }
  </script>
  