<template>
  <div class="calendar">
    <h1>Kalender</h1>
    <CalendarComponent></CalendarComponent>
    
  </div>
</template>

<script>
// @ is an alias to /src
import CalendarComponent from '@/components/CalendarComponent.vue';


export default {
  name: 'CalendarView',
  components: {
    CalendarComponent
  }

}
</script>
