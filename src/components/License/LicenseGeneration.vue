<template>
  <a-page-header
    style="border: 1px solid rgb(235, 237, 240)"
    title="License Generation"
    sub-title="Generate a product License"
    @back="() => null"
  />
  <a-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <a-form-item label="Product" name="productId">
      <a-select
        v-model:value="formState.productId"
        placeholder="please select product id"
      >
        <a-select-option
          v-for="pr in productsLookup"
          :key="pr.id"
          :value="pr.id"
          >{{ pr.name }}</a-select-option
        >
        <!-- <a-select-option value=1>Zone one</a-select-option>
        <a-select-option value=2>Zone two</a-select-option> -->
      </a-select>
    </a-form-item>
    <a-form-item ref="userName" label="User Name" name="userName">
      <a-input v-model:value="formState.userName" />
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetForm">Reset</a-button>
    </a-form-item>
  </a-form>
</template>
<script setup>
import { reactive, ref, toRaw, onMounted } from "vue";
import { apiService } from "../../Service/apiService";
const formRef = ref();
// Load data on component creation
let productsLookup = [];
onMounted(async () => {
  try {
    const response = await apiService.getData("products/GetLookup");
    productsLookup = response;
    console.log("Data loaded:", response);
  } catch (error) {
    console.error("Error loading data:", error);
  }
});
const labelCol = {
  span: 5,
};
const wrapperCol = {
  span: 13,
};
const formState = reactive({
  userName: "",
  productId: undefined,
});
const rules = {
  userName: [
    {
      required: true,
      message: "Please input Activity name",
      trigger: "change",
    },
    {
      min: 3,
      max: 150,
      message: "Length should be 3 to 5",
      trigger: "blur",
    },
  ],
  productId: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
};
const onSubmit = () => {
  formRef.value
    .validate()
    .then(() => {
      console.log("values", formState, toRaw(formState));
      addData(formState);
    })
    .catch((error) => {
      console.log("error", error);
    });
};

const resetForm = () => {
  formRef.value.resetFields();
};
const endpoint = "Licenses";
const addData = async (req) => {
  try {
    const data = await apiService.addData(endpoint, req);
    console.log("Data added:", data);
    
  } catch (error) {
    console.error("Error adding data:", error);
  }
};

</script>
