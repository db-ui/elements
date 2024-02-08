<script setup lang="ts">
import { DbTable, DbPagination } from '@db-ui/v-elements/dist/components';

import { columnExampleData } from '@/mockData';
import { ref } from 'vue';

const pagination = ref(2);
const columnExampleDataString = JSON.stringify(columnExampleData);
</script>

<style>
table {
  width: 100%;
}
</style>

<template>
  <div>
    <p>Pagination (with custom events):</p>
    <DbPagination
      :pages="9"
      :count="3"
      titleprevious="Titel vorher"
      titlenext="Titel nächstes"
      titlepagination="Seitennummer"
      textprevious="Vorher"
      textnext="Nächstes"
      arialabel="test2"
      v-model="pagination"
    >
    </DbPagination>
    <p>Table:</p>
    <p>Table data as object</p>
    <DbTable :tabledata="columnExampleData" />
    <p>Table data as string</p>
    <DbTable :tabledata="columnExampleDataString" />
  </div>
</template>
