import { Button, Card, CardBody, CardFooter, Checkbox, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { MyInput, MySelectInput, MyTextarea } from '../MyInput'

// Import Icons
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import GroupIcon from '@mui/icons-material/Group';
import { ButtonPrimary } from '../Boutons';

const TYPE_FORM = ["Excel", "Photoshop", "Illustrator", "Power BI"]

export default function ModuleForm() {
  return (
    <Card className="mx-auto w-full max-w-screen-xl">
      <CardBody className="flex flex-col gap-4">
        <div>
          <Typography variant="h4" color="blue-gray">
            Ajout d'un module
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
            <MyInput label="Référence" />
            <MySelectInput label="Type de formation" data={TYPE_FORM} />
            <MyInput label="Nom du module" />
            <MyTextarea label="Description" />
          </div>
          <div className='flex flex-col gap-4'>
            <div className='inline-flex items-center gap-2 text-blue-gray-900'>
              <LocalOfferIcon fontSize='small' />
              <Typography variant='lead'>
                Prix du module
              </Typography>
            </div>
            <MyInput label="Individuel" />
            <MyInput label="Groupe" />
            <hr />
            <div className='inline-flex items-center gap-2 text-blue-gray-900'>
              <WatchLaterIcon fontSize='small' />
              <Typography variant='lead'>
                Durée du programme
              </Typography>
            </div>
            <MyInput label="Heures" />
            <MyInput label="Jours" />
          </div>
          <div className='flex flex-col gap-4'>
            <div className='inline-flex items-center gap-2 text-blue-gray-900'>
              <GroupIcon fontSize='small' />
              <Typography variant='lead'>
                Nombre d'apprenant
              </Typography>
            </div>
            <MyInput label="Minimum" />
            <MyInput label="Maximum" />
          </div>
        </div>
      </CardBody>
      <CardFooter className="pt-0 text-right">
        <ButtonPrimary name="Confirmer" />
      </CardFooter>
    </Card>
  )
}
