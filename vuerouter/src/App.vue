<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <div>
        <button @click="goBack">后退</button>
        <button @click="goGo">前进</button>
        <button @click="goHome">返回首页</button>
      </div>
      <router-link to="/">首页</router-link> |
      <router-link to="/Hi">Hi页面</router-link> |
      <router-link :to="{name:'hi1',params:{username:'lj',id:'888'}}">Hi页面1</router-link> |
      <router-link to="/Hi/hi2">Hi页面2</router-link> |
      <router-link to="/params/786/taiji website is very good">params</router-link> |
      <router-link to="/goHome">goHome</router-link> |
      <router-link to="/goParams/918/I like vue.js">goParams</router-link> |
      <router-link to="/hi1">Hi1</router-link> |
      <router-link to="/lj">alias lj</router-link> |
      <router-link to="/404">我是瞎写的</router-link> |
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
    export default {
        name: 'App',
        methods:{
            goBack(){
                this.$router.go(-1);
            },
            goGo(){
                this.$router.go(1);
            },
            goHome(){
                this.$router.push('/');
            }

        }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .fade-enter{
    opacity:0;
  }
  .fade-enter-active{
    transition: opacity 0.5s;
  }
  .fade-leave{
    opacity: 1;
  }
  .fade-leave-active{
    opacity: 0;
    transition: opacity 0.5s;
  }
</style>
