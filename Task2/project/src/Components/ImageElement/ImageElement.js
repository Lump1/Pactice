function blureSelect(blureType) {
    switch (blureType) {
        case "50":
            return "blue-image-blure-50";
        case "100":
            return "blue-image-blure-100"
        default:
            return "blue-image-blure";
    }
}

function Blure(props) {
    return (
        <div className={`${blureSelect(props.blureType)} flex-container-col flex-container-end`}>
            <p className="box-text">
                {props.children}
            </p>
        </div>
    );
}

export function ImageElement(props) {
    return (
        <div className={`img-continer p-0 ${props.additionalClasses}`} style={{ width: `${props.imgWidth}`, height: `${props.imgHeight}` }}>
            { props.isBlured ? Blure(props) : null }
            <img src={props.imgUrl} className="default-image" />
        </div>
    )
}