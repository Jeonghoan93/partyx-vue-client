<template>
  <q-item
    clickable
    active-class="bg-teal-1 text-teal-6"
    ripple="false"
    :to="{}"
    exact
  >
    <q-item-section avatar>
      <q-icon :name="iconName" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-weight-normal">
        {{ label }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-badge color="blue-grey-6" class="rounded-borders">
        {{ badge }}
      </q-badge>
    </q-item-section>

    <q-tooltip
      v-if="miniMode"
      self="center left"
      anchor="center right"
      :offset="[5, 5]"
      transition-show="none"
      transition-hide="none"
      content-class="bg-blue-grey-10"
    >
      {{ tooltip }}
    </q-tooltip>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuItem',
  props: {
    iconName: String,
    label: String,
    badge: String,
    tooltip: String,
    miniMode: Boolean,
  },
});
</script>
