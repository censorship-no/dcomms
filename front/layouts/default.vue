

<template>
  <div class="bg-gray-50 wrapper">
    <Header />
    <main>
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
html {
  font-family: Inter, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.wrapper {
  background-image: url("/bg.svg");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
