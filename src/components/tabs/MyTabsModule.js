import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardBody,
  Typography,
  Tooltip,
  IconButton,
  CardFooter,
  Button,
  Chip,
} from "@material-tailwind/react";

// Import icon
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';



const TABLE_HEAD = ["#", "Référence", "Nom du module", "Durée de formation", "Prix individuel", "Prix par groupe", "Action"];

const TABLE_ROWS = [
  {
    mod_id: 1,
    mod_auteur: "Wamada",
    mod_ref: "Ex001",
    mod_nom: "Formation Excel pour débutant",
    mod_description: "Lorem ipsum dolor sit amet et dolor sit amet, consectetur adipiscing elit",
    mod_prix_pax: 500000,
    mod_prix_groupe: 5000000,
    mod_duree_j: 1,
    mod_duree_h: 8,
    mod_status: "online"
  },
  {
    mod_id: 2,
    mod_auteur: "Wamada",
    mod_ref: "Ex002",
    mod_nom: "Formation Photoshop",
    mod_description: "C'est la base de la manipulation de photo",
    mod_prix_pax: 200000,
    mod_prix_groupe: 2500000,
    mod_duree_j: 3,
    mod_duree_h: 16,
    mod_status: "online"
  },
];

function formatMoney(amount) {
  // Utilisation de la fonction toLocaleString pour ajouter les séparateurs de milliers
  return amount.toLocaleString('fr-FR');
}

function ModuleTable() {
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
              ({ mod_id, mod_auteur, mod_ref, mod_nom, mod_description, mod_prix_pax, mod_prix_groupe, mod_duree_j, mod_duree_h, mod_status }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                const pax = formatMoney(mod_prix_pax);
                const groupe = formatMoney(mod_prix_groupe);

                return (
                  <tr key={mod_id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {mod_id}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {mod_ref}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content={mod_description}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal cursor-pointer"
                        >
                          {mod_nom}
                        </Typography>
                      </Tooltip>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {mod_duree_j} jour(s) ({mod_duree_h} heures)
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {pax} Ar
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {groupe} Ar
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Modifier un module">
                        <IconButton variant="text">
                          <EditIcon className="h-4 w-4 text-blue-500" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Supprimer un module">
                        <IconButton variant="text">
                          <DeleteIcon className="h-4 w-4 text-red-500" />
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
    label: "En ligne",
    value: "online",
    desc: <ModuleTable />,
    chips: 3,
    color: "green"
  },
  {
    label: "Hors ligne",
    value: "offline",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
    chips: 1,
    color: "red"
  },
  {
    label: "Archives",
    value: "archive",
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
    chips: 5,
    color: "blue-gray",
  },
  {
    label: "Corbeilles",
    value: "trash",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
    chips: 1,
    color: "blue-gray",
  },
];

export function MyTabsBodyModule() {

  return (
    <Tabs value="online" className="max-w-screen mx-auto px-6">
      <TabsHeader
        className="bg-transparent max-w-screen-lg"
        indicatorProps={{
          className: "bg-gray-900/10 shadow-none !text-gray-900",
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