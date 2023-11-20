import React from 'react'
import { NavBarLanding } from '../layout/NavBarLanding'
import { ButtonGray, ButtonPrimary } from '../components/Boutons'

export default function Index() {
  return (
    <div>
      <img className="absolute -z-10 w-full h-[100vh] bg-cover" src="/images/fond22.jpg" alt="fond" />
      <NavBarLanding />
      <div class="mx-auto max-w-4xl py-32 sm:py-48 lg:py-12 ">
        <div class="flex flex-col justify-center items-center">
          <h1 class="text-[150px] font-medium tracking-tight text-gray-50 font-Best">01</h1>
          <h1 class="text-4xl font-semibold tracking-tight text-gray-50 mt-8 text-center">Le premier site collaboratif dédié à la gestion de la formation professionnelle</h1>
          <p class="mt-8 text-base  text-gray-50">La solution idéale pour votre formation. Simplifiez, collaborez, réussissez !</p>
          <div class="flex items-center justify-center gap-x-6 mt-16">
            <ButtonGray name="Plus d'information" url="/Test" size="sm" />
            <ButtonPrimary name="Créer un compte ici.." url="/SingIn" />
          </div>
        </div>
      </div>
    </div>
  )
}