<template>
<div>
  <Row >
    <Col v-for="it in goods" key="it.name" span="6" style="margin: 20px 20px">
      <Card dis-hover>
        <p slot="title">{{it.Gname}}</p>
        <img :src="it.img_url" height="250" width="250"/><br>
        <p>￥{{it.price}}</p>
        <Button type="primary" style="margin-right: 5px" @click="show(it)">查看详情</Button>
        <Button type="primary" @click="buy(it)">购买</Button>
        <Button type="primary" @click="add(it)">加入购物车</Button>
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
          add(obj){
              obj.number=1;
              let flag=1;
              if(localStorage.getItem('goods')!==null){
                  let good = JSON.parse(localStorage.getItem('goods'));
                  localStorage.removeItem('goods');
                  for(let i = 0; i < good.length; i++){
                      if(good[i].Gname===obj.Gname&&good[i].img_url===obj.img_url){
                          flag=0;
                          break;
                      }
                  }
                  if(flag===1) {
                      good.push(obj);
                      this.$Message.success('该商品成功添加至购物车');
                  }else{
                      this.$Message.info('您已添加过本商品，请至购物车区域更改数量');
                  }
                  localStorage.setItem('goods', JSON.stringify(good));
              }else {
                  let good = new Array();
                  good.push(obj);
                  localStorage.setItem('goods', JSON.stringify(good));
                  this.$Message.success('该商品成功添加至购物车');
              }
          },
          show (index) {
                this.$Modal.info({
                    title: index.Gname,
                    content:index.mes,
                    width: 50,
                    scrollable:true,
                    closable:true
                });
          },
            buy(index){
              index.number=1;
              let x = new Array();
              x.push(index);
              localStorage.setItem('list',JSON.stringify(x));
              this.$router.push('/buy');
            }
        },
        beforeCreate(){
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
body{
  word-break:break-all;
}
</style>
