function switcher(element, url) {
    switch(element) {
        case "icon":
            return (<img src={url} class="sm-icon" />);
        case "profile":
            return (<img src={url} class="profile-image flex-center" />);
        default:
            return (<img src={url} class="" />);
    }
}

export function ContentCard(props) {
    return (
        <div class={`main-content content-card ${props.isIcon ? null : "flex-container-col"}`} style={{backgroundColor: `${props.bgcolor}`}}>
            
            {
                switcher(props.imgType, props.imgUrl)
            }
            <p className={props.imgType == "profile" ? "text-center" : ""}>
                <span class="big-text">{props.title}</span> <br />
                <span class="smaller-text">{props.text}</span>
            </p>
        </div>
    );
}