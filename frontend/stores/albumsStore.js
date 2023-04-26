import { defineStore } from 'pinia'
import albums from '../data/albums.json'

export const useAlbumsStore = defineStore('albumStore', {
    state: () => {
        return {
            albums,
            filter: {
                type: 'Все',
                data: []
            }
        }
    },

    actions: {
        // Фильтрация элементов
        filterAlbums(type) {
            this.filter.type = type
            this.filter.data = []
            if (type == 'Все') {
                return
            } else {
                this.filter.data.push(this.getFilterItems(type))
            }
        },

        // Получение альбомов по фильтрации
        getFilterItems(type) {
            let filterObject = {
                title: type,
                list: []
            }
            for (let years of this.albums) {
                for (let album of years.list) {
                    if (album.type == this.filter.type) {
                        filterObject.list.push(album)
                    }
                }
            }
            return filterObject
        }
    }
})