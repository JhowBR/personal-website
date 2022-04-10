import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import { BsInstagram as INSTAGRAM_ICON, BsGithub as GITHUB_ICON, BsWhatsapp as WHATSAPP_ICON} from 'react-icons/bs'
import { AiOutlineMail as EMAIL_ICON, } from 'react-icons/ai'
import { FaLinkedinIn as LINKEDIN_ICON } from 'react-icons/fa'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Jonathan Galli</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Jonathan, Ribeiro, Galli, Portfolio, Web, Developer, Development, NextJS, React, TypeScript, JavaScript, HTML, CSS, Unity, SpellAPI, Spell, Game, API" />
        <meta name="description" content="The Jonathan Galli's portfolio website." />
        <meta name="author" content="Jonathan Galli" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>        

      <div className={styles.container}>
        <div className={styles.grid}>
          <main className={styles.main}>
            <div className={styles.grid}>

              <div className={styles.profilePicture}/>
              <h1 className={styles.title}>
                Jonathan Galli
              </h1>
            </div>

            <section>
              <p className={styles.description}>
                Hi, I'm a full-stack developer graduated in IT!
                <br />
                Here you'll see my development skills and <Link href={'#portfolio'}><a>portfolio</a></Link>.
                <br />
                <br />
                I'm a musician also, check out my music projects <Link href='music'><a className={styles.a}>clicking here</a></Link>!
              </p>
            </section>
            
            <h2>About me</h2>
            <p className={styles.description}>
              <span style={{
                fontStyle:"italic",
                fontSize:'26px',
                color:"darkgoldenrod",
              }}>"I'm passionate about learning, making friends and beating challenges..."</span>
              <br />
              <br />
              Since 2019, I started studying and realized a great love for the lifestyle of learning to develop and program.
              As I don't like wasting time, I became a fast learner and self-taught.
              <br />
              I've been a project manager for some small projects and that's how I learned how to work in a team and be a good leader.
              <br />
              <br />
              <Link href={'#footer'}><a>Contact me</a></Link>
            </p>
            
          </main>

          <div className={styles.skillGrid}>
            <h2>Main Skills</h2>
            <div className={styles.grid}>
              <Card name="Web" description="NextJS, React, Node, JavaScript, TypeScript" />
              <Card name="Mobile" description="Android Studio, Java" />
              <Card name="Python" description="Pandas, Numpy, Docx, Tkinter, Pillow, Pyautogui, Pynput, etc" />
              <Card name="Games" description="Unity, C#" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.portfolio} id='portfolio'>
        <h1>Portfolio</h1>
          <div className={styles.grid}>
            <Card href='/' name='Personal Website' description="This website, made with NextJS and React" />
            <Card href='spellapi' name='SpellAPI' description="A Unity's API for creation of spells in games" />
          </div>
      </div>

      <div className="container">
        <h2 style={{marginTop:'24px'}}>Other skills</h2>
        <ul>
            <li>Rest</li>
            <li>Angular</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Lua</li>
            <li>Laravel</li>
            <li>Roblox Studio</li>
        </ul>
      </div>

      <footer className={styles.footer} id='footer'>
        <span><EMAIL_ICON /> jonathanribeirogalli@hotmail.com</span>
        <span><WHATSAPP_ICON /> +55 (45) 98835-9119</span>
        <span><INSTAGRAM_ICON /> <Link href="https://instagram.com/jonathanribeirogalli"><a target='_blank'> jonathanribeirogalli</a></Link></span>
        <span><LINKEDIN_ICON /> <Link href="https://www.linkedin.com/in/jonathan-galli/"><a target='_blank'> Jonathan Galli</a></Link></span>
        <span><GITHUB_ICON /> <Link href="https://github.com/JhowBR"><a target='_blank'> JhowBR</a></Link></span>
      </footer>
    </div>
  )
}

export default Home
