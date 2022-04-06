import Attribute from "../../components/SpellAPI/Attribute";
import Method from "../../components/SpellAPI/Method";
import SpellApiSidebar from "../../components/SpellAPI/SpellApiSidebar";
import styles from '../../styles/SpellApiDocs.module.css'

export default function() {
    return (
        <div style={{display:'flex', flexDirection:"row"}}>
            <SpellApiSidebar collapse={1}></SpellApiSidebar>

            <div className={styles.container}>
                <h1>Enums</h1>
                <p>This enums are used internally in the API and in some spell methods.
                    They're contained statically inside the Spell class.</p>

                <div className={styles.line} />

                <h4 id="0" className={styles.enum}>SpellType</h4>
                <ul>
                    <li>ACTIVE</li>
                    <li>PASSIVE</li>
                    <li>PREPARATE</li>
                </ul>

                <h4 id="1" className={styles.enum}>SpellCommand</h4>
                <ul>
                    <li>CAST</li>
                    <li>PREPARE</li>
                    <li>RELOAD</li>
                </ul>

                <h4 id="2" className={styles.enum}>SpellInput</h4>
                <ul>
                    <li>BTN_DOWN</li>
                    <li>BTN_UP</li>
                    <li>MOUSE_DOWN</li>
                    <li>MOUSE_UP</li>
                </ul>

                <h4 id="3" className={styles.enum}>SpellEvent</h4>
                <ul>
                    <li>ON_CAST</li>
                    <li>EXIT_CAST</li>
                </ul>
            </div>
        </div>
    )
}