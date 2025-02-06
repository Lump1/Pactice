export function Content(props) {
    return (
        <div className={`main-content ${props.additionalClasses}`}>
            {props.children}
        </div>
    );
}