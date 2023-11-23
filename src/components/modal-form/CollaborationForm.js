import { Card, CardBody, CardFooter, Typography } from '@material-tailwind/react'
import React from 'react'
import { ButtonPrimary } from '../Boutons'
import { MyInput } from '../MyInput'
import InfoIcon from '@mui/icons-material/Info';



export default function CollaborationForm() {
  return (
    <div>
        <Card className="mx-auto w-full max-w-[40rem]">
          <CardBody className="flex flex-col gap-4">
            <div>
              <Typography variant="h4" color="blue-gray">
                Se collaborer
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
                    Information sur l'entreprise
                  </Typography>
                </div>
                <div className='inline-flex items-center gap-4'>
                  <MyInput label="Nom de l'entreprise" />
                  <MyInput label="E-mail" />
                </div>
                  <MyInput label="Nom de responsable" />
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
