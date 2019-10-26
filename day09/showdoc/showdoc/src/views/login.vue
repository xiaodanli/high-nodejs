<template>
    <div>
        <!-- v-bind -->
        <input type="text" v-model="form.username">  
        <input type="text" v-model="form.password">
        <button @click="login">登录</button>
        {{form.username}} {{form.password}}
    </div>
</template>
<script>
import getParams from '../util/getParams'
import request from '../util/request'
export default {
    data(){
        return {
            form:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        ipt(e){
            this.form.username = e.target.value;
        },
        login(){
            let csrf = getParams('csrfToken');
            request.post('/api/user/login',{...this.form}).then(res => {
                console.log(res)
                if(res.data.code === 1){
                    this.$router.replace('/')
                }else{
                    alert(res.data.message)
                }
            })
        }
    }
}
</script>
