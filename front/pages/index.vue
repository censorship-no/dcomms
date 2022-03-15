<template>
  <div>
    <Hero />
    <main class="container px-3 sm:px-0">
      <div>
        <SectionTitle>
          <template v-slot:icon>
            <img class="w-10" src="/icons/chating.svg" alt="" />
          </template>
          <template>
            {{ $t("rubric.messaging") }}
          </template>
        </SectionTitle>
        <div v-for="item in messaging" :key="item.id">
          <AppItem :data="item" />
        </div>

        <SectionTitle>
          <template v-slot:icon>
            <img class="w-10" src="/icons/browsing.svg" alt="" />
          </template>
          <template>
            {{ $t("rubric.browsing") }}
          </template>
        </SectionTitle>
        <div v-for="item in browsing" :key="item.id">
          <AppItem :data="item" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  layout: "default",
  nuxtI18n: {
    locales: ["ua", "ru", "en"],
  },
  name: "IndexPage",
  computed: {
    messaging() {
      return this.$store.state.items.messaging.filter((item) => {
        return item.show === true;
      });
    },
    browsing() {
      return this.$store.state.items.browsing.filter((item) => {
        return item.show === true;
      });
    },
  },
};
</script>
