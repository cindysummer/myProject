<template>
  <div style="display: flex;justify-content: center">
    <el-form ref="form" :model="form" label-width="90px" style="float: left;margin-left: 20px">
      <el-form-item label="名称:" style="margin-top: 30px">
        <el-input v-model="form.serviceName" style="width: 500px"></el-input>
      </el-form-item>
      <el-form-item label="服务类型:">
        <el-input style="width: 500px" v-model="form.serviceType"></el-input>
      </el-form-item>
      <div>
        <el-form-item label="服务时间:" style="width: 800px">
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="form.serviceSchedule" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
      </div>
      <el-form-item label="适用规格:">
        <el-checkbox-group>
          <el-radio-group v-model="form.serviceCanFor">
            <el-radio label="大型宠物"></el-radio>
            <el-radio label="中型宠物"></el-radio>
            <el-radio label="小型宠物"></el-radio>
          </el-radio-group>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="服务规格:">
        <el-radio-group v-model="form.serviceDetial">
          <el-radio label="高级"></el-radio>
          <el-radio label="中级"></el-radio>
          <el-radio label="普通"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="耗时:">
        <el-input v-model="form.serviceTime" style="width: 500px" placeholder="例如：20分钟"></el-input>
      </el-form-item>
      <el-form-item label="服务员等级:">
        <el-radio-group v-model="form.serviceLevel">
          <el-radio label="高级"></el-radio>
          <el-radio label="中级"></el-radio>
          <el-radio label="普通"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="价格:">
        <el-input v-model="form.servicePrice" style="width: 500px" placeholder="基准价格，会员价和活动价都以它为基准"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleClick">确定</el-button>
        <el-button >取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions, mapMutations } = createNamespacedHelpers(
  "service"
);
export default {
  name: "addService",
  computed: {
    ...mapState(["form"])
  },
  methods: {
    ...mapActions(["addServiceAsync"]),
    handleClick() {
      this.form.servicePrice = ~~this.form.servicePrice;
      this.addServiceAsync(this.form);
    },
    reset(){

    }
  },
  mounted() {
    // 该生命周期发生时，页面所有节点都已经加载完毕，此时需要向后台获取数据
    // this.getMessageAsync();
  }
};
</script>