import { defineStore } from "pinia";
import { usePostStore } from "./post";


export const useAuthorStore = defineStore({
    id: 'author',
    state: () => ({
        authors: []
    }),
    getters: {
        getPostAuthor:(state)=>{
            const useStore = usePostStore()
            return state.authors.find((author)=>author.id==useStore.post.userId)
        },
        // getAuthorByUserName : (state) => {
        //     return state.authors.value.find((author) => author.username === route.params.username)
        //   }
    },
    actions: {
        async fetchAuthors() {
            return this.authors = await fetch('https://jsonplaceholder.typicode.com/users')
                .then((res) => res.json())
        }
    }
})