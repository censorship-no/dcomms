
<template>
  <header class="header m-auto flex flex-col items-center my-5">
    <img class="w-20" src="/bridge-icon.png" alt="" />
    <div class="block text-center">
      <h1 class="text-3xl mb-3">{{ $t("title") }}</h1>
      <nuxt-link
        class=""
        v-for="(locale, index) in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        >{{ locale.name + (index === availableLocales.length - 1 ? "" : " /") }}
      </nuxt-link>
      <h2 class="text-2xl mt-4">
        {{ $t("subtitle") }}
      </h2>
    </div>
  </header>
</template>

<script>
export default {
  nuxtI18n: {
    locales: ["ua", "ru", "en"],
  },
  name: "Header",
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
