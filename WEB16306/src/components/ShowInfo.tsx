import React from 'react'

type ShowInfoProps ={
    name: string,
    age:number
}

const ShowInfo = ({name}: ShowInfoProps) =>{
    return (
        <div>{name}</div>
    )
}
export default ShowInfo