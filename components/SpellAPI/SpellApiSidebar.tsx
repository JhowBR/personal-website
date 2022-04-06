import styles from '../../styles/SpellApiDocs.module.css'

export default function(props: any) {
    return (
        <div className={styles.sidebarContainer}>
            <div className="flex-shrink-0 p-3 bg-dark" style={{width: "180px", height: "100%", position:"fixed"}}>
                <a href="/" className="d-flex align-items-center pb-3 mb-3 link-white text-decoration-none border-bottom">
                    <svg className="bi me-2" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
                    <span className="fs-5 fw-bold">SpellAPI</span>
                </a>

                <ul className="list-unstyled ps-0">

                    <li className="mb-1">
                        <button className={styles.btn} data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                        Introduction
                        </button>
                        <div className={`collapse ${props.collapse == 0 ? 'show' : ''}`} id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="introduction#0" className="link-white rounded">What is SpellAPI?</a></li>
                                <li><a href="introduction#1" className="link-white rounded">Getting Started</a></li>
                                <li><a href="introduction#2" className="link-white rounded">Basic Usage</a></li>
                            </ul>
                        </div>
                    </li>

                    <li className="mb-1">
                        <button className={styles.btn} data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="true">
                        API Reference
                        </button>
                        <div className={`collapse ${props.collapse == 1 ? 'show' : ''}`} id="orders-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><a href="spell" className="link-white rounded">Spell</a></li>
                                <li><a href="spell-user" className="link-white rounded">SpellUser</a></li>
                                <li><a href="enums#0" className="link-white rounded">[enum] SpellType</a></li>
                                <li><a href="enums#1" className="link-white rounded">[enum] SpellCommand</a></li>
                                <li><a href="enums#2" className="link-white rounded">[enum] SpellInput</a></li>
                                <li><a href="enums#3" className="link-white rounded">[enum] SpellEvent</a></li>
                            </ul>
                        </div>
                    </li>

                    <li className="border-top my-3"></li>
                    
                    <a href="/" className="link-white rounded">GitHub - SpellAPI</a>
                    <br />
                    <a href="/" className="link-white rounded">Jonathan Galli</a>
                </ul>
            </div>
        </div>
    )
}