<script setup lang="ts">
import { DbTabBar, DbTab } from '@db-ui/v-elements/dist/components';

import Form from '../form/Form.vue';
import Navigation from '../navigation/Navigation.vue';
import Tables from '../tables/Tables.vue';
import OtherElements from '../other-elements/OtherElements.vue';
import OtherComponents from '../other-components/OtherComponents.vue';
</script>

<template>
  <DbTabBar>
    <DbTab label="Inputs" name="tab-bar" active>
      <Form />
    </DbTab>
    <DbTab label="Other Elements" name="tab-bar"> <OtherElements /> </DbTab>
    <DbTab label="Other Components" name="tab-bar"> <OtherComponents /> </DbTab>
    <DbTab label="Tables" name="tab-bar"> <Tables /> </DbTab>
    <DbTab label="Navigation" name="tab-bar">
      <Navigation />
    </DbTab>
  </DbTabBar>
</template>
