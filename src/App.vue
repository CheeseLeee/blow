<template>
  <div id="nav">
    <router-view/>
  </div>

</template>
<script setup lang="ts">
import { inject } from 'vue'
/* 
const userLocation:any = inject('show')
userLocation()
console.log(userLocation) */
</script>
<style>
html{
  font-size:16px;
}
*{
  padding: 0;
  margin: 0;
}

</style>
