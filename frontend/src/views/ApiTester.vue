<template>
  <div class="card-container">
    <div class="card">
      <h1 class="title">API Tester</h1>
      <input type="text" v-model="inputData" placeholder="Enter Data" />
      <button @click="sendPost" :disabled="loading">
        {{ loading ? "Sending..." : "Send POST" }}
      </button>
      <button @click="fetchData">Send GET</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <pre v-if="responseData" class="success-message">
        {{ JSON.stringify(responseData) }}
      </pre>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";

const api_url = import.meta.env.VITE_API_URL;
let subUrl = "/forget-password";
let number = 2; // Example number, can be replaced with actual data
switch (number) {
  case 1:
    subUrl = "/forget-password";
    break;
  case 2:
    subUrl = "/auth/login";
    break;
}
const dataPost = {
  email: "tester@test.com",
  password: "passwordtest",
};
const params = {};
const token = "";

export default {
  data() {
    return {
      inputData: "",
      responseData: "",
      errorMessage: "",
      loading: false,
    };
  },
  methods: {
    async sendPost() {
      this.errorMessage = "";
      this.loading = true;
      try {
        const response = await axios.post(api_url + subUrl, dataPost, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.responseData = `POST Success: ${response.data}`;
      } catch (error: any) {
        this.errorMessage =
          "POST request failed! " + error.response?.data?.message ||
          error.message;
      } finally {
        this.loading = false;
      }
    },
    async fetchData() {
      this.errorMessage = "";
      try {
        const response = await axios.get(api_url + subUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params,
        });
        this.responseData = `GET Success: ${response.data}`;
      } catch (error: any) {
        this.errorMessage = "GET request failed! " + error;
      }
    },
  },
};
</script>

<style scoped>
/* Global styles */
body {
  font-family: "Inter", sans-serif;
  background-color: #f3f4f6;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Container */
.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Card */
.card {
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
}

/* Title */
.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* Input */
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  margin-bottom: 10px;
}

/* Buttons */
button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #2563eb;
}

button:disabled {
  background-color: #9ca3af;
  cursor: not-allowed;
}

/* Messages */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

.success-message {
  color: green;
  font-size: 14px;
  margin-top: 10px;
}
</style>
