import React from 'react';
import NavBar from '../../../layout/NavBar';
import Calendar, { Annuel } from './components/Calendar';
import SubComponent from '../../../components/SubComponent';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function Agenda() {
  return (
    <div>
      <NavBar/>
      <SubComponent icon={<CalendarMonthIcon class="w-7 text-gray-800" />} label="Agenda"/>

      {/* <div class="inline-flex items-start justify-between gap-4 w-[100%] px-6">
        <div class="w-[16%]">
          <Annuel />
        </div>

        <div class="w-[84%]">
          <Calendar/>
        </div>
      </div> */}
        <Calendar/>
    </div>
  )
}
