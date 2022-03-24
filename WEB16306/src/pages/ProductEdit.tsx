import React, {useEffect ,useState} from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { read } from "../api/products";
import {ProductType} from "../types/product"
type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}

type FormInputs = {
    name: string,
    price: number
}
const ProductEdit = (props:Props)=>{
    const {register, handleSubmit, formState: {errors}, reset } =useForm<FormInputs>()
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        const getProduct = async() =>{
            const {data} = await read(id);
            reset(data);
        }
        getProduct();
    }, [])
    
    const onSubmit:SubmitHandler<FormInputs> = data =>{
        console.log(data)
    }
    return(
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name', {required: true})}/>
        </form>
    )
}
export default ProductEdit