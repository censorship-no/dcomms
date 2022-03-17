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
        <div class="sm:grid sm:grid-cols-2 sm:gap-8 mt-8">
          <AppItemPlatformItem
            desktop
            :data="data.desktopApp"
            class="sm:border-r sm:border-gray-300"
          />

          <AppItemPlatformItem
            :data="data.mobileApp"
            class="border-t sm:border-0 pt-6 mt-6 sm:pt-0 sm:mt-0"
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
