import { Content } from "../Content/Content";

export function Comment(props) {
    return (
        <Content additionalClasses="flex-container-col gap-15 w-100">
            <p>
                <span className="medium-text">"{props.children}"</span>
            </p>
            <div className="comment-container w-100">
                <img src={props.imgUrl} class="comment-image" />
                <p>
                    <span className="comment-text">{props.name}</span> <br />
                    <span className="smaller-text">{props.position}</span>
                </p>
                <div className="arrow-class">
                    <div className="circle-white"><p style={{margin: "auto"}}> &lt; </p></div>
                    <div className="circle-purple"><p style={{margin: "auto"}}> &gt; </p></div>
                </div>
            </div>
        </Content>
    )
}