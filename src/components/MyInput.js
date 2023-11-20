import { Input, Option, Select, Textarea } from "@material-tailwind/react";

export function MyInput(props) {
  const { label } = props;
  return (
    <div className="">
      <Input label={label} color="purple" />
      {/* {success ? <Typography
        variant="small"
        color="green"
        className="mt-2 flex items-center gap-1 font-normal"
      >
        {/* <InfoIcon /> */}
      {/* Info norma. */}
      {/* </Typography> :

        <Typography
          variant="small"
          color="red"
          className="mt-2 flex items-center gap-1 font-normal"
        >
          <InfoIcon />
          Message d'erreur.
        </Typography> */}

    </div>
  );
}

export function MyTextarea(props) {
  const { label } = props;
  return (
    <div className="">
      <Textarea label={label} color="purple" />
      {/* {success ? <Typography
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
export function MySelectInput(props) {
  const { label, data } = props;
  return (
    <div className="">
      <Select label={label} color="purple">
        {data.map((item, index) => (
          <Option key={item}>{item}</Option>
        ))

        }
      </Select>
      {/* {success ? <Typography
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