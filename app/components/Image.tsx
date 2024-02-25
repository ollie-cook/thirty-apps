import { sections } from '@/app/utils/constants'
import Link from '@/app/components/Link'

export default function Image() {
  return (
    <div className="relative w-5/6 h-fit lg:h-5/6 lg:w-fit border-4 border-cyan-400 box-content rounded-[17px]">
      <img src="/apps.jpg" alt="A dog" className="h-full rounded-xl" />
      {sections.map((section, index) => {
        const guid=crypto.randomUUID()

        return (
          <Link key={guid} section={section} />
        )
      })}
    </div>
  )
}

