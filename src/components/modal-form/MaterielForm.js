import { Card, CardBody, CardFooter, Option, Select, Textarea, Typography } from '@material-tailwind/react'
import React from 'react'
import { ButtonPrimary } from '../Boutons'
import { MyInput } from '../MyInput'
import InfoIcon from '@mui/icons-material/Info';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';



export default function MaterielForm() {
  return (
    <div>
        <Card className="mx-auto w-full max-w-[50rem]">
          <CardBody className="flex flex-col gap-4">
            <div>
              <Typography variant="h4" color="blue-gray">
                Ajout d'un matériel
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
                  <MyInput label="Code" />
                  <MyInput label="Nom" />
                </div>
                <Select color='purple' variant="outlined" label="Type">
                  <Option>Interne</Option>
                  <Option>Externe</Option>
                </Select>
              </div>
              <div className='flex flex-col gap-2'>
                <div className='inline-flex items-center gap-2 text-blue-gray-900'>
                  <LocalOfferIcon fontSize='small' />
                  <Typography variant='lead'>
                    Description
                  </Typography>
                </div>
                <Textarea color="purple" label="Description" />
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
