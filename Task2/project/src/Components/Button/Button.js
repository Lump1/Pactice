function selectClass(selector) {
    switch (selector) {
        case "blue":
            return "button-form-blue";
        case "yellow":
            return "button-form-yellow";
        case "transparent":
            return "button-form-transp";
        default:
            return "button-form";
    }
}

export function Button(props) {
    return (
        <button className={'header-element ' + selectClass(props.buttonType)}>
            {props.children}
        </button>
    )

}