<!-- log in page -->
<template>
    <div class="bg-gray-900">
          <div class="flex justify-center h-screen">
              <div class="hidden bg-cover lg:block lg:w-2/3" style="background-image: url('https://www.debt.org/wp-content/uploads/2012/06/Gambling-Debt.jpg')">
                  <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                      <div>
                          <h2 class="text-4xl font-bold text-white">Gamble For Good</h2>
  
                          <p class="max-w-xl mt-3 text-gray-300">Log in to receive access to all our functionalities, including donating money and notifications for future updates</p>
                      </div>
                  </div>
              </div>
  
              <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                  <div class="flex-1">
                      <div class="text-center">
                          <h2 class="text-4xl font-bold text-center text-white">Log In</h2>
  
                          <p class="mt-3 text-gray-300">Sign in to access your account</p>
                      </div>
  
                      <div class="mt-8">
                          <form>
                              <div>
                                  <label for="email" class="block mb-2 text-sm text-gray-200">Email Address</label>
                                  <input type="email" name="email" id="email" placeholder="example@example.com" class="block w-full px-4 py-2 mt-2 border  rounded-md placeholder-gray-600 bg-gray-900 text-gray-300 border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                              </div>
  
                              <div class="mt-6">
                                  <div class="flex justify-between mb-2">
                                      <label for="password" class="text-sm text-gray-200">Password</label>
                                      <a href="#" class="text-sm text-gray-400 focus:text-indigo-600 hover:text-indigo-600 hover:underline">Forgot password?</a>
                                  </div>
  
                                  <input type="password" name="password" id="password" placeholder="Your Password" class="block w-full px-4 py-2 mt-2 placeholder-gray-600 border border-gray-700 rounded-md bg-gray-900 text-gray-300 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                              </div>
  
                              <div class="mt-6">
                                  <button
                                      @click="login" class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                                      Sign in
                                  </button>
                              </div>
  
                          </form>
  
                          <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="/signup" class="text-indigo-600 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </template>

<script setup>
import axios from 'axios'; const endpoint = 'http://localhost:3001'; 

definePageMeta({
  layout: "empty",
});

async function login() {
  try {

    const response = await axios.get(`${endpoint}/leaderboarddonate`);
    const data = response.data;
    console.log(data);

    axios.post(`${endpoint}/login`, {
      email: _email.value,
      password: _password.value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  } catch (error) {
    console.error(error);
  }
}

</script>

