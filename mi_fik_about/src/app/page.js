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
import GetFeature from './usecases/getFeature';

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
      role_desc: "Fauzan Reza Arnanda",
      role_person_img: "https://media.licdn.com/dms/image/D5603AQHl54FoUj0waA/profile-displayphoto-shrink_800_800/0/1690270498088?e=2147483647&v=beta&t=zgYvZZMs9orq4D3RF7xRiEJPZo21WGzWWPiSgJcjXnY",
      role_url: "/role/fauzan"
    },
    {
      role_name: "FrontEnd Dev",
      role_desc: "Hafiz Aditya Rozzaqy",
      role_person_img: "/images/samples/sample_profile.png",
      role_url: "/role/hafiz"
    },
    {
      role_name: "BackEnd Dev",
      role_desc: "Leonardho R. Sitanggang",
      role_person_img: "https://media.licdn.com/dms/image/D5603AQHbKizHEv_9fQ/profile-displayphoto-shrink_800_800/0/1693052509316?e=2147483647&v=beta&t=KkSxRuRQWx_-ocgpVduxbVWQ_wgtmpetG4CbVuImB28",
      role_url: "/role/leo"
    },
    {
      role_name: "BackEnd Dev (API)",
      role_desc: "Rafly Farhandika",
      role_person_img: "https://media.licdn.com/dms/image/C4D03AQELA8V8zc841g/profile-displayphoto-shrink_800_800/0/1655387949404?e=2147483647&v=beta&t=Tu0Sm5YZc5e6sDxCOVB8NQFjtLx80FC22jPSSxhndw4",
      role_url: "/role/rafly"
    },
    {
      role_name: "Quality Assurance",
      role_desc: "Alya Ghaitsa Rizky Pertiwi",
      role_person_img: "https://media.licdn.com/dms/image/D5603AQFg_FNatQRhEg/profile-displayphoto-shrink_800_800/0/1693368317080?e=2147483647&v=beta&t=dTjj9uRDUVL1B40fnVNaPgmqyyP2aa-2bRYdhR3DIGM",
      role_url: "/role/alya"
    }
  ]

  const featureBuilder = [
    {
      feature_title: "Event",
      feature_img: "/images/assets/event.png",
      feature_desc: "Explore and participate in many attractive activity that held by our community",
    },
    {
      feature_title: "Announcement",
      feature_img: "/images/assets/announcement.png",
      feature_desc: "Give you announce about information or the newest event about Faculty of Creative Industry",
    },
    {
      feature_title: "Task",
      feature_img: "/images/assets/task.png",
      feature_desc: "Manage and remind daily tasks that have been created",
    },
    {
      feature_title: "Reminder",
      feature_img: "/images/assets/reminder.png",
      feature_desc: "Helps you to remember tasks to be done and events to be held",
    },
    {
      feature_title: "Calendar",
      feature_img: "/images/assets/calendar.png",
      feature_desc: "Display events and tasks in a structured manner within the span of one month ",
    },
    {
      feature_title: "Tag / Roles",
      feature_img: "/images/assets/tag.png",
      feature_desc: "Group the events displayed according to the role you have",
    },
  ]

  return (
    <main className={landing.body}>
      <GetToggleEnv builder={toggleNavBuilder}/>
      <br></br>
      <GetRoleNav builder={roleNavBuilder}/>
      <br></br>
      <GetFeature builder={featureBuilder}/>
    </main>
  )
}
