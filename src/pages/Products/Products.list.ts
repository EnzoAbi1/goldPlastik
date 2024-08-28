export interface IProduct {
    name: string,
    media: IProductMedia[],
    information: string,
    category: ICategoryName,
}
export interface IProductMedia {
    name: string,
    url: string,

}
export interface ICategory {
    name: ICategoryName,
    content: string,
    img: string,
    link: string
}
export enum ICategoryName {
    category1 = "category1"
    , category2 = "category2",
    category3 = "category3"
}
export const productList: IProduct[] =
    [{
        name: "Product 1",
        media: [{ name: "Back", url: "/assets/categories/shelf.jpg" }],
        information: " this is a crucial information",
        category: ICategoryName.category1,

    }, {
        name: "Product 2",
        media: [{ name: "lol", url: "/assets/categories/shelf.jpg" }],
        information: "this is a crucial information",
        category: ICategoryName.category2,
    },
    {
        name: "Product 3",
        media: [{ name: "ll", url: "/assets/categories/shelf.jpg" }],
        information: " this is a crucial information"
        ,
        category: ICategoryName.category1,
    }, {
        name: "Product 4",
        media: [{ name: "ll", url: "/assets/categories/shelf.jpg" }],
        information: " this is a crucial information"
        , category: ICategoryName.category2,
    }
    ]