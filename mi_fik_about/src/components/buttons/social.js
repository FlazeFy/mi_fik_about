// Modules CSS
import button from './buttons.module.css'

//Font awesome classicon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarth, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function GetSocmedGroup({builder}) {
    return (
        <div>
            {
                builder['linkedin'] != null ?
                    <a href={builder['linkedin']} className={button.socmed_link} title="Linked In"><FontAwesomeIcon icon={faLinkedin} size="2xl"/></a>
                :
                    <></>
            }
            {
                builder['instagram'] != null ?
                    <a href={builder['instagram']} className={button.socmed_link} title="Instagram"><FontAwesomeIcon icon={faInstagram} size="2xl"/></a>
                :
                    <></>
            }
            {
                builder['twitter'] != null ?
                    <a href={builder['twitter']} className={button.socmed_link} title="Twitter"><FontAwesomeIcon icon={faTwitter} size="2xl"/></a>
                :
                    <></>
            }
            {
                builder['facebook'] != null ?
                    <a href={builder['facebook']} className={button.socmed_link} title="Facebook"><FontAwesomeIcon icon={faFacebook} size="2xl"/></a>
                :
                    <></>
            }
            {
                builder['email'] != null ?
                    <a href={builder['email']} className={button.socmed_link} title="Email"><FontAwesomeIcon icon={faEnvelope} size="2xl"/></a>
                :
                    <></>
            }
            {
                builder['github'] != null ?
                    <a href={builder['github']} className={button.socmed_link} title="Github"><FontAwesomeIcon icon={faGithub} size="2xl"/></a>
                :
                    <></>
            }
            {
                builder['website'] != null ?
                    <a href={builder['website']} className={button.socmed_link} title="Website"><FontAwesomeIcon icon={faEarth} size="2xl"/></a>
                :
                    <></>
            }
        </div>
    )
}
  