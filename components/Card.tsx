import Link from 'next/link'
import styles from '../styles/Card.module.css'
import {BsBoxArrowUpRight} from 'react-icons/bs'


interface CardProps {
    name: string
    description?: string
    href?: string
}

export default function Card(props: CardProps) {
    if (props.href) return (
        <Link href={props.href}>
            <a className={styles.card} target='_blank'>
                <h4>{props.name} </h4>
                <p>{props.description}</p>
                <BsBoxArrowUpRight />
            </a>
        </Link>
    )
    else return (
        <div className={styles.card}>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    )
}