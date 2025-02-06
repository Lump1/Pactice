export function CoolNumeric(props) {
    return (
        <div className="cool-nummeric-element-container">
            <div className="cool-nummeric-element">
                <p className="box-text">{props.number}</p>
                <div className="outline-box-1">
                </div>
                <div className="corner">
                </div>
                <div className="inline-box">
                </div>
            </div>

            {props.children}
        </div>
    );
}