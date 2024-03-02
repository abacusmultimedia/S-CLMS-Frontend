<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="Add Prdoduct"
    sub-title="Add product and versions"
    @back="() => null"
  />
  <a-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-item ref="productName" label="Software name" name="productName">
      <a-input v-model:value="formState.productName" />
    </a-form-item>
    <a-form-item ref="version" label="Software version" name="version">
      <a-input v-model:value="formState.version" />
    </a-form-item>

    <a-form-item label="Software Description" name="description">
      <a-textarea v-model:value="formState.description" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup>
import { apiService } from "../../Service/apiService";
import { reactive, ref, toRaw } from "vue";
const formRef = ref();
const endpoint = 'products';
const labelCol = {
  span: 5,
};
const wrapperCol = {
  span: 13,
};
const formState = reactive({
  productName: "",
  version: "",
  description: "",
});
const rules = {
  productName: [
    {
      required: true,
      message: "Please input Sotware name",
      trigger: "change",
    },
    {
      min: 3,
      max: 5,
      message: "Length should be 3 to 5",
      trigger: "blur",
    },
  ],
  version: [
    {
      required: true,
      message: "Please input Software version",
      trigger: "change",
    },
    {
      min: 3,
      max: 5,
      message: "Length should be 3 to 5",
      trigger: "blur",
    },
  ],
  description: [
    {
      required: true,
      message: "Please input description for software",
      trigger: "blur",
    },
  ],
};
const onSubmit = () => {
  
  formRef.value
    .validate()
    .then(() => {
      addData(formState);
      console.log("values", formState, toRaw(formState));
    })
    .catch((error) => {
      console.log("error", error);
    });
};
const resetForm = () => {
  formRef.value.resetFields();
};
const addData = async (req) => {
  try {
    const data = await apiService.addData( endpoint, req);
    console.log("Data added:", data);
  } catch (error) {
    console.error("Error adding data:", error);
  }
};
</script>
