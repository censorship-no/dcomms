
<template>
  <div
    class="
      rounded-lg
      bg-red-100
      border border-primary
      grid grid-cols-12
      p-8
      gap-6
    "
  >
    <div class="col-span-12 sm:col-span-4 flex items-start">
      <img src="/icons/clone.svg" class="mr-3 w-10" alt="" />
      <span class="text-2xl font-bold">{{ $t("alert.title") }}</span>
    </div>
    <div class="col-span-12 sm:col-span-4">
      <p class="text-sm">{{ $t("alert.descr") }}</p>
    </div>
    <div class="col-span-12 sm:col-span-4 flex sm:justify-end">
      <div>
        <Button link="">{{ $t("alert.buttons.repo") }}</Button>
        <Button link="">{{ $t("alert.buttons.servers") }}</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReplicateSection",
};
</script>
