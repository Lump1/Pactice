import { Content } from "../Content/Content"

export function Post(props) {
    return (
        <Content additionalClasses="flex-container-col">
            <img src={props.imgUrl} className="default-image" />
            <p>
                <span className="smaller-text">{props.date}</span> <br /> <br />
                <span className="medium-rare-text">{props.title}</span> <br /> <br />
                <span className="smaller-text">{props.text}</span> <br /> <br />
                <a className="link-in-text">Read More</a>
            </p>
        </Content>
    )
}

// function Posts(props) {
//     return (
//         <div className="w-100">
//             {
//                 postData.map((item) => {
//                     return (
//                         <Content additionalClasses="flex-container-col">
//                             <img src={item.imgUrl} className="default-image" />
//                             <p>
//                                 <span className="smaller-text">{date}</span> <br /> <br />
//                                 <span className="medium-rare-text">{item.title}</span> <br /> <br />
//                                 <span className="smaller-text">{item.text}</span> <br /> <br />
//                                 <a className="link-in-text">Read More</a>
//                             </p>
//                         </Content>
//                     )
//                 })
//             }
//         </div>

//     )
// }