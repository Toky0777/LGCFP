import React from "react";
import {
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  BanknotesIcon,
  ChartBarSquareIcon,
  PresentationChartBarIcon,
  PrinterIcon,
  Square3Stack3DIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/solid";
import { ButtonPrimary } from "../components/Boutons";
import { Link } from "react-router-dom";

const navListMenuItems = [
  {
    title: "Evaluation de formation",
    description: "Find the perfect solution for your needs.",
    icon: PresentationChartBarIcon,
  },
  {
    title: "Catalogue de formation",
    description: "Find the perfect solution for your needs.",
    icon: SquaresPlusIcon,
  },
  {
    title: "CRM",
    description: "Facturation et BPF",
    icon: PrinterIcon,
  },
  {
    title: "Gestion multi-centre",
    description: "Meet and learn about our dedication",
    icon: Square3Stack3DIcon,
  },
  {
    title: "Paiement en ligne",
    description: "Learn how we can help you achieve your goals.",
    icon: BanknotesIcon,
  },
  {
    title: "Gestion de qualité",
    description: "Find the perfect solution for your needs.",
    icon: ChartBarSquareIcon,
  },
]
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <Link to="/" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </Link>
    ),
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-white"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Fonctionnalités
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="white"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contacter nous
        </ListItem>
      </Typography>
    </List>
  );
}

export function NavBarLanding() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <nav className="w-full px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <img src="/images/Logo_lgcfp.ico" alt="logo_lgcfp" className="w-5 h-auto" />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="white">
            Créer un compte
          </Button>
          <ButtonPrimary size="sm" name="Se connecter" url="/Login" />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="white">
            Créer un compte
          </Button>
          <ButtonPrimary size="sm" name="Se connecter" url="/Welcome" />

        </div>
      </Collapse>
    </nav>
  );
}