<template>
  <div>
    <el-menu router class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">商品管理</template>
        <el-menu-item index="1-1">新增商品</el-menu-item>
        <el-menu-item index="1-2">商品列表</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">服务管理</template>
        <el-menu-item index="2-1">新增服务</el-menu-item>
        <el-menu-item index="2-2">服务列表</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">宠物管理</template>
        <el-menu-item index="3-1">新增宠物</el-menu-item>
        <el-menu-item index="3-2">宠物列表</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">门店管理</template>
        <el-menu-item index="/shopSystem/addShop">新增门店</el-menu-item>
        <el-menu-item index="4-2">门店列表</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view></router-view>
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
</style>