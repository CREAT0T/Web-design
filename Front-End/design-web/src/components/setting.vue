<template>
  <div class="container">
    <br><br><br>
    <Form ref="form" :model="form" :rules="ruleValidate" :label-width="80">
      <FormItem label="用户名" prop="name">
        <p class="userName">{{form.name}}</p>
      </FormItem>
      <FormItem label="昵称" prop="nickname">
        <Input v-model="form.nickname" placeholder="请输入新昵称">
          <Icon type="md-person" slot="prepend" />
        </Input>
      </FormItem>
      <FormItem label="邮箱" prop="mail">
        <Input v-model="form.mail" placeholder="请输入您的新邮箱">
          <Icon type="md-mail" slot="prepend" />
        </Input>
      </FormItem>
      <FormItem label="地址" prop="address">
        <Input v-model="form.address" placeholder="请输入您的新地址">
          <Icon type="ios-compass" slot="prepend" />
        </Input>
      </FormItem>
      <FormItem label="原密码" prop="password">
        <Input type="password" v-model="form.password" placeholder="请输入原密码">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem label="新密码" prop="newpassword">
        <Input type="password" v-model="form.newpassword" placeholder="请输入新密码">
          <Icon type="md-lock" slot="prepend" />
        </Input>
      </FormItem>
      <FormItem label="确认新密码" prop="repassword">
        <Input type="password" v-model="form.repassword" placeholder="请再次确认新密码">
          <Icon type="md-unlock" slot="prepend" />
        </Input>
      </FormItem>
      <FormItem label="性别" prop="gender">
        <RadioGroup v-model="form.gender">
          <Radio label="男">男</Radio>
          <Radio label="女">女</Radio>
          <Radio label="保密">保密</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit()">提交</Button>
        <Button @click="handleReset('form')" style="margin-left: 8px">重置</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
    export default {
        data () {
            var check = (rule, value, callback) => {
                if (value !== this.form.newpassword) {
                    callback(new Error("两次输入密码不一致！"));
                } else {
                    callback();
                }
            };
            return {
                form: {
                    name: '',
                    nickname:'',
                    mail: '',
                    address: '',
                    gender: '',
                    newpassword:'',
                    password: '',
                    repassword: ''
                },
                ruleValidate: {
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' },
                    ],
                    mail: [
                        { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
                    ],
                    repassword: [
                        { validator: check, trigger: "blur" }
                    ]
                }
            }
        },
        methods: {
            handleSubmit () {
                let _this = this.form;
                let kthis = this;
                if((_this.password!==JSON.parse(localStorage.getItem('user')).password)||(_this.address===''&&_this.gender===''&&_this.mail===''&&_this.nickname==='')||(_this.repassword!==_this.newpassword)){
                    alert('无修改或密码错误');
                }else {
                    alert('测试');
                    var x=JSON.parse(localStorage.getItem('user'));
                    let fm=this.form;
                    if(fm.nickname!==''){
                        x.nickname=fm.nickname;
                    }
                    if(fm.address!==''){
                        x.address=fm.address;
                    }
                    if(fm.newpassword!==''){
                        x.password=fm.newpassword;
                    }
                    if(fm.gender!==''){
                        x.gender=fm.gender;
                    }
                    if(fm.mail!==''){
                        x.mail=fm.mail;
                    }
                    localStorage.setItem('user',JSON.stringify(x));
                    console.log(x);
                    var url = "http://localhost:3000"
                    this.axios.post(url + '/setting', x)
                        .then(function (res) {
                            console.log(res);
                            if (res.data === 1) {
                                kthis.$Message.success("用户信息修改成功");
                            } else {
                                kthis.$Message.error("用户信息修改失败");
                            }
                        }).catch(function (error) {
                        console.log(error);
                    });
                }
                this.$router.go(0);
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        },
        created() {
            this.form = JSON.parse(localStorage.getItem('user'));
            console.log(localStorage.getItem('user'));
            this.form.password='';
            console.log(this.form);
        }
    }
</script>

<style scoped>
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
  .userName{
    font-size: 25px;
  }
</style>
