 <template>
  <footer class="container text-center pb-10 flex flex-col items-center pt-16">
    <div class="flex flex-col xm:flex-row items-center justify-center">
      <img width="224" class="logo my-6" src="/eq-logo.png" :alt="$t('org')" />
      <span class="pt-3 sm:pt-0" v-html="$t('footer.initiative')"> </span>
    </div>
    <div class="my-5 lg:w-[500px] bg-gray-300 h-[1px]"></div>
    <span v-html="$t('footer.license')"></span>
  </footer>
</template>

