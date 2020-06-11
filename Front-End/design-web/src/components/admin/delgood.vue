<template>
  <div>
    <Row >
      <Col v-for="it in goods" key="it.name" span="6" style="margin: 20px 20px">
        <Card dis-hover>
          <p slot="title">{{it.Gname}}</p>
          <img :src="it.img_url" height="250" width="250"/><br>
          <p>￥{{it.price}}</p>
          <Button type="primary" style="margin-right: 5px" @click="show(it)">查看详情</Button>
          <Button type="error" @click="del(it)">下架</Button>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
    export default {
        name: "shop",
        data(){
            return{
                goods:[]
            }
        },
        methods:{
            show (index) {
                this.$Modal.info({
                    title: index.Gname,
                    content: index.mes
                })
            },
            del(index){
                let _this=this;
                var url = "http://localhost:3000";
                this.axios.post(url+'/delgood',index)
                    .then(function (res){
                        console.log(res);
                        _this.$Message.success('删除成功');
                    }).catch(function (error) {
                    console.log(error);
                });
                _this.$router.go(0);
            }
        },
        created(){
            let _this=this;
            var url = "http://localhost:3000";
            this.axios.get(url+'/shop')
                .then(function (res){
                    console.log(res);
                    _this.goods=res.data;
                }).catch(function (error) {
                console.log(error);
            });
        }
    }
</script>

<style>

</style>
