<script setup lang="ts">
import {
  DbBrand,
  DbFooter,
  DbHeader,
  DbPage,
  DbMainnavigation,
  DbLink
} from '@db-ui/v-elements/dist/components';
import { navigationItems } from '@/navigationItems';
</script>

<template>
  <DbPage>
    <DbHeader slot="header">
      <DbBrand src="db_logo.svg" href="/vue-showcase/">
        DB UI Elements in Vue Showcase
      </DbBrand>
      <DbMainnavigation>
        <DbLink href="/" current="page">
          Pages
          <DbLink
            v-for="item of navigationItems"
            :current.attr="
              navigationItems.indexOf(item) === 0 ? 'page' : 'false'
            "
          >
            <router-link :to="item.link">{{ item.label }}</router-link>
          </DbLink>
        </DbLink>
      </DbMainnavigation>
      <div />
    </DbHeader>
    <div><router-view></router-view></div>
    <DbFooter slot="footer" copyright border></DbFooter>
  </DbPage>
</template>
