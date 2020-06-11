<template>
  <div class="container">
    <h>Register Page</h>
    <br><br><br>
  <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
    <FormItem label="用户名" prop="name">
      <Input v-model="formValidate.name" placeholder="请输入用户名" style="width: 300px">
        <Icon type="ios-contact" slot="prepend" />
      </Input>
    </FormItem>
    <FormItem label="昵称" prop="nickname">
      <Input v-model="formValidate.nickname" placeholder="请输入昵称">
        <Icon type="md-person" slot="prepend" />
      </Input>
    </FormItem>
    <FormItem label="邮箱" prop="mail">
      <Input v-model="formValidate.mail" placeholder="请输入您的邮箱">
        <Icon type="md-mail" slot="prepend" />
      </Input>
    </FormItem>
    <FormItem label="地址" prop="address">
      <Input v-model="formValidate.address" placeholder="请输入您的地址">
        <Icon type="ios-compass" slot="prepend" />
      </Input>
    </FormItem>
    <FormItem label="密码" prop="password">
      <Input type="password" v-model="formValidate.password" placeholder="请输入密码">
        <Icon type="md-lock" slot="prepend" />
      </Input>
    </FormItem>
    <FormItem label="确认密码" prop="repassword">
      <Input type="password" v-model="formValidate.repassword" placeholder="请再次确认密码">
        <Icon type="md-unlock" slot="prepend" />
      </Input>
    </FormItem>
    <FormItem label="性别" prop="gender">
      <RadioGroup v-model="formValidate.gender">
        <Radio label="男">男</Radio>
        <Radio label="女">女</Radio>
        <Radio label="保密">保密</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem>
      <Button type="primary" @click="handleSubmit()">提交</Button>
      <Button @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
      <Button  to="/">返回登录界面</Button>
    </FormItem>
  </Form>
  </div>
</template>
<script>
    export default {
        data () {
            var check = (rule, value, callback) => {
                if (value !== this.formValidate.password) {
                    callback(new Error("两次输入密码不一致！"));
                } else {
                    callback();
                }
            };
            return {
                formValidate: {
                    name: '',
                    nickname:'',
                    mail: '',
                    address: '',
                    gender: '',
                    password: '',
                    repassword: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    nickname: [
                        { required: true, message: '昵称不能为空', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
                    ],
                    address: [
                        { required: true, message: '请输入您的地址', trigger: 'blur' }
                    ],
                    gender: [
                        { required: true, message: '请选择您的性别', trigger: 'change' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                        { type:'string', min: 6, message: '密码长度不能小于6', trigger: 'blur'}
                    ],
                    repassword: [
                        { required: true, message: '不能为空', trigger: 'blur' },
                        { validator: check, trigger: "blur" }
                    ]
                }
            }
        },
        methods: {
            handleSubmit () {
                let name = this.formValidate;
                console.log(name);
                if(name.name===''||name.password===''||name.address===''||name.gender===''||name.repassword!==name.password||name.mail===''||name.nickname==='') {
                    alert('请检查是否有信息漏填');
                }else {
                    if(name.name==="admin"){
                        this.$Message.error({
                            content:'用户名admin不可使用',
                            duration: 3
                        });
                    }else {
                        let _this = this;
                        var url = "http://localhost:3000"
                        this.axios.post(url + '/register', this.formValidate)
                            .then(function (res) {
                                console.log(res);
                                if (res.data === 1) {
                                    alert("用户创建成功");
                                    _this.$router.push("/");
                                } else {
                                    alert("用户名已存在");
                                }
                            }).catch(function (error) {
                            console.log(error);
                        });
                    }
                }
            },
            handleReset (name) {
                this.$refs[name].resetFields();
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
  .container{
    width: 100%;
    display: flex;/*设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效*/
    display: -webkit-flex; /* Safari */
    flex-direction: column;/*容器内项目的排列方向(默认横向排列 row)*/
    flex-wrap: nowrap;/*容器内项目换行方式*/
    justify-content: center;/*项目在主轴上的对齐方式*/
    align-items: center;/*项目在交叉轴上如何对齐*/
    align-content: center;/*定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用*/
  }
  html,body{
    height: 100%;
    background-color: #f5f7f9;
  }
  h{
    text-align: center;
    font-size: 50px;
  }
</style>
