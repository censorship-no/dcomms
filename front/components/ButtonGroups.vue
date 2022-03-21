
<template>
  <div class="btn-group flex items-center flex-nowrap">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>
<style >
.btn-group > *:first-child {
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-right: 0px;
}
.btn-group > *:nth-child(n + 1) {
  border-radius: 0px;
  border-right: 0px;
}
.btn-group > *:last-child {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-right: 1px solid rgb(209, 213, 219);
}
</style>
