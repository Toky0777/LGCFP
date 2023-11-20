import React from 'react'
import { NotificationsMenu, ParametreMenu, ProfileMenu } from '../components/Menu';
import { Link, useLocation } from 'react-router-dom';

const NavList = [
    { titre: 'Accueil', url: '/AccueilEMP' },
    { titre: 'Projet', url: '/ProjetEMP' },
    { titre: 'Agenda', url: '/AgendaEMP' },
    {
        titre: 'Quiz', url: '/ResultatEMP', dropdown: true, subItems: [
            { subTitre: 'Résultat', subUrl: '/ResultatEMP' },
            { subTitre: 'Commencer le teste', subUrl: '/StartEMP' },
        ]
    },
]

export default function NavBarEmp() {
    const location = useLocation();

    return (
        <div>
            <div className="relative z-50 px-3 py-2 flex flex-col">
                <div className="relative inline-flex justify-between w-full h-6">
                    <div className="inline-flex gap-2 items-center">
                        <img src="/images/logo.png" alt="logo_lgcfp" className="w-4 h-auto" />
                        <div className="inline-flex gap-2 items-center rounded-lg px-2 py-2 transition duration-300">
                            <p className="text-xs text-red-600 px-4 py-1 bg-red-50 rounded-full">Employé :</p>
                            <Link to="#"
                                className="text-xs text-gray-700 font-semibold cursor-pointer hover:underline hover:text-gray-800 transition duration-200">Tonny</Link>
                        </div>
                    </div>

                    <div className="inline-flex items-center gap-1">
                        <div className="inline-flex items-center gap-3">
                            <div className="inline-flex gap-2 items-center cursor-pointer border px-3 py-1 rounded bg-white">
                                <input id="searchInput" type="search" placeholder="Que cherchez-vous ..."
                                    className="outline-none text-xs text-gray-700 placeholder:text-gray-600 " />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607d8b" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </div>
                        </div>

                        <NotificationsMenu />
                        <ParametreMenu />
                        <ProfileMenu />
                    </div>
                </div>
                <div className="hidden lg:flex lg:gap-x-5 pt-1">
                    {NavList.map((item) => (
                        <li className="flex flex-row text-gray-500 transition-all navElement" key={item.titre}>
                            <div className="group inline-block">
                                {item.dropdown ? (
                                    <>
                                        <Link to={item.url}
                                            className={`text-xs ${location.pathname === item.url ? 'text-[#9333ea] underline underline-offset-8 decoration-2 inline-flex items-center gap-1 ' : 'text-gray-600 hover:text-gray-400 inline-flex items-center gap-1'}`}
                                        >{item.titre}
                                            <span>
                                                <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-300 ease-in-out"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                </svg>
                                            </span>
                                        </Link>
                                        <ul className="p-2 bg-white border rounded-lg shadow-md transform scale-0 group-hover:scale-100 absolute transition duration-300 ease-in-out origin-top min-w-[150px]">
                                            {item.subItems.map((subItem) => (
                                                <li className="rounded-lg hover:bg-gray-100 hover:text-gray-600 transition ease-in-out">
                                                    <Link to={subItem.subUrl} key={subItem.subTitre}
                                                        className="w-full text-left flex items-center outline-none focus:outline-none text-xs p-2 text-gray-600 hover:text-gray-700">
                                                        {subItem.subTitre}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        to={item.url}
                                        className={`text-xs p-2 mt-1 ${location.pathname === item.url ? 'text-[#9333ea] underline underline-offset-8 decoration-2' : 'text-gray-600 hover:text-gray-400'
                                            }`}
                                    >
                                        {item.titre}
                                    </Link>
                                )}
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        </div>
    )
}
