<template>
  <div class="loginin">
    <h>Login Page</h>
    <br><br><br><br><br><br><br><br><br>
    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
      <FormItem prop="user">
        <Input type="text" v-model="formInline.user" placeholder="Username">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" v-model="formInline.password" placeholder="Password">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit()">登录</Button>
        <router-link to="/register">
         <Button>注册</Button>
        </router-link>
      </FormItem>
    </Form>
  </div>
</template>
<script>
    export default {
        name:'login',
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                ruleInline: {
                    user: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能低于6', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit() {
                let login=this;
                if(this.formInline.user===''||this.formInline.password===''){
                      alert('用户名或密码不能为空');
                }else {
                    var url = "http://localhost:3000"
                    this.axios.post(url + '/test', this.formInline)
                        .then(function (res) {
                            console.log(res);
                            if(res.data===0){
                                login.$Message.error('用户名不存在');
                           }else {
                                let temp=JSON.stringify(res.data);
                                localStorage.setItem("user",temp);
                                if(res.data.name==='admin') {
                                    login.$Message.success('欢迎登录，管理员');
                                }else{
                                    login.$Message.success('登录成功');
                                }
                                let c=new Array();
                                localStorage.setItem('goods',JSON.stringify(c));
                                login.$router.push("/home_shop");
                            }
                        }).catch(function (error) {
                        console.log(error);
                    });
                }
            }
        },
        beforeCreate() {
            if(localStorage.getItem('user')!==null){
                this.$router.push('/home_shop');
            }
        }
    }
</script>

<style>
  .loginin{
    margin-top: 100px;
  }
  h{
    text-align: center;
    font-size: 50px;
  }
  html,body{
    height: 100%;
    background-color: #f5f7f9;
  }
</style>
