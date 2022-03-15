
<template>
  <header class="container mx-auto flex items-center justify-between px-3 py-8">
    <img class="w-[160px]" src="/dcomm_logo.svg" :alt="$t('title')" />
    <div class="block text-center">
      <nuxt-link
        class=""
        v-for="(locale, index) in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        >{{ locale.name + (index === availableLocales.length - 1 ? "" : " /") }}
      </nuxt-link>
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
