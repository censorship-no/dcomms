<template>
  <div class="mb-8 bg-white rounded-xl p-8">
    <div class="sm:flex mb-4">
      <img
        :src="data.logo"
        alt=""
        class="mb-6 sm:mb-0 mx-auto h-[100px] w-[100px] object-contain sm:mr-10"
      />
      <div
        class="mb-6 sm:mb-0 sm:text-xl"
        v-html="data.descr[$i18n.locale]"
      ></div>
    </div>
    <div class="sm:grid sm:grid-cols-2 sm:gap-8 mt-8">
      <div v-if="data.desktopApp" class="p-5 sm:rounded-lg mb-6 -mx-3 sm:mx-0">
        <div class="mb-3 font-bold">{{ $t("items.desktopApp") }}</div>
        <div v-if="data.desktopApp.name[$i18n.locale]" class="mb-3">
          <img
            :src="data.mobileApp.logo"
            class="inline w-5"
            :alt="data.mobileApp.name[$i18n.locale]"
          />
          <a
            class="text-lg"
            :href="data.desktopApp.link"
            v-if="data.desktopApp.link"
          >
            {{ data.desktopApp.name[$i18n.locale] }}</a
          >
          <span v-else> {{ data.desktopApp.name[$i18n.locale] }}</span>
          <a
            v-if="data.desktopApp.localLink"
            :href="data.desktopApp.localLink"
            class="my-1 text-gray-600 whitespace-nowrap block"
          >
            <img class="inline w-3" src="/download.svg" alt="" />
            <span class="mr-1"> {{ $t("items.localDownload") }}</span>
          </a>
          (<span
            v-for="(platformItem, index) in data.desktopApp.platforms"
            :key="platformItem.name"
          >
            <a v-if="platformItem.link" :href="platformItem.link">{{
              platformItem.name +
              (index === data.desktopApp.platforms.length - 1 ? "" : ", ")
            }}</a>
            <span v-else>{{
              platformItem.name +
              (index === data.desktopApp.platforms.length - 1 ? "" : ", ")
            }}</span> </span
          >)
        </div>
        <div>
          <div
            v-for="itemServers in data.desktopApp.servers"
            :key="itemServers.name"
            class="mb-3 sm:pr-6"
          >
            <a :href="itemServers.link" v-if="itemServers.link">{{
              itemServers.name[$i18n.locale]
            }}</a>
            <span v-else>{{ itemServers.name[$i18n.locale] }}</span>
            <span v-if="itemServers.docs">
              (
              {{ $t("items.instruction") }}
              <a
                v-for="(itemDocs, index) in itemServers.docs"
                :key="itemDocs.link"
                :href="itemDocs.link[$i18n.locale]"
                >{{
                  itemDocs.name +
                  (index === itemServers.docs.length - 1 ? "" : ", ")
                }} </a
              >)
            </span>
          </div>
        </div>
      </div>
      <div v-if="data.mobileApp" class="p-5 sm:rounded-lg -mx-3 sm:mx-0">
        <div class="mb-3 font-bold">{{ $t("items.mobileApp") }}</div>
        <div v-if="data.mobileApp.name[$i18n.locale]" class="mb-3">
          <img
            :src="data.mobileApp.logo"
            class="inline w-5"
            :alt="data.mobileApp.name[$i18n.locale]"
          />
          <a
            class="text-lg"
            :href="data.mobileApp.link"
            v-if="data.mobileApp.link"
          >
            {{ data.mobileApp.name[$i18n.locale] }}</a
          >
          <span v-else> {{ data.mobileApp.name[$i18n.locale] }}</span>
          (<span
            v-for="(platformItem, index) in data.mobileApp.platforms"
            :key="platformItem.name"
          >
            <a v-if="platformItem.link" :href="platformItem.link">{{
              platformItem.name +
              (index === data.mobileApp.platforms.length - 1 ? "" : ", ")
            }}</a>
            <span v-else>{{
              platformItem.name +
              (index === data.mobileApp.platforms.length - 1 ? "" : ", ")
            }}</span> </span
          >)
          <a
            v-if="data.mobileApp.localLink"
            :href="data.mobileApp.localLink"
            class="my-1 text-gray-600 whitespace-nowrap block"
          >
            <img class="inline w-3" src="/download.svg" alt="" />
            <span class="mr-1"> {{ $t("items.localDownload") }}</span>
          </a>
          <div v-if="data.mobileApp.docs">
            {{ $t("items.instruction") }}
            <span v-for="(docs, index) in data.mobileApp.docs" :key="docs.name"
              ><a :href="docs.link[$i18n.locale]">{{
                docs.name +
                (index === data.mobileApp.docs.length - 1 ? "" : ", ")
              }}</a></span
            >
          </div>
        </div>
        <div
          v-for="itemServers in data.mobileApp.servers"
          :key="itemServers.name"
          class="mb-3"
        >
          <a :href="itemServers.link" v-if="itemServers.link">{{
            itemServers.name[$i18n.locale]
          }}</a>
          <span v-else>{{ itemServers.name[$i18n.locale] }}</span>

          <span v-if="itemServers.docs">
            ({{ $t("items.instruction") }}
            <a
              v-for="itemDocs in itemServers.docs"
              :key="itemDocs.link"
              :href="itemDocs.link[$i18n.locale]"
              >{{ itemDocs.name }} </a
            >)
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { name: "AppItem", props: ["data"] };
</script>
<style >
p {
  margin-bottom: 10px;
}
</style>
