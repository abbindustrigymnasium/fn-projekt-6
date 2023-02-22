<template>
    <div class="bg-gray-800 p-8 w-full">
        <div class=" flex items-center justify-between pb-6">
            <div>
                <h2 class="text-gray-200 font-semibold">Leaderboard</h2>
                <span class="text-xs text-gray-200">All donators</span>
            </div>
            <div class="flex items-center justify-between">
                <div class="flex bg-gray-900 items-center p-2 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clip-rule="evenodd" />
                    </svg>
                    <input class="bg-gray-900 text-gray-200 outline-none ml-1 block " type="search" name="search" id=""
                        placeholder="search users">
                </div>
            </div>
        </div>
        <div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table class="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-600 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-600 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Money donated
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-600 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Money won
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-600 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Created at
                                </th>
                                <th
                                    class="px-5 py-3 border-b-2 border-gray-600 bg-gray-900 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <UserPreview v-for="user in allusers" :key=user.email v-bind:user="user"></UserPreview>
                        </tbody>
                    </table>
                    <div
                        class="px-5 py-5 bg-gray-800 border-t border-gray-600 flex flex-col xs:flex-row items-center xs:justify-between          ">
                        <span class="text-xs xs:text-sm text-gray-200">
                            Showing 1 to 4 of 50 Entries
                        </span>
                        <div class="inline-flex mt-2 xs:mt-0">
                            <button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                Prev
                            </button>
                            &nbsp; &nbsp;
                            <button
                                class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'; const endpoint = 'http://localhost:3001'
let allusers = []
try {
    const response = await axios.get(`${endpoint}/leaderboarddonate`)
    allusers = response.data.users
} catch (error) {
    console.error(error)
}
</script>