import React from 'react'
import NavBar from '../../../layout/NavBar'
import SubComponent from '../../../components/SubComponent'
import { PencilIcon } from "@heroicons/react/24/solid";
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
import { BookOpenIcon } from '@heroicons/react/24/solid'
import ThematiqueForm from '../../../components/modal-form/ThematiqueForm';
import DeleteIcon from '@mui/icons-material/Delete';


const TABLE_HEAD = ["Type de formation", "Domaine de formation", "Thématique", "Action"];

const TABLE_ROWS = [
  {
    type: "Excel",
    domaine: "Bureautique",
    thematique: "Logiciel bureautique",
  },
];


function MembersTable() {
  return (
    <Card className="mx-4 h-full" shadow={false}>

      <CardBody className="-p-6 px-0">
        <table className="mt-4 w-full min-w-max table-auto">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  // className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
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
              ({ type, domaine, thematique }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={thematique}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {type}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {domaine}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {thematique}
                      </Typography>
                    </td>
                    <td className={`classes text-center`}>
                      <Tooltip content="Modifier">
                        <IconButton variant="text" color='blue'>
                          <PencilIcon className="h-4 w-4 "/>
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

export default function Thematique() {
  return (
    <div>
      <NavBar />
      <SubComponent icon={<BookOpenIcon class="w-7 text-gray-800" />} label="Thématique de formations" btn_name={<ButtonAdd name="Ajouter un thématique" size="sm" modal_size="lg" modal={<ThematiqueForm />} />} />
      <MembersTable />
    </div>
  )
}