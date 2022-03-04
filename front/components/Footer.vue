<template>
  <footer class="container text-center pb-6">
    <div class="flex flex-col xm:flex-row items-center justify-center mb-3">
    <img width="100" class="logo mr-3" src="/logo_ceno.png" :alt="$t('org')" />
    <span  class="pt-3 sm:pt-0">
    {{ $t("footer.initiative") }}
    <a

      target="_blank"
      href="https://censorship.no"

    >
      {{ $t("footer.org") }}</a
    ></span>
    </div>
    <a href="https://github.com/censorship-no/dcomms">GNU General Public License v3.0 </a>
  </footer>
</template>

