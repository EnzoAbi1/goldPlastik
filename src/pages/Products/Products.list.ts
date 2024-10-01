export interface IProduct {
    name: string,
    id: string,
    media: IProductMedia[],
    information: string,
    category: ICategoryName,
    detailedInformation: string,
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
        id: "1",
        name: "Product 1",
        media: [{ name: "Back", url: "/assets/categories/shelf.jpg" }, { name: "Back", url: "/assets/categories/shelf.jpg" } , { name: "Back", url: "/assets/categories/shelf.jpg" }],
        information: " this is a crucial information",
        category: ICategoryName.category1,
        detailedInformation: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

    }, {
        id: "2",
        name: "Product 2",
        media: [{ name: "lol", url: "/assets/categories/shelf.jpg" }],
        information: "this is a crucial information",
        category: ICategoryName.category2,
        detailedInformation: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: "3",
        name: "Product 3",
        media: [{ name: "ll", url: "/assets/categories/shelf.jpg" }],
        information: " this is a crucial information"
        ,
        category: ICategoryName.category1,
        detailedInformation: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, {
        id: "4",
        name: "Product 4",
        media: [{ name: "ll", url: "/assets/categories/shelf.jpg" }],
        information: " this is a crucial information"
        , category: ICategoryName.category2,
        detailedInformation: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
    ]