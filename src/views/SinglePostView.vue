<script setup>
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAuthorStore } from '../stores/author'
import { usePostStore } from '../stores/post'
import Post from '../components/Post.vue'

const route = useRoute()
const { getPostAuthor } = storeToRefs(useAuthorStore())
const { fetchAuthors } = useAuthorStore()
const { post, loading, error } = storeToRefs(usePostStore())
const { fetchPostById } = usePostStore()

fetchAuthors()
fetchPostById(route.params.id)
// console.log(route.params.id);
</script>
<template>
    
  <section class="bg-body">
    <div class="container">
      <p v-if="loading">Loading post...</p>
      <p v-if="error">{{ error.message }}</p>
      <div class="row justify-content-center"  v-if="post">
        <Post :post="post" :author="getPostAuthor"/>
      </div>
      
      <div class="section">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="section-title text-center">
              <h2 class="h3 mb-0 title">Related Posts</h2>
            </div>
            <div class="row gy-5 gx-4 g-xl-5">
              <div class="col-lg-4 col-md-6">
                <article class="bg-white d-flex flex-column h-100">
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
                        <a class="text-link stretched-link" href="blog-single.html" title="Read more about - What Do You Do When You Know You’re Not Fine?">What Do You Do When You Know You’re Not Fine?</a>
                      </h3>
                      <p class="mb-0 line-clamp clamp-2">Something was wrong with me. But what? Most of the physicians I’ve seen in my life made me feel like they didn’t care about me or my problems.</p>
                    </div>
                  </div>
                  <div class="post-author mt-auto p-4 pt-3">
                    <a href="author-single.html" class="is-hoverable" title="Read all posts of - Robert Britt">
                      <img loading="lazy" class="w-auto rounded-circle me-2" src="@/assets/images/author/robert-britt.jpg" alt="Robert Britt" width="26" height="26">
                    </a> by <a href="author-single.html" class="text-link" title="Read all posts of - Robert Britt">Robert Britt</a>
                  </div>
                </article>
              </div>
              <div class="col-lg-4 col-md-6">
                <article class="bg-white d-flex flex-column h-100">
                  <div class="p-4 pb-0">
                    <ul class="post-meta list-inline mb-3">
                      <li class="list-inline-item">
                        <i class="ti ti-calendar-event me-1"></i>28th Jun, 2022
                      </li>
                      <li class="list-inline-item">•</li>
                      <li class="list-inline-item">
                        <i class="ti ti-clock-2 me-1"></i>02 min read
                      </li>
                    </ul>
                    <div class="position-relative">
                      <h3 class="h4 post-title mb-2 line-clamp clamp-2">
                        <a class="text-link stretched-link" href="blog-single.html" title="Read more about - The nine-to-five Is Dead. Here’s What to Replace It With">The nine-to-five Is Dead. Here’s What to Replace It With</a>
                      </h3>
                      <p class="mb-0 line-clamp clamp-2">Without even reducing the 40-hour work week. Time is money, right?</p>
                    </div>
                  </div>
                  <div class="post-author mt-auto p-4 pt-3">
                    <a href="author-single.html" class="is-hoverable" title="Read all posts of - Alexander Hipp">
                      <img loading="lazy" class="w-auto rounded-circle me-2" src="@/assets/images/author/alexander-hipp.jpg" alt="Alexander Hipp" width="26" height="26">
                    </a> by <a href="author-single.html" class="text-link" title="Read all posts of - Alexander Hipp">Alexander Hipp</a>
                  </div>
                </article>
              </div>
              <div class="col-lg-4 col-md-6">
                <article class="bg-white d-flex flex-column h-100">
                  <div class="p-4 pb-0">
                    <ul class="post-meta list-inline mb-3">
                      <li class="list-inline-item">
                        <i class="ti ti-calendar-event me-1"></i>21st Jun, 2022
                      </li>
                      <li class="list-inline-item">•</li>
                      <li class="list-inline-item">
                        <i class="ti ti-clock-2 me-1"></i>01 min read
                      </li>
                    </ul>
                    <div class="position-relative">
                      <h3 class="h4 post-title mb-2 line-clamp clamp-2">
                        <a class="text-link stretched-link" href="blog-single.html" title="Read more about - Why the security engineers loves working in fosec">Why the security engineers loves working in fosec</a>
                      </h3>
                      <p class="mb-0 line-clamp clamp-2">Working in cybersecurity means you’re constantly playing a game of catch-up. Every day you learn something new, but your work is also never finished.</p>
                    </div>
                  </div>
                  <div class="post-author mt-auto p-4 pt-3">
                    <a href="author-single.html" class="is-hoverable" title="Read all posts of - Anil Vugels">
                      <img loading="lazy" class="w-auto rounded-circle me-2" src="@/assets/images/author/anil-vugels.jpg" alt="Anil Vugels" width="26" height="26">
                    </a> by <a href="author-single.html" class="text-link" title="Read all posts of - Anil Vugels">Anil Vugels</a>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
   
</template>