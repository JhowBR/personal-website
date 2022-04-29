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

                <p> SpellAPI is a Unity API that handle all the logic for the creation of spells in games.  
                    Spells are stateful objects that have it own lifecycle,
                    providing events called by different commands the user send to it.  
                    It can be used generally for all the spells inside MOBA or RPG game styles,
                    but it can be also used for anything that have cooldown.</p>
                
                <div className={styles.line} />

                <h1 id='1'>Getting Started</h1>

                <div className={styles.line} />

                <h1 id='2'>Basic Usage</h1>

                <p> Creating a new spell for your game is quite simple!
                    First, let's instantiate a new Spell, passing the name, the spell type and the user (must be a SpellUser), and put it into a variable:</p>
                <p className="code">Spell fireball = new Spell("Fireball", Spell.SpellType.ACTIVE, user1);</p>
                <p> The object above represents a runtime spell of a single user.
                    When instantiating a spell, it will be attached automatically to the given user being able to be accessed through it.</p>
                <br />

                <p>We can set a cooldown for the spell - this is the reload time that avoid spamming:</p>
                <p className="code">fireball.Cooldown = 5;</p>
                <br />

                <p> Spells have it own state that vary according to the type passed in the constructor.
                    In this example, we're using an ACTIVE spell that have the CASTING state.
                    To define what the spell do when it is activated, first we define a function with
                    a spell argument and with no return:</p>
                <p className="code">void CastFireball(Spell spell)<br />{"{"}<br />&emsp;// Casting a fireball!<br />{"}"}</p>
                <br />

                <p>Now, let's connect the function in the ENTER_CASTING event:</p>
                <p className="code">fireball.events.Add(Spell.SpellEventName.ENTER_CASTING, CastFireball);</p>
                <br />

                <p>You can storage spells in a list to manage them - it depends on your own design:</p>
                <p className="code">
                    List{"<Spell>"} runtimeSpells = new List{"<Spell>"}();
                    <br />
                    runtimeSpells.Add(fireball);
                </p>
                <p> All the logic is already working, what means that when casted it will call CastFiberall function defined above and then reload for 5 seconds.
                    <br />
                    The spell is ready to use! But before, we need to define how... Is the user a NPC (non-playable character) or a Player?</p>
                <br />

                <h4>NPC Usage</h4>
                <p>If the user is a NPC, you'll send a command to cast the spell through the user and the magic will happen:</p>
                <p className="code">user.spells[0].ExecuteCommand(SpellCommand.CAST)</p>
                <br />

                <h4>Player Usage</h4>
                <p> While the ExecuteCommand is used for NPCs, for players we use SendInput instead,
                    and it's necessary to setup that inputs before using.
                    <br />
                    We bind different SpellInputs to different SpellCommands, so we can customize the behaviour of the spells.
                    For example, we could cast some spell with key down and other with key up.
                    In this case, the fireball is setted to cast when it receive a BTN_DOWN input:</p>
                <p className="code">fireball.SetKeyToCommand(Spell.SpellInput.BTN_DOWN, Spell.SpellCommand.CAST);</p>
                <br />

                <p>Let's setup the "Q" key to cast the Fireball and detect it in the PlayerController, assuming it inherit SpellUser:</p>
                <p className="code">void Update()<br />{"{"}<br />&emsp;if (Input.GetKeyDown(KeyCode.Q))<br />&emsp;&emsp;spells[0].SendInput(Spell.SpellInput.BTN_DOWN);<br />{"}"}</p>
                <p>Now, when the player press "Q", the fireball will cast!</p>
                <br />

                <p>This was a simple guide to help to get into the basic usage. The API becomes more powerful with other spell types, events and much more!</p>
                <p>For more detail, check the API Reference.</p>
            </div>
        </div>
    )
}