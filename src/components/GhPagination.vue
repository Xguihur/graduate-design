/**
  组件 说明:
    props：paginationInit -- 接收分页器数据，
  事件：
    当触发页码和页大小改变时，直接修改 props 传递过来的值，这是一个对象能够直接修改内部的值。并且向外导出emit，供父组件拓展
*/

<template>
  <div class="gh-pagination">
    <!-- 分页 -->
    <el-pagination
      @size-change='changeSize'
      @current-change='changePage'
      :currentPage='paginationInit.currentPage'
      :total='paginationInit.total'
      :page-sizes='pageSizes'
      layout="total, prev, pager, next, sizes, jumper"
      :page-size="paginationInit.pageSize"
      align="right">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'GhPagination',
  props: {
    paginationInit: {
      type: Object,
      require: true
    },
    pageSizes: {
      type: Array,
      default: () => [5, 10, 20, 50]
    }
  },
  data() {
    return {
    };
  },
  methods: {
    changeSize(data) {
      this.paginationInit.pageSize = data;
      // 向外导出emit
      this.$emit('changeSize', this.paginationInit);
    },
    changePage(data) {
      this.paginationInit.currentPage = data;
      // 向外导出emit
      this.$emit('changePage', this.paginationInit);
    },
  }
};
</script>

<style lang="less" scoped>

</style>
