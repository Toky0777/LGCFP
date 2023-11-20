import React from 'react'
import { ButtonAdd } from './Boutons'
import { BookOpenIcon } from '@heroicons/react/24/solid'

export default function SubComponent() {
  return (
    <>
    <div class="flex flex-row items-center bg-gray-50 w-full h-[56px] px-4 relative right-0 justify-between">
        <div className='inline-flex items-center gap-9 bg-gray-50'>
            <div class="inline-flex items-center gap-2">
                <BookOpenIcon class="w-7 text-gray-800"/>
                <label class="text-gray-800 font-semibold">Thématiques de formation</label>
            </div>
            <div >
                <ButtonAdd name="Ajouter un thématique"/>
            </div>
        </div>
    </div>
    </>
  )
}
