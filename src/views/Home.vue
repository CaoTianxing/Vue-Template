<template>
  <div class="home">
    <el-container>
      <el-header>
        <!--logo-->
        <div class="logo" @click="flag">
          <!--<img src="../assets/image/logo.jpg" alt="">-->
        </div>
        <!--导航-->
        <div class="navList">
        </div>
      </el-header>
      <el-container>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          :router="true">
          <el-submenu index="">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">公共组件</span>
            </template>
            <el-submenu index="1-1">
              <template slot="title">富文本编辑器</template>
              <el-menu-item index="ckEditor">CK editor</el-menu-item>
              <el-menu-item index="tinymce">tinymce</el-menu-item>
            </el-submenu>
            <!--分类管理-->
            <el-submenu index="2-1">
              <template slot="title">图片上传</template>
              <el-menu-item index="UploadImage">插件1</el-menu-item>
              <el-menu-item index="rightNav">插件2</el-menu-item>
            </el-submenu>
            <!-- 所有商品 -->
            <el-submenu index="3-1">
              <template slot="title">文件上传</template>
              <el-menu-item index="product">所有商品</el-menu-item>
              <el-menu-item index="">其他商品</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
        <!--页面主体部分-->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  // window.onbeforeunload = function(){
  //   localStorage.removeItem('myToken')
  //   confirm()
  // };
  export default {
    data() {
      return {
        isCollapse: false,
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      flag() {
        this.isCollapse ? this.isCollapse = false : this.isCollapse = true;
      }
    }
    // beforeCreate(){
    //   if(!localStorage.getItem('myToken')){
    //     this.$router.push({path: '/login'})
    //   }
    // }
  }
</script>
<style lang="less" scoped>
  .home {
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
    height: 100%;
    width: 100%;
    position: fixed;
    background-color: #E9ECF3;
    .el-container {
      height: 100%;
    }
    .el-header {
      padding: 0;
      background-color: #F5F8FD;
      > .logo {
        float: left;
        height: 100%;
        margin-right: 140px;
        > img {
          width: 170px
        }
      }
      > .navList {
        > ul {
          > li {
            float: left;
            > a {
              display: block;
              height: 60px;
              line-height: 60px;
              margin-right: 20px;
              padding: 0 30px;
              transition: all .5s;
              &:hover {
                background-color: mediumpurple;
                color: #fff;
              }
            }
          }
        }
      }
    }
    .el-aside {
      background-color: #FFFFFF;
      margin: 10px;
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 100px;
        min-height: 400px;
      }
      .el-menu {
        margin: 10px 15px
      }
    }
  }

</style>
