import React from 'react'
import { Button, Dialog } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/solid'

export function ButtonPrimary(props) {
  return (
    <Link to={props.url}>
      <Button className='bg-[#9333ea]' size={props.size} variant="filled">{props.name}</Button>
    </Link>
  )
}

export function ButtonSecondary(props) {
  return (
    <Link to={props.url}>
      <Button variant="outlined" className='border-[#9333ea] text-[#9333ea]' size={props.size}>
        {props.name}
      </Button>
    </Link>
  )
}
export function ButtonAdd(props) {
  const { size, modal_size, name, modal } = props
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button variant="outlined" className='border-[#9333ea] text-[#9333ea] flex items-center gap-2 normal-case font-Raleway font-medium' size={size} onClick={handleOpen} >
        <PlusIcon className='w-4 h-4' />
        {name}
      </Button>
      <Dialog
        size={modal_size}
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        {modal}
      </Dialog>
    </>
  );
}

export function ButtonGray(props) {
  return (
    <Link to={props.url}>
      <Button variant="text" className="flex items-center gap-2 bg-gray-100" size={props.size}>
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
const MyBoutons = { ButtonPrimary, ButtonSecondary, ButtonAdd, ButtonGray };
export default MyBoutons