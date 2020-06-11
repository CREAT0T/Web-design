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
        <Button type="primary" to="/home_shop" class="bt">返回</Button>
        <img src="../img/111.jpg"/>
        <p class="lk">Total:￥{{this.total}}</p>
        <Button type="primary" to="/listPage">查看订单</Button>
      </Content>
      <Footer class="layout-footer-center">2020 &copy; CREAT_T</Footer>
    </Layout>
  </div>
</template>
<script>
    export default {
        data(){
          return {
              totol:''
          }
        },
        methods:{
            dele(){
                localStorage.removeItem('user');
                this.$router.push('/');
            }
        },
        created() {
            if(localStorage.getItem('list')===null){
                this.$router.push('/home_shop');
            }else{
                var x=0;
                let obj=JSON.parse(localStorage.getItem('list'));
                for(let i = 0; i < obj.length; i++){
                    x+=obj[i].price;
                }
                this.total=x;
            }
        }
    }
</script>

<style>
  img{
    margin-top: 50px;
    width: 300px;
    height: 300px;
  }
  .lk{
    font-size: 20px;
  }
  .bt{
    margin-top: 10px;
    margin-left: 1300px;
  }
</style>
