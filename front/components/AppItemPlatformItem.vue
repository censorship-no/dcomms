<template>
  <div class="sm:mx-0" v-if="data">
    <div
      class="mb-5 text-sm font-semibold uppercase text-gray-600"
      v-if="desktop"
    >
      {{ $t("items.desktopApp") }}
    </div>
    <div class="mb-5 text-sm font-semibold uppercase text-gray-600" v-else>
      {{ $t("items.mobileApp") }}
    </div>

    <div v-for="itemServers in item" :key="itemServers.label" class="sm:pr-6">
      <div class="mb-3 flex items-center">
        <span
          v-if="data.serversLabel"
          class="mr-3 text-sm sm:min-w-[100px] min-w-[80px] text-right"
          >{{ data.serversLabel[$i18n.locale] }}</span
        >
        <Button
          :link="itemServers.link"
          v-if="itemServers.name && itemServers.link"
          >{{ itemServers.name[$i18n.locale] }}</Button
        >
        <span
          class="text-sm text-gray-600 flex"
          v-if="itemServers.type === 'copy'"
        >
          <input
            id="text"
            :value="itemServers.name[$i18n.locale]"
            readonly
            type="text"
            class="w-[76%] focus:outline-none"
          />
          <span @click="doCopy()"
            ><img src="/icons/copy.svg" class="w-4 cursor-pointer" alt=""
          /></span>
        </span>
      </div>
      <div v-if="itemServers.docs" class="flex items-center mb-3">
        <span class="mr-3 text-sm sm:min-w-[100px] min-w-[80px] text-right"
          >{{ $t("items.instruction") }}
        </span>

        <ButtonGroups>
          <Button
            v-for="(itemDocs, index) in itemServers.docs"
            :key="index"
            :link="itemDocs.link[$i18n.locale]"
            >{{ itemDocs.name }}
          </Button>
        </ButtonGroups>
      </div>
    </div>
    <div class="mb-3 items-center" v-if="data.downloads">
      <div class="flex items-center">
        <span class="mr-3 text-sm sm:min-w-[100px] min-w-[80px] text-right"
          >{{ $t("items.downloads") }}
        </span>
        <ButtonGroups>
          <Button
            v-for="(itemDownload, index) in data.downloads.mirrors"
            :key="index"
            :link="itemDownload.link"
            >{{ itemDownload.name[$i18n.locale] }}
          </Button>
        </ButtonGroups>
      </div>
      <div v-if="data.platforms.length" class="italic text-sm ml-[110px] pt-3">
        (<span
          v-for="(platformItem, index) in data.platforms"
          :key="platformItem.name"
        >
          <a
            v-if="platformItem.link"
            :href="platformItem.link"
            class="text-sm"
            >{{
              platformItem.name +
              (index === data.platforms.length - 1 ? "" : ", ")
            }}</a
          >
          <span v-else class="text-sm">{{
            platformItem.name +
            (index === data.platforms.length - 1 ? "" : ", ")
          }}</span> </span
        >)
      </div>
    </div>
  </div>
  <div v-else>
    <div
      class="mb-5 text-sm font-semibold uppercase text-gray-600"
      v-if="desktop"
    >
      {{ $t("items.desktopApp") }}
    </div>
    <div class="mb-5 text-sm font-semibold uppercase text-gray-600" v-else>
      {{ $t("items.mobileApp") }}
    </div>
    <span
      class="
        inline-block
        bg-gray-50
        border border-gray-300
        rounded-lg
        py-3
        px-5
      "
    >
      <img src="/icons/fail.svg" alt="" class="w-8 inline mr-2" />
      <span class="text-gray-700 text-lg">{{ $t("items.notAvail") }}</span>
    </span>
  </div>
</template>
<script>
export default {
  nuxtI18n: {
    locales: ["ua", "ru", "en"],
  },
  name: "AppItemPlatformItem",
  props: { data: Object, desktop: Boolean },
  methods: {
    doCopy() {
      var copyText = document.getElementById("text");

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999);
      /* For mobile devices */ navigator.clipboard.writeText(copyText.value);
      alert(this.$t("adressCopy"));
    },
  },
  computed: {
    server() {
      if (this.$t(`cities['${window.location.host.split(".")[0]}']`)) {
        return window.location.host.split(".")[1]
          ? window.location.host.split(".")[0]
          : "kyiv";
      } else {
        return "kyiv";
      }
    },
    item() {
      if (this.data.servers) {
        return this.data.servers.filter((item) => {
          return item.label === this.server || item.label === "all";
        });
      } else {
        return false;
      }
    },
  },
};
</script>
<style >
p {
  margin-bottom: 10px;
}
</style>
