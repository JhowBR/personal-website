import Link from 'next/link'
import styles from '../../styles/SpellApiDocs.module.css'

export default function SpellApiSidebar(props: any) {
    return (
        <div className={styles.sidebarContainer}>
            <div className="flex-shrink-0 p-3 bg-dark" style={{width: "180px", height: "100%", position:"fixed"}}>
                <Link href="/">
                    <a className="d-flex align-items-center pb-3 mb-3 link-white text-decoration-none border-bottom">
                        <svg className="bi me-2" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
                        <span className="fs-5 fw-bold">SpellAPI</span>
                    </a>
                </Link>

                <ul className="list-unstyled ps-0">

                    <li className="mb-1">
                        <button className={styles.btn} data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                        Introduction
                        </button>
                        <div className={`collapse ${props.collapse == 0 ? 'show' : ''}`} id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><Link href='introduction#0'><a className="link-white rounded">What is SpellAPI?</a></Link></li>
                                <li><Link href='introduction#1'><a className="link-white rounded">Getting Started</a></Link></li>
                                <li><Link href='introduction#2'><a className="link-white rounded">Basic Usage</a></Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className="mb-1">
                        <button className={styles.btn} data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="true">
                        API Reference
                        </button>
                        <div className={`collapse ${props.collapse == 1 ? 'show' : ''}`} id="orders-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <li><Link href='spell'><a className="link-white rounded">Spell</a></Link></li>
                                <li><Link href='spell-user'><a href="spell-user" className="link-white rounded">SpellUser</a></Link></li>
                                <li><Link href='enums#0'><a href="enums#0" className="link-white rounded">[enum] SpellType</a></Link></li>
                                <li><Link href='enums#1'><a href="enums#1" className="link-white rounded">[enum] SpellCommand</a></Link></li>
                                <li><Link href='enums#2'><a href="enums#2" className="link-white rounded">[enum] SpellInput</a></Link></li>
                                <li><Link href='enums#3'><a href="enums#3" className="link-white rounded">[enum] SpellEvent</a></Link></li>
                            </ul>
                        </div>
                    </li>

                    <li className="border-top my-3"></li>
                    
                    <Link href='/'><a className="link-white rounded">GitHub - SpellAPI</a></Link>
                    <br />
                    <Link href='/'><a className="link-white rounded">Jonathan Galli</a></Link>
                </ul>
            </div>
        </div>
    )
}