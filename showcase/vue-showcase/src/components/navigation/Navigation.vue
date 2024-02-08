<script setup lang="ts">
import { DbSidenavi, DbLink } from '@db-ui/v-elements/dist/components';

import { navigationItems } from '@/navigationItems';
</script>

<template>
  <div>
    <p>DbSidenavi:</p>
    <DbSidenavi>
      <DbLink
        v-for="item in navigationItems"
        :key="item.link"
        :icon.attr="item.icon"
        :current.attr="navigationItems.indexOf(item) === 0 ? 'page' : 'false'"
      >
        <router-link :to="item.link">{{ item.label }}</router-link>
      </DbLink>
    </DbSidenavi>
  </div>
</template>
