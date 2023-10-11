"use client";

// Global CSS
import '../modules/styles/global.css'
import '../modules/styles/button.css'
import '../modules/styles/typography.css'

// Modules CSS
import landing from './usecases/landing.module.css'

// Usecases
import GetTeamNav from './usecases/GetTeamNav'
import GetToggleEnv from './usecases/getToggleEnv'

//Font awesome classicon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faAndroid } from '@fortawesome/free-brands-svg-icons'
import GetFeature from './usecases/getFeature';
import GetBreakLine from '@/components/others/breakLine';
import { useEffect } from 'react';
import GetSpecialThank from './usecases/getSpecialThanks';

export default function Home() {
  const toggleNavBuilder = {
    title: "MI-FIK",
    asec_title: "Mobile Apps",
    asec_title_icon: <FontAwesomeIcon icon={faAndroid}/>,
    asec_body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    asec_galleries: [
      {
        url: "/images/samples/sample_galleries.png", 
        name: "sample 01"
      },
      {
        url: "/images/samples/sample_galleries.png", 
        name: "sample 02"
      },
      {
        url: "/images/samples/sample_galleries.png", 
        name: "sample 03"
      },
      {
        url: "/images/samples/sample_galleries.png", 
        name: "sample 04"
      },
      {
        url: "/images/samples/sample_galleries.png", 
        name: "sample 05"
      },
    ],
    asec_main_img: "/images/assets/main_env_mobile.png",
    bsec_title: "Web Apps",
    bsec_title_icon: <FontAwesomeIcon icon={faGlobe}/>,
    bsec_body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    bsec_galleries: [
      {
        url: "/images/samples/sample_galleries.png", 
        name: "sample 01"
      },
      {
        url: "/images/samples/sample_galleries.png", 
        name: "sample 02"
      },
      {
        url: "/images/samples/sample_galleries.png", 
        name: "sample 03"
      },
      {
        url: "/images/samples/sample_galleries.png", 
        name: "sample 04"
      },
      {
        url: "/images/samples/sample_galleries.png", 
        name: "sample 05"
      },
    ],
    bsec_main_img: "/images/assets/main_env_web.png",
  }

  const roleNavBuilder = [
    {
      role_context: "System Analyst",
      role_name: "Fauzan Reza Arnanda",
      role_person_img: "https://media.licdn.com/dms/image/D5603AQHl54FoUj0waA/profile-displayphoto-shrink_800_800/0/1690270498088?e=2147483647&v=beta&t=zgYvZZMs9orq4D3RF7xRiEJPZo21WGzWWPiSgJcjXnY",
      role_url: "/role/fauzan",
      role_bio: "I am a student who is currently studying at Telkom University. I have an interest in the field of software development, especially with what happens in the software. Therefore, I am always open to criticism and always look for opportunities to gain new knowledge that I have never known before.",
      website: "https://fauzanreza.github.io/",
      email: "fauzan.rez@gmail.com",
      linkedin: "https://www.linkedin.com/in/fauzan-reza-716bb122a/"
    },
    {
      role_context: "FrontEnd Developer",
      role_name: "Hafiz Aditya Rozzaqy",
      role_person_img: "/images/samples/sample_profile.png",
      role_url: "/role/hafiz",
      role_bio: "lorem ipsum",
      website: null,
      email: "rozzaqy86@gmail.com",
      linkedin: "https://www.linkedin.com/in/hafizadityarozzaqy/"
    },
    {
      role_context: "BackEnd & Lead Developer",
      role_name: "Leonardho R. Sitanggang",
      role_person_img: "https://media.licdn.com/dms/image/D5603AQHbKizHEv_9fQ/profile-displayphoto-shrink_800_800/0/1693052509316?e=2147483647&v=beta&t=KkSxRuRQWx_-ocgpVduxbVWQ_wgtmpetG4CbVuImB28",
      role_url: "/role/leo",
      role_bio: "Hello there 👋, My name is Leo. I'm a Software Engineering student. Who have strong interest in web and mobile programming",
      website: "https://leonardhors.site",
      email: "flazen.edu@gmail.com",
      linkedin: "https://www.linkedin.com/in/leonardho-rante-sitanggang-a5a752202/"
    },
    {
      role_context: "BackEnd Developer (API)",
      role_name: "Rafly Farhandika",
      role_person_img: "https://media.licdn.com/dms/image/C4D03AQELA8V8zc841g/profile-displayphoto-shrink_800_800/0/1655387949404?e=2147483647&v=beta&t=Tu0Sm5YZc5e6sDxCOVB8NQFjtLx80FC22jPSSxhndw4",
      role_url: "/role/rafly",
      role_bio: "lorem ipsum",
      website: null,
      email: "raflyfarhandika@gmail.com",
      linkedin: "https://www.linkedin.com/in/rafly-farhandika-2591b4153/"
    },
    {
      role_context: "Quality Assurance",
      role_name: "Alya Ghaitsa Rizky Pertiwi",
      role_person_img: "https://media.licdn.com/dms/image/D5603AQFg_FNatQRhEg/profile-displayphoto-shrink_800_800/0/1693368317080?e=2147483647&v=beta&t=dTjj9uRDUVL1B40fnVNaPgmqyyP2aa-2bRYdhR3DIGM",
      role_url: "/role/alya",
      role_bio: "Hi, I am interested to software development especially of UIUX and Software Quality Assurance. I like to explore and learn the new things😁🙌🏻",
      website: null,
      email: "alyaghaitsar@gmail.com",
      linkedin: "https://www.linkedin.com/in/alyaghaitsar/"
    }
  ]

  const thanksBuilder = [
    {
      role_context: "Lecturer",
      role_name: "Dr. Mira Kania Sabariah, S.T., M.T.",
      role_person_img: null,
    },
    {
      role_context: "Lecturer",
      role_name: "Monterico Adrian, S.T., M.T.",
      role_person_img: null,
    },
    {
      role_context: "Client",
      role_name: "Dr. Andreas Rio Adriyanto, S.E., M.Eng.",
      role_person_img: null,
    },
    {
      role_context: "Client",
      role_name: "Bijaksana Prabawa, S.Ds., M.M.",
      role_person_img: null,
    },
    {
      role_context: "Senior",
      role_name: "Ceka Elgy Dwi Putra",
      role_person_img: null,
    },
    {
      role_context: "Examiner Lecturer",
      role_name: "Dana Sulistyo Kusumo, S.T., M.T., Ph.D.",
      role_person_img: null,
    },
    {
      role_context: "Examiner Lecturer",
      role_name: "Arfive Gandhi, S.T., M.T.I.",
      role_person_img: null,
    },
  ]

  const featureBuilder = [
    {
      feature_title: "Event",
      feature_img: "/images/assets/event.png",
      feature_desc: <span><b>Explore And Participate</b> in many attractive activity that held by our community"</span>,
    },
    {
      feature_title: "Announcement",
      feature_img: "/images/assets/announcement.png",
      feature_desc: <span>Give you <b>Announce About Information Or The Newest Event</b> about Faculty of Creative Industry</span>,
    },
    {
      feature_title: "Task",
      feature_img: "/images/assets/task.png",
      feature_desc: <span><b>Manage And Remind Daily Tasks</b> that have been created</span>,
    },
    {
      feature_title: "Reminder",
      feature_img: "/images/assets/reminder.png",
      feature_desc: <span>Helps you to <b>Remember Tasks To Be Done And Events To Be Held</b></span>,
    },
    {
      feature_title: "Calendar",
      feature_img: "/images/assets/calendar.png",
      feature_desc: <span><b>Display Events And Tasks</b> in a structured manner within the span of one month</span>,
    },
    {
      feature_title: "Tag / Roles",
      feature_img: "/images/assets/tag.png",
      feature_desc: <span><b>Group The Events</b> displayed according to the role you have</span>,
    },
  ]
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle");
  }, []);

  return (
    <main className={landing.body}>
      <GetToggleEnv builder={toggleNavBuilder}/>
      <GetBreakLine length={1} />
      <GetTeamNav builder={roleNavBuilder}/>
      <GetBreakLine length={1} />
      <GetFeature builder={featureBuilder}/>
      <GetBreakLine length={1} />
      <GetSpecialThank builder={thanksBuilder}/>
    </main>
  )
}
