<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h1 class="text-xl font-bold text-center mb-4">Berbagi Apps</h1>
      <h2 class="text-lg text-center mb-4">Change Password</h2>
      <form @submit.prevent="changePassword">
        <div class="mb-4">
          <label class="block text-gray-700">Current Password</label>
          <input
            type="password"
            v-model="currentPassword"
            class="w-full p-2 border rounded"
          />
        </div>
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
        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">
          Update Password
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    };
  },
  methods: {
    changePassword() {
      if (this.newPassword !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      alert("Password changed successfully!");
    },
  },
};
</script>
