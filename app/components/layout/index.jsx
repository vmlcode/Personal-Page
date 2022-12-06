import { Link, Outlet } from '@remix-run/react'

export const Layout = () => {
  const sections = [
    {
      index: 1,
      name: 'Works & Projects',
      id: '/about/projects'
    },
    {
      index: 2,
      name: 'Certificates',
      id: '/about/certificates'
    },
    {
      index: 3,
      name: 'Github',
      id: 'https://github.com/vmldev'
    }
  ]

  return (
    <>
      <div className='z-0'>
        <nav className="sticky top-0 font-fcode text-sm  flex justify-end bg-lightbg sm:p-6 p-3 rounded-sm">
          <h1 className="flex-1 text-title sm:text-3xl pt-2 text-xl ">Vml</h1>
          <div className='sm:flex hidden'>
            {sections.map((section) => {
              if (section.id[0] === '/' && section.id[0] === 'h') {
                return (
                  <Link key={section.index} to={section.id}>
                    <p
                      key={section.index}
                      className="text-subtitle hover:text-secondary transition-all pt-4 pr-5"
                    >
                      <span className="text-secondary">{section.index}.</span>{' '}
                      {section.name}
                    </p>
                  </Link>
                )
              }
              return (
                <a key={section.index} href={section.id}>
                  <p className="text-subtitle hover:text-secondary transition-all pt-4 pr-5">
                    <span className="text-secondary">{section.index}.</span>{' '}
                    {section.name}
                  </p>
                </a>
              )
            })}
          </div>
          <Link className="pr-3" to='/blog'>
            <button className=" font-fcode sm:pt-3 pt-2 sm:pb-3 pb-2 sm:pr-4 pr-3 sm:pl-4 pl-3  text-secondary bg-transparent border-[1px] border-secondary rounded text-sm hover:bg-hoverbtn transition-all">
              My blog
            </button>
          </Link>
        </nav>
        <main className='z-10'>
        <Outlet />
        </main>
        <footer className="text-center font-fcode text-subtitle p-0 pb-7 mt-3 hover:text-secondary hover:mt-5 transition-all bottom-0 sm:text-base text-[0.77rem]">
          <p>Developed by Vml and based on Brittany Chiang's design</p>
          <p>Victor Maldonado (Vmldev) 2022-2023</p>
        </footer>
      </div>
    </>
  )
}

export default Layout
