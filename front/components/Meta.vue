<template>
  <span v-if="false" />
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    width: {
      type: String,
      default: "200",
    },
    image: {
      type: String,
      default: `/logo_ceno.png`,
    },
  },
  data() {
    return {
      descrD: this.description ? this.description : this.$t("descr"),
      titleD: this.title ? this.title : this.$t("title"),
    };
  },
  head() {
    return {
      title: this.titleD,
      description: this.descrD,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.descrD,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.titleD,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: this.descrD,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.image,
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "summary_large_image",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: this.image,
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: this.titleD,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.titleD,
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: this.titleD,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: this.descrD,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.image,
        },
        {
          hid: "og:image:height",
          property: "og:image:height",
          content: this.height,
        },
        {
          hid: "og:image:width",
          property: "og:image:width",
          content: this.width,
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: process.env.DOMAIN + this.$route.path,
        },

        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: this.image,
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: this.image,
        },

        {
          hid: "vk:image",
          property: "vk:image",
          content: this.image,
        },
      ],
    };
  },
};
</script>
