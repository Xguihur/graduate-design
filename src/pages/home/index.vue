<template>
  <div>
    <el-container >
      <el-aside :width="isCollapse?'50px':'210px'" >
        <!-- 侧边栏 -->
        <NavMenu ref="navMenu" :isCollapse="isCollapse"></NavMenu>
      </el-aside>

      <el-container>
        <!-- 顶部导航 -->
        <el-header>
          <nav-bar @toggleClick="changeCollopse" :isCollapse="isCollapse"></nav-bar>
        </el-header>

        <el-main class="content">
          <!-- 内容区域 -->
          <router-view class="content-bottom"></router-view>
        </el-main>
      </el-container>
    </el-container>
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
  mounted() {
  },
};

</script>

<style scoped lang="less">

.el-aside {
  color: #333;

}
.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  transition: width .3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}
.content{
  flex: 1;
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