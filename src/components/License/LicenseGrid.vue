<template>
    <div>
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240)"
        title="License"
        sub-title="License Detail"
        @back="() => null"
      />
  
      <a-table :dataSource="dataSource" :columns="columns" class="custom-table" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import { apiService } from "../../Service/apiService";
  
  const dataSource = ref([]);
  
  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Active",
      dataIndex: "isActive",
      key: "isActive",
      // slots: { customRender: "isActive" },
    },
  ];
  
  onMounted(async () => {
    try {
      const response = await apiService.getData("licenses/GetAll");
      dataSource.value = response;
  
      console.log("Data loaded:", response);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  });
  </script>
  
  <style scoped>
  .custom-table {
    margin: 20px;
  }
  
  /* Add more styles as needed */
  </style>