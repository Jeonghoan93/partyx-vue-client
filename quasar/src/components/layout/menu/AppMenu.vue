<template>
  <div class="full-height column">
    <q-card flat square class="z-top bg-white q-pa-none col-auto">
      <q-list>
        <!-- mini-mode -->
        <q-item v-if="miniMode" style="height: 108px">
          <q-item-section avatar v-if="currentUser">
            <q-avatar size="xl">
              <img src="" width="33px" height="33px" />
              <q-tooltip
                self="center left"
                anchor="center right"
                :offset="[5, 5]"
                transition-show="none"
                transition-hide="none"
              >
                get User Name -
                {{ currentUser.group ? currentUser.group.name : 'N/A' }}
                /
                {{ currentUser.office || 'N/A' }}
              </q-tooltip>
            </q-avatar>
          </q-item-section>

          <q-item-section v-if="currentUser">
            <q-item-label>get User Name</q-item-label>
            <q-item-label caption>
              {{ currentUser.group ? currentUser.group.name : 'N/A' }}
              /
              {{ currentUser.office || 'N/A' }}
            </q-item-label>
          </q-item-section>
        </q-item>

        <!-- full-mode -->
        <q-item v-else-if="currentUser" style="height: 108px">
          <q-item-section avatar>
            <q-avatar size="xl">
              <img src="" width="33px" height="33px" />
              <q-tooltip
                self="center left"
                anchor="center right"
                :offset="[5, 5]"
                transition-show="none"
                transition-hide="none"
              >
                get User Name -
                {{ currentUser.group ? currentUser.group.name : 'N/A' }}
                /
                {{ currentUser.office || 'N/A' }}
              </q-tooltip>
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Get user Name</q-item-label>
            <q-item-label caption>
              {{ currentUser.group ? currentUser.group.name : 'N/A' }}
              /
              {{ currentUser.office || 'N/A' }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator color="white" class="shadow-1" />
    </q-card>

    <div class="col">
      <template
        v-if="
          menu && hasOneOfUserRoles([Roles.Agent, Roles.Admin, Roles.AgentPlus])
        "
      >
        <q-list v-if="miniMode">
          <q-item clickable ripple="false" :to="{}" class="bg-positive">
            <q-item-section avatar>
              <q-icon name="add_circle" color="white" style="margin: 14px 0" />
            </q-item-section>

            <q-tooltip
              self="center left"
              anchor="center right"
              :offset="[5, 5]"
              transition-show="none"
              transition-hide="none"
              content-class="bg-positive text-white"
            >
              menu current process
            </q-tooltip>
          </q-item>
        </q-list>

        <div
          v-if="!miniMode"
          class="q-px-xl q-mt-md q-pb-md"
          :class="{ 'border-bottom': menuIsScrolled }"
        >
          <q-btn
            rounded
            color="positive"
            text-color="white"
            :to="{}"
            class="text-transform--none cy-create-application-button full-width"
            id="create-application-button"
            unelevated
          >
            <q-icon
              name="add_circle"
              class="q-mr-sm"
              color="white"
              size="22px"
            />
            <span> menu create app</span>
          </q-btn>
        </div>
      </template>

      <q-scroll-area style="height: calc(100% - 68px)" @scroll="onScrollMenu">
        <q-list
          v-if="menu && hasOneOfUserRoles([Roles.Agent, Roles.Admin])"
          class="test-grey-10"
        >
          <MenuItem
            :iconName="'phone'"
            :label="'Calls'"
            :badge="'Calls'"
            :miniMode="true"
            :tooltip="'Tooltip Text'"
          />

          <MenuItem
            :iconName="'phone_missed'"
            :label="'Missed'"
            :badge="'Missed'"
            :miniMode="true"
            :tooltip="'Tooltip Text'"
          />

          <MenuItem
            :iconName="'format_list_bulleted'"
            :label="'Not Accepted'"
            :badge="'Not Accepted'"
            :miniMode="true"
            :tooltip="'Tooltip Text'"
          />

          <MenuItem
            :iconName="'phone_paused'"
            :label="'No Follow Up'"
            :badge="'No Follow Up'"
            :miniMode="true"
            :tooltip="'Tooltip Text'"
          />
        </q-list>

        <q-separator />

        <q-list v-if="menu" class="text-grey-10">
          <MenuItem
            :iconName="'snooze'"
            :label="'Saved Apps'"
            :badge="'Saved Apps'"
            :miniMode="true"
            :tooltip="'Tooltip Text'"
          />

          <q-separator />

          <MenuItem
            :iconName="'assignment'"
            :label="'New Apps'"
            :badge="'New Apps'"
            :miniMode="true"
            :tooltip="'Tooltip Text'"
          />

          <MenuItem
            :iconName="'pending_actions'"
            :label="'Processing'"
            :badge="'Processing'"
            :miniMode="true"
            :tooltip="'Tooltip Text'"
          />
        </q-list>

        <q-list v-if="menu" class="text-grey-10">
          <MenuItem
            :iconName="'assignment_turned_in'"
            :label="'Completed'"
            :badge="'Completed'"
            :miniMode="true"
            :tooltip="'Tooltip Text'"
          />

          <MenuItem
            :iconName="'check'"
            :label="'Checking'"
            :badge="'Something'"
            :miniMode="true"
            :tooltip="'Tooltip Text'"
          />

          <MenuItem
            :iconName="'error_outline'"
            :label="'Error'"
            :badge="'Something'"
            :miniMode="true"
            :tooltip="'Tooltip Text'"
          />

          <MenuItem
            :iconName="'inbox'"
            :label="'Inbox'"
            :badge="'Something'"
            :miniMode="true"
            :tooltip="'Tooltip Text'"
          />

          <MenuItem
            :iconName="'unpublished'"
            :label="'Unpublished'"
            :badge="'Something'"
            :miniMode="true"
            :tooltip="'Tooltip Text'"
          />

          <MenuItem
            :iconName="'block'"
            :label="'Block'"
            :badge="'Something'"
            :miniMode="true"
            :tooltip="'Tooltip Text'"
          />
        </q-list>
      </q-scroll-area>
    </div>

    <!-- toggle mini mode -->
    <q-lit class="text-grey-10 col-auto">
      <q-item
        clickable
        @click="toggleMiniMode"
        class="bg-blue-grey-1 text-blue-grey-10"
      >
        <q-item-section avatar>
          <q-icon :name="miniMode ? 'chevron_right' : 'chevron_left'" />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-weight-normal">Minimize</q-item-label>
        </q-item-section>
      </q-item>
    </q-lit>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { userFullName } from 'src/utils/helper';
import { Roles } from 'src/types';
import MenuItem from './MenuItem.vue';

const CurrentUser = {
  roles: [Roles.Agent],
  group: {
    name: 'group name',
  },
  office: 'office name',
};

export default defineComponent({
  name: 'AppMenu',
  components: {
    MenuItem,
  },
  data() {
    return {
      currentUser: CurrentUser,
      Roles,
      menuIsScrolled: true,
      miniMode: false,
      menu: true,
    };
  },
  methods: {
    toggleMiniMode() {
      this.miniMode = !this.miniMode;
      this.$emit('toggle', this.miniMode);
    },
    onScrollMenu({ verticalPosition }: { verticalPosition: number }) {
      this.menuIsScrolled = verticalPosition > 0;
    },
    userFullName,
    hasOneOfUserRoles(roles: Roles[]) {
      if (!this.currentUser || !this.currentUser.roles) {
        return false;
      }

      for (const role of roles) {
        if (this.currentUser.roles.includes(role)) {
          return true;
        }
      }

      return false;
    },
  },
});
</script>

<style lang="scss" scoped>
.border-bottom {
  border-bottom: 1px solid $grey-4;
}
</style>
