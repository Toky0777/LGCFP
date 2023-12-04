import React from 'react'
import NavBar from '../layout/NavBar'
import { MyPopoverEntreprise, MyPopoverFormateur, MyPopoverModule, MyPopoverStagiaire } from '../components/MyPopover'

export default function Test() {
  return (
    <div>
        <NavBar/>
        <MyPopoverFormateur/>
        <MyPopoverStagiaire/>
        <MyPopoverEntreprise/>
        <MyPopoverModule/>
    </div>
  )
}
