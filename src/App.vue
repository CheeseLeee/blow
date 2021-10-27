<template>
  <div id="nav">
    <router-view/>
  </div>

</template>

<style>
html{
  font-size:16px;
}
*{
  padding: 0;
  margin: 0;
}
::-webkit-scrollbar {
width:12px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {

border-radius:10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
border-radius:10px;
background:rgba(219, 216, 216, 0.1);

}
::-webkit-scrollbar-thumb:window-inactive {
background:rgba(255,0,0,0.4);
}
</style>
