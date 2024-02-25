import Favourite from './Favourite';
import { sections } from '@/app/utils/constants'

export default function Description() {
  return (
    <div className="w-11/12 md:w-2/3 lg:w-1/2">
      <p className="text-xl font-semibold">
        On the 27th of January 2024 I decided to take on the challenge of building a web app every day for the next 30 days.
        The purpose of the challenge was to widen my knowledge of web development, as well as to market my main project Silk, which is an app store for web apps.
        I finished the challenge on the 25th of February, having successfully created a brand new web app every day for 30 days. 
      </p>
      <p className="text-xl font-semibold mt-2">
        All the apps are built using React, Next.js, Typescript, Tailwind CSS and Vercel. 
        I've experimented with a wide variety of other technologies, including cookies, react-spring, react-simple-maps, react-color, supabase, canvas, redux, zustand and jotai.
        I've also integrated with many third-party APIs and data sources, including OpenAI, Google Maps JavaScript API, API-FOOTBALL and MoviesDatabase.
      </p>
      <p className="text-xl font-semibold mt-6">
        Here are a few of my favourites:
      </p>
      <p className="mt-2">This one is probably the best idea I had, super fun but you do have to be a bit of a London nerd.</p>
      <Favourite 
        section={sections[4]}
      />
      <p className="mt-2">I've found this unreasonably useful given how simple it is. It's pretty much always open in my browser now.</p>
      <Favourite 
        section={sections[1]}
      />
      <p className="mt-2">A simple colour palette generator that uses the HSL colour format to generate a palette of colours all with the same hue.</p>
      <Favourite 
        section={sections[13]}
      />
      <p className="mt-2">The solution to one of the biggest painpoints in modern life: choosing an episode of The Office.</p>
      <Favourite 
        section={sections[22]}
      />
    </div>
  );
}