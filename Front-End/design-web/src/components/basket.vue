<template>
  <div>
  <Table border :columns="columns12" :data="data1">
    <template slot-scope="{ row, index }" slot="action">
      <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
      <Button type="error" size="small" @click="remove(index)">删除</Button>
    </template>
  </Table>
    <p class="t">Total : ￥{{this.total}}</p>
    <Button type="success" @click="buy()" class="bk">提交订单</Button>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                total:0,
                columns12: [
                    {
                        title: '商品名',
                        key: 'Gname'
                    },
                    {
                        title: '图片',
                        key: 'img_url',
                        render: (h, params) => {
                            return h('div', [
                                h('img', {
                                    attrs: {
                                        src: params.row.img_url,
                                        style:'width: 100px;height: 100px;'
                                    }
                                }),
                            ]);
                        }
                    },
                    {
                        title: '价格',
                        key: 'price'
                    },
                    {
                        title: '数量',
                        key: 'number',
                        render: (h, params) => {
                            let _this=this;
                            return h('div',[
                                h('InputNumber', {
                                    props:{
                                        value: _this.data1[params.row._index].number
                                    },
                                    on:{
                                        input:function (event){
                                            if(event > 0) {
                                                params.row.number = event;
                                                _this.total-=_this.data1[params.row._index].price;
                                                _this.data1[params.row._index].price = _this.data1[params.row._index].price / _this.data1[params.row._index].number;
                                                _this.data1[params.row._index].number = params.row.number;
                                                _this.data1[params.row._index].price = _this.data1[params.row._index].price * _this.data1[params.row._index].number;
                                                _this.total+=_this.data1[params.row._index].price;
                                                localStorage.setItem('goods', JSON.stringify(_this.data1));
                                            }else{
                                                _this.$Message.error('数值不能小于1');
                                                _this.$router.go(0);
                                            }
                                        }
                                    },
                                })
                            ]);
                        }
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 150,
                        align: 'center'
                    }
                ],
                data1: []
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: '商品信息',
                    content: this.data1[index].mes
                })
            },
            remove (index) {
                this.$Message.success('商品删除成功');
                this.data1.splice(index, 1);
                localStorage.setItem('goods',JSON.stringify(this.data1));
            },
            buy(){
                if(this.data1===null||this.data1.length===0){
                    this.$Message.error('无购买内容');
                }else {
                    localStorage.setItem('list', JSON.stringify(this.data1));
                    this.$router.push('/buy');
                }
            }
        },
        created() {
            this.data1=JSON.parse(localStorage.getItem('goods'));
            for(let i = 0; i < this.data1.length; i++){
                this.total+=this.data1[i].price;
            }
        }
    }
</script>

<style>
  .bk{
    margin-top: 10px;
  }
  .t{
    margin-left: 1100px;
    font-size: 20px;
  }
</style>
