import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Avatar,
  Typography,
  Rating,
  IconButton,
} from "@material-tailwind/react";
import { ButtonGray } from "./Boutons";
 
export function MyPopoverFormateur() {
  const [openPopover, setOpenPopover] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
 
  return (
    <Popover open={openPopover} handler={setOpenPopover}>

      <PopoverHandler {...triggers}>
        <Button variant="text">Formateur</Button>
      </PopoverHandler>

      <PopoverContent {...triggers} className="z-50 max-w-[24rem] p-0 px-4 pt-3">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
              <div>
                <Typography variant="h6">Levelo Ravelo</Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  Formateur Excel
                </Typography>
              </div>
            </div>
            <div className="flex flex-col w-12 h-12 rounded-lg items-center justify-center text-white bg-blue-gray-400 cursor-pointer gap-0">
                <span className="text-2xl font-semibold ">2</span>
                <span className="-mt-2 text-xs">ans</span>
            </div>
          </div>
          
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-blue-gray-500 "
          >
            <span>Nombre de formation : 50</span>
          </Typography>

          <div className="flex items-center gap-8 border-t border-blue-gray-50 ">
            <Rating value={4} />|
            <ButtonGray name="Plus d'info"/>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function MyPopoverStagiaire() {
  const [openPopover, setOpenPopover] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
 
  return (
    <Popover open={openPopover} handler={setOpenPopover}>

      <PopoverHandler {...triggers}>
        <Button variant="text">Stagiaire</Button>
      </PopoverHandler>

      <PopoverContent {...triggers} className="z-50 max-w-[24rem] p-0 px-4 pt-3">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-start justify-between">
            <div className="flex items-center gap-4">
              <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" />
              <div>
                <Typography variant="h6">Koto RABE</Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  Stagiaire
                </Typography>
              </div>
            </div>
            <img src="images/numerika.png" alt="logo" className="h-8"/>
          </div>
          
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-blue-gray-500 "
          >
            <span>Cursus : Excel et PowerBI niveau 1,2,3 </span>
          </Typography>

          <div className="flex items-center gap-8 border-t border-blue-gray-50 ">
            <Rating value={4} /> {" | "}
            <ButtonGray name="Plus d'info"/>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function MyPopoverEntreprise() {
  const [openPopover, setOpenPopover] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
 
  return (
    <Popover open={openPopover} handler={setOpenPopover}>

      <PopoverHandler {...triggers}>
        <Button variant="text">Entreprise</Button>
      </PopoverHandler>

      <PopoverContent {...triggers} className="z-50 max-w-[24rem] p-0 px-4 pt-3">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-start justify-between">
            <div className="flex items-center gap-4">
              <img src="images/lecofruit.png" alt="logo" className="h-10"/>
              <div>
                <Typography variant="h6">LECOFRUIT</Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  Entreprise
                </Typography>
              </div>
            </div>
          </div>
          
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-blue-gray-500 flex flex-col"
            >
            <span>Contact : +261 20 22 223 73</span>
            <span className="inline-flex gap-1">Mail : <p className="hover:text-blue-500">lecofruit@basan.mg</p></span>
          </Typography>

          <div className="flex items-center gap-8 border-t border-blue-gray-50 ">
            <Rating value={4} /> {" | "}
            <ButtonGray name="Plus d'info"/>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export function MyPopoverModule() {
  const [openPopover, setOpenPopover] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };
 
  return (
    <Popover open={openPopover} handler={setOpenPopover}>

      <PopoverHandler {...triggers}>
        <Button variant="text">Module</Button>
      </PopoverHandler>

      <PopoverContent {...triggers} className="z-50 max-w-[24rem] p-0 px-4 pt-3">
        <div className="flex flex-col gap-4">
          <div className="inline-flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div>
                <Typography variant="h6">PowerBI</Typography>
                <Typography variant="small" color="gray" className="font-normal">
                  Niveau 2
                </Typography>
              </div>
            </div>
            <img src="images/numerika.png" alt="logo" className="h-10"/>
          </div>
          
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-blue-gray-500 flex flex-col"
            >
            <span>Durée : 2 jours {"(4 heures)"}</span>
            <span>Prix : 500 000 Ar</span>
          </Typography>

          <div className="flex items-center gap-8 border-t border-blue-gray-50 ">
            <Rating value={4} /> {" | "}
            <ButtonGray name="Plus d'info"/>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}