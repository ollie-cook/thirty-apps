'use client'

import { useState } from 'react'
import { type Section } from "@/app/utils/types"

interface LinkProps {
  section: Section
}

export default function Link({ section }: LinkProps) {
  const [bgColour, setBgColour] = useState('')

  return (
    <a 
      href={section.url}
      target="_blank"
      className="group absolute flex flex-col items-center rounded-lg"
      style={{
        width: `${section.width}%`, 
        height: `${section.height}%`, 
        top: `${section.topShift}%`, 
        left: `${section.leftShift}%`,
        backgroundColor: bgColour
      }}
      onMouseEnter={() => setBgColour(section.bgColour)} // replace 'colorOnHover' with the color you want on hover
      onMouseLeave={() => setBgColour('')}
    >
      <p className="hidden text-[0.4rem] sm:text-[0.6rem] lg:text-xs lg:mt-1 group-hover:block" style={{color: section.textColour}}>{section.date}</p>
      <p className={`${section.textSize} hidden font-bold text-center mt-1 lg:mt-3 group-hover:block`} style={{color: section.textColour}}>{section.displayName}</p>
    </a>
  )
}