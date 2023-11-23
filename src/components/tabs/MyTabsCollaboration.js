import React from "react";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography,
    Chip,
    Card,
    CardHeader,
    Rating,
  } from "@material-tailwind/react";
  
  // Import icon
  import FmdGoodIcon from '@mui/icons-material/FmdGood';

  const entreprise = [
    {
        name: 'Colas Madagascar',
        adress: 'Adresse : 3GH9+45H, Antananarivo',
        star: 4,
    }
  ]

  function CollaborationTable() {
    const [rated, setRated] = React.useState(4);
    return (
      <>
      {entreprise.map(({ name, adress, star }) => (
        <Card color="transparent" shadow={true} className="w-full px-6" key={name}>
            <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center justify-between gap-4 pt-0 pb-4"
            >
                <div className="inline-flex items-center gap-4">
                    <img src="images/colas.png" alt="logo" className="w-32" />
                    <div>
                        <Typography variant="h5" color="blue-gray" >
                            {name}
                        </Typography>
                        <Typography color="blue-gray" className="inline-flex items-center">
                            <FmdGoodIcon />
                            {adress}
                        </Typography>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <Typography variant="h5" color="blue-gray" >
                        {rated}
                    </Typography>
                    <Rating value={star} onChange={(value) => setRated(value)} />
                    <Typography color="blue-gray" className="font-medium text-blue-gray-500">
                        ( 114 avis)
                    </Typography>
                </div>
            </CardHeader>
        </Card>
        ))}
      </>
    );
  }
  
  const data = [
    {
      label: "Invitations en attentes",
      value: "attente",
      desc: <CollaborationTable />,
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
  
  export function MyTabsCollaboration() {
  
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
    );
  }