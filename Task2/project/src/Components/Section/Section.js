export function Section(props) {
    return (
        <div className={`main-container ${props.additionalMcClasses}`} style={{backgroundColor: `${props.mcbg}`}}>
            <div className={`main-content-container ${props.additionalMccClasses}`} style={{backgroundColor: `${props.mccbg}`}}>
                {props.children}
            </div>
        </div>
    );
}