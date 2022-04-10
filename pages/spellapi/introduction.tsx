import Head from 'next/head'
import SpellApiSidebar from '../../components/SpellAPI/SpellApiSidebar'
import styles from '../../styles/SpellApiDocs.module.css'

export default function SpellAPI() {
    return (
        <div style={{display:'flex', flexDirection:"row"}}>
            <Head>
                <title>SpellAPI - Introduction</title>
                <meta name="description" content="Looking for some API to make spells in your game? SpellAPI is the perfect system to handle all the logic of spells!" />
                <meta name="keywords" content="spellapi, spell, system, api, unity, game, super, power, c#, module, package" />
            </Head>
            <SpellApiSidebar collapse={0}></SpellApiSidebar>
            <div className={styles.container}>
                <h4 style={{color: "yellow"}}>***Page under construction!*** Available for download soon...</h4>

                <h1>What is SpellAPI?</h1>
                <p>SpellAPI is a Unity API that handle all the logic for the creation of spells in games.  
                    Spells are stateful objects that have it own lifecycle,
                    providing events called by different commands the user send to it.  
                    It can be used generally for all the spells inside MOBA or RPG game styles,
                    but it can be also used for any thing that have cooldown.</p>
                <h1 id='1'>Getting Started</h1>
                <h1 id='2'>Basic Usage</h1>
            </div>
        </div>
    )
}