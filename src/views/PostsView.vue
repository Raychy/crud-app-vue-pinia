<script setup>
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { usePostStore } from '../stores/post'

const { posts, loading, error } = storeToRefs(usePostStore())
const { fetchPosts } = usePostStore()
fetchPosts()
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="row gy-2 align-items-center section-title mb-0 section pt-0">
        <div class="col-12">
          <h1 class="h3 mb-0 title">Latest posts</h1>
        </div>
        <div class="col-12">
          <ul class="list-inline breadcrumb-menu">
            <li class="list-inline-item">
              <a class="text-link" href="https://platol.netlify.app/">Home</a>
            </li>
            <li class="list-inline-item">• &nbsp; <a class="text-link" href="blog.html">Blog</a>
            </li>
          </ul>
        </div>
      </div>
      <p v-if="loading">Loading posts...</p>
      <p v-if="error">{{ error.message }}</p>
      <div class="row gy-5 gx-md-5">
        <div class="col-lg-4 col-md-6" v-if="posts" v-for="post in posts" :key="post.id">
          <article class="bg-white d-flex flex-column h-100">
            <div class="post-image">
              <RouterLink :to="`/post/${post.id}`" class="d-block"
                title="What Do You Do When You Know You’re Not Fine?">
                <img loading="lazy" class="w-100 h-auto" src="@/assets/images/blog/07.webp"
                  alt="What Do You Do When You Know You’re Not Fine?" width="400" height="264" />
              </RouterLink>
              <!-- <a class="d-block" href="blog-single.html" title="What Do You Do When You Know You’re Not Fine?">
                <img loading="lazy" class="w-100 h-auto" src="@/assets/images/blog/07.webp"
                  alt="What Do You Do When You Know You’re Not Fine?" width="400" height="264">
              </a> -->
            </div>
            <div class="p-4 pb-0">
              <ul class="post-meta list-inline mb-3">
                <li class="list-inline-item">
                  <i class="ti ti-calendar-event me-1"></i>2nd Jul, 2022
                </li>
                <li class="list-inline-item">•</li>
                <li class="list-inline-item">
                  <i class="ti ti-clock-2 me-1"></i>02 min read
                </li>
              </ul>
              <div class="position-relative">
                <h3 class="h4 post-title mb-2 line-clamp clamp-2">
                  <RouterLink class="text-link stretched-link" :to="`/post/${post.id}`" 
                    title="Read more about - What Do You Do When You Know You’re Not Fine?">{{ post.title }}
                  </RouterLink>
                </h3>
                <p class="mb-0 line-clamp clamp-3">{{ post.body }}</p>
              </div>
            </div>
            <div class="post-author d-flex mt-auto p-4">
              <div class="flex-shrink-0">
                <RouterLink :to="`/post/${post.id}`" class="is-hoverable" title="Read all posts of - Robert Britt">
                  <img loading="lazy" class="rounded-circle w-auto" src="@/assets/images/author/robert-britt.jpg"
                    alt="Robert Britt" width="42" height="42">
                </RouterLink>
              </div>
              <div class="flex-grow-1 ms-3">
                <p class="mb-0 lh-base small">Written by</p>
                <RouterLink class="text-link" :to="`/post/${post.id}`" title="Read all posts by - Robert Britt">Robert
                  Britt</RouterLink>
              </div>
            </div>
          </article>
        </div>

        <div class="col-12 pt-4 mt-5">
          <nav class="text-center">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link page-link-previous bg-transparent rounded-0 px-0 border-0 text-dark text-link active text-uppercase fw-medium"
                  href="#!">
                  <i class="ti ti-chevron-left"></i>
                  <span>Previous</span>
                </a>
              </li>
              <li class="page-item page-count" title="Page 1 of 2">
                <span class="current-page">1</span>
                <span class="total-page">2</span>
              </li>
              <li class="page-item ">
                <a class="page-link bg-transparent rounded-0 px-0 border-0 text-dark text-link active text-uppercase fw-medium"
                  href="blog.html">
                  <span>Next</span>
                  <i class="ti ti-chevron-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
