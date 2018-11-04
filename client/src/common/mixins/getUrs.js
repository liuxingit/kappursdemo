import * as api from '@/api';
export default {
    methods: {
        async beforeCreate() {
            console.log('beforeCreate', this.$route);
            const res = await api.user.getUserInfo();
            //console.log(res,'---')
            let user = '';
            if (res.code === 401) {
                user = await api.user.login();
            } else {
                user = res.data;
            }
    
            this.$store.dispatch(
                'user/login',
                user
            );
            this.loading = true;
        }
    }
};