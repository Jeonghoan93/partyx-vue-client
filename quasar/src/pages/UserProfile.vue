<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Search Users</div>
      <q-input
        v-model="search"
        placeholder="Search users..."
        @input="searchUsers"
        :loading="loading"
        class="q-my-md"
      />
    </q-card-section>

    <q-card-section>
      <q-table
        :data="users"
        :columns="columns"
        :pagination="pagination"
        :loading="loading"
        row-key="_id"
        @request="onRequest"
      />
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RequestProps } from '../models/models';
import { formatDate } from '../utils/dateUtils';

export default defineComponent({
  name: 'UserProfile',
  data() {
    return {
      search: '',
      users: [],
      loading: false,
      pagination: {
        page: 1,
        rowsPerPage: 10,
        rowsNumber: 0,
        sortBy: 'createdAt',
        descending: false,
      },
      columns: [
        {
          name: '_id',
          label: 'User ID',
          field: '_id',
        },
        {
          name: 'name',
          label: 'Name',
          field: 'name',
        },
        {
          name: 'email',
          label: 'Email',
          field: 'email',
        },
        {
          name: 'isHost',
          label: 'Host?',
          field: 'isHost',
        },
        {
          name: 'phone',
          label: 'Phone',
          field: 'phone',
        },
        {
          name: 'createdAt',
          label: 'Created At',
          field: 'createdAt',
          sortable: true,
          format: (val: string) => new Date(val).toLocaleString(),
        },
        {
          name: 'updatedAt',
          label: 'Updated At',
          field: 'updatedAt',
        },
      ],
    };
  },
  methods: {
    async onRequest(props: RequestProps) {
      this.loading = true;
      const { sortBy, descending, page, rowsPerPage } = props.pagination;
      const { data } = await this.$axios.get('/search/users', {
        params: {
          search: this.search,
          sortBy,
          descending,
          page,
          rowsPerPage,
        },
      });

      this.users = data.users;
      this.pagination.rowsNumber = data.totalCount;
      this.loading = false;
    },
    searchUsers() {
      this.pagination.page = 1;
      this.onRequest({ pagination: this.pagination });
    },
  },
});
</script>
