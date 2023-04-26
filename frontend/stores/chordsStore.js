import { defineStore } from 'pinia'
import songs from '../data/songs.json'
import chords from '../data/chords.json'

export const useChordsStore = defineStore('chordsStore', {
    state: () => {
        return {
            songs,
            chords,
            activeSong: {
                title: "Черновичок",
                chords: ["Dm", "Bb", "A", "Gm"],
                video: {
                    "id": 1,
                    "title": "Черновичок. Разбор на гитаре. Владимир Клявин",
                    "frame": "<iframe width='1280' height='720' src='https://www.youtube.com/embed/X-khyq42gjU' title='Черновичок. Разбор на гитаре. Владимир Клявин' frameborder='0' allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
                },
                text: "<p> Dm         Bb          Gm </p> <p> Мама не ругай меня я пьян </p> <p> Gm         A                Dm </p> <p> Оказалось жить совсем  не просто </p> <p> Dm         Bb          Gm </p> <p> В темноте рукой ищу стакан </p> <p> Gm         A                Dm </p>  <p> В губы пересохшие бычок </p> <p> Dm         Bb          Gm </p> <p> Мама не ругай меня я пьян </p> <p> Gm         A                Dm </p> <p> Оказалось жить совсем  не просто </p> <p> Dm         Bb          Gm </p> <p> В темноте рукой ищу стакан </p> <p> Gm         A                Dm </p>  <p> В губы пересохшие бычок </p> <p> Dm         Bb          Gm </p> <p> Мама не ругай меня я пьян </p> <p> Gm         A                Dm </p> <p> Оказалось жить совсем  не просто </p> <p> Dm         Bb          Gm </p> <p> В темноте рукой ищу стакан </p> <p> Gm         A                Dm </p>  <p> В губы пересохшие бычок </p> <p> Dm         Bb          Gm </p> <p> Мама не ругай меня я пьян </p> <p> Gm         A                Dm </p> <p> Оказалось жить совсем  не просто </p> <p> Dm         Bb          Gm </p> <p> В темноте рукой ищу стакан </p> <p> Gm         A                Dm </p>  <p> В губы пересохшие бычок </p>"
            }
        }
    },
})