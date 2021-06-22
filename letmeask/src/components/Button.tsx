type ButtonProps = {
    text?: Array<string>;
    // ou poderia ser -> text?: string[];
}

export function Button(props: ButtonProps){
    return (
        <button>{props.text || 'Default'}</button>
    )
}



