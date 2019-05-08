<template>
  <div style="float: left">
    <el-table :data="tableData">
      <el-table-column prop="date" label="名称" width="130" align="center"></el-table-column>
      <el-table-column prop="name" label="服务类型" width="130" align="center"></el-table-column>
      <el-table-column prop="province" label="服务时间" width="130" align="center"></el-table-column>
      <el-table-column prop="city" label="适用规格" width="130" align="center"></el-table-column>
      <el-table-column prop="address" label="服务规格" width="130" align="center"></el-table-column>
      <el-table-column prop="zip" label="耗时" width="130" align="center"></el-table-column>
      <el-table-column prop="zip" label="服务员等级" width="130" align="center"></el-table-column>
      <el-table-column prop="zip" label="价格" width="130" align="center"></el-table-column>
      <el-table-column fixed="right" label="操作" width="130" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small" @click="open()">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000"
      style="display: flex;justify-content: center;margin-top: 50px"
    ></el-pagination>
  </div>
</template>

<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 480px;
}
</style>
<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    },
    open() {
      const h = this.$createElement;
      this.$msgbox({
        dangerouslyUseHTMLString: true,
        title: "修改信息",
        message: `nihao`,
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        }
      }).then(action => {
        this.$message({
          type: "info",
          message: "action: " + action
        });
      });
    }
  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ]
    };
  }
};
</script>