<template>
  <main>
    <div>
      <div class="position-relative d-flex justify-content-center align-items-center">
        <img src="@/assets/quran.jpeg" class="img-fluid" alt="quran" />
        <div class="input-group input-group-lg position-absolute">
          <span class="input-group-text" id="inputGroup-sizing-lg">Search</span>
          <input
            type="text"
            class="form-control"
            aria-label="Searchbar"
            aria-describedby="inputGroup-sizing-lg"
          />
        </div>
      </div>
      <ul class="list-group">
        <li class="list-group-item" v-for="item in names" :key="item.surah_num">
          {{ item.surah_num }}. {{ item.surah_rus }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
import { onMounted, ref } from "vue";
import { getSurahNames } from "@/services/surahAPI";
export default {
  name: "HomeView",
  setup() {
    const names = ref([]);
    onMounted(async () => {
      names.value = await getSurahNames();
    });
    return {
      names,
    };
  },
};
</script>

<style scoped></style>
