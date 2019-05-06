<template>
 <el-menu
  class="el-menu-demo"
  mode="horizontal"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-submenu index="1">
    <template slot="title">待办事项</template>
    <el-menu-item index="1-1">待审核门店管理员</el-menu-item>
    <el-menu-item index="1-2">待审核门店</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
    <template slot="title">用户管理</template>
    <el-menu-item index="2-1">门店管理员信息</el-menu-item>
    <el-menu-item index="2-2">宠主信息</el-menu-item>
  </el-submenu>
</el-menu>
</template>
<style>
  *{
    margin:0;
    padding:0;
  }
</style>