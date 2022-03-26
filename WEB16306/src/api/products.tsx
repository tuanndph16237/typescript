import instance from "./instance";
import { IProduct, ProductType } from "../types/product";
import Product from "../components/Product";

export const list = () =>{
    const url = "/products";
    return instance.get(url);

}
export const remove = (id: number) => {
    const url = `/products/${id}`;
    return instance.delete(url);
}
export const read = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const add = (product: ProductType) => {
    const url = "/products/";
    return instance.post(url, Product);
}
export const update = (product: ProductType) => {
    const url = `/products/${product.id}`;
    return instance.post(url, Product);
}
