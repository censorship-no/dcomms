
<template>
  <div class="py-8 sm:py-20">
    <div class="container px-3 sm:px-0 text-center">
      <h1 class="text-5xl font-bold sm:mx-[100px]" v-html="$t('title')"></h1>
      <p class="text-xl my-8 text-gray-500 text-center sm:mx-[120px]">
        {{ $t("subtitle") }}
      </p>
      <span
        class="
          border border-green-500
          rounded-lg
          px-4
          py-2
          inline-flex
          bg-green-50
        "
        ><img class="mr-2" src="/icons/success.svg" alt="" /><span
          v-html="$t('connected', { name: $t(`cities['${server}']`) })"
        ></span
      ></span>
      <div
        class="
          flex flex-wrap
          gap-3
          text-center
          items-center
          justify-center
          my-8
        "
      >
        <div class="text-gray-500 font-bold text-center text-sm uppercase">
          {{ $t("server") }}
        </div>

        <Button
          v-for="item in $store.state.servers"
          :key="item.name"
          :href="item.link"
          >{{ $t(item.name) }}</Button
        >
      </div>
      <div class="rounded-lg bg-red-100 border border-red-500"></div>
    </div>
  </div>
</template>

<script>
export default {
  nuxtI18n: {
    locales: ["ua", "ru", "en"],
  },
  name: "Hero",
  computed: {
    server() {
      return window.location.host.split(".")[1]
        ? window.location.host.split(".")[0]
        : "kyiv";
    },
  },
};
</script>
