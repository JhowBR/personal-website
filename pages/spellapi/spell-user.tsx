import Head from "next/head";
import Attribute from "../../components/SpellAPI/Attribute";
import Method from "../../components/SpellAPI/Method";
import SpellApiSidebar from "../../components/SpellAPI/SpellApiSidebar";
import styles from '../../styles/SpellApiDocs.module.css'

export default function SpellUser() {
    const SPELLUSER_DESCRIPTION = "This object represent an in-game spell. Each instance represents a single spell that will be encapsulated inside some SpellUser."

    return (
        <div style={{display:'flex', flexDirection:"row"}}>
            <Head>
                <title>Class: SpellUser</title>
                <meta name="description" content={SPELLUSER_DESCRIPTION} />
                <meta name="keywords" content="class, spelluser, user, spell, system, api, unity, game, super, power, c#, module, package" />
            </Head>
            
            <SpellApiSidebar collapse={1} />

            <div className={styles.container}>
                <h1>SpellUser</h1>
                <p>{SPELLUSER_DESCRIPTION}</p>
                <div className={styles.line} />

                <h3>Attributes</h3>
                <Attribute name="spells" datatype="List<Spell>" description="The spells the user have." />
                <div className={styles.line} />

                <h3>Methods</h3>
                <Method
                name='AddSpell'
                args='Spell spell'
                description='Gives a new spell to the user'/>
                <Method
                name='CastSpell'
                args='int n'
                description='Calls the ExecuteCommand(Spell.SpellCommand.Cast) of the n spells index'/>
                <Method
                name='IsUsingSpell'
                return="void"
                description='Returns false if any spell that cannot be used with other spell are in Preparing state.'/>
            </div>
        </div>
    )
}