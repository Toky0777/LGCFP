import React from 'react'
import NavBarEmp from '../../layout/NavEmp'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import {  IconButton, Input, Typography } from '@material-tailwind/react';
import SearchIcon from '@mui/icons-material/Search';

export default function AccueilEMP() {
  const [search, setSearch] = React.useState("");
  const onChange = ({ target }) => setSearch(target.value);
  return (
    <div>
      <NavBarEmp/>
      <div class="grid max-w-screen-2xl px-16 py-8 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
          <Typography variant="h2" className='max-w-2xl '>Bonjour, testName</Typography>
          <Typography variant="h5" className='max-w-2xl mb-6 font-normal text-gray-500'>"Trouvez instantanément ce dont vous avez besoin grâce à notre
          recherche intuitive." Simplifiez votre expérience ici !</Typography>
          <div className="relative flex w-full max-w-[24rem]">
            <Input
              size='md'
              type="search"
              placeholder="Rechercher"
              value={search}
              onChange={onChange}
              className=" !border-t-blue-gray-300  placeholder:text-blue-gray-300 placeholder:text-md focus:!border-purple-300 pl-4"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              containerProps={{
                className: "min-w-0",
              }}
            />
            <IconButton 
              size="sm"
              color={search ? "purple" : "purple"}
              disabled={!search}
              className="!absolute right-1 top-1 rounded"
            >
              <SearchIcon />
            </IconButton >
          </div>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Player
          autoplay
          loop
          src="/animation/search.json"
          style={{ height: '590px'}}
        >
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </div>
    </div>
    </div>
  )
}
