<template>
  <main>
    <div>
      <div class="position-relative d-flex justify-content-center align-items-center">
        <img src="@/assets/quran.jpeg" class="img-fluid" alt="quran" />
        <div class="input-group input-group-lg position-absolute">
          <span class="input-group-text" id="inputGroup-sizing-lg">Search</span>
          <input
            v-model="search"
            type="text"
            class="form-control"
            aria-label="Searchbar"
            aria-describedby="inputGroup-sizing-lg"
            @input="searchNames"
          />
        </div>
      </div>
      <ul class="list-group">
        <li
          class="list-group-item my-1"
          v-for="item in filteredData"
          :key="item.surah_num"
        >
          <router-link :to="`/surah-${item.surah_num}`" class="text-dark">
            {{ item.surah_num }}. {{ item.surah_rus }}
          </router-link>
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
    const search = ref("");
    const filteredData = ref([]);

    onMounted(async () => {
      names.value = await getSurahNames();
      searchNames();
    });

    const searchNames = () => {
      filteredData.value = names.value.filter(
        (name) =>
          name.surah_rus.includes(search.value) || name.surah_num.includes(search.value)
      );
    };
    return {
      filteredData,
      search,
      searchNames,
    };
  },
};
</script>

<style scoped></style>
