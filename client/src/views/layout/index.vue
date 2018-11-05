<template>
    <div>
        <h1>index page</h1>
        <h2>用户：{{account}}</h2>
        <button @click="getUser">ajax getUser</button>
        <!-- <h3>{{ systemTime }}</h3> -->
        <!-- <div>
            <router-link to="/demo/page/2"> to Demo page</router-link>
        </div> -->
    </div>
</template>

<style>
</style>

<script>
    import * as api from '@/api';
    import { mapState } from 'vuex';

    export default {
        computed: mapState({
            account: state => state.user.user.account
        }),
        created() {
        },
        data() {
            return {
            };
        },
        methods: {
            async getUser(){
                const res = await api.user.getUserInfo();
                console.log(res, '---layout/index.vue res');
                let user = '';
                if(!res){
                    return false;
                }
                if(res.code === 200){
                    user = res.data;
                    this.$store.dispatch(
                        'user/login',
                        user || {}
                    );
                }
            }
        }
    };
</script>

