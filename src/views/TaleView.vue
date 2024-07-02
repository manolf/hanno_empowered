<template>
  <div class="tale">
    <h1>Hannos Geschichte</h1>
    <TaleComponent></TaleComponent>
    
  </div>
</template>

<script>
// @ is an alias to /src
import TaleComponent from '@/components/TaleComponent.vue'


export default {
  name: 'TaleView',
  components: {
    TaleComponent

  }
}
</script>
