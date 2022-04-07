interface MethodProps {
    name: string,
    return?: string,
    args?: string,
    description: string
}

export default function Method(props: MethodProps) {
    return (
        <div>
            <div style={{fontSize: '20px'}}>
                <span style={{color: "purple"}}>{(props.return ? props.return : 'void') + ' '}</span>
                <span style={{color: "yellowgreen"}}>{props.name}</span>
                (<span>{props.args}</span>)
            </div>
            <p>{props.description}</p>
        </div>
    )
}