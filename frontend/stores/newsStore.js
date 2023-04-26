import { defineStore } from 'pinia'
import news from '../data/news.json'

export const useNewsStore = defineStore('newsStore', {
    state: () => {
        return {
            news
        }
    },
})