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
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import RecyclingIcon from '@mui/icons-material/Recycling';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Archive';



const TABLE_HEAD = ["#", "Référence", "Nom du module", "Durée de formation", "Prix individuel", "Prix par groupe", "Statut", "Action"];

const TABLE_ROWS = [
  {
    "mod_id": 1,
    "mod_auteur": "Wamada",
    "mod_ref": "Ex001",
    "mod_nom": "Formation Excel pour débutant",
    "mod_description": "Lorem ipsum dolor sit amet et dolor sit amet, consectetur adipiscing elit",
    "mod_prix_pax": 500000,
    "mod_prix_groupe": 5000000,
    "mod_duree_j": 1,
    "mod_duree_h": 8,
    "mod_status": "online"
  },
  {
    "mod_id": 2,
    "mod_auteur": "NUMERIKA",
    "mod_ref": "PB001",
    "mod_nom": "Power BI Niveau II",
    "mod_description": "Pour les avancés en BI",
    "mod_prix_pax": 200000,
    "mod_prix_groupe": 2500000,
    "mod_duree_j": 3,
    "mod_duree_h": 16,
    "mod_status": "archive"
  },
  {
    "mod_id": 3,
    "mod_auteur": "Auteur3",
    "mod_ref": "Ex003",
    "mod_nom": "Formation JavaScript avancée",
    "mod_description": "Découvrez les concepts avancés de JavaScript",
    "mod_prix_pax": 300000,
    "mod_prix_groupe": 3500000,
    "mod_duree_j": 2,
    "mod_duree_h": 12,
    "mod_status": "online"
  },
  {
    "mod_id": 4,
    "mod_auteur": "Auteur4",
    "mod_ref": "IT002",
    "mod_nom": "Introduction à la Cybersécurité",
    "mod_description": "Explorez les bases de la cybersécurité",
    "mod_prix_pax": 250000,
    "mod_prix_groupe": 3000000,
    "mod_duree_j": 1,
    "mod_duree_h": 6,
    "mod_status": "online"
  },
  {
    "mod_id": 5,
    "mod_auteur": "Auteur5",
    "mod_ref": "DS001",
    "mod_nom": "Science des Données pour les Débutants",
    "mod_description": "Introduction aux principes de la science des données",
    "mod_prix_pax": 180000,
    "mod_prix_groupe": 2200000,
    "mod_duree_j": 2,
    "mod_duree_h": 10,
    "mod_status": "archive"
  },
  {
    "mod_id": 6,
    "mod_auteur": "Auteur6",
    "mod_ref": "PM003",
    "mod_nom": "Gestion de Projet Agile",
    "mod_description": "Méthodologies agiles pour la gestion de projet",
    "mod_prix_pax": 350000,
    "mod_prix_groupe": 4000000,
    "mod_duree_j": 2,
    "mod_duree_h": 14,
    "mod_status": "trash"
  },
  {
    "mod_id": 7,
    "mod_auteur": "Auteur7",
    "mod_ref": "MK002",
    "mod_nom": "Stratégies de Marketing Digital",
    "mod_description": "Optimisez votre présence en ligne",
    "mod_prix_pax": 280000,
    "mod_prix_groupe": 3200000,
    "mod_duree_j": 3,
    "mod_duree_h": 12,
    "mod_status": "archive"
  },
  {
    "mod_id": 8,
    "mod_auteur": "Auteur8",
    "mod_ref": "GD001",
    "mod_nom": "Conception Graphique pour Débutants",
    "mod_description": "Les bases de la conception graphique",
    "mod_prix_pax": 150000,
    "mod_prix_groupe": 1800000,
    "mod_duree_j": 1,
    "mod_duree_h": 8,
    "mod_status": "offline"
  },
  {
    "mod_id": 9,
    "mod_auteur": "Auteur9",
    "mod_ref": "FN001",
    "mod_nom": "Finance Personnelle 101",
    "mod_description": "Gérez votre argent de manière efficace",
    "mod_prix_pax": 120000,
    "mod_prix_groupe": 1500000,
    "mod_duree_j": 1,
    "mod_duree_h": 6,
    "mod_status": "archive"
  },
  {
    "mod_id": 10,
    "mod_auteur": "Auteur10",
    "mod_ref": "SS001",
    "mod_nom": "Sécurité des Systèmes Informatiques",
    "mod_description": "Principes de base de la sécurité informatique",
    "mod_prix_pax": 300000,
    "mod_prix_groupe": 3500000,
    "mod_duree_j": 2,
    "mod_duree_h": 12,
    "mod_status": "archive"
  }
];

function formatMoney(amount) {
  // Utilisation de la fonction toLocaleString pour ajouter les séparateurs de milliers
  return amount.toLocaleString('fr-FR');
}

function OnlineModules() {
  const onlineModules = TABLE_ROWS.filter((module) => module.mod_status === 'online');
  return (
    <tbody>
      {onlineModules.map(
        ({ mod_id, mod_auteur, mod_ref, mod_nom, mod_description, mod_prix_pax, mod_prix_groupe, mod_duree_j, mod_duree_h, mod_status }, index) => {
          const isLast = index === onlineModules.length - 1;
          const classes = isLast
            ? "p-4"
            : "p-4 border-b border-blue-gray-50";
          const lastClass = isLast ? "p-4 text-center" : "p-4 border-b border-blue-gray-50 text-center"
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
                <div className="w-max">
                  <Chip
                    className="normal-case font-normal rounded-full"
                    color={
                      mod_status === "online"
                        ? "green"
                        : mod_status === "offline"
                          ? "amber"
                          : mod_status === "archive"
                            ? "cyan"
                            : mod_status === "trash"
                              ? "red"
                              : ""
                    } value={
                      mod_status === "online"
                        ? "En ligne"
                        : mod_status === "offline"
                          ? "Hors ligne"
                          : mod_status === "archive"
                            ? "Archivé"
                            : mod_status === "trash"
                              ? "Corbeille"
                              : ""
                    } />
                </div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >

                </Typography>
              </td>
              <td className={lastClass}>
                <Tooltip content="Mettre hors ligne">
                  <IconButton variant="text" color="purple">
                    <CloudDownloadIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
                <Tooltip content="Archiver">
                  <IconButton variant="text" color="cyan">
                    <ArchiveIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          );
        },
      )}
    </tbody>
  )
}

function OfflineModules() {
  const offlineModules = TABLE_ROWS.filter((module) => module.mod_status === 'offline');
  return (
    <tbody>
      {offlineModules.map(
        ({ mod_id, mod_auteur, mod_ref, mod_nom, mod_description, mod_prix_pax, mod_prix_groupe, mod_duree_j, mod_duree_h, mod_status }, index) => {
          const isLast = index === offlineModules.length - 1;
          const classes = isLast
            ? "p-4"
            : "p-4 border-b border-blue-gray-50";
          const lastClass = isLast ? "p-4 text-center" : "p-4 border-b border-blue-gray-50 text-center"
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
                <div className="w-max">
                  <Chip
                    className="normal-case font-normal rounded-full"
                    color={
                      mod_status === "online"
                        ? "green"
                        : mod_status === "offline"
                          ? "amber"
                          : mod_status === "archive"
                            ? "cyan"
                            : mod_status === "trash"
                              ? "red"
                              : ""
                    } value={
                      mod_status === "online"
                        ? "En ligne"
                        : mod_status === "offline"
                          ? "Hors ligne"
                          : mod_status === "archive"
                            ? "Archivé"
                            : mod_status === "trash"
                              ? "Corbeille"
                              : ""
                    } />
                </div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >

                </Typography>
              </td>
              <td className={lastClass}>
                <Tooltip content="Mettre en ligne">
                  <IconButton variant="text" color="purple">
                    <CloudUploadIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
                <Tooltip content="Modifier">
                  <IconButton variant="text" color="blue">
                    <EditIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
                <Tooltip content="Supprimer">
                  <IconButton variant="text" color="red">
                    <DeleteIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          );
        },
      )}
    </tbody>
  )
}

function ArchiveModules() {
  const archiveModules = TABLE_ROWS.filter((module) => module.mod_status === 'archive');
  return (
    <tbody>
      {archiveModules.map(
        ({ mod_id, mod_auteur, mod_ref, mod_nom, mod_description, mod_prix_pax, mod_prix_groupe, mod_duree_j, mod_duree_h, mod_status }, index) => {
          const isLast = index === archiveModules.length - 1;
          const classes = isLast
            ? "p-4"
            : "p-4 border-b border-blue-gray-50";
          const lastClass = isLast ? "p-4 text-center" : "p-4 border-b border-blue-gray-50 text-center"
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
                <div className="w-max">
                  <Chip
                    className="normal-case font-normal rounded-full"
                    color={
                      mod_status === "online"
                        ? "green"
                        : mod_status === "offline"
                          ? "amber"
                          : mod_status === "archive"
                            ? "cyan"
                            : mod_status === "trash"
                              ? "red"
                              : ""
                    } value={
                      mod_status === "online"
                        ? "En ligne"
                        : mod_status === "offline"
                          ? "Hors ligne"
                          : mod_status === "archive"
                            ? "Archivé"
                            : mod_status === "trash"
                              ? "Corbeille"
                              : ""
                    } />
                </div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >

                </Typography>
              </td>
              <td className={lastClass}>
                <Tooltip content="Désarchiver">
                  <IconButton variant="text" color="cyan">
                    <UnarchiveIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          );
        },
      )}
    </tbody>
  )
}

function TrashModules() {
  const trashModules = TABLE_ROWS.filter((module) => module.mod_status === 'trash');
  return (
    <tbody>
      {trashModules.map(
        ({ mod_id, mod_auteur, mod_ref, mod_nom, mod_description, mod_prix_pax, mod_prix_groupe, mod_duree_j, mod_duree_h, mod_status }, index) => {
          const isLast = index === trashModules.length - 1;
          const classes = isLast
            ? "p-4"
            : "p-4 border-b border-blue-gray-50";
          const lastClass = isLast ? "p-4 text-center" : "p-4 border-b border-blue-gray-50 text-center"
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
                <div className="w-max">
                  <Chip
                    className="normal-case font-normal rounded-full"
                    color={
                      mod_status === "online"
                        ? "green"
                        : mod_status === "offline"
                          ? "amber"
                          : mod_status === "archive"
                            ? "cyan"
                            : mod_status === "trash"
                              ? "red"
                              : ""
                    } value={
                      mod_status === "online"
                        ? "En ligne"
                        : mod_status === "offline"
                          ? "Hors ligne"
                          : mod_status === "archive"
                            ? "Archivé"
                            : mod_status === "trash"
                              ? "Corbeille"
                              : ""
                    } />
                </div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >

                </Typography>
              </td>
              <td className={lastClass}>
                <Tooltip content="Restaurer">
                  <IconButton variant="text" color="blue">
                    <RecyclingIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
                <Tooltip content="Supprimer définitivement">
                  <IconButton variant="text" color="red">
                    <DeleteIcon className="h-4 w-4" />
                  </IconButton>
                </Tooltip>
              </td>
            </tr>
          );
        },
      )}
    </tbody>
  )
}

function ModuleTable(props) {
  const { data } = props;
  return (
    <Card className="mx-4 h-full" shadow={false}>

      <CardBody className="-p-6 px-0">
        <table className="mt-4 w-full min-w-max table-auto">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className={`border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 ${head === 'Action' ? 'text-center' : 'text-left'}`}
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
          {data}
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
    desc: <ModuleTable data={<OnlineModules />} />,
    chips: 3,
    color: "green"
  },
  {
    label: "Hors ligne",
    value: "offline",
    desc: <ModuleTable data={<OfflineModules />} />,
    chips: 1,
    color: "red"
  },
  {
    label: "Archives",
    value: "archive",
    desc: <ModuleTable data={<ArchiveModules />} />,
    chips: 5,
    color: "blue-gray",
  },
  {
    label: "Corbeilles",
    value: "trash",
    desc: <ModuleTable data={<TrashModules />} />,
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
              <Chip color={
                value === "online"
                  ? "green"
                  : value === "offline"
                    ? "amber"
                    : value === "archive"
                      ? "cyan"
                      : value === "trash"
                        ? "red"
                        : ""
              } value={chips} size="sm" className="normal-case font-normal rounded-full" />
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