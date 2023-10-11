
// Global CSS
import '../../../modules/styles/global.css'
import '../../../modules/styles/button.css'
import '../../../modules/styles/typography.css'

// Modules CSS
import landing from '../../usecases/landing.module.css'

// Components
import GetBreakLine from "@/components/others/breakLine"
import GetLabel from '@/components/labels/getLabel'
import GetNavTab from '@/components/containers/nav_tabs'

export default function RoleRafly() {
    const contentCollapse = <p className='sec-about'>Lorem ipsum</p>
    const toggleNavBuilder = [
        {
            title: "About Me & My Role",
            fun: null,
            body: <>
                
            </>,
        },
        {
            title: "Workflow",
            fun: null,
            body: <>
                
            </>,
        },
        {
            title: "Related Document",
            fun: null,
            body: <>
                
            </>,
        },
        {
            title: "Galleries",
            fun: null,
            body: <>
                
            </>,
        },
        {
            title: "Reference",
            fun: null,
            body: <>
                
            </>,
        }
    ]

    return <>
        <div className={landing.main_title}><GetLabel text="RESPONSIBILITY" type="section" body={contentCollapse}/></div>
        <GetBreakLine length={1} />
        <GetNavTab builder={toggleNavBuilder}/>
    </>
}