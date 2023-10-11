// Modules CSS
import container from './containers.module.css'

export default function GetNavTab({builder}) {
    return (
        <div style={{marginInline:"auto", display:"block", width:"1080px"}}>
            <div className="row">
                <div className="col-4">
                    <div className={container.nav_btn_holder}>
                        {
                            builder.map((val, i, index) => {
                                return <button className={container.btn_nav}>{val['title']}</button>
                            })
                        }
                    </div>
                </div>
                <div className="col-8">
                    <div className={container.nav_body}>
                        {
                            builder.map((val, i, index) => {
                                return <div className={container.nav_section}>{val['body']}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}