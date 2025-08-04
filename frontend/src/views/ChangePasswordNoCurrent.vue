<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h1 class="text-xl font-bold text-center mb-4">Berbagi Apps</h1>
      <h2 class="text-lg text-center mb-4">Change Password</h2>
      <form v-if="isToken" @submit.prevent="changePassword">
        <div class="mb-4">
          <label class="block text-gray-700">New Password</label>
          <input
            type="password"
            v-model="newPassword"
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            v-model="confirmPassword"
            class="w-full p-2 border rounded"
          />
        </div>
        <p v-if="errorMessage" class="text-red-500 text-sm mb-4">
          {{ errorMessage }}
        </p>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white p-2 rounded flex items-center justify-center"
          :disabled="loading"
        >
          <span v-if="loading">Updating...</span>
          <span v-else>Update Password</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";

export default {
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
      loading: false,
      errorMessage: "",
      isToken: true,
    };
  },
  created() {
    const query = this.$route.query;
    if (!query.token || !query.email) {
      this.loading = false;
      this.isToken = false;
      alert(
        "No token and email provided. Please check your email for the reset link."
      );
    }
  },
  methods: {
    async changePassword() {
      this.errorMessage = "";
      if (this.newPassword.trim() !== this.confirmPassword.trim()) {
        this.errorMessage = "Passwords do not match!";
        return;
      }
      if (this.newPassword.trim().length < 8) {
        this.errorMessage = "Password must be at least 8 characters long.";
        return;
      }

      try {
        const query = this.$route.query;
        console.log("query:", query);
        console.log("apiUrl:", apiUrl);
        this.loading = true;
        const response = await axios.post(
          apiUrl + "/auth/change-password-by-token",
          {
            newPassword: this.newPassword,
            token: query.token,
            email: query.email,
          }
        );
        console.log("success Password change response:", response.data);

        alert("Password changed successfully!, please log in again.");
      } catch (error: any) {
        console.error("Error changing password:", error);
        this.errorMessage =
          "Failed to update password. Please try again. " +
          (error.response?.data?.message ||
            error.message ||
            JSON.stringify(error));
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
