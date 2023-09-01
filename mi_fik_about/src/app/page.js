import '../modules/styles/global.css'
import '../modules/styles/typography.css'
import GetRoleNav from './usecases/getRoleNav'
import GetToggleEnv from './usecases/getToggleEnv'

export default function Home() {
  const toggleNavBuilder = {
    title: "MI-FIK",
    asec_title: "Mobile Apps",
    bsec_title: "Web Apps",
  }

  const roleNavBuilder = [
    {
      role_name: "System Analyst",
      role_desc: "Lorem ipsunm",
      role_url: "/"
    },
    {
      role_name: "FrontEnd Dev",
      role_desc: "Lorem ipsunm",
      role_url: "/"
    },
    {
      role_name: "BackEnd Dev",
      role_desc: "Lorem ipsunm",
      role_url: "/"
    },
    {
      role_name: "BackEnd Dev (API)",
      role_desc: "Lorem ipsunm",
      role_url: "/"
    },
    {
      role_name: "Quality Assurance",
      role_desc: "Lorem ipsunm",
      role_url: "/"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GetToggleEnv builder={toggleNavBuilder}/>
      <GetRoleNav builder={roleNavBuilder }/>
    </main>
  )
}
