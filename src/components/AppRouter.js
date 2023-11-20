import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Welcome from '../page/Welcome'
import Test from '../page/Test'
import AccueilCfp from '../page/CFP/AccueilCfp'
import Formateur from '../page/CFP/Ressources/Formateur'
import Fournisseur from '../page/CFP/Ressources/Fournisseur'
import Materiel from '../page/CFP/Ressources/Materiel'
import Referent from '../page/CFP/Ressources/Referent'
import Salle from '../page/CFP/Ressources/Salle'
import Resultat from '../page/CFP/Quiz/Resultat'
import Projet from '../page/CFP/Projet/Projet'
import Module from '../page/CFP/Formation/Module'
import Thematique from '../page/CFP/Formation/Thematique'
import Fmfp from '../page/CFP/FMFP/Fmfp'
import Finance from '../page/CFP/Finance/Finance'
import Facture from '../page/CFP/CRM/Facture'
import Collaboration from '../page/CFP/Collaborations/Collaboration'
import Agenda from '../page/CFP/Agenda/Agenda'


import AccueilETP from '../page/ETP/AccueilETP'
import CataOfETP from '../page/ETP/Catalogue/CataOfETP'
import CataInterneETP from '../page/ETP/Catalogue/CataInterneETP'
import ProjetTerminer from '../page/ETP/Projet/Projet_terminer'
import ProjetETP from '../page/ETP/Projet/ProjetETP'
import AgendaETP from '../page/ETP/Agenda/AgendaETP'
import EmargementETP from '../page/ETP/Administration/EmargementETP'
import EvaluationETP from '../page/ETP/Administration/EvaluationETP'
import EmployeETP from '../page/ETP/Ressource/EmployeETP'
import ReferentETP from '../page/ETP/Ressource/ReferentETP'
import FormateurETP from '../page/ETP/Ressource/FormateurETP'
import MaterielETP from '../page/ETP/Ressource/MaterielETP'
import SalleETP from '../page/ETP/Ressource/SalleETP'
import FournisseurETP from '../page/ETP/Ressource/FournisseurETP'
import FinanceETP from '../page/ETP/Finance/FinanceETP'
import CommunicationeETP from '../page/ETP/Communcation/CommunicationeETP'
import FMFP_ETP from '../page/ETP/FMFP/FMFP_ETP'
import ResultatETP from '../page/ETP/QCM/ResultatETP'


import StartEMP from '../page/EMP/Quiz/StartEMP'
import ResultatEMP from '../page/EMP/Quiz/ResultatEMP'
import AgendaEMP from '../page/EMP/Agenda/AgendaEMP'
import ProjetEMP from '../page/EMP/Projet/ProjetEMP'
import AccueilEMP from '../page/EMP/AccueilEMP'


import AccueilFORM from '../page/FORM/AccueilFORM'
import ProjetFORM from '../page/FORM/Projet/ProjetFORM'
import AgendaFORM from '../page/FORM/Agenda/AgendaFORM'
import InvitationFORM from '../page/FORM/Invitation/InvitationFORM'
import BanqueQFORM from '../page/FORM/Quiz/BanqueQFORM'
import ListQuizFORM from '../page/FORM/Quiz/ListQuizFORM'
import ResultatFORM from '../page/FORM/Quiz/ResultatFORM'
import Index from '../page/Index'
import LogIn from '../page/Log/LogIn'
import SingIn from '../page/Log/SingIn'



export default function AppRouter() {
  return (
    <div>
      <Routes>

        <Route exact path="/SingIn" element={<SingIn />} />
        <Route exact path="/Login" element={<LogIn />} />

        <Route exact path="/" element={<Index />} />
        <Route exact path="/Welcome" element={<Welcome />} />
        <Route path="/test" element={<Test />} />


        CFP
        <Route path="/AccueilCfp" element={<AccueilCfp />} />
        <Route path="/Thematique" element={<Thematique />} />
        <Route path="/Module" element={<Module />} />
        <Route path="/Projet" element={<Projet />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/Collaboration" element={<Collaboration />} />
        <Route path="/Referent" element={<Referent />} />
        <Route path="/Formateur" element={<Formateur />} />
        <Route path="/Materiel" element={<Materiel />} />
        <Route path="/Salle" element={<Salle />} />
        <Route path="/Fournisseur" element={<Fournisseur />} />
        <Route path="/Facture" element={<Facture />} />
        <Route path="/Finance" element={<Finance />} />
        <Route path="/Resultat" element={<Resultat />} />
        <Route path="/Fmfp" element={<Fmfp />} />

        ETP
        <Route path="/AccueilETP" element={<AccueilETP />} />
        <Route path="/CataOFETP" element={<CataOfETP />} />
        <Route path="/CataInterneETP" element={<CataInterneETP />} />
        <Route path="/ProjetETP" element={<ProjetETP />} />
        <Route path="/ProjetTerminer" element={<ProjetTerminer />} />
        <Route path="/AgendaETP" element={<AgendaETP />} />
        <Route path="/EmargementETP" element={<EmargementETP />} />
        <Route path="/EvaluationETP" element={<EvaluationETP />} />
        <Route path="/EmployeETP" element={<EmployeETP />} />
        <Route path="/ReferentETP" element={<ReferentETP />} />
        <Route path="/FormateurETP" element={<FormateurETP />} />
        <Route path="/MaterielETP" element={<MaterielETP />} />
        <Route path="/SalleETP" element={<SalleETP />} />
        <Route path="/FournisseurETP" element={<FournisseurETP />} />
        <Route path="/FinanceETP" element={<FinanceETP />} />
        <Route path="/CommunicationeETP" element={<CommunicationeETP />} />
        <Route path="/ResultatETP" element={<ResultatETP />} />
        <Route path="/FMFP_ETP" element={<FMFP_ETP />} />

        EMP
        <Route path="/AccueilEMP" element={<AccueilEMP />} />
        <Route path="/ProjetEMP" element={<ProjetEMP />} />
        <Route path="/AgendaEMP" element={<AgendaEMP />} />
        <Route path="/ResultatEMP" element={<ResultatEMP />} />
        <Route path="/StartEMP" element={<StartEMP />} />

        FORM
        <Route path="/AccueilFORM" element={<AccueilFORM />} />
        <Route path="/ProjetFORM" element={<ProjetFORM />} />
        <Route path="/AgendaFORM" element={<AgendaFORM />} />
        <Route path="/InvitationFORM" element={<InvitationFORM />} />
        <Route path="/ResultatFORM" element={<ResultatFORM />} />
        <Route path="/BanqueQFORM" element={<BanqueQFORM />} />
        <Route path="/ListQuizFORM" element={<ListQuizFORM />} />
      </Routes>
    </div>
  )
}
