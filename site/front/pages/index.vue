<template>
  <div>
    <Header></Header>

    <main class="container px-3 sm:px-0">
      <div>
        <h3 class="text-xl font-bold my-6">{{ $t("rubric.messaging") }}</h3>
        <div v-for="item in messaging" :key="item.id">
          <AppItem :data="item" />
        </div>
        <h3 class="text-xl font-bold my-6">{{ $t("rubric.browsing") }}</h3>
      </div>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
export default {
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
  },
};
</script>
