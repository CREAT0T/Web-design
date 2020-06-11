<template>
  <Table border :columns="columns1" :data="data">
    <template slot-scope="{ row, index }" slot="action">
      <Button type="primary" size="large" style="margin-right: 5px" @click="show(index)">查看</Button>
      <Button type="error" size="large" @click="remove(index)">删除</Button>
    </template>
  </Table>
</template>
<script>
    export default {
        data () {
            return {
                columns1: [
                    {
                        title: '标题',
                        key: 'title'
                    },
                    {
                        title: '日期',
                        key: 'date'
                    },
                    {
                        title: '操作',
                        slot: 'action',
                        width: 250,
                        align: 'center'
                    }
                ],
                data: []
            }
        },
        methods: {
            show (index) {
                this.$Modal.info({
                    title: this.data[index].title,
                    content: this.data[index].mes
                })
            },
            remove(index){
                let _this=this;
                var url = "http://localhost:3000";
                console.log('1651919');
                console.log(this.data[index]);
                console.log('1649891');
                this.axios.post(url+'/delnews',this.data[index])
                    .then(function (res){
                        console.log(res);
                        _this.$Message.success('删除成功');
                    }).catch(function (error) {
                    console.log(error);
                });
                this.data.splice(index, 1);
            }
        },
        created(){
            let _this=this;
            var url = "http://localhost:3000";
            this.axios.get(url+'/news')
                .then(function (res){
                    console.log(res);
                    _this.data=res.data;
                }).catch(function (error) {
                console.log(error);
            });
        }
    }
</script>
