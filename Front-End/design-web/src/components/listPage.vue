<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: fixed;
    border-radius: 4px;
    overflow: hidden;
    top: 0;
    width: 100%;
  }
  .layout-logo{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 0px;
    left: 20px;
    color: #f5f7f9;
  }
  .layout-nav{
    width: 600px;
    margin: 0 auto;
    margin-right: 20px;
  }
  .layout-footer-center{
    text-align: center;
  }
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">奇怪的购物商城</div>
          <div class="layout-nav">
            <MenuItem name="1" to="/home_shop">
              <Icon type="ios-navigate"></Icon>
              购物商城
            </MenuItem>
            <MenuItem name="2" to="/home_news">
              <Icon type="ios-keypad"></Icon>
              新闻中心
            </MenuItem>
            <MenuItem name="3" to="/home_setting">
              <Icon type="ios-analytics"></Icon>
              个人设置
            </MenuItem>
            <MenuItem name="4" to="/home_basket">
              <Icon type="ios-analytics"></Icon>
              购物车
            </MenuItem>
            <MenuItem name="5" @click.native="dele">
              <Icon type="ios-analytics"></Icon>
              注销
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Button type="primary" to="/buy" style="margin-left: 1375px;margin-top: 10px;margin-bottom: 10px">返回</Button>
        <Table border :columns="columns12" :data="data1">
          <template slot-scope="{ row, index }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="show(index)">查看</Button>
          </template>
        </Table>
      </Content>
      <Footer class="layout-footer-center">2020 &copy; CREAT_T</Footer>
    </Layout>
  </div>
</template>
<script>
    export default {
        data () {
            return {
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
                        key: 'number'
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
            dele(){
                this.$Message.success('注销成功');
                localStorage.removeItem('user');
                localStorage.removeItem('list');
                this.$router.push('/');
            }
        },
        beforeCreate(){
          if(localStorage.getItem('user')===null){
              this.$router.push('/');
          }
        },
        created() {
            if(localStorage.getItem('list')===null){
                this.$router.push('/home_shop');
            }else {
                this.data1=JSON.parse(localStorage.getItem('list'));
            }
        }
    }
</script>
