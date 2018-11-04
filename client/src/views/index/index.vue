<template>
    <div>
        <h2>用户：{{name}}</h2>
        <!-- <h3>{{ systemTime }}</h3> -->
        <!-- <div>
            <router-link to="/demo/page/2"> to Demo page</router-link>
        </div> -->
    </div>
</template>

<style>
</style>

<script>
    import { mapState } from 'vuex';

    export default {
        computed: mapState({
            name: state => state.user.user.name
        }),
        created() {
        },
        data() {
            return {
            };
        },
        methods: {
        }
    };
</script>
