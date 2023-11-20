import { Input } from '@material-tailwind/react'
import React from 'react'

export default function Search(props) {
  return (
    <>
      <form className='w-64'>
        <Input type="search" placeholder={props.name}
          className=" !border-t-blue-gray-300  placeholder:text-blue-gray-300 placeholder:text-xs focus:!border-blue-gray-300 pl-4"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>}
        />
      </form>
    </>
  )
}
