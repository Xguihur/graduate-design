<template>
  <div>
    <el-row class="tac">
      <el-col :span="5" class="aside">
        <NavMenu></NavMenu>
      </el-col>
      <el-col :span="18">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavMenu from '../../layout/NavMenu.vue';
  export default {
    name: 'home',
    components:{NavMenu},
    data () {
      return {}
    },
    methods: {},
    mounted () {},
  }

</script>

<style scoped lang="less">

.tac{
  box-sizing: border-box;
}
.aside{
  margin-right: 20px;
}
</style>