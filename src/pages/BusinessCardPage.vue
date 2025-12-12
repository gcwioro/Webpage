<template>
  <div class="page-container flex items-center justify-center min-h-screen bg-gray-100">
    <div class="card-wrapper w-[85mm] h-[55mm] bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="relative w-full h-full">
        <div
          class="absolute w-full h-full transition-transform duration-700 transform-style-preserve-3d"
          :class="{ 'rotate-y-180': isFlipped }"
        >
          <div class="absolute w-full h-full backface-hidden bg-gradient-accent">
            <div class="flex flex-col items-center justify-center h-full p-4 text-white">
              <h1 class="text-4xl font-bold">Günther Cwioro</h1>
              <p class="mt-2 text-xl">Software Engineer & Consultant</p>
            </div>
          </div>
          <div
            class="absolute w-full h-full backface-hidden rotate-y-180 bg-white"
          >
            <div class="flex items-center justify-between h-full p-4">
              <div class="flex flex-col items-start justify-center">
                <p class="text-lg font-bold">CTO/Founder of Autoletter</p>
                <p class="mt-2 text-sm text-gray-600">guenther@cwioro.online</p>
                <p class="text-sm text-gray-600">+43 676 67 11 259</p>
                <p class="text-sm text-gray-600">cwioro.online</p>
              </div>
              <div class="w-24 h-24">
                <qrcode-vue value="https://cwioro.online" :size="96" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="no-print absolute bottom-4 right-4">
      <button
        @click="isFlipped = !isFlipped"
        class="px-4 py-2 mr-2 text-white rounded-lg bg-accent"
      >
        Flip
      </button>
      <button @click="print" class="px-4 py-2 text-white rounded-lg bg-accent">
        Print
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import QrcodeVue from "qrcode.vue";

const isFlipped = ref(false);

const print = () => {
  window.print();
};
</script>

<style scoped>
.transform-style-preserve-3d {
  transform-style: preserve-3d;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.backface-hidden {
  backface-visibility: hidden;
}

@media print {
  .no-print {
    display: none;
  }
  .page-container {
    min-height: 0;
    background: none;
    display: block;
  }
  .card-wrapper {
    box-shadow: none;
    border: 1px solid #ddd;
  }
}
</style>
