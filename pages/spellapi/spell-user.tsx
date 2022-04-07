import Attribute from "../../components/SpellAPI/Attribute";
import Method from "../../components/SpellAPI/Method";
import SpellApiSidebar from "../../components/SpellAPI/SpellApiSidebar";
import styles from '../../styles/SpellApiDocs.module.css'

export default function SpellUser() {
    return (
        <div style={{display:'flex', flexDirection:"row"}}>
            <SpellApiSidebar collapse={1}></SpellApiSidebar>

            <div className={styles.container}>
                <h1>SpellUser</h1>
                <p>This intent to be used as an Unity's component, attached to players or NPC's.</p>

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