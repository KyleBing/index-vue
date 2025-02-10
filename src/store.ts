import {defineStore} from "pinia";

console.log('pinia is loaded, inside pinia file')

export const useProjectStore = defineStore('projectStore', {
    state: ()=>({
        insets: {
            height: innerHeight,
            width: innerWidth
        },
        scrollTop: 0
    }),
    getters: {},
    actions: {
        SET_INSETS(payload: {
            height: number,
            width: number
        }) {
            this.insets = payload
        },
    },
})


