
<template>
  <div class="py-6 sm:py-20">
    <div class="container px-3 sm:px-0 sm:text-center">
      <h1 class="text-4xl sm:text-5xl font-bold md:mx-[100px]">
        {{ $t("title.first") }}
        <span class="text-primary">{{ $t("title.second") }}</span>
      </h1>
      <p class="text-xl my-8 text-gray-500 md:mx-[120px]">
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
          gap-2
          sm:gap-3 sm:text-center
          items-center
          sm:justify-center
          my-8
        "
      >
        <div
          class="
            w-full
            sm:w-auto
            text-gray-500
            font-bold
            text-sm
            uppercase
            basis-full
          "
        >
          {{ $t("server") }}
        </div>

        <Button
          v-for="item in $store.state.servers"
          :key="item.name"
          :link="item.link"
          class="min-w-[109px]"
          >{{ $t(item.name) }}</Button
        >
      </div>
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
      if (this.$t(`cities`)[`${window.location.host.split(".")[0]}`]) {
        return window.location.host.split(".")[1]
          ? window.location.host.split(".")[0]
          : "kyiv";
      } else {
        return "kyiv";
      }
    },
  },
};
</script>
