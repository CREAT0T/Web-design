<template>
<Form ref="news" :model="news"  :label-width="80">
  <FormItem label="新闻日期" prop="date">
    <Input type="text" v-model="news.date" placeholder="请设置新闻日期" style="width:300px;margin-right: 1300px"></Input>
  </FormItem>
    <FormItem label="新闻标题" prop="title">
      <Input v-model="news.title" placeholder="请输入新闻标题" style="width:500px;margin-right: 1300px"></Input>
    </FormItem>
  <FormItem label="新闻内容" prop="mes">
    <Input type="textarea" v-model="news.mes" placeholder="请输入内容" :rows="15"></Input>
  </FormItem>
  <Button type="primary" @click="submit()">上传</Button>
</Form>
</template>

<script>
    export default {
        name: "news",
        data(){
            return{
                news:{
                    title:'',
                    mes:'',
                    date:''
                }
            }
        },
        methods:{
          submit(){
              let _this=this;
              if(_this.news.date===''||_this.news.mes===''||_this.news.title===''){
                  _this.$Message.warning('请检查是否有漏填');
              }else{
                  var url = "http://localhost:3000";
                  this.axios.post(url + '/addnews', this.news)
                      .then(function (res) {
                          console.log(res);
                          if (res.data === 1) {
                              _this.$Message.success("新闻添加成功");
                              _this.$router.push("/home_news");
                          } else {
                              _this.$Message.error("新闻添加失败");
                          }
                      }).catch(function (error) {
                      console.log(error);
                  });
              }
          }
        },
        created() {
            this.news.date=new Date().toLocaleDateString();
        }
    }
</script>

<style scoped>

</style>
