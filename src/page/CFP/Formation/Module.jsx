import React from 'react'
import NavBar from '../../../layout/NavBar'
import SubComponent from '../../../components/SubComponent'
import { ButtonAdd } from '../../../components/Boutons'

// ICON
import ExtensionIcon from '@mui/icons-material/Extension';
import { MyTabsBodyModule } from '../../../components/tabs/MyTabsModule';
import ModuleForm from '../../../components/modal-form/ModuleForm';


export default function Module() {
  return (
    <div>
      <NavBar />
      <SubComponent icon={<ExtensionIcon class="w-7 text-gray-800" />} label="Modules de formation" btn_name={<ButtonAdd name="Ajouter un module" size="sm" modal_size="lg" modal={<ModuleForm />} />} />
      {/* <MembersTable /> */}
      <MyTabsBodyModule />
    </div>
  )
}