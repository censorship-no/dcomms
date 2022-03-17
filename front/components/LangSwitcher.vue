
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
      px-3
      py-2
      text-gray-700
    "
    v-model="lang"
  >
    <option
      v-bind:value="locale.code"
      v-for="locale in availableLocales"
      :key="locale.code"
    >
      <span class="px-2 sm:px-3 py-1 sm:py-2 leading-5">
        {{ locale.nameFull }}
      </span>
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
  watch: {
    lang: function (val) {
      this.$i18n.setLocale(val);
    },
  },
  name: "LangSwitcher",

  computed: {
    availableLocales() {
      return this.$i18n.locales;
    },
  },
};
</script>
