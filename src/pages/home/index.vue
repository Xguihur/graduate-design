<template>
  <div class="home">
    <el-row class="tac">
      <el-col :span="5">
        <div class="left">
          <nav-menu></nav-menu>
        </div>
      </el-col>

      <el-col :span="19">
        <div class="right">
          <el-button type="primary"> add </el-button>
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavMenu from '@/layout/NavMenu'

export default {
  name: 'home',
  data () {
    return {}
  },
  components:{
    NavMenu
  },
  methods: {},
  mounted () {},
}

</script>

<style scoped lang="less">
.home{
  padding: 0 10px;
}
.left{
  background-color: pink;
}
.right{
  background-color: yellow;
}
</style>