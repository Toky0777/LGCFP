import React from 'react'
import { NotificationsMenu, ParametreMenu, ProfileMenu } from '../composant/Menu';
import { Link, useLocation  } from 'react-router-dom';

const NavList = [
    {titre: 'Accueil', url: '/AccueilETP'},
    {titre: 'Catalogue', url: '/Cata_Of_ETP', dropdown: true, subItems: [
        { subTitre: 'Catalogue des organismes de formation', subUrl: '/CataOFETP' },
        { subTitre: 'Catalogues Internes', subUrl: '/CataInterneETP' },
    ]},
    {titre: 'Projet', url: '/ProjetETP', dropdown: true, subItems: [
        { subTitre: 'Projet', subUrl: '/ProjetETP' },
        { subTitre: 'Projet terminer', subUrl: '/ProjetTerminer' },
    ]},
    {titre: 'Agenda', url: '/AgendaETP'},
    {titre: 'Administration', url: '/AdministrationETP', dropdown: true, subItems: [
        { subTitre: 'Emargement', subUrl: '/EmargementETP' },
        { subTitre: 'Evaluation', subUrl: '/EvaluationETP' },
    ]},
    {titre: 'Ressources', url: '/FournisseurETP', dropdown: true, subItems: [
        { subTitre: 'Employé', subUrl: '/EmployeETP' },
        { subTitre: 'Référents', subUrl: '/ReferentETP' },
        { subTitre: 'Formateurs', subUrl: '/FormateurETP' },
        { subTitre: 'Matériels', subUrl: '/MaterielETP' },
        { subTitre: 'Salle de formation', subUrl: '/SalleETP' },
        { subTitre: 'Fournisseurs', subUrl: '/FournisseurETP' },
    ]},
    {titre: 'Finances', url: '/FinanceETP'},
    {titre: 'Communication', url: '/CommunicationeETP'},
    {titre: 'Quiz', url: '/ResultatETP', dropdown: true, subItems: [
        { subTitre: 'Résultat', subUrl: '/ResultatETP' },
    ]},
    {titre: 'FMFP', url: '/FMFP_ETP'},
]

export default function NavBarETP() {
    const location = useLocation();

  return (
    <div>
        <div className="relative z-50 px-3 py-2 flex flex-col">
            <div className="relative inline-flex justify-between w-full h-6">
                <div className="inline-flex gap-2 items-center">
                    <img src="/images/logo.png" alt="logo_lgcfp" className="w-4 h-auto"/>
                    <div className="inline-flex gap-2 items-center rounded-lg px-2 py-2 transition duration-300">
                        <p className="text-xs text-blue-600 px-4 py-1 bg-blue-100 rounded-full">Entreprise :</p>
                        <Link to="#"
                        className="text-xs text-gray-700 font-semibold cursor-pointer hover:underline hover:text-gray-800 transition duration-200">COLAS</Link>
                    </div>
                </div>

                <div className="inline-flex items-center gap-1">
                    <div className="inline-flex items-center gap-3">
                        <div className="inline-flex gap-2 items-center rounded-lg py-2 transition duration-300">
                            {/* <!-- component ABONNEMENT --> */}
                            <div className="group inline-block">
                                <button type="button"
                                    className="text-xs inline-flex items-center gap-2 text-blue-600 px-3 py-1 bg-blue-100 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 512 512" fill="#2563eb">
                                    <path d="M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8H376c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5l57.4 95.6L63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8L301.5 179.8l57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z"/>
                                    </svg>
                                    Passer en mode Pro
                                </button>
                                <ul
                                    className="z-40 list-group p-2 bg-white border rounded-lg shadow-md transform scale-0 group-hover:scale-100 absolute transition duration-300 ease-in-out origin-top min-w-[135px]">
                                    <li className="rounded-lg hover:bg-gray-100 hover:text-gray-600 transition ease-in-out">
                                    <Link to="#"
                                        className="w-full text-left flex items-center outline-none focus:outline-none text-xs p-2 text-gray-600 hover:text-gray-700">
                                        S'abonner
                                    </Link>
                                    </li>
                                    <li className="rounded-lg hover:bg-gray-100 hover:text-gray-600 transition ease-in-out">
                                    <Link to="#"
                                        className="w-full text-left flex items-center outline-none focus:outline-none text-xs p-2 text-gray-600 hover:text-gray-700">
                                        Historique
                                    </Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- component ABONNEMENT --> */}
                        </div>
                        <div className="inline-flex gap-2 items-center cursor-pointer border px-3 py-1 rounded bg-white">
                            <input id="searchInput" type="search" placeholder="Que cherchez-vous ..."
                            className="outline-none text-xs text-gray-700 placeholder:text-gray-600 "/>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#607d8b" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                    </div>

                    <NotificationsMenu/>
                    <ParametreMenu/>
                    <ProfileMenu/>
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
                                    className={`text-xs p-2 mt-1 ${
                                        location.pathname === item.url ? 'text-[#9333ea] underline underline-offset-8 decoration-2' : 'text-gray-600 hover:text-gray-400'
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
