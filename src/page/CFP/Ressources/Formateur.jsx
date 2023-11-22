import React from 'react'
import NavBar from '../../../layout/NavBar'
import SubComponent from '../../../components/SubComponent'
import { ButtonAdd } from '../../../components/Boutons'

// ICON
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { MyTabsFormateur } from '../../../components/tabs/MyTabsFormateur';
import FormateurForm from '../../../components/modal-form/FormateurForm';


export default function Formateur() {
  return (
    <div>
      <NavBar />
      <SubComponent icon={<AccountCircleIcon class="w-7 text-gray-800" />} label="Formateur" btn_name={<ButtonAdd name="Ajouter un formateur" size="sm" modal_size="lg" modal={<FormateurForm />} />} />
      <MyTabsFormateur />
    </div>
  )
}