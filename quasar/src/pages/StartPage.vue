<template>
  <q-page
    class="page page-home q-py-md p-pl-md q-pr-none q-mx-lg q-mr-sm q-mb-xl"
  >
    <h3 class="title title-greeting text-blue-grey-10">PartyX</h3>
    <h3 class="title title-user">Admin User</h3>
    <template v-if="hasUserSectionPermissions">
      <div class="text-subtitle2 section-name">Links to pages</div>
      <div class="row items-start">
        <template v-if="hasAgentPermissions">
          <q-item class="home-card" clickable :to="{}">
            <div class="col card-body">
              <div class="row justify-center items-center q-pa-none card-icon">
                <q-icon name="person" size="33px" />
              </div>
              <div class="row justify-center items-center q-pa-none card-text">
                home create application
              </div>
            </div>
          </q-item>

          <q-item class="home-card" clickable :to="{}">
            <div class="col card-body">
              <div class="row justify-center items-center q-pa-none card-icon">
                <q-icon name="snooze" size="33px" />
              </div>
              <div class="row justify-center items-center q-pa-none card-text">
                home saved app
              </div>
            </div>
          </q-item>
        </template>

        <template v-if="hasAdvisorPermissions">
          <q-item class="home-card" clickable :to="{}">
            <div class="col card-body">
              <div class="col card-body">
                <div
                  class="row justify-center items-center q-pa-none card-icon"
                >
                  <q-icon name="man" size="33px" />
                </div>
                <div
                  class="row justify-center items-center q-pa-none card-text"
                >
                  home meeting today
                </div>
              </div>
            </div>
          </q-item>

          <q-item class="home-card" clickable :to="{}" v-if="bidsMockEnabled">
            <div class="col card-body">
              <div class="row justify-center q-pa-none card-icon">
                <q-icon name="assignment" size="33px" />
              </div>
              <div class="row justify-center items-center q-pa-none card-text">
                home mock bids
              </div>
            </div>
          </q-item>
        </template>

        <template v-if="hasCustomerServicePermission">
          <q-item class="home-card" tag="a" clickable href="" target="_blanc">
            <div class="col card-body">
              <div class="row justify-center items-center q-pa-none card-icon">
                <q-icon name="phone" size="33px" />
              </div>
              <div class="row justify-center items-center q-pa-none card-text">
                customer service
              </div>
            </div>
          </q-item>
        </template>

        <template v-if="hasMeetingUserPermission">
          <q-item class="home-card" tag="a" clickable href="" target="_blanc">
            <div class="col card-body">
              <div class="row justify-center items-center q-pa-none card-icon">
                <q-icon name="girl" size="33px" />
              </div>
              <div class="row justify-center items-center q-pa-none card-text">
                meeting management
              </div>
            </div>
          </q-item>
        </template>

        <q-item class="home-card" tag="a" clickable href="" target="_blanc">
          <div class="col card-body">
            <div class="row justify-center items-center q-pa-none card-icon">
              <q-icon name="source" size="33px" />
            </div>

            <div class="row justify-center items-center q-pa-none card-text">
              home sales templates
            </div>
          </div>
        </q-item>
      </div>
    </template>

    <template v-if="hasCoachPermissions || hasPartnerAdminPermissions">
      <div class="text-subtitle2 section-name">Partner</div>
      <div class="row items-start">
        <template v-if="hasAgentPermissions">
          <q-item class="home-card" clickable :to="{}">
            <div class="col card-body">
              <div class="row justify-center items-center q-pa-none card-icon">
                <q-icon name="person" size="33px" />
              </div>
              <div class="row justify-center items-center q-pa-none card-text">
                home create application
              </div>
            </div>
          </q-item>

          <q-item class="home-card" clickable :to="{}">
            <div class="col card-body">
              <div class="row justify-center items-center q-pa-none card-icon">
                <q-icon name="snooze" size="33px" />
              </div>
              <div class="row justify-center items-center q-pa-none card-text">
                home saved app
              </div>
            </div>
          </q-item>
        </template>

        <template v-if="hasAdvisorPermissions">
          <q-item class="home-card" clickable :to="{}">
            <div class="col card-body">
              <div class="col card-body">
                <div
                  class="row justify-center items-center q-pa-none card-icon"
                >
                  <q-icon name="man" size="33px" />
                </div>
                <div
                  class="row justify-center items-center q-pa-none card-text"
                >
                  home meeting today
                </div>
              </div>
            </div>
          </q-item>

          <q-item class="home-card" clickable :to="{}" v-if="bidsMockEnabled">
            <div class="col card-body">
              <div class="row justify-center q-pa-none card-icon">
                <q-icon name="assignment" size="33px" />
              </div>
              <div class="row justify-center items-center q-pa-none card-text">
                home mock bids
              </div>
            </div>
          </q-item>
        </template>

        <template v-if="hasCustomerServicePermission">
          <q-item class="home-card" tag="a" clickable href="" target="_blanc">
            <div class="col card-body">
              <div class="row justify-center items-center q-pa-none card-icon">
                <q-icon name="phone" size="33px" />
              </div>
              <div class="row justify-center items-center q-pa-none card-text">
                customer service
              </div>
            </div>
          </q-item>
        </template>

        <q-item class="home-card" tag="a" clickable href="" target="_blanc">
          <div class="col card-body">
            <div class="row justify-center items-center q-pa-none card-icon">
              <q-icon name="source" size="33px" />
            </div>

            <div class="row justify-center items-center q-pa-none card-text">
              home sales templates
            </div>
          </div>
        </q-item>
      </div>
    </template>

    <template v-if="hasAdminPermissions">
      <div class="text-subtitle2 section-name">Admin</div>
      <div class="row items-start">
        <q-item class="home-card" clickable :to="{}">
          <div class="col card-body">
            <div class="row justify-center items-center q-pa-none card-icon">
              <q-icon name="person" size="33px" />
            </div>
            <div class="row justify-center items-center q-pa-none card-text">
              home create application
            </div>
          </div>
        </q-item>

        <q-item class="home-card" clickable :to="{}">
          <div class="col card-body">
            <div class="row justify-center items-center q-pa-none card-icon">
              <q-icon name="snooze" size="33px" />
            </div>
            <div class="row justify-center items-center q-pa-none card-text">
              home saved app
            </div>
          </div>
        </q-item>

        <q-item class="home-card" clickable :to="{}">
          <div class="col card-body">
            <div class="col card-body">
              <div class="row justify-center items-center q-pa-none card-icon">
                <q-icon name="man" size="33px" />
              </div>
              <div class="row justify-center items-center q-pa-none card-text">
                home meeting today
              </div>
            </div>
          </div>
        </q-item>

        <q-item class="home-card" clickable :to="{}" v-if="bidsMockEnabled">
          <div class="col card-body">
            <div class="row justify-center q-pa-none card-icon">
              <q-icon name="assignment" size="33px" />
            </div>
            <div class="row justify-center items-center q-pa-none card-text">
              home mock bids
            </div>
          </div>
        </q-item>

        <q-item class="home-card" tag="a" clickable href="" target="_blanc">
          <div class="col card-body">
            <div class="row justify-center items-center q-pa-none card-icon">
              <q-icon name="phone" size="33px" />
            </div>
            <div class="row justify-center items-center q-pa-none card-text">
              customer service
            </div>
          </div>
        </q-item>
      </div>
    </template>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StartPage',
  setup() {
    return {
      hasUserSectionPermissions: true,
      hasAgentPermissions: true,
      hasAdvisorPermissions: true,
      bidsMockEnabled: true,
      hasCustomerServicePermission: true,
      hasMeetingUserPermission: true,
      hasCoachPermissions: true,
      hasPartnerAdminPermissions: true,
      hasAdminPermissions: true,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-home {
  .title {
    font-size: 30px;
    letter-spacing: 0px;
    margin: 0px;
  }

  .title-greeting {
    margin-top: 10px;
    font-weight: bold;
  }

  .title-user {
    margin-top: 5px;
    font-weight: 300;
  }

  .section-name {
    margin-top: 45px;
    letter-spacing: 0px;
    color: #131390;
    font-size: 14px;
    font-weight: bold;
  }

  .home-card {
    width: 220px;
    height: 126px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    margin-right: 26px;
    margin-top: 20px;
    background-color: rgb(241, 238, 233);
    padding: 16px;
    text-decoration: none;
    cursor: pointer;
    color: #131390;

    &:hover {
      background-color: rgba(0, 0, 0, 0.06);
    }

    .card-icon {
      margin-top: 10px;

      svg {
        width: 33px;
        height: 33px;
      }
    }

    .card-body {
      width: 100%;
    }

    .card-text {
      text-align: center;
      font-size: 14px;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.32px;
      margin-top: 13px;
    }
  }
}
</style>
