<template>
  <div>
    <van-nav-bar title="登录" left-arrow />
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.mobile"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        required
        :rules="[
          { required: true, message: '请填写手机号', pattern: /^1[3-9]\d{9}$/ }
        ]"
      />
      <van-field
        v-model="user.code"
        type="password"
        name="密码"
        label="密码"
        required
        placeholder="请输入六位密码"
        :rules="[{ required: true, message: '请填写密码', pattern: /^\d{6}$/ }]"
      />
      <van-button
        round
        type="info"
        block
        native-type="submit"
        :loading="isLoading"
        loading-text="loading..."
        :disabled="isLoading"
        >提交</van-button
      >
    </van-form>
  </div>
</template>

<script>
import { loginAPI } from '@/api'
import { Dialog } from 'vant'

export default {
  name: 'userLogin',
  data () {
    return {
      user: {
        mobile: '15712345678',
        code: '246810'
      },
      isLoading: false
    }
  },
  methods: {
    async onSubmit (val) {
      this.isLoading = true
      try {
        const res = await loginAPI(this.user)
        console.log(res)
      } catch (err) {
        Dialog.alert({
          message: 'error'
        }).then(() => {
          // on close
        })
      }
      this.isLoading = false
    }
  }
}
</script>

<style scoped lang="less">
.van-form {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
}
.van-button {
  align-self: center;
  width: 80%;
  margin-top: 50px;
}
.van-field {
  margin-bottom: 20px;
}
</style>
