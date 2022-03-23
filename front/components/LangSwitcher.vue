
<template>
  <v-select
    class="min-w-[160px] bg-white focus:outline-none"
    :clearable="false"
    :searchable="false"
    v-model="lang"
    :options="availableLocales"
  >
    <template #option="{ code }">
      <span class="px-2 sm:px-3 py-1 sm:py-2">
        {{ $t(`lang.${code}`) }}
      </span>
    </template>
    <template #selected-option="{}">
      <span class="py-1">
        {{ $t(`lang.${lang.code}`) }}
      </span>
    </template>
  </v-select>
</template>

<script>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  components: {
    "v-select": vSelect,
  },
  nuxtI18n: {
    locales: ["ua", "ru", "en"],
  },
  data() {
    return {
      lang: this.$i18n.locales.filter((i) => i.code === this.$i18n.locale)[0],
    };
  },
  watch: {
    lang: function (val) {
      this.$i18n.setLocale(val.code);
    },
  },
  name: "LangSwitcher",

  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale);
    },
  },
};
</script>
<style >
.vs__actions {
  padding-right: 10px;
}
.vs__dropdown-toggle {
  height: 42px;
}
</style>
