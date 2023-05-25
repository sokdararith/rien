<script setup>

</script>
<template>
  <div class="bg-gray-100 md:w-1/4 sm:w-screen xsm:w-screen flex flex-col p-4 space-y-3 shadow-md">
    <div id="username" class="flex flex-col p-2 space-y-5">
      <h1 class="">Login</h1>
      <input class="p-2 rounded-md" name="email" placeholder="you@email.com" type="text" value="" />
      <input class="p-2 rounded-md" name="password" placeholder="password" type="password" value="" />
      <button class="bg-blue-300 rounded-md shadow-sm p-2">Login</button>
      <div class="mt-10 grid grid-cols-3 items-center text-gray-400">
        <hr class="border-black-300">
        <p class="text-center">OR</p>
        <hr class="border-black-300">
      </div>
      <button class="bg-green-600 rounded-md shadow-md p-2">Login with Google</button>
      <button class="bg-blue-600 rounded-md shadow-md p-2">Login with Facebook</button>

      <div class="mt-10 grid grid-cols-3 items-center text-gray-400">
        <hr class="border-black-300">
        <p class="text-center">OR</p>
        <hr class="border-black-300">
      </div>
      <button class="bg-gray-300 rounded-md shadow-md p-2">Register</button>
    </div>
  </div>
</template>