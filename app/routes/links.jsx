import rss from '~/data/links/links'

const Links = () => {
  return (
    <>
    <div className="h-screen mt-7" >
      {rss.map(obj => {
        return (
          <a key={obj.name} className='flex justify-center mt-4' target='_blank' href={obj.link} rel="noreferrer">
           <button className=" mt-5 font-fcode pt-3 pb-3  pr-7 pl-7 text-secondary bg-transparent border-[1px] text-base border-secondary rounded-full hover:bg-hoverbtn transition-all flex">
          <img className='w-5 h-5 mt-[1.5px]' src={obj.icon} alt={obj.name}/> <small className='ml-4 pb-1'>{obj.message}</small>
          </button>
          </a>
        )
      })}
    </div>
    </>
  )
}

export default Links
