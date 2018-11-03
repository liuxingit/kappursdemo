<template>
    <div ref="login">
        <div class="login-container"></div>
    </div>
</template>

<style>
</style>

<script>

    export default {
        created() {
        },
        mounted(){
            this.getUrs();
        },
        data() {
            return {
                urs: null,
            }
        },
        methods: {
            getUrs(){
                let urs = new URS({
                    single: 1,//是否只用注册、登录中一个模块，1是，0否【注】page='login'&single=1,注册按钮为跳转至reg.163.com【注】page='register'&single=1,无登录按钮
                    page: 'login',// 首屏显示登录，可选register
                    isHttps: 1,//组件里的dom和请求都必须使用https
                    product: 'kaola',//产品名
                    promark: 'mjIUkDM',//模块名
                    host: 'm.kaola.com', //组件所在域名
                    includeBox: 'iframe-container', //登录框iframe嵌入的节点id
                    logincb: function(_username,_isOther,_data){// 登录成功回调
                        try{
                            console.log('用户名:'+_username);
                            console.log('是否第三方登录:' + _isOther);
                        }catch(e){}
                        window.refresh(_username,_isOther);
                    }
                })
                this.urs = urs;
            }
        }
    };
</script>


