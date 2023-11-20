import { Input, Option, Select, Textarea, Typography } from "@material-tailwind/react";
import InfoIcon from '@mui/icons-material/Info';

export function MyInput(props) {
  const { label, success } = props;
  return (
    <div className="">
      <Input label={label} color="purple" />
      {success ? <Typography
        variant="small"
        color="green"
        className="mt-2 flex items-center gap-1 font-normal"
      >
        <InfoIcon />
        Info norma.
      </Typography> :

        <Typography
          variant="small"
          color="red"
          className="mt-2 flex items-center gap-1 font-normal"
        >
          <InfoIcon />
          Message d'erreur.
        </Typography>} */}

    </div>
  );
}