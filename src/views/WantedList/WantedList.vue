<template>
    <div class="card">
        <div class="card-header">
            <h2 class="">想要买的东西</h2>
        </div>
        <div class="card-body">
            <table class="table">
                <tbody>
                    <template v-for="(item, index) in wantedThings" :key="index">
                        <tr class="bought" v-if="item.owned">
                            <td>
                                <p>{{ item.title }}</p>
                                <p class="date">{{item.date}}</p>
                            </td>
                            <td></td>
                            <td>
                                <span v-if="item.priceSold">({{ item.priceSold}}) </span>
                                <del>{{ item.price }}</del>
                            </td>
                        </tr>
                        <tr v-else>
                            <td>{{ item.title }}</td>
                            <td></td>
                            <td>{{ item.price }}</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div class="card-footer">
            <h3 class="bought" id="summaryPast"><del>￥{{ totalCostOwn }}</del></h3>
            <h3 class="" id="summary">￥{{ totalCost}}</h3>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {WantedThingEntity} from "@/views/WantedList/wantedThings.ts";
import {computed, onMounted, ref} from "vue";
import axios from "axios";

const wantedThings = ref<Array<WantedThingEntity>>([])
const totalCostOwn = computed(()=>{
    return wantedThings.value
        .filter(item => item.owned)
        .reduce((sum, currentValue) => sum + currentValue.price, 0)
})
const totalCost = computed(()=>{
    return wantedThings.value
        .reduce((sum, currentValue) => sum + currentValue.price, 0)
})


onMounted(()=>{
    getWantedList()
})

function getWantedList(){
    axios({
        method: 'get',
        url: '../../portal/diary/get-latest-public-diary-with-keyword',
        params: {
            keyword: '想买的东西'
        }
    })
        .then(res => {
            if (res.status === 200){
                if (res.data.data.content){
                    wantedThings.value = getWantedThings(res.data.data.content)
                }
            }
        })
}
function getWantedThings(content: string){
    let lines = content.split('\n')
    let itemArray: Array<WantedThingEntity> =
        lines
            // 去除空行
            .filter(item => item.trim().length > 0)

            // 去除字段前后空格
            .map(item => {
                return item.split(',').map(param => param.trim())
            })

            // 生成 WantedThingsEntity Array
            .map(item => {
                let tempWantedThing: WantedThingEntity = {}
                tempWantedThing.owned = item[0] === '1'
                tempWantedThing.sold = item[1] === '1'
                tempWantedThing.priceSold = Number(item[2])
                tempWantedThing.date = item[3]
                tempWantedThing.priceOrigin = Number(item[4])
                tempWantedThing.price = Number(item[5])
                tempWantedThing.title = item[6]
                return tempWantedThing
            })

    return itemArray
}



</script>

<style scoped lang="scss">
@import "./wanted-list.scss";
</style>
