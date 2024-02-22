import React from 'react'
import { categoriesType } from '../../@types/categoriesType'



export const Row = ({name, title, path}:{name:string, title:string, path:string}) => {
  return (
    <>
    {name} {title} {path}
    <div>index</div>
    </>
  )
}
