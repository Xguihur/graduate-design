/** 组件 说明: props： searchForm --
父组件传递过来的对象，里面包含搜索组件中用到的所有数据 */

<template>
  <div class="my-search">
    <div class="line">
      <div class="search-box">
        <div style="width: 60px">编号：</div>
        <el-input placeholder="请输入编号" v-model="searchForm.id"></el-input>
      </div>

      <div class="search-box">
        <div style="width: 90px">审批状态：</div>
        <el-select
          v-model="searchForm.status"
          clearable
          placeholder="请选择"
          style="margin-right: 10px"
        >
          <el-option
            v-for="item in status"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>

      <div class="search-box">
        <div style="width: 120px">审核人ID：</div>
        <el-input
          placeholder="请输入发起人ID："
          v-model="searchForm.approvalId"
        ></el-input>
      </div>

      <div class="search-box">
        <el-button type="primary" @click="search" style="width: 80px"
          >查询</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySearch",
  props: {
    searchForm: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      status: [
        {
          value: "1",
          label: "审批中",
        },
        {
          value: "2",
          label: "已通过",
        },
        {
          value: "3",
          label: "已驳回",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    // 搜索
    search() {
      // 向父组件导出emit， 把 this.searchForm 作为参数传过去。其实不传也可以的，父组件的 searchForm 属性是直接被修改的
      this.$emit("search", this.searchForm);
    },
  },
};
</script>

<style lang="less" scoped>
.my-search {
  margin-bottom: 10px;

  .line {
    display: flex;
    align-items: center;
    .search-box {
      display: flex;
      align-items: center;
      margin-right: 20px;
      margin-bottom: 20px;

      .box-title {
        width: 80px;
        margin-right: 10px;
      }
    }
  }
}
</style>
