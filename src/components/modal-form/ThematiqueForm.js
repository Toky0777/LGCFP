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
          Enter your email and password to Sign In.
        </Typography>
        <Typography className="-mb-2" variant="h6">
          Your Email
        </Typography>
        <MyInput label="Email" />
        <Typography className="-mb-2" variant="h6">
          Your Password
        </Typography>
        <Input label="Password" size="lg" />
        <div className="-ml-2.5 -mt-3">
          <Checkbox label="Remember Me" />
        </div>
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
