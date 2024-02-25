import { type Section } from "@/app/utils/types"

interface FavouriteProps {
  section: Section
}

export default function Favourites({ section }: FavouriteProps) {
  return (
    <a 
      href="https://tfl-locate.vercel.app/" 
      className="w-full sm:w-2/3 xl:w-1/2 py-2 px-1 bg-blue-500 rounded-lg flex items-center gap-4 hover:bg-blue-600"
    >
      <img src={section.logo} className="h-16">
      </img>
      <div>
        <h1 className="text-white font-bold">{section.displayName}</h1>
        <p className="text-white">{section.description}</p>
      </div>  
    </a>
  )
}