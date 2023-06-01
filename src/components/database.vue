<script setup>
  import { ref } from 'vue';
  import Dexie from 'dexie';
  import { db } from './db.js';
  let message = ref();
  let tables = ref([])
  Dexie.exists('riensave')
  .then(exists => {
    if (exists) {
      message.value = "database exists";
      // db.open((database) => {
      //   console.log(database);
      // })
      db.tables.forEach(tbl => {
        tables.value.push({name: tbl.name})
      });
    } else {
      message.value = "No database";
      db.open((database) => {
        console.log(database);
      })
    }
  })
  .catch(err => {
    console.log(err);
  }) 
</script>

<template>
  <div>
    <h1>List of Table</h1>
    <ul>
      <li v-for="table in tables">
        {{ table.name }}
      </li>
    </ul>
  </div>
  <router-view/>
</template>
