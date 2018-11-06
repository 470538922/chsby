<template>
  <div class="login">
    <div class="loginBox" v-show="isshow">
      <h1>长虹设备云</h1>
      <p>
        <el-input placeholder="请输入用户名"></el-input>
      </p>
      <p>
        <el-input type="password" placeholder="请输入密码"></el-input>
      </p>
      <p>
        <el-button type="primary" round>主要按钮</el-button>
      </p>
      <p class="registerSkip">
        <span>忘记密码</span>
        <span v-on:click="function(){
          isshow=!isshow 
          ishide=!ishide
          }">企业注册</span>
      </p>
    </div>
    <register v-show="ishide"></register>
  </div>
</template>
<script>
import Register from "./register/Register";
export default {
  name: "Login",
  data() {
    return {
      input: "",
      isshow: true,
      ishide: false
    };
  },
  methods: {},
  components: {
    Register
  }
};
</script>
<style lang="less" scoped>
@blue: #409eff;
@Success: #67c23a;
@Warning: #e6a23c;
@Danger: #f56c6c;
@Info: #909399;
* {
  margin: 0;
  padding: 0;
}
.login {
  width: 100vw;
  height: 100vh;
  background-color: @blue;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginBox {
    width: 40%;
    height: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 10px 10px 10px @Info;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    h1 {
      width: 100%;
      padding: 20px 0;
      letter-spacing: 2px;
      font-family: "和畅惠风 Hiragino Sans GB";
      font-weight: 500;
      color: @blue;
    }
    p {
      width: 60%;
      padding: 10px 0;
      button {
        width: 100%;
      }
    }
    .registerSkip {
      text-align: right;
      padding-bottom: 50px;
      span {
        display: inline-block;
        font-size: 12px;
        padding: 0 10px;
        color: @blue;
        cursor: pointer;
      }
    }
  }
}
</style>
