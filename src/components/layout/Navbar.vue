<template>
  <div class="navbar">
    <div class="left-menu">
      <!-- 汉堡伸缩按钮 -->
      <hamburger id="hamburger-container" :is-active="isCollapse" class="hamburger-container" @toggleClick="toggleSideBar" />

      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path:breadCrumb.path==''?'/':breadCrumb.path}" v-for="breadCrumb in breadCrumbList" :key="breadCrumb.path">{{breadCrumb.meta.title ?breadCrumb.meta.title:'首页' }}</el-breadcrumb-item>
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
      breadCrumbList: []
    };
  },
  computed: {
  },
  watch: {
    // 监听路由的变化,并且是立即执行的
    '$route': {
      handler(to, from) {
        // 这个 to 可以拿到跳转后的路由信息，matched 中包含了当前路由的父子信息，可以用来渲染面包屑
        this.breadCrumbList = to.matched;
      },
      immediate: true
    }
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
        localStorage.removeItem('token');
        this.$router.push('/login');
      }
    }
  },
  mounted() {
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
