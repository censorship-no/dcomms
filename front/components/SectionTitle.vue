
<template>
  <h2 class="flex items-center py-8">
    <div class="h-[1px] mr-3 w-full bg-gray-200"></div>
    <span class="mr-2"> <slot name="icon"></slot> </span>
    <span class="uppercase gray-700 text-lg whitespace-nowrap">
      <slot></slot>
    </span>
    <div class="h-[1px] ml-3 w-full bg-gray-200"></div>
  </h2>
</template>

<script>
export default {};
</script>
