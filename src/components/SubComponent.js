import React from 'react'


export default function SubComponent(props) {
  const { icon, label, btn_name } = props;
  return (
    <>
      <div class="flex flex-row items-center bg-gray-50 w-full h-[56px] px-4 relative right-0 justify-between">
        <div className='inline-flex items-center gap-9 bg-gray-50'>
          <div class="inline-flex items-center gap-2">
            {/* <BookOpenIcon class="w-7 text-gray-800" /> */}
            {icon}
            <label class="text-gray-800 font-semibold">{label}</label>
          </div>
          <div >
            {/* <ButtonAdd name="Ajouter un thématique" /> */}
            {btn_name}
          </div>
        </div>
      </div>
    </>
  )
}
