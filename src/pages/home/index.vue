<template>
  <div>
   <el-row type="flex" class="tac">
      <!-- 侧边栏 -->
      <el-col :span="4" class="aside">
        <NavMenu ref="navMenu" :isCollapse="isCollapse"></NavMenu>
      </el-col>
      <el-col :span="20" class="content">
        <!-- 顶部导航 -->
        <nav-bar @toggleClick="changeCollopse" :isCollapse="isCollapse"></nav-bar>
        <!-- 内容区域 -->
        <router-view class="content-bottom"></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavMenu from '@/components/layout/NavMenu.vue';
import NavBar from '@/components/layout/NavBar.vue';
export default {
  name: 'home',
  components: { NavMenu, NavBar },
  data() {
    return {
      isCollapse: false // 侧边栏是否收起
    };
  },
  methods: {
    changeCollopse() {
      this.isCollapse = !this.isCollapse;
    },
  },
  mounted() {},
};

</script>

<style scoped lang="less">

.tac{
  box-sizing: border-box;
}
.aside{
}
.content{
  padding: 0;
  header{
    height: 50px;
    overflow: hidden;
  }

  .content-bottom{
    height: calc(100vh - 60px);
    padding: 0 20px;
  }
}
</style>