<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: fixed;
    border-radius: 4px;
    top: 0;
    width: 100%;
    height:100%;
    overflow:auto;
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
        <Button type="primary" @click="mag()" class="bu" size="large">商品管理</Button>
        <shop></shop>
      </Content>
      <Footer class="layout-footer-center">2020 &copy; CREAT_T</Footer>
    </Layout>
  </div>
</template>
<script>
    export default {
        methods:{
            dele(){
                this.$Message.success('注销成功');
                localStorage.removeItem('user');
                localStorage.removeItem('list');
                localStorage.removeItem('goods');
                this.$router.push('/');
            },
            mag(){
                if(JSON.parse(localStorage.getItem('user')).name==="admin"){
                    this.$router.push('/m_good');
                }else{
                    this.$Message.error('您未拥有管理员权限');
                }
            }
        },
        created() {
            localStorage.removeItem('list');
            if(localStorage.getItem('user')===null){
                this.$router.push('/');
            }
        }
    }
</script>

<style>
  .bu{
    margin-left: 1350px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>
