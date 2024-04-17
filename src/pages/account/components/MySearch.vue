/** 组件 说明: props： searchForm --
父组件传递过来的对象，里面包含搜索组件中用到的所有数据 */

<template>
  <div class="my-search">
    <div class="line">
      <div class="search-box">
        <el-select
          v-model="searchForm.category"
          style="margin-right: 10px; width: 120px"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <el-input
          placeholder="请输入"
          v-model="searchForm.categoryValue"
        ></el-input>
      </div>

      <div class="search-box">
        <div style="width: 80px">用户角色：</div>
        <el-select
          v-model="searchForm.role"
          clearable
          style="margin-right: 10px; width: 120px"
        >
          <el-option
            v-for="item in rolse"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
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
      options: [
        {
          value: "1",
          label: "ID",
        },
        {
          value: "2",
          label: "姓名",
        },
      ],
      rolse: [
        {
          value: "1",
          label: "操作员",
        },
        {
          value: "2",
          label: "管理员",
        },
        {
          value: "3",
          label: "超级管理员",
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
    padding: 0 20px;
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
