<template>
  <div>
    <v-card>
      <v-card-title>
        {{thread.title}}
      </v-card-title>
      <v-container> 
        <v-img width="100px" height="100px" :src=thread.imageUrl></v-img>
        <div>
          {{thread.content}}
        </div>
        <div>
          <router-link :to="{name: 'thread', params: {id: thread.id} }">
            <v-btn color="primary">In The Thread</v-btn> 
          </router-link>
        </div>
      </v-container>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    thread: {}
  }
}
</script>