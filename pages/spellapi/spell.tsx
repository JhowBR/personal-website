import Head from "next/head";
import Attribute from "../../components/SpellAPI/Attribute";
import Method from "../../components/SpellAPI/Method";
import SpellApiSidebar from "../../components/SpellAPI/SpellApiSidebar";
import styles from '../../styles/SpellApiDocs.module.css'

export default function Spell() {
    const SPELL_DESCRIPTION = "This object represent an in-game spell. Each instance represents a single spell that will be encapsulated inside some SpellUser."

    return (
        <div style={{display:'flex', flexDirection:"row"}}>
            <Head>
                <title>Class: Spell</title>
                <meta name="description" content={SPELL_DESCRIPTION} />
                <meta name="keywords" content="class, spell, spellapi, system, api, unity, game, super, power, c#, module, package" />
            </Head>

            <SpellApiSidebar collapse={1} />

            <div className={styles.container}>
                <h1>Spell</h1>
                <p>{SPELL_DESCRIPTION}</p>
                <div className={styles.line} />

                <h3>Attributes</h3>
                <Attribute name='name' datatype='readonly string' description='The spell name.'></Attribute>
                <Attribute name='description' datatype='string' description='A simply text describing what the spells do.'></Attribute>
                <Attribute name='icon' datatype='Sprite' description='An icon that can be used in UI.'></Attribute>
                <Attribute name='events' datatype='readonly Dictionary<SpellEventName, SpellEvent>' description='The collections of all events.'></Attribute>
                <Attribute name='Cooldown' datatype='float' description='The duration the spell will stay in Reloading state.'></Attribute>
                <Attribute name='castTime' datatype='float' description='The duration the spell will stay in Casting state.'></Attribute>
                <Attribute name='maxPreparingTime' datatype='float' description='The maximum duration the spell can endure in Preparing state (before Casting). -1 to infinite.'></Attribute>
                <Attribute name='preparingTime' datatype='float' description='The duration the spell was in last Preparing state. Can be read to improove the spell effect. Should not be setted, just read.'></Attribute>
                <Attribute name='canUseWithOthers' datatype='bool' description="If setted to false, the spell user can't use other spell while this spell is in Preparing state."/>
                <div className={styles.line} />
                
                <h3>Methods</h3>
                <Method
                name='Spell'
                return="Spell"
                args='string name, SpellUser user, string description...'
                description="The constructor. It's given an user and automatically added to it."/>
                <Method
                name='ExecuteCommand'
                args='SpellCommand command'
                description='A command that will take some action, depending on current spell state.'/>
                <Method
                name='SendInput'
                args='SpellInput input'
                description='This is the method that should be used by players. It converts the SpellInput in the SpellCommand,
                depending on the spell setup.'/>
                <Method
                name='SetKeyToCommand'
                args="SpellInput input, SpellCommand command"
                description='Bind the given input to execute the given command. This is uset to bind different inputs to different commands.'/>
                <Method
                name='GetStateName'
                return='string'
                description='Returns the current state name of the spell.'/>
            </div>
        </div>
    )
}