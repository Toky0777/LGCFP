import { Card, CardBody, CardFooter, Option, Select, Textarea, Typography } from '@material-tailwind/react'
import React from 'react'
import { ButtonPrimary } from '../Boutons'
import { MyInput } from '../MyInput'
import InfoIcon from '@mui/icons-material/Info';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';



export default function FournisseurForm() {
  return (
    <div>
        <Card className="mx-auto w-full max-w-[50rem]">
          <CardBody className="flex flex-col gap-4">
            <div>
              <Typography variant="h4" color="blue-gray">
                Ajout d'un Fournisseur
              </Typography>
              <Typography
                className="font-normal"
                variant="paragraph"
                color="gray"
              >
                Veuillez entrer des informations pertinantes s'il vous plaît !
              </Typography>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-3'>
                <div className='inline-flex items-center gap-2 text-blue-gray-900'>
                  <InfoIcon fontSize='small' />
                  <Typography variant='lead'>
                    Information de base
                  </Typography>
                </div>
                <div className='inline-flex items-center gap-4'>
                    <MyInput label="Nom" />
                    <Select color='purple' variant="outlined" label="Service">
                        <Option>Déplacement</Option>
                        <Option>Hébergement</Option>
                        <Option>Restaurant</Option>
                        <Option>Sonorisation</Option>
                        <Option>Salle</Option>
                        <Option>Support</Option>
                    </Select>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-3'>
                <div className='inline-flex items-center gap-2 text-blue-gray-900'>
                  <AddIcCallIcon fontSize='small' />
                  <Typography variant='lead'>
                    Contact
                  </Typography>
                </div>
                <div className='inline-flex items-center gap-4'>
                    <MyInput label="Contact" />
                    <MyInput label="E-mail" />
                </div>
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0 text-right">
            <ButtonPrimary name="Confirmer">
              Confirmer
            </ButtonPrimary>
          </CardFooter>
        </Card>
    </div>
  )
}
