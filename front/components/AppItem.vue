<template>
  <div class="mb-8 shadow bg-white rounded-xl p-8">
    <div class="sm:flex mb-4">
      <img
        :src="data.logo"
        alt=""
        class="
          mb-6
          sm:mb-0 sm:mx-auto
          h-[48px]
          w-[48px]
          object-contain
          sm:mr-10
        "
      />
      <div class="mb-6 sm:mb-0">
        <div
          class="text-sm font-semibold uppercase text-primary mb-3"
          v-if="data.explain"
        >
          {{ data.explain[$i18n.locale] }}
        </div>
        <div class="text-2xl font-bold mb-3">
          {{ data.name[$i18n.locale] }}
        </div>
        <div v-html="data.descr[$i18n.locale]" class="text-sm"></div>
        <div class="md:grid md:grid-cols-2 md:gap-8 mt-8">
          <AppItemPlatformItem
            desktop
            :data="data.desktopApp"
            class="md:border-r md:border-gray-300"
          />

          <AppItemPlatformItem
            :data="data.mobileApp"
            class="border-t md:border-0 pt-6 mt-6 md:pt-0 md:mt-0"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: "AppItem", props: ["data"] };
</script>
<style >
p {
  margin-bottom: 10px;
}
</style>
