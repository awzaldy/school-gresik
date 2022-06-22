<template>
  <button class="btn">
    <slot>Button</slot>
  </button>
</template>

<style lang="postcss" scoped>
.btn {
  @apply font-bold py-2 px-4 rounded;
  &.btn-blue {
    @apply bg-blue-500 text-white dark:bg-yellow-700 ;
    &:hover {
      @apply bg-blue-700;
    }
  }
  &.btn-green {
    @apply bg-green-600 text-white dark:bg-yellow-700 ;
    &:hover {
      @apply bg-green-700;
    }
  }
  &.btn-menu {
    @apply font-normal ;
    &:hover {
      @apply border-2 dark:bg-gray-900 bg-white shadow-md dark:border-gray-900;
    }
  }

}
</style>