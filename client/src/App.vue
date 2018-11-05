<template>
  <div id="app" v-if="loading">
    <router-view/>
  </div>
</template>

<script>
//import * as api from '@/api';

export default {
    name: 'App',
    data() {
        return {
            loading: false
        };
    },
    async beforeCreate() {
        // const res = await api.user.getUserInfo();
        // console.log(res, '---APP.vue res');
        // let user = '';
        // if(!res){
        //     return false;
        // }
        // if(res.code === 200){
        //     user = res.data;
        //     this.$store.dispatch(
        //         'user/login',
        //         user || {}
        //     );
        //     this.loading = true;
        //     //} else {
        //     //window.location.href = res.data.target;
        // }
        // if (res.code === 401) {
        //   user = await api.user.login();
        // } else {
        //   user = res.data;
        // }

        // this.$store.dispatch(
        //     'user/login',
        //     user || {}
        // );
        // this.loading = true;
    },
    created() {
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100%;
}
</style>
