import { defineStore } from "pinia";

export const usePostStore = defineStore({
  id: 'post',
  state: () => ({
    posts: [],
    post: null,
    loading: false,
    error: null
  }),
  getters: {
    getPostsPerAuthor: (state) => {
      return (authorId) => state.posts.filter((post) => post.userId === authorId)
    }
  },
  actions: {
    async fetchPosts() {
      this.posts = []
      this.loading = true
      try {
        this.posts = await fetch('https://jsonplaceholder.typicode.com/posts')
          .then((res) => res.json())
          // console.log( this.posts )
      }
      catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    },
    async fetchPostById(id) {
      this.post = null
      this.loading = false
      try {
        this.post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((res) => res.json())
      }
      catch (error) {
        this.error = error
      }
      finally {
        this.loading = false
      }
    }
  }
})