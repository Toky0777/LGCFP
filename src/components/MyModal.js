import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export function MyModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button variant="outlined" className='border-[#9333ea] text-[#9333ea] flex items-center gap-2 normal-case font-Raleway font-medium' size={props.size} >
        <PlusIcon className='w-4 h-4' />
        {props.name}
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
      </Dialog>
    </>
  );
}