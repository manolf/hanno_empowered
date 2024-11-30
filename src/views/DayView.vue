<template>
  <HeaderComponent></HeaderComponent>
    <div class="calendar">
      <h1>TagView</h1>
      <p>Here is the content for day {{ id }}.</p>
      <DayComponent :id="id"></DayComponent>
      
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import DayComponent from '@/components/DayComponent.vue';
  import HeaderComponent from '@/components/HeaderComponent.vue';
  
  
  export default {
    name: 'DayView',
    props: {
            id: {
                type: Number, // or Number if you know `id` is numeric
                required: true,
            },
        },
    components: {
      HeaderComponent,
      DayComponent
    }
  
  }
  </script>
  