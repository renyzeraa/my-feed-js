// props : { author , content }

export function Post(props) {
    return (
        <p>
            {props.content} <strong>{props.author}</strong>
        </p>
    )
}
