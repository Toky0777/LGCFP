import React from 'react'
import NavBar from '../../../layout/NavBar'
import SubComponent from '../../../components/SubComponent'
import { ButtonAdd } from '../../../components/Boutons'

// ICON
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StagiaireForm from '../../../components/modal-form/StagiaireForm';
import { MyListeStagiaire } from '../../../components/tabs/MyListeStagiaire';


export default function Stagiaire() {
  return (
    <div>
      <NavBar />
      <SubComponent icon={<PeopleAltIcon class="w-7 text-gray-800" />} label="Stagiaire" btn_name={<ButtonAdd name="Ajouter un stagiaire" size="sm" modal_size="lg" modal={<StagiaireForm />} />} />
      <MyListeStagiaire />
    </div>
  )
}