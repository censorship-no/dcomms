
<template>
  <a
    v-if="link"
    :href="link"
    target="_blank"
    class="
      inline-block
      sm:text-sm
      border border-gray-300
      bg-white
      px-2
      py-1
      shadow-sm
      rounded
      text-gray-700 text-center
      hover:bg-gray-300
      min-h-[30px]
      whitespace-nowrap
    "
  >
    <slot></slot>
  </a>

  <button
    v-else
    class="
      inline-block
      bg-white
      sm:text-sm
      border border-gray-300
      px-2
      py-1
      shadow-sm
      rounded
      text-gray-700 text-center
      hover:bg-gray-300
      min-h-[30px]
      whitespace-nowrap
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default { props: ["link"] };
</script>
