<template>
  <div id="nav">
    <router-view/>
  </div>

</template>
<script setup lang="ts">
import { ElMessageBox, ElMessage } from 'element-plus'
const winWidth = window.innerWidth;
if(winWidth < 700){
  ElMessageBox.alert('in honest ,i really hope you can use PC to open this, because i only made simple MOBILE compatible', 'tip', {
      confirmButtonText: 'OK',
      callback: () => {
        ElMessage({
          type: 'info',
          center:true,
          message: `welcomt to here`,
        })
      },
    })
}
import { inject } from 'vue'
/* 
const userLocation:any = inject('show')
userLocation()
console.log(userLocation) */
</script>
<style>
.el-message-box{
  width: 90%!important;
}
html{
  font-size:16px;
}
*{
  padding: 0;
  margin: 0;
}

</style>
