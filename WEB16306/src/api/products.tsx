import instance from "./instance";
import { IProduct } from '../types/product';

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
export const add = (id: string | undefined) => {
    const url = `/products/${id}`;
    return instance.post(url);
}