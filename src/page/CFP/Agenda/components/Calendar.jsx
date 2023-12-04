import React, { useState, useEffect, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import multiMonthPlugin from '@fullcalendar/multimonth'
import interactionPlugin from "@fullcalendar/interaction";
import frLocale from '@fullcalendar/core/locales/fr';
import { Avatar, Card, Chip, Drawer, IconButton, List, ListItem, ListItemPrefix, ListItemSuffix, Typography } from '@material-tailwind/react';
// icon
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import DomainIcon from '@mui/icons-material/Domain';
import RoomIcon from '@mui/icons-material/Room';
import ChecklistIcon from '@mui/icons-material/Checklist';
import PaymentsIcon from '@mui/icons-material/Payments';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export function Annuel() {
  const TABLE_MONTH = [
    { month: "Janvier", seance: "12" },
    { month: "Fevrier", seance: "2" },
    { month: "Mars", seance: "1" },
    { month: "Avril", seance: "10" },
    { month: "Mai", seance: "1" },
    { month: "Juin", seance: "0" },
    { month: "Juillet", seance: "0" },
    { month: "Août", seance: "3" },
    { month: "Septembre", seance: "4" },
    { month: "Octobre", seance: "6" },
    { month: "Novembre", seance: "8" },
    { month: "Décembre", seance: "12" },
  ];

  return (
    <>
      <Card shadow={false} className='border'>
        <div className=''>
          <div class="flex justify-center items-center h-[40px] border-[1px] bg-purple-50 border-purple-500 rounded-t-md">
            <h2 class="text-sm text-purple-500 font-semibold">CHECK ANNUEL</h2>
          </div>
          <div className='py-2'>
            {TABLE_MONTH.map((item) => (
              <List key={item.month} className='px-2 py-0'>
                <ListItem className='px-8 py-2 text-sm'>
                  {item.month}
                  <ListItemSuffix>
                    <Chip
                      value={item.seance}
                      variant="ghost"
                      color="red"
                      size="sm"
                      className="rounded-full"
                    />
                  </ListItemSuffix>
                </ListItem>
              </List>
            ))}
          </div>
        </div>
      </Card>
    </>
  );
}

export function Filter() {
  const COLOR_FORMATEUR = [
    { name: "Dani Rasolo", img: "https://docs.material-tailwind.com/img/face-1.jpg", color:"ED6A5A" },
    { name: "Levy Ravelo", img: "https://docs.material-tailwind.com/img/face-1.jpg", color:"4ade80" },
    { name: "Rakoto Rabe", img: "https://docs.material-tailwind.com/img/face-1.jpg", color:"e3ad01" },
    { name: "Yonah Andria", img: "https://docs.material-tailwind.com/img/face-1.jpg", color:"9333ea" },
    { name: "Yonah Andria", img: "https://docs.material-tailwind.com/img/face-1.jpg", color:"607d8b" },
  ];
  return (
    <>
      <div>
      <Card shadow={false} className='border'>
        <div className=''>
          <div class="flex justify-center items-center h-[40px] border-[1px] bg-purple-50 border-purple-500 rounded-t-md">
            <h2 class="text-sm text-purple-500 font-semibold">FORMATEUR</h2>
          </div>
          {COLOR_FORMATEUR.map((item) => (
          <List key={item.name}>
            <ListItem className='py-1'>
              <ListItemPrefix>
                <div className={`bg-[#${item.color}] p-1 rounded-full`}></div>
                {/* <div className={`bg-${item.color}-500 p-1 rounded-full`}></div> */}
                {/* <span className="bg-[#4ade80] p-1 rounded-full"></span> */}
              </ListItemPrefix>
              <ListItemPrefix>
                <Avatar variant="circular" alt="candice" src={item.img}className='w-7 h-7'/>
              </ListItemPrefix>
              <div>
                <Typography variant="small" color="gray" className="font-normal">
                {item.name}
                </Typography>
              </div>
            </ListItem>
          </List>
          ))}
        </div>
      </Card>
      </div>
    </>
  )
} 



export default function Calendar() {

  const [selectedEvent, setSelectedEvent] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const calendarRef = useRef(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    updateCurrentDate();
  }, []);

  const updateCurrentDate = () => {
    const calendarApi = calendarRef.current?.getApi();
    const today = calendarApi?.getDate()?.toLocaleString('fr-FR', {
      month: 'long',
      year: 'numeric',
      timeZone: 'Europe/Moscow'
    });
    setCurrentDate(today);
  };

  const handleYearChange = (event) => {
    const selected = parseInt(event.target.value, 10);
    setSelectedYear(selected);
    const calendarApi = calendarRef.current?.getApi();
    calendarApi?.gotoDate(`${selected}-01-01`);
    updateCurrentDate();
  };

  const goToToday = () => {
    const calendarApi = calendarRef.current?.getApi();
    calendarApi?.today();
    updateCurrentDate();
  };

  const goToPrev = () => {
    const calendarApi = calendarRef.current?.getApi();
    calendarApi?.prev();
    updateCurrentDate();
  };

  const goToNext = () => {
    const calendarApi = calendarRef.current?.getApi();
    calendarApi?.next();
    updateCurrentDate();
  };

  const changeView = (view) => {
    const calendarApi = calendarRef.current?.getApi();
    calendarApi?.changeView(view);
  };

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleEventClick = (clickInfo) => {
    const clickedEvent = clickInfo.event;
    const extendedProps = clickedEvent.extendedProps;
    
  // Convertir les dates en objet Date pour le formatage
  const startDate = new Date(clickedEvent.start);
  const endDate = new Date(clickedEvent.end);

  // Formater les dates au format souhaité (par exemple, jour/mois/année heure)
  const formattedStartDate = startDate.toLocaleString('fr-FR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Europe/Moscow'
  });
  const formattedEndDate = endDate.toLocaleString('fr-FR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'Europe/Moscow'
  });

  setSelectedEvent({
    title: clickedEvent.title,
    start: formattedStartDate,
    end: formattedEndDate,
      formateur: extendedProps.formateur,
      salle: extendedProps.salle,
      client: extendedProps.client,
      ville: extendedProps.ville,
      type: extendedProps.type,
      financement: extendedProps.financement,
      ressources: extendedProps.ressources,
      photo: extendedProps.photo,
    });
  
    openDrawer();
  };
  

  const calendarOptions = {
    headerToolbar: {
      start: 'prev,next multiMonthYear today',
      center: 'title',
      end: 'dayGridMonth,timeGridWeek,listWeek'
    },
    locales: [frLocale],
    locale: 'fr',
  }

  const events = [
    {
      title: 'Excel',
      start: '2023-12-04T08:00:00',
      end: '2023-12-04T10:00:00',
      color: '#ED6A5A',
      formateur: 'Levy Raveloson',
      salle: 'Salle 1',
      client: 'BNI',
      ville: 'Antananarivo',
      type: 'Intra',
      financement: 'Fonds propres',
      ressources: 'PC, video projecteur',
      photo: 'images/e.jpg'
    },
    {
      title: 'PowerBI',
      start: '2023-12-14T09:00:00',
      end: '2023-12-14T11:00:00',
      color: '#4ade80',
      formateur: 'Levy Raveloson',
      salle: 'Salle 1',
      client: 'Lecofruit',
      ville: 'Antananarivo',
      type: 'Intra',
      financement: 'Fonds propres',
      ressources: 'PC, video projecteur',
      photo: 'images/lecofruit.png',
    },
    {
      title: 'Excel',
      start: '2023-12-14T10:00:00',
      end: '2023-12-14T12:00:00',
      formateur: 'Levy Raveloson',
      salle: 'Salle 1',
      client: 'Numerika',
      ville: 'Antananarivo',
      type: 'Intra',
      financement: 'Fonds propres',
      ressources: 'PC, video projecteur',
      photo: 'images/numerika.png'
    },
    {
      title: 'PowerBI Niveau 1',
      start: '2023-12-14T08:00:00',
      end: '2023-12-14T10:00:00',
      color: '#e3ad01',
      formateur: 'Levy Raveloson',
      salle: 'Salle 1',
      client: 'Numerika',
      ville: 'Antananarivo',
      type: 'Intra',
      financement: 'Fonds propres',
      ressources: 'PC, video projecteur',
      photo: 'images/numerika.png'
    },
  ];

  return (
    <div class="inline-flex items-start justify-between gap-4 w-[100%] px-6">
        <div class="w-[16%]">
          {/* <Annuel /> */}
          <Filter/>
        </div>

        <div class="w-[84%]">
          <div className='h-[38em] overflow-y-auto flex flex-col gap-3'>
            <div className='inline-flex justify-between items-center w-full  border-[1px] border-gray-300 rounded-md px-4'>
              <div className='inline-flex items-center gap-2'>
                <select value={selectedYear} onChange={handleYearChange} className='bg-transparent text-sm outline-none'>
                  {Array.from({ length: 7 }, (_, i) => {
                    const year = new Date().getFullYear() - 3 + i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
                <button onClick={() => changeView('multiMonthYear')} className='border border-gray-300 2xl:text-sm md:text-md flex flex-row px-4 py-1 items-center hover:bg-gray-100 transition-all rounded-md'>Annuel</button>

                <button onClick={goToToday} className='border border-gray-300 2xl:text-sm md:text-md flex flex-row px-4 py-1 items-center hover:bg-gray-100 transition-all rounded-md'>Aujourd'hui</button>
              </div>

              <div className='inline-flex items-center gap-4'>
                <IconButton variant="text" className="rounded-full" onClick={goToPrev}>
                  <ArrowBackIosNewIcon/>
                </IconButton>
                <span>{currentDate}</span>
                {/* <button onClick={goToNext}>Suivant</button> */}
                <IconButton variant="text" className="rounded-full" onClick={goToNext}>
                  <ArrowForwardIosIcon/>
                </IconButton>
              </div>

              <div className='inline-flex items-center gap-2'>
                <button onClick={() => changeView('dayGridMonth')} className='border border-gray-300 2xl:text-sm md:text-md flex flex-row px-4 py-1 items-center hover:bg-gray-100 transition-all rounded-md'>Mois</button>
                <button onClick={() => changeView('timeGridWeek')} className='border border-gray-300 2xl:text-sm md:text-md flex flex-row px-4 py-1 items-center hover:bg-gray-100 transition-all rounded-md'>Semaine</button>
                <button onClick={() => changeView('list')} className='border border-gray-300 2xl:text-sm md:text-md flex flex-row px-4 py-1 items-center hover:bg-gray-100 transition-all rounded-md'>Liste</button>
              </div>
            </div>

              <FullCalendar
                ref={calendarRef}
                contentHeight= "auto"
                dayMaxEventRows={2}
                initialView="dayGridMonth"
                weekends={true}
                selectable={false}
                firstDay={1}
                eventMaxStack={3}
                nowIndicator={true}
                events={events}
                // headerToolbar={calendarOptions.headerToolbar}
                headerToolbar={false}
                locales={calendarOptions.locales}
                locale={calendarOptions.locale}
                plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin, multiMonthPlugin]}
                eventColor= '#8E5EBA'
                eventBorderColor= '#9333ea'
                slotMinTime= '05:00:00'
                slotMaxTime= '19:00:00'
                
                eventClick={handleEventClick} // Handle event click
              />


              <Drawer open={open} onClose={closeDrawer} className="p-4" placement="right">
              {selectedEvent && (
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Informations
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </IconButton>
                  </div>
                  <div className='py-4'>
                    <Typography variant="h5" color="blue-gray">
                      Projet : {selectedEvent.title}
                    </Typography>
                    <Typography color="gray">
                      {selectedEvent.start} - {selectedEvent.end}
                    </Typography>
                    <div className='flex items-center justify-center'>
                      <img src={selectedEvent.photo} alt="logo" className='h-20'/>
                    </div>
                    <List>
                      <ListItem>
                        <ListItemPrefix>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </ListItemPrefix>
                        {selectedEvent.formateur}
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <MeetingRoomIcon/>
                        </ListItemPrefix>
                        {selectedEvent.salle}
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <DomainIcon/>
                        </ListItemPrefix>
                        {selectedEvent.client}
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <RoomIcon/>
                        </ListItemPrefix>
                        {selectedEvent.ville}
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <ChecklistIcon/>
                        </ListItemPrefix>
                        {selectedEvent.type}
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <PaymentsIcon/>
                        </ListItemPrefix>
                        {selectedEvent.financement}
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <AllInboxIcon/>
                        </ListItemPrefix>
                        {selectedEvent.ressources}
                      </ListItem>
                    </List>
                  </div>
                </div>
              )}
              </Drawer>
              
          </div>
        </div>
      </div>
  )
}
