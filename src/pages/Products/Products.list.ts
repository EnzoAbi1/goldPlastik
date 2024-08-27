export interface IProduct {
    name: string,
    media: IProductMedia,
    information: string,
    category: string,
}
export interface IProductMedia {
    name: string,
    url: string,

}
export const productList: IProduct[] =
    [{
        name: "Product 1",
        media: { name: "Back", url: "/assets/products/1.jpg" },
        information: " this is a crucial information",
        category: "raf",

    }, {
        name: "Product 2",
        media: { name: "lol", url: "/assets/products/2.jpg" },
        information: "this is a crucial information",
        category: "lol",
    },
    {
        name: "Product 3",
        media: { name: "ll", url: "/assets/products/3.jpg" },
        information: " this is a crucial information"
        ,
        category: "string",
    }, {
        name: "Product 4",
        media: { name: "ll", url: "/assets/products/3.jpg" },
        information: " this is a crucial information"
        , category: "temizlik",
    }
    ]