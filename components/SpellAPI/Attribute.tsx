interface AttributeProps {
    name: string
    datatype: string
    description: string
}

export default function Attribute(props: AttributeProps) {
    return (
        <div>
            <div style={{fontSize: '20px'}}>
                <span style={{color: "blueviolet"}}>{props.datatype + ' '}</span>
                <span style={{color: "whitesmoke"}}>{props.name}</span>
            </div>
            <p>{props.description}</p>
        </div>
    )
}