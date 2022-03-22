<template>
  <main class="container px-3 sm:px-0">
    <Hero />
    <div>
      <SectionTitle>
        <template v-slot:icon>
          <img class="w-16" src="/icons/chating.svg" alt="" />
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
          <img class="w-16" src="/icons/browsing.svg" alt="" />
        </template>
        <template>
          {{ $t("rubric.browsing") }}
        </template>
      </SectionTitle>
      <div v-for="item in browsing" :key="item.id">
        <AppItem :data="item" />
      </div>
    </div>
    <ReplicateSection />
  </main>
</template>

<script>
export default {
  layout: "default",
  nuxtI18n: {
    locales: ["ua", "ru", "en"],
  },
  name: "IndexPage",
  head() {
    return {
      meta: [
        // {
        //   hid: "og:image:alt",
        //   property: "og:image:alt",
        //   content: `${window.location.origin}/preview-logo.png`,
        // },
        // {
        //   hid: "twitter:image",
        //   name: "twitter:image",
        //   content: `${window.location.origin}/preview-logo.png`,
        // },
        // {
        //   hid: "og:image",
        //   property: "og:image",
        //   content: `${window.location.origin}/preview-logo.png`,
        // },
        // {
        //   hid: "vk:image",
        //   property: "vk:image",
        //   content: `${window.location.origin}/preview-logo.png`,
        // },
        // {
        //   hid: "og:image:secure_url",
        //   property: "og:image:secure_url",
        //   content: `${window.location.origin}/preview-logo.png`,
        // },
      ],
    };
  },
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
