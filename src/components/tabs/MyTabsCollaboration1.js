import React from 'react'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {
  Card,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  IconButton,
  Tooltip,
 Tab, TabPanel, Tabs, TabsBody, TabsHeader, Rating, 
} from "@material-tailwind/react";

const TABLE_HEAD = ["Image", "Nom", "Adresse", "Evaluation", "Action"];
 
const TABLE_ROWS = [
  {
    img: "images/lecofruit.png",
    nom: "Lecofruit Madagascar ",
    adresse: "3GH9+45H, Antananarivo",
    star: 4,
  },
  {
    img: "images/e.jpg",
    nom: "BNI Madagascar ",
    adresse: "Rue II Paul Ambato",
    star: 4,
  },
];
 
function CollaborationTable() {
const [rated, setRated] = React.useState(4);
  return (
    <Card className="mx-4 h-full" shadow={false}>
      <CardBody className="-p-6 px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
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
              ({ img, nom, adresse, star}, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={nom}>
                    <td className={classes}>
                        <img src={img} alt="logo" className="h-10" />
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {nom}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {adresse}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                        <Rating value={star} onChange={(value) => setRated(value)} />
                    </td>
                    <td className={classes}>
                      <Tooltip content="Accepter">
                        <IconButton variant="text" color='blue-gray'>
                          <CheckCircleIcon className="h-4 w-4" />
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

const data = [
    {
      label: "Invitations en attentes",
      value: "attente",
      desc: <CollaborationTable/>,
      chips: 3,
      color: "green"
    },
    {
      label: "Collaborateurs",
      value: "all",
      desc: `La liste des entreprises en collaboration`,
      chips: 1,
      color: "red"
    },
    {
      label: "Invitations envoyées",
      value: "envoyer",
      desc: `La liste des invitations envoyées`,
      chips: 5,
      color: "blue-gray",
    },
  ];
export default function MyTabsCollaboration1() {
  return (
    <Tabs value="attente" className="max-w-screen mx-auto px-6">
        <div class="grid grid-cols-3 gap-4">
            <div class="col-start-2 col-span-4">
            <TabsHeader
            className="bg-transparent max-w-xl h-[50px]"
            indicatorProps={{
                className: "bg-blue-gray-50 shadow-none !text-gray-900",
            }}
            >
            {data.map(({ label, value, chips, color }) => (
                <Tab key={value} value={value}>
                <div className="inline-flex items-center gap-2">
                    <Typography variant="small">{label}</Typography>
                    <Chip color={color} value={chips} size="sm" className="normal-case font-normal rounded-full" />
                </div>
                </Tab>
            ))}
            </TabsHeader>
            </div>
        </div>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
  )
}
