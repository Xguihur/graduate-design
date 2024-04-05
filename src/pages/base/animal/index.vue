<template>
  <div>
    <h1>保护动物信息管理</h1>

    <!-- 查询组件 -->
    <div class="section-search">
      <my-search :searchForm="searchForm" @search="search"></my-search>
    </div>
    <!-- 表格组件 -->
    <div class="section-table">
      <my-table v-bind="tableProps" @editor="tableEditor" @remove="tableRemove"
      @exportDetail="exportDetail"></my-table>
    </div>
    <!-- 分页组件 -->
    <div class="section-pagination">
      <gh-pagination :paginationInit="paginationInit" @changeSize="changeSize" @changePage="changePage"></gh-pagination>
    </div>
    <!-- 弹窗组件 -->
    <div class="section-dialog">
      <my-dialog :dialogRuleVisible="dialogRuleVisible" @cancleModify="cancleModify" @confirmModify="confirmModify"></my-dialog>
    </div>
  </div>
</template>

<script>
import MySearch from './components/MySearch.vue';
import MyTable from './components/MyTable.vue';
import MyDialog from './components/MyDialog.vue';
import GhPagination from '../../../components/GhPagination.vue';

  export default {
    name: 'animal',
    components: {
      MySearch,
      MyTable,
      GhPagination,
      MyDialog
    },
    data () {
      return {
        tableProps:{
          tableColumn:[
            {
              label: '编号',
              value: 'id',
            },
            {
              label: '名称',
              value: 'name',
            },
            {
              label: '种类',
              value: 'kind',
            },
            {
              label: '分布',
              value: 'distribution',
            },
            {
              label: '保护等级',
              value: 'level',
            }
          ],
          tableData:[
            {
              id: 1,
              name: '大熊猫',
              kind: '熊',
              distribution: '亚洲',
              level: '1'
            },
            {
              id: 2,
              name: '东北虎',
              kind: '猫科',
              distribution: '东北',
              level: '1'
            },
            {
              id: 3,
              name: '丹顶鹤',
              kind: '鸟类',
              distribution: '亚洲',
              level: '1'
            },
            {
              id: 4,
              name: '金钱豹',
              kind: '猫科',
              distribution: '韶关',
              level: '1'
            },
            {
              id: 5,
              name: '金丝猴',
              kind: '猴科',
              distribution: '广东',
              level: '1'
            },
          ],
          operation:true
        },
        searchForm:{
          course:'',
        },
        paginationInit: {
          currentPage: 1,
          pageSize: 10,
        },
        dialogRuleVisible: false,
      }
    },
    methods: {
      // 获取表格数据
      getTableData(){
        const parmas = {}// 设置请求接口的参数
        // 调用接口请求数据
      },
      // 子组件触发的事件监听
      search(data){
        console.log('search:',data);
      },
      tableEditor(row){
        this.dialogRuleVisible = true;
        console.log(row);
      },
      tableRemove(row){
        this.$confirm('确定删除该条数据吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
      },
      exportDetail(row){
        console.log('exportDetail:',row);
      },
      changeSize(data){
        // 分页器数据已经在子组件中修改完毕，父组件调用 this.getTableData() 请求表格数据即可
        console.log('changeSize:',data);
      },
      changePage(data){
        // 分页器数据已经在子组件中修改完毕，父组件调用 this.getTableData() 请求表格数据即可
        console.log('changePage:',data);
      },
      cancleModify(){
        this.dialogRuleVisible = false;
      },
      confirmModify(data){
        this.dialogRuleVisible = false;
        console.log(data);
        // 拿到参数调用接口
      }
    },
    mounted () {},
  }

</script>

<style scoped lang="less">

</style>