<template>
  <div class="navbar">
    <div class="left-menu">
      <!-- 汉堡伸缩按钮 -->
      <hamburger id="hamburger-container" :is-active="isCollapse" class="hamburger-container" @toggleClick="toggleSideBar" />

      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">基础管理</el-breadcrumb-item>
        <el-breadcrumb-item>动物信息管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <!-- 右侧设置 -->
    <div class="right-menu">
      <el-dropdown @command="handleCommand">
        <el-button type="primary">
          设置<i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="home">返回首页</el-dropdown-item>
          <el-dropdown-item command="exit">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger';

export default {
  components: {
    Hamburger,
  },
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
  },
  methods: {
    toggleSideBar() {
      this.$emit('toggleClick');
    },
    handleCommand(command) {
      if (command === 'home') {
        this.$router.push('/');
      }
      if (command === 'exit') {
        // 这里还需要清缓存等一系列操作
        this.$router.push('/login');
      }
    }
  }
};
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 0;

  .left-menu {
    display: flex;
    align-items: center;
  }

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

}
</style>
