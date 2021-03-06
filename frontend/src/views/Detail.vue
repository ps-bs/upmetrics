<template>
  <v-container class="pa-12">
    <v-btn
      class="mb-6"
      color="orange darken-2"
      dark
      @click="$router.push('/')"
    >
      <v-icon
        dark
        left
      >
        mdi-arrow-left
      </v-icon>Back
    </v-btn>
    <ApolloQuery
      :query="require('@/graphql/CharacterQuery.gql')"
      :variables="{ id: $route.params.id }"
    >
      <template slot-scope="{ result: { loading, error, data } }">
        <!-- Error -->
        <v-alert
          v-if="error"
          type="error"
        >
          Not found
        </v-alert>

        <!-- Result -->
        <div v-else-if="data">
          <h1>
            {{ data.character.name }}
          </h1>

          <v-data-table
            class="elevation-1"
            :headers="headers"
            :loading="loading"
            :items="data.character.comics.items"
            item-key="name"
          />
        </div>
      </template>
    </ApolloQuery>
  </v-container>
</template>

<script>

export default {
  name: 'Detail',
  data: () => ({
    headers: [
      {
        text: 'Name',
        value: 'name'
      }
    ]
  })
}
</script>
