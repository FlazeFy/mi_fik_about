// Modules CSS
import button from './buttons.module.css'

//Font awesome classicon
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faEarth, faFile, faFilePowerpoint } from "@fortawesome/free-solid-svg-icons"
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'

export default function GetReferenceButton({title, link, type}) {
    return (
        <div>
            {
                type == "web" ?
                    <>
                        <h5 style={{margin:0}}>{title}</h5>
                        <a href={link} title="type" className={button.ref_link}><FontAwesomeIcon icon={faEarth}/> {link}</a>
                    </>
                : type == "doc" ?
                    <>
                        <h5 style={{margin:0}}>{title}</h5>
                        <a href={link} title="type" className={button.ref_link}><FontAwesomeIcon icon={faFile}/> {link}</a>
                    </>
                : type == "ppt" ?
                    <>
                        <h5 style={{margin:0}}>{title}</h5>
                        <a href={link} title="type" className={button.ref_link}><FontAwesomeIcon icon={faFilePowerpoint}/> {link}</a>
                    </>
                : type == "gdrive" ?
                    <>
                        <h5 style={{margin:0}}>{title}</h5>
                        <a href={link} title="type" className={button.ref_link}><FontAwesomeIcon icon={faGoogleDrive}/> {link}</a>
                    </>
                : type == "book" ?
                    <>
                        <h5 style={{margin:0}}>{title}</h5>
                        <a href={link} title="type" className={button.ref_link}><FontAwesomeIcon icon={faBook}/> {link}</a>
                    </>
                :
                    <></>
            }
        </div>
    )
}
  