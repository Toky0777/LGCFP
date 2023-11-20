import { Button, Card, CardBody, CardFooter, Checkbox, Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { MyInput } from '../MyInput'

function ThematiqueForm() {
  return (
    <Card className="mx-auto w-full max-w-[32rem]">
      <CardBody className="flex flex-col gap-4">
        <Typography variant="h4" color="blue-gray">
          Ajout d'un thématique
        </Typography>
        <Typography
          className="mb-3 font-normal"
          variant="paragraph"
          color="gray"
        >
          Veuillez entrer des informations pertinantes s'il vous plaît !
        </Typography>
        <MyInput label="Type de formation" />
        <MyInput label="Type de formation" />
        <MyInput label="Type de formation" />
      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Sign In
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ThematiqueForm
