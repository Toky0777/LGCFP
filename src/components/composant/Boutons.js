import React from 'react'
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

export function ButtonPrimary(props) {
  return (
    <Link to={props.url}>
      <Button className='bg-[#9333ea]' variant="filled">{props.name}</Button>
    </Link>
  )
}

export function ButtonSecondary(props) {
  return (
    <Link to={props.url}>
      <Button variant="outlined" className='border-[#9333ea] text-[#9333ea] '>
        {props.name}
      </Button>
    </Link>
  )
}
export function ButtonAdd(props) {
  return (
    <Link to={props.url}>
      <Button variant="outlined" className='border-[#9333ea] text-[#9333ea] flex items-center gap-2' size="md">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        {props.name}
      </Button>
    </Link>
  )
}

export function ButtonGray(props) {
  return (
    <Link to={props.url}>
      <Button variant="text" className="flex items-center gap-2 bg-gray-100">
        {props.name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </Button>
    </Link>

  )
}

export function Boutons() {
  return (
    <>
        Boutons
    </>
  )
}
const MyBoutons ={ButtonPrimary, ButtonSecondary, ButtonAdd, ButtonGray};
export default MyBoutons