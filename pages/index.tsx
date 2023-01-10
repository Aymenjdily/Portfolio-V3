/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { About, Contact, Experiences, Header, Hero, Projects, Skills } from '../components'
import { urlFor } from '../sanity';
import { PageInfo, Project, Skill, Social, Experience } from '../types';
import { fetchExperiences } from '../utils/fetchExperiences'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchSocials } from '../utils/fetchSocials'

type Props = {
  pageInfo : PageInfo
  experiences : Experience[]
  skills : Skill[]
  projects : Project[]
  socials : Social[]
}

export default function Home({ pageInfo, experiences, skills, projects, socials }: Props) {
  return (
    <div className='h-screen bg-[#E4F7F8] snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-[#E4F7F8] scrollbar-thumb-[#3B94CB]'>
      <Head>

        <title>Aymen's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      { /* Header */ }

      <Header socials={socials}/>

      { /** Hero */ }

      <section id='hero' className='snap-start'>

        <Hero pageInfo={pageInfo}/>

      </section>

      { /** Abour */ }

      <section id='about' className='snap-center'>

        <About pageInfo={pageInfo}/>

      </section>

      { /** Experience */ }

      <section id='experience' className='snap-center'>

        <Experiences experiences={experiences}/>

      </section>

      { /** Skills */ }

      <section id='skills' className='snap-start'>

        <Skills skills={skills}/>

      </section>

      { /** Projects */ }

      <section id='projects' className='snap-start'>

        <Projects projects={projects}/>

      </section>

      { /** Contact */ }
      
      <section id='contact' className='snap-start'>

        <Contact/>

      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className='w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer animate-pulse object-cover' src={urlFor(pageInfo.heroImage).url()} alt="" />
          </div>
        </footer>
      </Link>

    </div>
  )
}

export const getStaticProps : GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experience[] = await fetchExperiences()
  const skills: Skill[] = await fetchSkills()
  const projects: Project[] = await fetchProjects()
  const socials: Social[] = await fetchSocials()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate: 10
  }
}