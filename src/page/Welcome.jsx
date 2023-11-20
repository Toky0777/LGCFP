import React from 'react'
import { ButtonPrimary, ButtonSecondary, ButtonAdd, ButtonGray } from '../components/Boutons';
import Search from '../components/Search';
import NavBar from '../layout/NavBar';
import NavBarETP from '../layout/NavBarETP';
import NavBarEmp from '../layout/NavEmp';
import NavBarForm from '../layout/NavForm';


export default function Welcome() {
  return (
    <>
      <NavBar />
      <NavBarETP />
      <NavBarEmp />
      <NavBarForm />
      <div className='flex flex-col gap-4 justify-center items-center'>
        <ButtonPrimary name="Welcome" url="/Test" />
        <ButtonSecondary name="Tokyo" url="/Test" />
        <ButtonAdd name="Ajouter" url="/Test" />
        <ButtonGray name="Plus d'information" url="/Test" />
        <Search name="Chercher ici.." />
      </div>
    </>
  )
}
