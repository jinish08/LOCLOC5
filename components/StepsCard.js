import React from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Image from 'next/image'

const StepsCard = ({imgSrc,id,text}) => {
  return (
  <div class="flex justify-center">
  <div
    class="block max-w-sm rounded-3xl bg-white  dark:bg-neutral-700">
    <a href="#!" data-te-ripple-init data-te-ripple-color="light">
      <Image
        class="rounded-t-3xl h-56 object-cover pt-4"
        src={imgSrc}
        alt="" 
        width={100}
        height={100}/>
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-2xl text-center font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-black">
        Step {id}
      </h5>
      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200 text-black">
        {text}
      </p>
    </div>
  </div>
</div>
  )
}

export default StepsCard