/**
  组件 说明:
    props： searchForm  -- 父组件传递过来的对象，里面包含搜索组件中用到的所有数据
*/

<template>
  <div class="my-search">
    <div class="search-box">
      <div class="box-title">屯课课程名称</div>
      <el-input placeholder="请输入课程名称" v-model="searchForm.course"></el-input>
    </div>

    <div class="search-box">
      <el-button type="primary" @click="search" style="width: 80px;">查询</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySearch',
  props: {
    searchForm: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
    };
  },
  mounted() {

  },
  methods: {
    // 搜索
    search() {
      // 向父组件导出emit， 把 this.searchForm 作为参数传过去。其实不传也可以的，父组件的 searchForm 属性是直接被修改的
      this.$emit('search', this.searchForm);
    }
  }
};
</script>

<style lang="less" scoped>
  .my-search{
    display: flex;
    align-items: center;

    .search-box{
      display: flex;
      align-items: center;
      margin-right: 20px;
      margin-bottom: 20px;

      .box-title{
        width: 150px;
        margin-right: 10px;
      }
    }
  }
</style>
