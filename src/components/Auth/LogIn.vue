<template>
  <a-form
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup>
import { apiService } from "../../Service/apiService";
import { reactive } from "vue";
import { useStore } from "vuex";
const store = useStore();
const formState = reactive({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values) => {
  addData(values);
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

let endpoint = "login/login";
const addData = async (req) => {
  try {
    const data = await apiService.addData(endpoint, req);
    if (data.isAuthSucessful) {
      store.dispatch("login", data);
      localStorage.setItem("jwtToken", data.token);
      // $store.dispatch('auth/login', user);
      console.log("Data:", data);
    }
  } catch (error) {
    console.error("Error adding data:", error);
  }
};
</script>
