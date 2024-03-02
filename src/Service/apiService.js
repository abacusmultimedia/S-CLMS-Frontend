import Axios from 'axios';

const baseUrl = 'https://localhost:7274/api';

// Create an Axios instance with a base URL
const axiosInstance = Axios.create({
  baseURL: baseUrl,
});

// Add a request interceptor to set the JWT token
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the JWT token from your authentication mechanism (localStorage, Vuex, etc.)
    const jwtToken = localStorage.getItem('jwtToken');

    // Set the JWT token in the Authorization header
    if (jwtToken) {
      config.headers.Authorization = `Bearer ${jwtToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const apiService = {
  async getData(endpoint) {
    try {
      const response = await axiosInstance.get(`/${endpoint}`);
      return response.data;
    } catch (error) {
      console.error(`Error getting data for ${endpoint}:`, error);
      throw error;
    }
  },

  async addData(endpoint, data) {
    try {
      const response = await axiosInstance.post(`/${endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error adding data for ${endpoint}:`, error);
      throw error;
    }
  },

  async updateData(endpoint, id, data) {
    try {
      const response = await axiosInstance.put(`/${endpoint}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`Error updating data for ${endpoint}:`, error);
      throw error;
    }
  },

  async deleteData(endpoint, id) {
    try {
      const response = await axiosInstance.delete(`/${endpoint}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting data for ${endpoint}:`, error);
      throw error;
    }
  },
};



// import Axios from 'axios';

// const baseUrl = 'https://localhost:7274/api';  

// export const apiService = {
//   async getData(endpoint) {
//     try {
//       const response = await Axios.get(`${baseUrl}/${endpoint}`);
//       return response.data;
//     } catch (error) {
//       console.error(`Error getting data for ${endpoint}:`, error);
//       throw error;
//     }
//   },

//   async addData(endpoint, data) {
//     try {
//       const response = await Axios.post(`${baseUrl}/${endpoint}`, data);
//       return response.data;
//     } catch (error) {
//       console.error(`Error adding data for ${endpoint}:`, error);
//       throw error;
//     }
//   },

//   async updateData(endpoint, id, data) {
//     try {
//       const response = await Axios.put(`${baseUrl}/${endpoint}/${id}`, data);
//       return response.data;
//     } catch (error) {
//       console.error(`Error updating data for ${endpoint}:`, error);
//       throw error;
//     }
//   },

//   async deleteData(endpoint, id) {
//     try {
//       const response = await Axios.delete(`${baseUrl}/${endpoint}/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error(`Error deleting data for ${endpoint}:`, error);
//       throw error;
//     }
//   },
// };
