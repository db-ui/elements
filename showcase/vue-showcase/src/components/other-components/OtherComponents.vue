<script setup lang="ts">
import {
  DbLinklist,
  DbLink,
  DbNotifications,
  DbNotification,
  DbIcon,
  DbButton
} from '@db-ui/v-elements/dist/components';

import { ref } from 'vue';

const notification = ref(false);
</script>

<style>
db-notification {
  position: fixed;
  bottom: 1rem;
  width: 50vw;
  left: 25vw;
}
</style>

<template>
  <div>
    <p>Link list:</p>
    <DbLinklist>
      <li>
        <DbLink href="https://db-ui.github.io/elements/" target="_blank">
          DB UI Elements components documentation
        </DbLink>
      </li>
      <li>
        <DbLink href="https://db-ui.github.io/elements/" target="_blank">
          DB UI Core components documentation
        </DbLink>
      </li>
    </DbLinklist>
    <p>Notification:</p>
    <DbButton variant="primary" @click="notification = true">
      Open Notification!
    </DbButton>
    <DbNotifications v-if="notification" variant="hovering">
      <DbNotification type="success">
        <DbIcon icon="account" slot="prenotification" variant="20-outline" />
        success: Lorem ipsum dolor sit amet, consectetur adipisicing elit
        <DbIcon
          icon="close"
          slot="postnotification"
          variant="20-outline"
          @click="notification = false"
          @keypress="notification = false"
          tabindex="0"
          role="button"
        />
      </DbNotification>
    </DbNotifications>
  </div>
</template>
