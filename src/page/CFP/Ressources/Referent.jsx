import React from 'react'
import NavBar from '../../../layout/NavBar'
import SubComponent from '../../../components/SubComponent'
import { ButtonAdd } from '../../../components/Boutons'

// ICON
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReferentForm from '../../../components/modal-form/ReferentForm';
import { MyTabsReferent } from '../../../components/tabs/MyTabsReferent';


export default function Referent() {
  return (
    <div>
      <NavBar />
      <SubComponent icon={<AccountCircleIcon class="w-7 text-gray-800" />} label="Référents" btn_name={<ButtonAdd name="Ajouter un référent" size="sm" modal_size="lg" modal={<ReferentForm />} />} />
      <MyTabsReferent />
    </div>
  )
}