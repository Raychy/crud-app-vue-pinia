import { createRouter, createWebHistory } from "vue-router";
import PostsView from "../views/PostsView.vue";
import SinglePostView from "../views/SinglePostView.vue";
import SingleAuthorView from "../views/SingleAuthorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "posts",
      component: PostsView,
    },
    {
      path: "/authors",
      name: "authors",
      component: () => import("../views/AuthorsView.vue"),
    },
    {
      path: '/post/:id',
      name: 'post',
      component: SinglePostView
    },
    {
      path: '/author/:username',
      name: 'author',
      component: SingleAuthorView
    }
  ],
});

export default router;
