import { Link } from '@remix-run/react'
import projects from '~/data/projects/projects'
import Me from '~/images/me.jpg'

export function Intro () {
  return (
    <>
      <section className="pl-5 pt-3 pb-3 font-inter sm:pl-40 sm:pt-7 sm:pb-7 mt-7 sm:max-lg:pl-5 ">
        <p className="text-secondary font-fcode text-sm sm:text-base mb-4">
          Hi, my name is
        </p>
        <h1 className="text-title font-inter sm:text-6xl text-xl ">
          {' '}
          <strong>Victor Maldonado</strong>
        </h1>
        <h1 className="text-subtitle font-inter sm:text-6xl  text-2xl sm:pt-2">
          I am front-end developer
        </h1>
        <p className="sm:mt-5 mt-2 font-inter sm:text-base text-[0.75rem] text-subtitle ">
          I'am a software engineer specializing in building websites and
          "digital experiences".
          <br /> Currently, I'm focused on learn and improve my knowledge about
          front-end and back-end development <br className="sm:flex hidden" />{' '}
          by <span className="text-secondary">myself</span>{' '}
        </p>
        <Link to="/blog" className="pr-3 mt-5 sm:max-lg:ml-5">
          <button className=" mt-5 font-fcode sm:pt-3 pt-2 pb-2 sm:pb-3  sm:pr-7 pr-4 sm:pl-7 pl-4 text-secondary bg-transparent border-[1px] text-sm border-secondary rounded hover:bg-hoverbtn transition-all">
            View my blog!
          </button>
        </Link>
      </section>
    </>
  )
}

export const About = () => {
  const technologies = [
    'Javascript (ES6+)',
    'React',
    'Remix',
    'Tailwindcss',
    'Node.js',
    'Express',
    'Docker'
  ]

  return (
    <section id="about" className="sm:mt-40 mt-10 sm:pl-40 pl-3">
      <div className='justify-center flex z-0'>
      <img
        className="rounded-xl h-72 w-56 mb-7 opacity-70 hover:opacity-100 transition-all items-center  sm:hidden sm:max-lg:block block "
        src={Me}
        alt="Me_photo"
      />
      </div>
      <h1 className="font-inter sm:text-3xl text-xl text-title">
        {' '}
        <span className="text-secondary font-fcode">1. </span>About
      </h1>
      <br />
      <div className="flex">
        <section className="flex-1">
          <p className="font-inter sm:text-lg text-base text-subtitle sm:mr-24 inline-flex">
            hello, my name is victor I love to develop code projects, specially
            websites, my beginnings in programming were about 2 years ago when I
            did a game development course in Unity, then I learned the
            fundamental web technologies HTML, CSS and javascript and since then
            I keep improving my skills now using frameworks and different
            technologies.
            <br />
            <br />
            Although I can be considered a front-end developer because I usually
            write code in React I also know some back-end technologies like
            Nodejs, Express, Linux/Unix, Docker and I'm learning mongoDB to
            become a full-stack developer.
          </p>
          <br /> <br />
          <p className="font-inter text-sm sm:text-lg text-subtitle mr-24 inline-flex">
            Here is a list of technologies I have worked with:
          </p>
        </section>
        <img
          className="rounded-xl opacity-70 hover:opacity-100 transition-all mr-28 sm:flex hidden sm:max-lg:hidden "
          src={Me}
          alt="Me_photo"
          width="300px"
          height="400px"
        />
      </div>
      <ol className="font-fcode list-disc list-inside text-[13px]">
        {technologies.map((technologie) => {
          return (
            <li
              Key={technologie}
              className="text-secondary opacity-70 hover:opacity-100"
            >
              {technologie}
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export const Projects = (props) => {
  return (
    <section className="sm:mt-20 mt-5 sm:pl-40 pl-6  sm:pr-28 pr-7 pb-3" >
      <h1 id="work" className="font-inter sm:text-3xl text-lg text-title"> <span className="text-secondary font-fcode">2. </span>Projects</h1><br />
      <>{projects.map((project) => {
        return (
          <div key={project.id} className="bg-darkb mb-7 rounded-lg font-fcode text-subtitle sm:p-5 p-3 hover:p-7 transition-all">
            <a target='_blank' href={project.link} rel="noreferrer"><h1 className="pl-2 text-title  text-lg sm:text-2xl hover:text-secondary" ><span className='text-secondary'>{project.id}.</span> {project.title}</h1></a>
            <p className="p-2 hidden sm:flex">Description: {project.description}</p>
            <>{project.technologies.map((technologie) => {
              return (
               <small key={technologie} className="sm:p-2 p-[0.15rem] pl-1 sm:text-base text-">{technologie}</small>
              )
            })}</>
            {project.repo === '' ? <p className="text-secondary hover:opacity-60 transition-all p-2">This repository is private</p> : <a target='_blank' href={project.repo} rel="noreferrer"><p className="text-secondary hover:opacity-60 transition-all p-2">Repo</p></a> }
          </div>
        )
      })}</>

    </section>
  )
}

export default function Index () {
  return (
    <>
      <Intro />
      <About />
      <Projects project={projects}/>
    </>
  )
}
