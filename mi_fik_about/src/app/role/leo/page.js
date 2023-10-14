
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
import GetWorkflowContainer from '@/components/containers/workflow';
import GetDoubleImage from '@/components/images/double_img';
import GetSocmedGroup from '@/components/buttons/social';
import GetReferenceButton from '@/components/buttons/reference';
import GetSmoothLayout from '@/components/containers/smooth_layout';

export default function RoleLeo() {
    const contentCollapse = <p className='sec-about'>Lorem ipsum</p>
    const workflows = [
        {
            step_name: "Analyze requirement",
            step_body: <p>After the whole team created the mockup API, UI Design from FrontEnd Dev, and Software Requirement Specification from System Analyst. 
                I analyze the logic based on the cases, define the parameter or input/output, and define the services that will be used in a feature.</p>,
            related_with: <a href='/role/fauzan' className='path'>System Analyst</a>,
            resource: <> 
                <a href='https://drive.google.com/file/d/1lUdmC8PNRc032GUK22CxNR1T_ZYb2FSM/view?usp=sharing' className='path ms-1'>Software Requirement Specification</a>
                <a href='https://drive.google.com/file/d/1-gLHpK4jgP-98nPkkU9ijGh220o6gkpd/view?usp=sharing' className='path'>MockUp API</a>
                <a href='https://drive.google.com/file/d/1GrsgTJj2rxZFTpob6a4C0GHIU_vpDHIk/view?usp=sharing' className='path'>Software Development Specification</a>
                </>
        },
        {
            step_name: "Define the task",
            step_body: <p>After all requirement is defined. As a Lead Developer, I gather the FrontEnd and other BackEnd Developer, and give them a task to do based on their role. 
                For tracking the feature that should we do, we use spreadsheets.
            </p>,
            related_with: <><a href='/role/hafiz' className='path'>FrontEnd Dev</a><a href='/role/rafly' className='path'>BackEnd API Dev</a></>,
            resource: <> 
                <a href='https://docs.google.com/spreadsheets/d/12JKXZwy5Z-wMG-BHwLaplNOI0INk1KhFGdu68tCSvKA/edit?usp=sharing' className='path ms-1'>Feature Documentation</a>
                <a href='https://docs.google.com/document/d/1U_fsCdaRl6CLWgBI8t_oMaB_ll-bfsKVdfTGz2IYrIs/edit?usp=sharing' className='path ms-1'>MI-FIK Web Code Documentation (New)</a>
                <a href='https://docs.google.com/document/d/1OOJ8OfaylQFHl0oSYi8ph3uewgUFMaoxWrR7bEEKNb0/edit?usp=sharing' className='path ms-1'>MI-FIK Mobile App Code Documentation (New)</a>
                </>
        },
        {
            step_name: "Development",
            step_body: <p>In these phase, I start to develope or code the feature. Using PHP and JS for programming language in MI-FIK Web App, HTML & CSS for scripting language in web app too. 
                And Flutter for Mobile App. For develop I'm using various tools, like Visual Studio Code for IDE, Xampp & PHPMyAdmin for databases, Android Studio for mobile debugging,
                Google Chrome for web debugging, Figma for design reference, and Postman for API Testing.
            </p>,
            related_with: <><a href='/role/hafiz' className='path'>FrontEnd Dev</a><a href='/role/rafly' className='path'>BackEnd API Dev</a></>
        },
        {
            step_name: "Internal testing & Documentation",
            step_body: <p>Before I deployed the modules and delivered it to Quality Assurance. I do some BlackBox Testing for both of the Mobile and Web App. The testing is for each feature in Functional Requirement 
                and Non-Functional Requirement that i have contributed too. While testing, I also make documentation for each function, used packages, variable, structure for the codebase.
                And screen capture of the testing for evidence is also included.
            </p>,
            related_with: null
        },
        {
            step_name: "Deployment",
            step_body: <p>If some feature or modules has finished to develop, and the test case from Quality Assurance has been defined too. As a Lead Developer, I do the deployment to CPanel Hostinger server for MI-FIK Web App 
                and to Firebase App Distribution for MI-FIK Mobile App. After deployed, these two app is ready to be tested by Quality Assurance based on their test case. The result of the test will be available on the Test Case Report, and Bug Report.
                If there's a bug, me as Lead Developer will do bug fixing or assign the task to the Developer who make that feature. And if's not, we can continue to next feature.
                </p>,
            related_with: null,
            resource: <> 
                <a href='https://mifik.id' className='path ms-1'>Web App (Released)</a>
                <a href='https://tinyurl.com/MIFIKBeta' className='path'>Mobile App (Released)</a>
                </>
        },
        {
            step_name: "Bug Fixing",
            step_body: <p>After Quality Assurance had finished do some type of testing. And the result says there's some bug, Me and other developer will do the bug fixing, redeploy again after the condition is fullfil, make report to 
                Quality Assurance so that they can test again the feature. If all had passed, we can continue to next feature, but if there's a bug who take so much time to fix, we can pending it. And be fixed in next iteration of feature development.
            </p>,
            related_with: <><a href='/role/hafiz' className='path'>FrontEnd Dev</a><a href='/role/alya' className='path'>Quality Assurance</a><a href='/role/rafly' className='path'>BackEnd API Dev</a></>,
            resource: <> 
                <a href='https://docs.google.com/spreadsheets/d/1uJLKmSCPf1DN6IVDB1EYhFjJUTjO6I8R/edit?usp=sharing&ouid=107141879978497685544&rtpof=true&sd=true' className='path ms-1'>Bug Report</a>
                </>
        }
    ]

    const socmed = {
        linkedin: "https://www.linkedin.com/in/leonardho-rante-sitanggang-a5a752202",
        instagram: "https://www.instagram.com/leonardhorante_08/",
        twitter: null,
        facebook: "https://www.facebook.com/people/Leonardho-Rante-Sitanggang/pfbid0isQwaXxoP4onp18k8rWqnhdqcSzbj3jPm6MH4HyYVwAd5G5mekRnyoZEjGRjxU2wl/",
        email: "flazen.edu@gmail.com",
        github: "https://github.com/FlazeFy",
        website: "https://leonardhors.site/"
    }

    const gall = [
        {
            elm: <img className='img img-fluid' src="https://leonardhors.site/public/assets/img/mifik/Screen%20Shot%202023-10-13%20at%2022.09.21.png"/>,
            type: "images",
            body: <p>Web App's Code & Database</p>
        },
        {
            elm: <img className='img img-fluid' src="https://leonardhors.site/public/assets/img/mifik/Screen%20Shot%202023-10-13%20at%2022.10.35.png"/>,
            type: "images",
            body: <p>Web App</p>
        },
        {
            elm: <img className='img img-fluid' src="https://leonardhors.site/public/assets/img/mifik/Screen%20Shot%202023-10-13%20at%2022.29.49.png"/>,
            type: "images",
            body: <p>Mobile App</p>
        },
        {
            elm: <img className='img img-fluid' src="https://leonardhors.site/public/assets/img/mifik/Screen%20Shot%202023-10-13%20at%2022.37.23.png"/>,
            type: "images",
            body: <p>Mobile App's Code</p>
        },
        {
            elm: `class Help extends Model
            {
                use HasFactory;
                public $incrementing = false;
                
                protected $table = 'helps';
                protected $primaryKey = 'id';
                protected $fillable = ['id','help_type', 'help_category', 'help_body', 'created_at', 'created_by', 'updated_at', 'updated_by', 'deleted_at', 'deleted_by'];
            }`,
            type: "code",
            body: <p>Example Model</p>
        }
    ]

    const toggleNavBuilder = [
        {
            title: "About Me & My Role",
            id: "about",
            body: <>
                <header>About Me</header>
                <div className='row'>
                    <div className='col'>
                        <p>
                            Hello there 👋, My name is Leonardho R Sitanggang, {getAgeFromBirthDate("2001-08-08")}, from Papua, you can call me <b className='imp'>Leo</b>. I'm a <b className='imp'>Software Engineering</b> student from Telkom University. Who have strong interest in web and mobile programming.
                            My main skill in web programming are <b className='imp'>PHP Dev</b> and <b className='imp'>Golang Dev</b>. Also I'm using <b className='imp'>Flutter</b> when i code in mobile environment.
                        </p>
                        <p>
                            I'm a <b className='imp'>morning person</b>, <b className='imp'>diligent</b>, and <b className='imp'>hard-working people</b>. Beside coding, I'm like to learn about history, watching documentary movie, and I liked to travel everyplace who have great nature.
                            In the future I'd like to learn about 3D Design and Music Production.
                        </p>
                        <p><b>How to reach me : </b></p>
                        <GetSocmedGroup builder={socmed}/>
                    </div>
                    <div className='col'>
                        <GetDoubleImage first={"https://media.licdn.com/dms/image/D5603AQHbKizHEv_9fQ/profile-displayphoto-shrink_800_800/0/1693052509316?e=2147483647&v=beta&t=KkSxRuRQWx_-ocgpVduxbVWQ_wgtmpetG4CbVuImB28"}
                            second={"https://leonardhors.site/public/assets/img/WhatsApp%20Image%202023-08-25%20at%2006.51.34.jpeg"}/>
                    </div>
                </div>
                
                <GetBreakLine length={1}/>

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
            id: "workflow",
            body: <>
                <header>Workflow</header>
                <GetWorkflowContainer builder={workflows}/>
            </>,
        },
        {
            title: "Galleries",
            id: "gall",
            body: <>
                <header>Galleries</header>
                <GetSmoothLayout builder={gall}/>
            </>,
        },
        {
            title: "My Reference",
            id: "ref",
            body: <>
                <header>My Reference</header>
                <ol>
                    <li>
                        <GetReferenceButton title="Final Project (TA) - Journal" link="https://drive.google.com/file/d/1ejkuI_TqE6TyIicEaJ8IId4UuF2JC0c9/view?usp=sharing" type="doc"/>
                    </li>
                    <li>
                        <GetReferenceButton title="Final Project (TA) - Book" link="https://drive.google.com/file/d/1HqLEzyY58A85CP7QKt6s_KgMO9spOdDQ/view?usp=sharing" type="doc"/>
                    </li>
                    <li>
                        <GetReferenceButton title="MI-FIK Web (Deployed)" link="https://mifik.id" type="web"/>
                    </li>
                    <li>
                        <GetReferenceButton title="MI-FIK Mobile (Deployed)" link="https://tinyurl.com/MIFIKBeta" type="gdrive"/>
                    </li>
                    <li>
                        <GetReferenceButton title="MI-FIK Web Repository" link="https://github.com/FlazeFy/mi_fik_dashboard" type="web"/>
                    </li>
                    <li>
                        <GetReferenceButton title="MI-FIK Mobile Repository" link="https://github.com/fauzanreza/mi_fik" type="web"/>
                    </li>
                    <li>
                        <GetReferenceButton title="MI-FIK Mobile Code Documentation" link="https://docs.google.com/document/d/1OOJ8OfaylQFHl0oSYi8ph3uewgUFMaoxWrR7bEEKNb0/edit?usp=sharing" type="doc"/>
                    </li>
                    <li>
                        <GetReferenceButton title="MI-FIK Web Code Documentation" link="https://docs.google.com/document/d/1U_fsCdaRl6CLWgBI8t_oMaB_ll-bfsKVdfTGz2IYrIs/edit?usp=sharing" type="doc"/>
                    </li>
                    <li>
                        <GetReferenceButton title="Laravel Documentation (Web App)" link="https://laravel.com/docs/9.x" type="web"/>
                    </li>
                    <li>
                        <GetReferenceButton title="Flutter Documentation (Mobile App)" link="https://docs.flutter.dev/" type="web"/>
                    </li>
                    <li>
                        <GetReferenceButton title="PHP Documentation" link="https://www.php.net/manual/en/" type="web"/>
                    </li>
                    <li>
                        <GetReferenceButton title="Dart Documentation" link="https://dart.dev/guides" type="web"/>
                    </li>
                    <li>
                        <GetReferenceButton title="Bug Report (Web App)" link="https://docs.google.com/spreadsheets/d/1uJLKmSCPf1DN6IVDB1EYhFjJUTjO6I8R/edit?usp=sharing&ouid=107141879978497685544&rtpof=true&sd=true" type="doc"/>
                    </li>
                    <li>
                        <GetReferenceButton title="Bug Report (Mobile App)" link="https://docs.google.com/spreadsheets/d/1j3dGjmpnY1i-JFLNqEpedT-fBabkpEOh/edit?usp=sharing&ouid=107141879978497685544&rtpof=true&sd=true" type="doc"/>
                    </li>
                    <li>
                        <GetReferenceButton title="Software Requirement Specification" link="https://drive.google.com/file/d/1lUdmC8PNRc032GUK22CxNR1T_ZYb2FSM/view?usp=sharing" type="doc"/>
                    </li>
                    <li>
                        <GetReferenceButton title="Software Development Specification" link="https://drive.google.com/file/d/1GrsgTJj2rxZFTpob6a4C0GHIU_vpDHIk/view?usp=sharing" type="doc"/>
                    </li>
                    <li>
                        <GetReferenceButton title="Database Table Structure" link="https://docs.google.com/spreadsheets/d/1-fQnXLAEu4H2zW2EN7FzbudzWo1MiESKvsClv2rP_W0/edit#gid=1699568606" type="doc"/>
                    </li>
                    <li>
                        <GetReferenceButton title="DB Dump" link="https://drive.google.com/file/d/1rrlWAs_zCUHMXWkcVjLUsyxKtPwM-nK8/view?usp=sharing" type="gdrive"/>
                    </li>
                    <li>
                        <GetReferenceButton title="Mockup API" link="https://docs.google.com/document/d/1uWjLadkxYX4xlOIMC0nsL5ahRqXbERyF/edit?usp=share_link&ouid=111125017145288566644&rtpof=true&sd=true" type="doc"/>
                    </li>
                    <li>
                        <GetReferenceButton title="SQL Docs" link="https://docs.google.com/document/d/1r3KEWvFpdfPVt9oYXESBE_HzDnAul4VKOHBTkHkgCc0/edit?usp=sharing" type="doc"/>
                    </li>
                    <li>
                        <GetReferenceButton title="BlackBox Documentation / Demo (Web App)" link="https://drive.google.com/drive/folders/12NP1qc3JsfLyRJgqsoP2ThoySGZYjULm?usp=sharing" type="gdrive"/>
                    </li>
                    <li>
                        <GetReferenceButton title="BlackBox Documentation / Demo (Mobile App)" link="https://drive.google.com/drive/folders/1zcRP-ipt6U41sa4QvTmKOG39TWObsPFS?usp=sharing" type="gdrive"/>
                    </li>
                    <li>
                        <GetReferenceButton title="Others Artefact Link" link="https://docs.google.com/document/d/1wzPhJpZHcf6DBZfgAbDY9uq5XhWFtNsiNb-MFpiCUyw/edit?usp=sharing" type="doc"/>
                    </li>
                </ol>
            </>,
        }
    ]

    return <>
        <div className={landing.main_title}><GetLabel text="RESPONSIBILITY" type="section" body={contentCollapse}/></div>
        <GetBreakLine length={1} />
        <GetNavTab builder={toggleNavBuilder}/>
    </>
}