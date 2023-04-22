<template>
  <q-page class="q-ma-md">
    <q-card class="q-my-md">
      <q-card-section>
        <div class="text-h6">Search Users</div>

        <div>
          <q-input
            dense
            filled
            v-model="search"
            placeholder="Search users..."
            :loading="loading"
            class="q-py-md"
          >
            <template v-slot:append>
              <q-icon v-if="search.length" name="clear" />
            </template>

            <template v-slot:after>
              <div>
                <q-spinner
                  v-if="loading"
                  color="black"
                  size="25px"
                  class="q-pa-none"
                />
                <q-icon
                  v-else
                  color="black"
                  size="25px"
                  class="q-pa-none"
                  name="search"
                />
              </div>
            </template>
          </q-input>
        </div>
      </q-card-section>
    </q-card>

    <q-table
      :data="users"
      :pagination="pagination"
      :loading="loading"
      row-key="_id"
      @request="onRequest"
    >
      <template v-slot:header>
        <q-tr>
          <q-th>User ID</q-th>
          <q-th>Name</q-th>
          <q-th>Email</q-th>
          <q-th>Role</q-th>
          <q-th>Phone</q-th>
          <q-th>Created At</q-th>
          <q-th>Updated At</q-th>
        </q-tr>
      </template>

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td>{{ props.row._id }}</q-td>
          <q-td>{{ props.row.firstName }} {{ props.row.lastName }}</q-td>
          <q-td>{{ props.row.email }}</q-td>
          <q-td>{{ props.row.role ? props.row.role : '-' }}</q-td>
          <q-td> {{ props.row.phone ? props.row.phone : '-' }} </q-td>
          <q-td>{{ new Date(props.row.createdAt).toLocaleString() }}</q-td>
          <q-td>{{
            props.row.updatedAt
              ? new Date(props.row.updatedAt).toLocaleString()
              : '-'
          }}</q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from 'vue';
import { RequestProps } from '../models/models';

export default defineComponent({
  name: 'UserProfile',
  setup() {
    const search = ref('');
    const users = ref([]);
    const loading = ref(false);
    const pagination = ref({
      sortBy: 'createdAt',
      descending: false,
      page: 1,
      rowsPerPage: 10,
      rowsNumber: 0,
    });

    watch(search, () => {
      onRequest({ pagination: pagination.value });
    });

    async function onRequest(props: RequestProps) {
      loading.value = true;
      const { page, sortBy, descending, rowsPerPage } = props.pagination;
      const res = await fetch(
        `http://localhost:3000/api/search/users?take=${rowsPerPage}&page=${page}&sortBy=${sortBy}&descending=${descending}&keyword=${search.value}`
      );

      const data = await res.json();
      console.log(data);

      users.value = data;
      console.log(users);

      pagination.value.rowsNumber = data.total;
      loading.value = false;
    }

    onMounted(() => {
      onRequest({ pagination: pagination.value });
    });

    return {
      search,
      users,
      loading,
      pagination,
      onRequest,
    };
  },
});
</script>
