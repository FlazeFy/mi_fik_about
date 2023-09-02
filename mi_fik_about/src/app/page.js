"use client";

// Global CSS
import '../modules/styles/global.css'
import '../modules/styles/typography.css'

// Modules CSS
import landing from './usecases/landing.module.css'

// Usecases
import GetRoleNav from './usecases/getRoleNav'
import GetToggleEnv from './usecases/getToggleEnv'

//Font awesome classicon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faAndroid } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  const toggleNavBuilder = {
    title: "MI-FIK",
    asec_title: "Mobile Apps",
    asec_title_icon: <FontAwesomeIcon icon={faAndroid}/>,
    asec_body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",

    bsec_title: "Web Apps",
    bsec_title_icon: <FontAwesomeIcon icon={faGlobe}/>,
    bsec_body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  }

  const roleNavBuilder = [
    {
      role_name: "System Analyst",
      role_desc: "Lorem ipsunm",
      role_person_img: "/images/samples/sample_profile_nobg.png",
      role_url: "/"
    },
    {
      role_name: "FrontEnd Dev",
      role_desc: "Lorem ipsunm",
      role_person_img: "/images/samples/sample_profile_nobg.png",
      role_url: "/"
    },
    {
      role_name: "BackEnd Dev",
      role_desc: "Lorem ipsunm",
      role_person_img: "/images/samples/sample_profile_nobg.png",
      role_url: "/"
    },
    {
      role_name: "BackEnd Dev (API)",
      role_desc: "Lorem ipsunm",
      role_person_img: "/images/samples/sample_profile_nobg.png",
      role_url: "/"
    },
    {
      role_name: "Quality Assurance",
      role_desc: "Lorem ipsunm",
      role_person_img: "/images/samples/sample_profile_nobg.png",
      role_url: "/"
    }
  ]

  return (
    <main className={landing.body}>
      <GetToggleEnv builder={toggleNavBuilder}/>
      <GetRoleNav builder={roleNavBuilder }/>
    </main>
  )
}
