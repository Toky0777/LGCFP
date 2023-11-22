import { Card, CardBody, CardFooter, Typography } from '@material-tailwind/react'
import React from 'react'
import { MyInput, MySelectInput } from '../MyInput'

// Import Icons
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import BusinessIcon from '@mui/icons-material/Business';
import { ButtonPrimary } from '../Boutons';

const TYPE_FORM = ["Masculin", "Féminin"]
const LIST_ENTREPRISE = ["Numerika", "BNI", "LeCoFruit"]

export default function StagiaireForm() {
  return (
    <Card className="mx-auto w-full max-w-screen-xl">
      <CardBody className="flex flex-col gap-4">
        <div>
          <Typography variant="h4" color="blue-gray">
            Ajout d'un stagiaire
          </Typography>
          <Typography
            className="font-normal"
            variant="paragraph"
            color="gray"
          >
            Veuillez entrer des informations pertinantes s'il vous plaît !
          </Typography>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div className='flex flex-col gap-4'>
            <div className='inline-flex items-center gap-2 text-blue-gray-900'>
              <InfoIcon fontSize='small' />
              <Typography variant='lead'>
                Information de base
              </Typography>
            </div>
            <MyInput label="Matricule" />
            <MyInput label="Nom" />
            <MyInput label="Prénom" />
            <MySelectInput label="Genre" data={TYPE_FORM} />
          </div>
          <div className='flex flex-col gap-4'>
            <div className='inline-flex items-center gap-2 text-blue-gray-900'>
              <ContactsIcon fontSize='small' />
              <Typography variant='lead'>
                Contact
              </Typography>
            </div>
            <MyInput label="Téléphone" />
            <MyInput label="E-mail" />
            
            <div className='inline-flex items-center gap-2 text-blue-gray-900 pt-2'>
              <FmdGoodIcon fontSize='small' />
              <Typography variant='lead'>
                Localisation
              </Typography>
            </div>
            <MyInput label="Adresse" />
          </div>
          <div className='flex flex-col gap-4'>
            <div className='inline-flex items-center gap-2 text-blue-gray-900'>
              <BusinessIcon fontSize='small' />
              <Typography variant='lead'>
                Entreprise
              </Typography>
            </div>
            <MySelectInput label="Entreprise" data={LIST_ENTREPRISE} />
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0 text-right">
        <ButtonPrimary name="Confirmer" />
      </CardFooter>
    </Card>
  )
}
