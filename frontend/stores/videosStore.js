import { defineStore } from 'pinia'
import videos from '../data/videos.json'

export const useVideosStore = defineStore('videosStore', {
    state: () => {
        return {
            videos
        }
    },
})