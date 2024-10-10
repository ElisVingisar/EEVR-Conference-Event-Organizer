import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { BarChart3Icon, MenuIcon } from 'lucide-react'
import Image from 'next/image'

export const navigation2 = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Program', href: '#tracks' },
  { name: 'Partners', href: '#partners' },
  { name: 'Info', href: '#info' },
  { name: 'Tickets', href: '#tickets' },
]

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> { }

export default function Navbar(props: NavbarProps) {
  return (
    <div
      className={cn(
        `sticky top-0 left-0 right-0 z-50  md:backdrop-blur-md overflow-hidden `,
        props.className,
      )}
    >
      <div className="relative pt-6 pb-6">
        <Sheet>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 m"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 ">
                <div className="flex items-center justify-end w-full md:w-auto">
                  {/* <Logo /> */}
                  <div className=" flex items-center md:hidden">
                    <SheetTrigger className="rounded-full bg-white p-3 inline-flex items-center justify-center text-reliti-dark-blue hover:text-realiti-blue ">
                      <span className="sr-only">Open main menu</span>
                      {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                      <MenuIcon />
                    </SheetTrigger>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation2.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-normal text-reliti-dark-blue hover:text-realiti-blue"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <SheetContent>
            <div className="px-2 pt-2 pb-3">
              {navigation2.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-4 text-reliti-dark-blue font-semibold text-xl hover:text-realiti-blue"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
