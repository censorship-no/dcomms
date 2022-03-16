<template>
  <div class="mb-8 shadow bg-white rounded-xl p-8">
    <div class="sm:flex mb-4">
      <img
        :src="data.logo"
        alt=""
        class="mb-6 sm:mb-0 mx-auto h-[48px] w-[48px] object-contain sm:mr-10"
      />
      <div class="mb-6 sm:mb-0">
        <div class="text-2xl font-bold mb-3 mt-3">
          {{ data.name[$i18n.locale] }}
        </div>
        <div v-html="data.descr[$i18n.locale]" class="text-sm"></div>
        <div class="sm:grid sm:grid-cols-2 sm:gap-8 mt-8">
          <AppItemPlatformItem
            desktop
            :data="data.desktopApp"
            class="border-r border-gray-300"
          />

          <AppItemPlatformItem :data="data.mobileApp" />
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
