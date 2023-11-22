import EditIcon from '@mui/icons-material/Edit';
import {
  Card,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Référent", "Genre", "Téléphone", "Adresse", "Statut", "Entreprise", "Action"];
 
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    nom: "John ",
    prenom: "Michael",
    email: "john@numerika.center",
    genre: true,
    adresse: "Rue II Paul Ambato",
    phone: "+261 34 01 033 02",
    online: true,
    entreprise: "Numerika",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    nom: "John ",
    prenom: "Michael",
    email: "alexa@numerika.center",
    genre: false,
    adresse: "Rue II Paul Ambato",
    phone: "+261 34 01 033 02",
    online: false,
    entreprise: "Numerika",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    nom: "John ",
    prenom: "Michael",
    email: "laurent@numerika.center",
    genre: false,
    adresse: "Rue II Paul Ambato",
    phone: "+261 34 01 033 02",
    online: false,
    entreprise: "BNI",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    nom: "John ",
    prenom: "Michael",
    email: "michael@numerika.center",
    genre: true,
    adresse: "Rue II Paul Ambato",
    phone: "+261 34 01 033 02",
    online: true,
    entreprise: "LECOFRUIT",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    nom: "John ",
    prenom: "Michael",
    email: "richard@numerika.center",
    genre: true,
    adresse: "Rue II Paul Ambato",
    phone: "+261 34 01 033 02",
    online: false,
    entreprise: "Numerika",
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
              ({ img, nom, prenom, email, genre, phone, adresse, online, entreprise }, index) => {
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
                          {genre ? "M" : "F"}
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
                          {phone}
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
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "actif" : "inactif"}
                          color={online ? "green" : "red"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {entreprise}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Editer">
                        <IconButton variant="text" color='blue-gray'>
                          <EditIcon className="h-4 w-4" />
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

  export function MyListeStagiaire() {
  
    return (
      <MembersTable />
    );
  }