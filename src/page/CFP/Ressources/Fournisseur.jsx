import React from 'react'
import NavBar from '../../../layout/NavBar'
import SubComponent from '../../../components/SubComponent'
import EditIcon from '@mui/icons-material/Edit';
import {
  Card,
  Typography,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { ButtonAdd } from '../../../components/Boutons'

// ICON
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DeleteIcon from '@mui/icons-material/Delete';
import FournisseurForm from '../../../components/modal-form/FournisseurForm';


const TABLE_HEAD = ["Nom", "Service", "Contact","E-mail", "Action"];

const TABLE_ROWS = [
  {
    nom: "Tsiro Naka",
    service: "Restaurant",
    contact: "+261 34 01 033 02",
    mail: "tsironaka@gmail.com",
  },
  {
    nom: "Cotisse",
    service: "Déplacement",
    contact: "+261 32 03 034 04",
    mail: "cotisse@mail.com",
  },
];


function FournisseurTable() {
  return (
    <Card className="mx-4 h-full" shadow={false}>

      <CardBody className="-p-6 px-0">
        <table className="mt-4 w-full min-w-max table-auto">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className={`border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 ${
                    head === "Action" ? "text-center" : "text-left"
                  }`}
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ nom, service, contact, mail }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={nom}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {nom}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {service}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {contact}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {mail}
                      </Typography>
                    </td>
                    <td className={`classes text-center`}>
                      <Tooltip content="Modifier">
                        <IconButton variant="text" color='blue'>
                          <EditIcon className="h-4 w-4 "/>
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Supprimer">
                        <IconButton variant="text" color='red'>
                          <DeleteIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function Fournisseur() {
  return (
    <div>
      <NavBar />
      <SubComponent icon={<LocalShippingIcon class="w-7 text-gray-800" />} label="Fournisseur" btn_name={<ButtonAdd name="Ajouter un fournisseur" size="sm" modal_size="lg" modal={<FournisseurForm />} />} />
      <FournisseurTable />
    </div>
  )
}