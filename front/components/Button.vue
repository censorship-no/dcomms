
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
      hover:text-white hover:bg-gray-700
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
      hover:text-white hover:bg-gray-700
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default { props: ["link"] };
</script>
