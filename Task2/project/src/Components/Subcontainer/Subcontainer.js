export function Subcontainer(props) {
    return(
        <div className={`${props.grid == undefined ? 'main-subcontainer' : 'main-subcontainer-grid-' + props.grid} ${props.additionalClasses}`}>
            {props.children}
        </div>
    );
}