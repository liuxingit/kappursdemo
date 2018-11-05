<template>
    <div ref="login">
        <h1>登录框</h1>
        
        <el-row :gutter="20">
        <el-col :span="12">
            <div class="grid-content bg-purple">
                <div id="login_container"></div>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <h1>测试模块</h1>
                <dl>
                    <dt>图片验证码测试参数：（测试完成换回产品自己的值）</dt>
                    <dd>product=urs</dd>
                    <dd>promark=OOoXihK</dd>
                    <dd>host=reg.163.com</dd>
                </dl>
                <dl>
                    <dt>滑块验证码测试参数： （测试完成换回产品自己的值）</dt>
                    <dd>product=urs</dd>
                    <dd>promark=RFYwJDP</dd>
                    <dd>host=reg.163.com</dd>
                    <dd>productKey=bcaddd8933a501880ebef6b951fe8f8a</dd>
                </dl>
                <dl>
                    <dt></dt>
                    <dd>product=urs</dd>
                    <dd>promark=miGqjgG</dd>
                    <dd>host=reg.163.com</dd>
                    <dd>productKey=527eb1c9107568116694096a35d4855b</dd>
                </dl>
            </div>
        </el-col>
        <el-col :span="6">
            <div class="grid-content bg-purple">
                <h1>测试账号</h1>
                <p>urstest_qa001@163.com 普通163账号</p>
                <p>urstest_unifyweb@qq.com 普通外域账号</p>
                <p>urstest_xx@sina.com 未激活的外域帐号</p>
                <p>qa1234</p>
            </div>
        </el-col>
        </el-row>
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
                urs: null
            };
        },
        methods: {
            getUrs(){
                console.log('开始 new一个 URS 实例');
                let urs = new URS({
                    single: 0, //是否只用注册、登录中一个模块，1是，0否【注】page='login'&single=1,注册按钮为跳转至reg.163.com【注】page='register'&single=1,无登录按钮
                    page: 'login', // 首屏显示登录，可选register
                    isHttps: 0,
                    // product: 'urs',//产品名
                    // promark: 'OOoXihK',//模块名
                    // host: 'reg.163.com', //组件所在域名
                    product: 'urs', //'kaola',
                    promark: 'OOoXihK', //'mjIUkDM',
                    host: 'reg.163.com', //'m.kaola.com',
                    includeBox: 'login_container', //登录框iframe嵌入的节点id
                    // cssDomain: option.cssDomain, //定制修改urs组件样式的css文件所在域名
                    // cssFiles: 'src/css/pages/urs.css?v=004',//文件名记得改清缓存
                    placeholder: {
                        account: '网易邮箱账号',
                        pwd: '密码'
                    },
                    logincb(_username, _isOther, _data){// 登录成功回调
                        try{
                            console.log(_data, '_data');
                            console.log(`用户名:${_username}`);
                            console.log(`是否第三方登录:${_isOther}`);
                            let search = window.location.search;
                            let url = search && search.indexOf('?target=') > -1 ? search.substring(8) : '/';
                            console.log(decodeURIComponent(url), '--url');
                            window.location.href = decodeURIComponent(url);
                        }catch(e){
                            console.log(e, '---e');
                        }
                    //window.refresh(_username,_isOther);
                    },
                    // regcb:function(username){ // 注册成功回调
                    //     console.log(username);
                    // }
                    // crossDomainUrl: 'passport.kaola.com/webzj/out/pub/',
                    cookieDomain: 'kaola.com' //需要插入cookie的域，默认.163.com
                    // regCookieDomain: 'kaola.com',//需要插入cookie的域（注册模块）
                    // domains: 'kaola.com.hk',
                });
                this.urs = urs;
            }
        }
    };
</script>


