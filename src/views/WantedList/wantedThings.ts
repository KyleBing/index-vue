interface WantedThingEntity{
    owned: boolean,      // 是否已经拥有
    sold: boolean,       // 是否已售
    date: string,        // 日期
    priceOrigin: number, // 原价格
    price: number,       // 价格
    priceSold: number,   // 卖出价格
    title: string,       // 物品名
}

export {
    type WantedThingEntity,
}
