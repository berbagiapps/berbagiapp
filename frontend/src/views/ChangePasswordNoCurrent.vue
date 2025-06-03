<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h1 class="text-xl font-bold text-center mb-4">Berbagi Apps</h1>
      <h2 class="text-lg text-center mb-4">Change Password</h2>
      <form @submit.prevent="changePassword">
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

export default {
  data() {
    return {
      newPassword: "",
      confirmPassword: "",
      loading: false,
      errorMessage: "",
    };
  },
  methods: {
    async changePassword() {
      this.errorMessage = "";
      if (this.newPassword !== this.confirmPassword) {
        this.errorMessage = "Passwords do not match!";
        return;
      }

      try {
        this.loading = true;
        const response = await axios.post(
          "https://api.example.com/change-password",
          {
            newPassword: this.newPassword,
          }
        );

        alert("Password changed successfully!");
      } catch (error) {
        this.errorMessage = "Failed to update password. Please try again.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
