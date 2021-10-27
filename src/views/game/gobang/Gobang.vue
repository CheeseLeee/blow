<template>
    <div class="square">
        <p>comming soon</p>
        <div class="square-box">
            <div class="square-line" v-for="item in 15" :key="item">
                <div class="square-row" v-for="item in 15" :key="item"></div>
            </div>
        </div>

        
    </div>
</template>

<script setup lang="ts">
    
</script>

<style scoped>
.square-box{
    display: flex;
}
.square{
    margin: 0 auto;
    width: 300px;
    height: 300px;
}
.square-row{
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border: gray 1px solid;
}
.square-line{

}
</style>