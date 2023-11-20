import { Card, CardBody, CardFooter, Typography } from '@material-tailwind/react'
import React from 'react'
import { ButtonPrimary } from '../Boutons'
import { MyInput } from '../MyInput'

export default function MaterielForm() {
  return (
    <div>
        <Card className="mx-auto w-full max-w-[32rem]">
      <CardBody className="flex flex-col gap-4">
        <Typography variant="h4" color="blue-gray">
          Ajout d'un matériel
        </Typography>
        <div className='flex flex-col gap-2'>
          <MyInput label="Type de formation" />
          
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
