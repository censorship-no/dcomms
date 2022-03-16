
<template>
  <a
    v-if="link"
    :href="link"
    target="_blank"
    class="
      min-w-[109px]
      sm:text-sm
      border border-gray-300
      bg-white
      p-1
      shadow-sm
      rounded
      text-gray-700
    "
  >
    <slot></slot>
  </a>

  <button
    v-else
    class="
      min-w-[109px]
      bg-white
      sm:text-sm
      border border-gray-300
      p-1
      shadow-sm
      rounded
      text-gray-700
    "
  >
    <slot></slot>
  </button>
</template>

<script>
export default { props: ["link"] };
</script>
