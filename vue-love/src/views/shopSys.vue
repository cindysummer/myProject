<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <div class="logo">
            <img src="../assets/logo1.png" alt="" />
            <span>爱宠帮</span>
          </div>
          <h2>门店管理系统</h2>
          <ul>
            <li>
              <a href="javascript:;" title="欢迎您">
                <i class="el-icon-s-custom"></i>
                <span>用户名</span>
              </a>
            </li>
            <li style="margin-left:20px">
              <a href="javascript:;" title="退出登录">
                <i class="el-icon-switch-button"></i>
              </a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
    <el-row class="tac">
      <el-col :span="4">
        <el-menu router class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-goods"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/shopSystem/addGoods">新增商品</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/shopSystem/goodsList">商品列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-coffee-cup"></i>
              <span>服务管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/shopSystem/addService">新增服务</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/shopSystem/serviceList">服务列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-chicken"></i>
              <span>宠物管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/shopSystem/addPets">新增宠物</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/shopSystem/petsList">宠物列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>门店管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/shopSystem/addShop">新增门店</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="/shopSystem/shopList">门店列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
      <router-view></router-view>
    </el-row>
  </div>

</template>
<script>
  export default {
    name: "shopSystem",
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  .grid-content {
    height: 100px;
    padding: 0 20px;
    font-family: "Helvetica Neue";
    background: rgb(84, 92, 100);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    width: 111px;
    height: 60px;
    display: flex;
  }

  .logo>img {
    width: 100%;
    margin-right: 5px;
  }

  .logo>span {
    color: #fff;
    font-size: 16px;
  }

  .grid-content h2 {
    color: #fff;
  }

  .grid-content ul {
    display: flex;
  }

  .grid-content li {
    list-style: none;
  }

  .grid-content a {
    text-decoration: none;
    color: #fff;
  }

  .grid-content a i {
    font-size: 22px;
  }

  .grid-content a:hover {
    color: #fdcb32;
  }
  .el-menu-vertical-demo{
    height: 550px;
  }
</style>