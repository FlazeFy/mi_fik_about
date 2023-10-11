
// Global CSS
import '../../../modules/styles/global.css'
import '../../../modules/styles/button.css'
import '../../../modules/styles/typography.css'

// Modules CSS
import landing from '../../usecases/landing.module.css'

// Components
import GetBreakLine from "@/components/others/breakLine";
import GetLabel from '@/components/labels/getLabel';
import GetNavTab from '@/components/containers/nav_tabs';
import { getAgeFromBirthDate } from '@/modules/helpers/math';

export default function RoleLeo() {
    const contentCollapse = <p className='sec-about'>Lorem ipsum</p>
    const toggleNavBuilder = [
        {
            title: "About Me & My Role",
            fun: null,
            body: <>
                <header>About Me</header>
                <p>
                    Hello there 👋, My name is Leonardho R Sitanggang, {getAgeFromBirthDate("2001-08-08")}, from Papua, you can call me Leo. I'm a <b className='imp'>Software Engineering</b> student from Telkom University. Who have strong interest in web and mobile programming.
                    My main skill in web programming are <b className='imp'>PHP Dev</b> and <b className='imp'>Golang Dev</b>. Also I'm using <b className='imp'>Flutter</b> when i code in mobile environment.
                </p>
                <p>
                    I'm a morning <b className='imp'>person</b>, <b className='imp'>diligent</b>, and <b className='imp'>hard-working people</b>. Beside coding, I'm like to learn about history, watching documentary movie, and I liked to travel everyplace who have great nature.
                    In the future I'd like to learn about 3D Design and Music Production.
                </p>

                <header>My Role</header>
                <p>
                    In this project, I'm become Backend Developer and the Lead Developer. I'm used to design the codebase, define helpers function, component, assign task to other dev, and of course the deployment.
                </p>
                <p><b>Here's the detail of my task : </b></p>
                <ul>
                    <li>Implement the <a href='/role/fauzan' className='path'>System Analyst</a> Entity Relation Diagram to <b className='imp'>SQL Database</b></li>
                    <li>Assign task to the <a href='/role/hafiz' className='path'>FrontEnd Dev</a> <a href='/role/rafly' className='path'>BackEnd API Dev</a></li>
                    <li>Analyze all the requirement from <b className='imp'>Software Requirement Specification</b> and <b className='imp'>Software Development Specification</b> that has made by <a href='/role/fauzan' className='path'>System Analyst</a> and define the architecture by it's feature</li>
                    <li>Implement the <b className='imp'>MVC</b> architecture, helpers, database's stuff, <b className='imp'>CRON Jobs</b>, <b className='imp'>mailer</b> for Web App. And make services for Mobile App. So that the design from <a href='/role/hafiz' className='path'>FrontEnd Dev</a> can be shown and communicate with API from <a href='/role/rafly' className='path'>BackEnd API Dev</a></li>
                    <li>Deploy the Web App to <b className='imp'>CPanel Hostinger</b> and <b className='imp'>Firebase App Distribution</b> for Mobile App</li>
                    <li>Contribute to Code Documentation, MockUp API, SQL Docs, and other document about development</li>
                    <li>Design the best SQL Syntax to use</li>
                    <li>Make sure the feature is deployed and ready to test by <a href='/role/alya' className='path'>Quality Assurance</a></li>
                    <li>Do <b className='imp'>bug fixing</b> based on report from <a href='/role/alya' className='path'>Quality Assurance</a></li>
                </ul>
            </>,
        },
        {
            title: "Workflow",
            fun: null,
            body: <>
                <header>Workflow</header>
            </>,
        },
        {
            title: "Related Document",
            fun: null,
            body: <>
                <header>Related Document</header>
            </>,
        },
        {
            title: "Galleries",
            fun: null,
            body: <>
                <header>Galleries</header>
            </>,
        },
        {
            title: "Reference",
            fun: null,
            body: <>
                <header>Reference</header>
            </>,
        }
    ]

    return <>
        <div className={landing.main_title}><GetLabel text="RESPONSIBILITY" type="section" body={contentCollapse}/></div>
        <GetBreakLine length={1} />
        <GetNavTab builder={toggleNavBuilder}/>
    </>
}