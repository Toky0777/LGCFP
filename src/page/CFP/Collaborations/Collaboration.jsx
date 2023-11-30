import React from 'react'
import NavBar from '../../../layout/NavBar'
import SubComponent from '../../../components/SubComponent'
import { ButtonAdd } from '../../../components/Boutons'

// ICON
import HandshakeIcon from '@mui/icons-material/Handshake';
import CollaborationForm from '../../../components/modal-form/CollaborationForm';
import MyTabsCollaboration1 from '../../../components/tabs/MyTabsCollaboration1';


export default function Module() {
  return (
    <div>
      <NavBar />
      <SubComponent icon={<HandshakeIcon class="w-7 text-gray-800" />} label="Collaboration" btn_name={<ButtonAdd name="Envoyer une invitation" size="sm" modal_size="lg" modal={<CollaborationForm />} />} />
      <MyTabsCollaboration1/>
    </div>
  )
}