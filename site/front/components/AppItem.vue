<template>
  <div>
    <div class="sm:grid sm:grid-cols-12 sm:gap-8 mb-4">
      <img :src="data.logo" alt="" class="sm:col-span-2 mb-6 sm:mb-0" />
      <div
        class="sm:col-span-10 mb-6 sm:mb-0"
        v-html="data.descr[$i18n.locale]"
      ></div>
    </div>
    <div class="sm:grid sm:grid-cols-2 sm:gap-8">
      <div
        v-if="data.desktopApp"
        class="bg-white p-5 sm:rounded-lg mb-6 -mx-3 sm:mx-0"
      >
        <div class="mb-3 font-bold">{{ $t("items.desktopApp") }}</div>
        <div v-if="data.desktopApp.name[$i18n.locale]" class="mb-3">
          <img
            :src="data.mobileApp.logo"
            class="inline w-3"
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
            class="block mt-2 text-gray-600"
          >
            <img class="inline w-3" src="/download.svg" alt="" />
            <span class="mr-1"> {{ $t("items.localDownload") }}</span>
          </a>
        </div>
        <div>
          <div
            v-for="itemServers in data.desktopApp.servers"
            :key="itemServers.name"
            class="mb-3 sm:pr-6"
          >
            <a class="sm:block" :href="itemServers.link">{{
              itemServers.name[$i18n.locale]
            }}</a>
            <span class="sm:block">
              (
              {{ $t("items.instruction") }}
              <a
                v-for="itemDocs in itemServers.docs"
                :key="itemDocs.link"
                :href="itemDocs.link"
                >{{ itemDocs.name[$i18n.locale] }} </a
              >)
            </span>
          </div>
        </div>
      </div>
      <div
        v-if="data.mobileApp"
        class="bg-white p-5 sm:rounded-lg mb-6 -mx-3 sm:mx-0"
      >
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
          <a
            v-if="data.mobileApp.localLink"
            :href="data.mobileApp.localLink"
            class="block mt-2 text-gray-600"
          >
            <img class="inline w-3" src="/download.svg" alt="" />
            <span class="mr-1"> {{ $t("items.localDownload") }}</span>
          </a>
        </div>
        <div
          v-for="itemServers in data.mobileApp.servers"
          :key="itemServers.name"
          class="mb-3"
        >
          <a :href="itemServers.link">{{ itemServers.name[$i18n.locale] }}</a>
          <span>
            ({{ $t("items.instruction") }}
            <a
              v-for="itemDocs in itemServers.docs"
              :key="itemDocs.link"
              :href="itemDocs.link"
              >{{ itemDocs.name[$i18n.locale] }} </a
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
