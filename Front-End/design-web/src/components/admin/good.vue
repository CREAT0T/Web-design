<template>
  <Form ref="g" :model="g"  :label-width="80">
    <FormItem label="商品名称" prop="Gname">
      <Input type="text" v-model="g.Gname" placeholder="请输入商品名称" style="width:300px;margin-right: 1300px"></Input>
    </FormItem>
    <FormItem label="商品价格" prop="price">
      <InputNumber :min="1" v-model="g.price" style="margin-right: 1300px;width: 300px"></InputNumber>
    </FormItem>
    <FormItem label="图片链接" prop="img_url">
      <Input v-model="g.img_url" placeholder="请输入商品图片链接" style="width:500px;margin-right: 1300px"></Input>
    </FormItem>
    <FormItem label="商品详情" prop="mes">
      <Input type="textarea" v-model="g.mes" placeholder="请输入商品详细内容" :rows="10"></Input>
    </FormItem>
    <Button type="primary" @click="submit()">上架</Button>
  </Form>
</template>

<script>
    export default {
        name: "news",
        data(){
            return{
                g:{
                    Gname:'',
                    img_url:'',
                    price:'',
                    number: '',
                    mes:''
                }
            }
        },
        methods:{
            submit(){
                let _this=this;
                if(_this.g.price<1){
                    _this.$Message.warning('价格不能低于1');
                }else if(_this.g.Gname===''||_this.g.mes===''||_this.g.price===''||_this.g.img_url===''){
                    _this.$Message.warning('请检查是否有漏填');
                }else{
                    var url = "http://localhost:3000";
                    this.axios.post(url + '/addgood', _this.g)
                        .then(function (res) {
                            console.log(res);
                            if (res.data === 1) {
                                _this.$Message.success("商品上架成功");
                                _this.$router.push("/home_shop");
                            } else {
                                _this.$Message.error("商品添加失败");
                            }
                        }).catch(function (error) {
                        console.log(error);
                    });
                }
            }
        },
        created() {
            this.g.number=1;
        }
    }
</script>

<style scoped>

</style>
