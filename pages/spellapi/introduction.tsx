import SpellApiSidebar from '../../components/SpellAPI/SpellApiSidebar'
import styles from '../../styles/SpellApiDocs.module.css'

export default function SpellAPI() {
    return (
        <div style={{display:'flex', flexDirection:"row"}}>
            <SpellApiSidebar collapse={0}></SpellApiSidebar>

            <div className={styles.container}>
                <h4 style={{color: "yellow"}}>***Page under construction!***</h4>

                <h1>What is SpellAPI?</h1>
                <p>SpellAPI is an Unity API that handle all the logic for the creation of spells in games.  
                    Spells are stateful objects that have it own lifecycle,
                    providing events called by different commands the user send to it.  
                    It can be used generally for all the spells inside MOBA or RPG game styles,
                    but it can be also used for any thing that have cooldown.</p>
                <h2 id='1'>Getting Started</h2>
                <h2 id='2'>Basic Usage</h2>
            </div>
        </div>
    )
}