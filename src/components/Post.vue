<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCommentStore } from '../stores/comment'
import Comment from '../components/Comment.vue'

defineProps(['post', 'author'])

const { getPostComments } = storeToRefs(useCommentStore())
const { fetchComments } = useCommentStore()

fetchComments()
</script>

<template>
  <div class="col-xl-9 col-lg-10">
    <div class="section">

      <p class="mb-4 text-muted"> 03 min reading in <span class="mx-2">—</span>
        <a class="text-link " href="category-single.html">Health</a>
      </p>
      <h1 class="mb-3">{{ post.title }}</h1>

      <div class="post-author d-flex">
        <div class="flex-shrink-0">
          <a href="author-single.html" class="is-hoverable" title="Read all posts of - Robert Britt">
            <img loading="lazy" class="rounded-circle w-auto" src="@/assets/images/author/robert-britt.jpg"
              alt="Robert Britt" width="50" height="50">
          </a>
        </div>
        <div class="flex-grow-1 ms-3"> by <RouterLink :to="`/author/${author.username}`" class="text-link">{{
            author.name }}</RouterLink>
          <p class="mb-0 lh-base">Published at 13th September, 2021</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-lg-12">
    <img loading="lazy" class="w-100 h-auto" src="@/assets/images/blog/blog-single.webp"
      alt="Can You Build Muscle When You’re Older?" width="1020" height="660">
  </div>
  <div class="col-xl-9 col-lg-10">
    <div class="section">
      <div class="content">
        <p>{{ post.body }}</p>
      </div>

    </div>
  </div>
  <div>
    <h3>Comments:</h3>
    <comment :comments="getPostComments"></comment>
  </div>
</template>