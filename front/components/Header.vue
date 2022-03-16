
<template>
  <header class="container mx-auto flex items-center justify-between px-3 py-8">
    <img class="w-[160px]" src="/dcomm_logo.svg" :alt="$t('title')" />
    <LangSwitcher />
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
