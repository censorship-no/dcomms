
<template>
  <select
    name=""
    id=""
    class="
      min-w-[50px]
      sm:text-sm
      border border-gray-300
      bg-white
      p-1
      shadow-sm
      rounded
      text-gray-700
    "
    @input="changeLang"
    v-model="lang"
  >
    <option
      v-bind:value="locale.code"
      v-for="locale in availableLocales"
      :key="locale.code"
    >
      {{ locale.nameFull }}
    </option>
  </select>
</template>

<script>
export default {
  nuxtI18n: {
    locales: ["ua", "ru", "en"],
  },
  data() {
    return {
      lang: this.$i18n.locale,
    };
  },
  name: "LangSwitcher",
  methods: {
    changeLang() {
      this.$i18n.setLocale(this.lang);
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },
};
</script>
