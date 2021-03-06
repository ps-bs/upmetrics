<template>
  <v-container class="pa-12">
    <ApolloQuery
      :query="require('@/graphql/CharactersQuery.gql')"
      :variables="{ offset, limit, search }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Error -->
        <v-alert
          v-if="error"
          type="error"
        >
          An error occured
        </v-alert>

        <!-- Result -->
        <div v-else-if="data">
          <v-data-table
            class="elevation-1"
            :headers="headers"
            :loading="loading"
            :items="data.characters.results"
            item-key="id"
            :search="search"
            :page.sync="page"
            :items-per-page.sync="limit"
            :server-items-length="data.characters.total"
            @click:row="handleClick"
          >
            <template v-slot:top>
              <v-text-field
                v-model="search"
                label="Search Name"
                class="mx-4"
              />
            </template>
            <template v-slot:item.comics="{ item }">
              {{ item.comics.available }}
            </template>
          </v-data-table>
        </div>

        <!-- No result -->
        <div v-else>
          No result
        </div>
      </template>
    </ApolloQuery>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    page: 1,
    limit: 10,
    search: '',
    headers: [
      {
        text: 'Name',
        sortable: false,
        value: 'name'
      },
      {
        text: 'Number of comics',
        sortable: false,
        value: 'comics'
      }
    ],
    options: {},
  }),
  computed: {
    offset() {
      return (this.page - 1) * this.limit;
    }
  },
  methods: {
    handleClick(item) {
      this.$router.push(`/${item.id}`);
    }
  }
}
</script>
