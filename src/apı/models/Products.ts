export type Product = {
    id: number;
    title: string;
    slug: string;
    price: number,
    description: string,
    category: Category
    images: string[]
}
 
export type Category = {
    id: number;
    name: string;
    slug: string;
    image: string
}