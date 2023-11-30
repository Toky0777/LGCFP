import { Card, CardBody, CardFooter, Option, Select, Typography } from '@material-tailwind/react'
import React from 'react'
import { ButtonPrimary } from '../Boutons'
import { MyInput } from '../MyInput'
import InfoIcon from '@mui/icons-material/Info';
import FmdGoodIcon from '@mui/icons-material/FmdGood';



export default function SalleForm() {
  return (
    <div>
        <Card className="mx-auto w-full max-w-[50rem]">
          <CardBody className="flex flex-col gap-4">
            <div>
              <Typography variant="h4" color="blue-gray">
                Ajout d'une salle
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
                  <MyInput label="Salle de formation" />
                    <Select color='purple' variant="outlined" label="Fournisseur">
                        <Option>Fournisseur 1</Option>
                        <Option>Fournisseur 2</Option>
                        <Option>Fournisseur 3</Option>
                    </Select>
                </div>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='inline-flex items-center gap-2 text-blue-gray-900'>
                  <FmdGoodIcon fontSize='small' />
                  <Typography variant='lead'>
                    Lieu
                  </Typography>
                </div>
                <div className='inline-flex items-center gap-4'>
                  <MyInput label="Quartier" />
                    <Select color='purple' variant="outlined" label="Ville">
                        <Option>Antananarivo</Option>
                        <Option>Antsiranana</Option>
                        <Option>Mahajanga</Option>
                        <Option>Fianarantsoa</Option>
                        <Option>Toamasina</Option>
                        <Option>Toliara</Option>
                    </Select>
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
