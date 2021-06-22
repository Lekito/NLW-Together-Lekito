type ButtonProps = {
    children?: string;
    //text?: Array<string>;
    // ou poderia ser -> text?: string[];
}

export function Button(props: ButtonProps){
    return (
        <button>{props.children || 'Default'}</button>
    )
}



