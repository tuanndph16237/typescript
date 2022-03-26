import React from 'react'
import { ProductType } from '../types/product';
type ProductManagerProps = {
product: ProductType[];
onRemove: (id: number) => void
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price'
  }
]
const ProductManager = (props: ProductManagerProps) =>{
  const dataSource = props.product.map((item, index)=>{
    return {
      key: index + 1,
      name: item.name,
      price: item.price
    }
  })
  return (
    <Table columns= {columns} dataSource= {dataSource} />
  )
}
export default ProductManager