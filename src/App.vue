<template>
  <div id="nav">
    <router-view/>
  </div>

</template>

<style>
*{
  padding: 0;
  margin: 0;
}
::-webkit-scrollbar {
width:12px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
-webkit-box-shadow:inset006pxrgba(0,0,0,0.3);
border-radius:10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
border-radius:10px;
background:rgba(219, 216, 216, 0.1);
-webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
background:rgba(255,0,0,0.4);
}
</style>
