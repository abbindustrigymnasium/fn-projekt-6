<template>
    <tr>
        <td class="px-5 py-5 border-b border-gray-600 bg-gray-800 text-sm">
            <div class="flex items-center">
                <div class="flex-shrink-0 w-10 h-10">
                    <img class="w-full h-full rounded-full"
                        :src= user.imagelink
                        alt="" />
                </div>
                    <div class="ml-3 cursor-pointer ">
                        <a href="/randomprofile">
                        <p class="text-white whitespace-no-wrap">
                            {{ user.email }}
                        </p>
                        </a>
                    </div>
                </div>
        </td>
        <td class="px-5 py-5 border-b border-gray-600 bg-gray-800 text-sm">
            <p class="text-gray-200 whitespace-no-wrap">{{ user.donated }}$</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-600 bg-gray-800 text-sm">
            <p class="text-gray-200 whitespace-no-wrap">
                {{ user.won }}$
            </p>
        </td>
        <td class="px-5 py-5 border-b border-gray-600 bg-gray-800 text-sm">
            <p class="text-gray-200 whitespace-no-wrap">
                {{ Date(user.date*1000) }}
            </p>
        </td>
        <td class="px-5 py-5 border-b border-gray-600 bg-gray-800 text-sm">
            <span
                class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                <span aria-hidden
                    class="absolute inset-0 bg-green-200 rounded-full"></span>
            <span class="relative">{{ user.suspended ? "suspended":"active"}}</span>
            </span>
        </td>
    </tr>
</template>

<script>
export default {
  props: {
    user: {
              type: Object,
              default: () => {}
            }
  }
}
</script>