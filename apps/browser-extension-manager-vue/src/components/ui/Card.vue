<!-- /**
 * Base card component
 */ -->
<template>
  <div
    class="flex flex-col justify-between rounded-[20px] overflow-hidden shadow-md p-5"
  >
    <!-- Top area -->
    <div>
      <slot name="header" />
    </div>

    <!-- Bottom area -->
    <div class="flex justify-between items-center">
      <slot name="footer-left" />
      <slot name="footer-right" />
    </div>
  </div>
</template>
