import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import {
  Card,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  TabsBody,
  TabPanel,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Formateur", "Téléphone", "Statut", "Fonction", "Action"];
 
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    nom: "John ",
    prenom: "Michael",
    email: "john@numerika.center",
    phone: "+261 34 01 033 02",
    online: true,
    fonction: "Formateur Excel",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    nom: "Alexa ",
    prenom: "Liras",
    email: "alexa@numerika.center",
    phone: "+261 34 01 033 02",
    online: false,
    fonction: "Formateur Excel",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    nom: "Laurent ",
    prenom: "Perrier",
    email: "laurent@numerika.center",
    phone: "+261 34 01 033 02",
    online: false,
    fonction: "Formateur PowerBI",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    nom: "Michael ",
    prenom: "Levi",
    email: "michael@numerika.center",
    phone: "+261 34 01 033 02",
    online: true,
    fonction: "Formateur Graphic",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    nom: "Richard ",
    prenom: "Gran",
    email: "richard@numerika.center",
    phone: "+261 34 01 033 02",
    online: false,
    fonction: "Formateur Excel",
  },
];
 
function MembersTable() {
  return (
    <Card className="mx-4 h-full" shadow={false}>
      <CardBody className="-p-6 px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
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
              ({ img, nom, prenom, email, phone, online, fonction }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={nom}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={nom} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {nom}{prenom}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {phone}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "actif" : "en attente"}
                          color={online ? "green" : "lime"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {fonction}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Désactiver">
                        <IconButton variant="text" color='red'>
                          <PowerSettingsNewIcon className="h-4 w-4" />
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
      label: "En Collaboration",
      value: "collaboration",
      desc: <MembersTable />,
      chips: 3,
      color: "green"
    },
    {
      label: "En attente",
      value: "attente",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
      chips: 1,
      color: "red"
    },
  ];
  
  export function MyTabsFormateur() {
  
    return (
      <Tabs value="collaboration" className="max-w-screen mx-auto px-6">
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