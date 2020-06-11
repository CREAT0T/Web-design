<template>
  <Table border :columns="columns1" :data="data">
    <template slot-scope="{ row, index }" slot="action">
      <Button type="primary" size="large" style="margin-right: 5px" @click="show(index)">查看</Button>
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
                        title: '详情',
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
                    content: this.data[index].mes,
                    width: 50,
                    scrollable:true,
                    closable:true
                })
            }
        },
        beforeCreate(){
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
