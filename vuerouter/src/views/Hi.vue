<template>
    <div>
        <h2>{{ msg }}</h2>
        <router-view></router-view>
        <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
        <router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
    </div>
</template>

<script>
    export default {
        name: "Hi",
        data(){
          return{
            msg:'Hi,I am Lj'
          }
        }
    }
</script>

<style scoped>

</style>
