<template>
    <div class="register">
        <h2>企业注册</h2>
        <div class="titleText">主题信息登记:</div>
        <ul>
            <li>
                <label for="">企业名称：</label>
                <el-input size="small" v-model="company.name"></el-input>
            </li>
            <li>
                <label for="">企业地址：</label>
                <el-input size="small" v-model="company.address"></el-input>
            </li>
            <li>
                <label for="">联系电话：</label>
                <el-input size="small" v-model="company.phone"></el-input>
            </li>
            <li>
                <label for="">法人代表：</label>
                <el-input size="small" v-model="company.corporation"></el-input>
            </li>
            <li>
                <label for="">营业执照注册号：</label>
                <el-input size="small" v-model="company.companyID"></el-input>
            </li>
            <li>
                <label for="">营业执照：</label>
                <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </li>
        </ul>
        <div class="titleText">管理员信息登记:</div>
        <ul>
            <li>
                <label for="">用户名：</label>
                <el-input size="small" v-model="manager.userName"></el-input>
            </li>
            <li>
                <label for="">密码：</label>
                <el-input size="small" v-model="manager.userPassword"></el-input>
            </li>
            <li>
                <label for="">确认密码：</label>
                <el-input size="small" v-model="manager.password"></el-input>
            </li>
            <li>
                <label for="">手机号：</label>
                <el-input size="small" v-model="manager.phone"></el-input>
            </li>
            <li>
                <label for="">验证码：</label>
                <el-input class="validate" size="small" v-model="manager.validate"></el-input>
                <el-button type="primary" round size="small">获取验证码</el-button>
            </li>
            <li>
                <el-checkbox v-model="checked">您已阅读<a href="">《长虹设备云用户注册协议》</a></el-checkbox>
            </li>
            <li>
                <el-button type="primary" size="small" round class="registerBtn">注册</el-button>
            </li>
        </ul>
        <div class="loginSkip">已有账号，直接登录</div>
    </div>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      fileList: [
        {
          name: "",
          url: ""
        }
      ],
      company: {
        name: "",
        address: "",
        phone: "",
        corporation: "",
        companyID: ""
      },
      manager: {
        userName: "",
        userPassword: "",
        password: "",
        phone: "",
        validate: ""
      },
      checked: false
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
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
.register {
  width: 40%;
  background-color: white;
  box-shadow: 10px 10px 10px @Info;
  border-radius: 10px;
  padding-bottom: 30px;
  h2 {
    letter-spacing: 2px;
    font-weight: 500;
    padding: 10px 0;
  }
  ul {
    li {
      list-style-type: none;
      margin-bottom: 5px;
      label {
        display: inline-block;
        width: 30%;
        text-align: right;
      }
      .validate {
        width: 30%;
      }
      a {
        text-decoration: none;
        color: @blue;
      }
    }
  }
  .el-input {
    width: 50%;
    padding: 0;
  }
  .titleText {
    width: 100%;
    text-align: left;
    padding: 10px 0 10px 20px;
  }
  .upload-demo {
    width: 50%;
    display: inline-block;
    padding: 0;
  }
  .registerBtn {
    width: 60%;
  }
  .loginSkip{
    font-size: 12px;
  }
}
</style>

