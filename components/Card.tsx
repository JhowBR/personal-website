import styles from '../styles/Card.module.css'

interface CardProps {
    name: string
    description?: string
    href?: string
}

export default function Card(props: CardProps) {
    if (props.href) return (
        <a className={styles.card} href={props.href}>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </a>
    )
    else return (
        <div className={styles.card}>
            <h4>{props.name}</h4>
            <p>{props.description}</p>
        </div>
    )
}