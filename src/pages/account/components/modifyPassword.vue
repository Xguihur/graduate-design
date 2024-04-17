/**
  组件 说明:
    props：   -- 父组件传递过来的对象，里面包含搜索组件中用到的所有数据
*/

<template>
  
</template>

<script>
export default {
  name: 'MySearch',
  props: {
  },
  data() {
    return {
    };
  },
  mounted() {

  },
  methods: {
    // 搜索
    comfirm() {
      // 向父组件导出emit， 把 this.searchForm 作为参数传过去。其实不传也可以的，父组件的 searchForm 属性是直接被修改的
      this.$emit('comfirm', this.searchForm);
    }
  }
};
</script>

<style lang="less" scoped>
  .my-search{
    margin-bottom: 10px;

    .line{
      display: flex;
      align-items: center;
      .search-box{
        display: flex;
        align-items: center;
        margin-right: 20px;
        margin-bottom: 20px;
  
        .box-title{
          width: 80px;
          margin-right: 10px;
        }
      }
    }
  }
</style>
