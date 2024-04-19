<template>
    <div class="wanted-list-container">
        <div class="card">
            <div class="card-header">
                <h2 class="">Wanted List</h2>
            </div>
            <div class="card-body">
                <table class="table">
                    <tbody>
                        <template v-for="(item, index) in wantedThings" :key="index">
                            <tr class="bought" v-if="item.owned">
                                <td>{{ item.title }}</td>
                                <td>{{ item.priceSold? item.priceSold: ''}}</td>
                                <td><del>{{ item.price }}</del></td>
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
    </div>
</template>

<script lang="ts" setup>
import {wantedThings} from "@/views/WantedList/wantedThings.ts";
import {computed} from "vue";

const totalCostOwn = computed(()=>{
    return wantedThings
        .filter(item => item.owned)
        .reduce((sum, currentValue) => sum + currentValue.price, 0)
})
const totalCost = computed(()=>{
    return wantedThings
        .reduce((sum, currentValue) => sum + currentValue.price, 0)
})

</script>

<style scoped lang="scss">
@import "./wanted-list.scss";
</style>
