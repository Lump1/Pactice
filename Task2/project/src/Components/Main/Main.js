import { CoolNumeric } from "../CoolNumeric/CoolNumeric";
import { Section } from "../Section/Section";
import { Subcontainer } from "../Subcontainer/Subcontainer"
import { Content } from "../Content/Content";
import { ImageElement } from "../ImageElement/ImageElement";
import { ContentCard } from "../ContentCard/ContentCard";
import { Comment } from "../Comment/Comment";
import { FreqQuestions } from "../FreqQuestions/FreqQuestions";
import { Post } from "../Post/Post";

export function Main(props) {
    const HowWeWork = [
        { title: "Strategy", text: "onec rutrum augue eu augue venenatis porta. Cras placerat urna urna, a maximus erat finibus non. Nullam quis efficitur dolor. Integer vel nisi vulputate, fringilla ante at, fermentum est." },
        { title: "Wireframing", text: "onec rutrum augue eu augue venenatis porta. Cras placerat urna urna, a maximus erat finibus non. Nullam quis efficitur dolor. Integer vel nisi vulputate, fringilla ante at, fermentum est." },
        { title: "Design", text: "onec rutrum augue eu augue venenatis porta. Cras placerat urna urna, a maximus erat finibus non. Nullam quis efficitur dolor. Integer vel nisi vulputate, fringilla ante at, fermentum est." },
        { title: "Development", text: "onec rutrum augue eu augue venenatis porta. Cras placerat urna urna, a maximus erat finibus non. Nullam quis efficitur dolor. Integer vel nisi vulputate, fringilla ante at, fermentum est." },
    ];

    const Features = [
        { title: "Uses Client First", text: "Morbi nec pulvinar neque. Maecenas et condimentum diam. Fusce semper libero eget lorem dapibus, a mattis ipsum faucibus. Ut a quam turpis. Vivamus pellentesque aliquet augue a luctus. Nullam nec auctor ipsum, quis gravida diam.", url: process.env.PUBLIC_URL + "/Images/icon1.png" },
        { title: "Two Free Revision Rounds", text: "Morbi nec pulvinar neque. Maecenas et condimentum diam. Fusce semper libero eget lorem dapibus, a mattis ipsum faucibus.", url: process.env.PUBLIC_URL + "/Images/icon2.png" },
        { title: "Template Customization", text: "Morbi nec pulvinar neque. Maecenas et condimentum diam. Fusce semper libero eget lorem dapibus, a mattis ipsum faucibus.", url: process.env.PUBLIC_URL + "/Images/icon3.png" },
        { title: "24/7 Support", text: "Morbi nec pulvinar neque. Maecenas et condimentum diam. Fusce semper libero eget lorem dapibus, a mattis ipsum faucibus.", url: process.env.PUBLIC_URL + "/Images/icon4.png" },
        { title: "Quick Delivery", text: "Morbi nec pulvinar neque. Maecenas et condimentum diam. Fusce semper libero eget lorem dapibus, a mattis ipsum faucibus.", url: process.env.PUBLIC_URL + "/Images/icon5.png" },
        { title: "Hands-on approach", text: "Morbi nec pulvinar neque. Maecenas et condimentum diam. Fusce semper libero eget lorem dapibus, a mattis ipsum faucibus.", url: process.env.PUBLIC_URL + "/Images/icon6.png" }
    ];

    var postData = [
        { title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months", text: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract", date: "19 Jan 2022", imgUrl: process.env.PUBLIC_URL + "/Images/f887f25bd80bf3a6019e4335404ba0eb.png" },
        { title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months", text: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract", date: "19 Jan 2022", imgUrl: process.env.PUBLIC_URL + "/Images/67e2750028bcd9affc10a0a089823c15.png" },
        { title: "How one Webflow user grew his single person consultancy from $0-100K in 14 months", text: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract", date: "19 Jan 2022", imgUrl: process.env.PUBLIC_URL + "/Images/1fe061d7ee8cf0031f25ee2fb9034e48.png" }
    ]

    return (
        <main>
            <Section mcbg="rgb(201, 204, 238)">
                <Subcontainer additionalClasses="space-between">
                    <Content additionalClasses="w-25">
                        <span className="bigger-text">How we work</span> <br /><br />
                        <span className="smaller-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut tortor scelerisque, faucibus ligula sed, feugiat erat.</span> <br /><br />
                        <a className="link-in-text link-in-text-purple">Get in touch with us</a>
                    </Content>
                    <Content additionalClasses="w-50">
                        <div className="flex-container container-1">

                            {
                                HowWeWork.map((it, ind) => {
                                    return (
                                        <CoolNumeric number={ind + 1}>
                                            <p>
                                                <span className="big-text">{it.title}</span> <br />
                                                <span className="smaller-text">{it.text}</span>
                                            </p>
                                        </CoolNumeric>
                                    )
                                })
                            }
                        </div>
                    </Content>
                </Subcontainer>
            </Section>
            <Section mcbg="white">
                <Subcontainer>
                    <p>
                        <span className="bigger-text">View our projects</span>
                    </p>
                </Subcontainer>
                <Subcontainer>
                    <div className="flex-container-nowrap space-between max-size">
                        <ImageElement imgWidth="65%" imgHeight="750px" isBlured="true" blureType="50" imgUrl={process.env.PUBLIC_URL + "/Images/81dc407a479e9f836b774781b1bff86c.png"}>
                            <span className="big-text">Workhub office Webfow</span> <br />
                            <span className="big-text">Webflow Design</span> <br /> <br />
                            <span className="small-text">Vivamus lacus nisl, porta a faucibus vitae, placerat a elit. Aenean non magna vel velit convallis ullamcorper ut hendrerit ligula.</span> <br /> <br />
                            <a className="link-in-text link-in-text-yellow">View projects →</a>
                        </ImageElement>
                        <div class="flex-container-col gap-10 w-33">
                            <ImageElement imgWidth="100%" imgHeight="370px" isBlured="true" blureType="100" imgUrl={process.env.PUBLIC_URL + "/Images/caea911fabe832213919de94a2b25fcc.png"}>
                                <span class="big-text">Unisaas Website</span> <br />
                                <span class="big-text">Design</span> <br /> <br />
                                <a class="link-in-text link-in-text-yellow">View portfolio →</a>
                            </ImageElement>
                            <ImageElement imgWidth="100%" imgHeight="370px" isBlured="false" imgUrl={process.env.PUBLIC_URL + "/Images/ea7b783f5568e87ff7247a58a5e792cb.png"}>

                            </ImageElement>
                        </div>
                    </div>
                </Subcontainer>
            </Section>

            <Section mcbg="rgb(227, 235, 255)">
                <Subcontainer>
                    <p className="text-center">
                        <span className="small-text">Features</span> <br />
                        <span className="bigger-text">Designes that solves <br />
                            problems, one product at <br />
                            a time </span>
                    </p>
                </Subcontainer>
                <Subcontainer grid="3" additionalClasses="gap-20">
                    {
                        Features.map((item) => {
                            return (
                                <ContentCard title={item.title} text={item.text} imgUrl={item.url} imgType="icon" bgcolor="white">
                                </ContentCard>
                            )
                        })
                    }
                </Subcontainer>
            </Section>

            <Section mcbg="#F4F6FC">
                <Subcontainer>
                    <Content additionalClasses="w-25">
                        <p>
                            <span className="big-text">What our clients says about us</span> <br /> <br />
                            <span className="smaller-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus eu diam et fermentum.</span>
                        </p>
                    </Content>
                    <Content additionalClasses="flex-container-col gap-15 w-100">
                        <Comment name="Jenny Willson" posiion="Vice President" imgUrl={process.env.PUBLIC_URL + "/Images/portrait-happy-woman-with-phone_1303-9813.avif"}>
                            The best agency we worked so far. They understand our product and are able to add new features with a great focus.
                        </Comment>
                    </Content>
                </Subcontainer>
            </Section>

            <Section>
                <Subcontainer>
                    <Content>
                        <p>
                            <span class="big-text">Frequently asked questions</span> <br /> <br />
                            <span class="link-in-text-purple">Contact us for more info</span>
                        </p>
                    </Content>
                    <FreqQuestions></FreqQuestions>
                </Subcontainer>
            </Section>

            <Section mccbg="#27177c">
                <Subcontainer>

                </Subcontainer>
            </Section>

            <Section>
                <Subcontainer grid="3">
                    {
                        postData.map((item) => {
                            return (
                                <Post title={item.title} text={item.text} imgUrl={item.imgUrl} date={item.date}></Post>
                            )
                        })
                    }
                </Subcontainer>
            </Section>
        </main>
    );
}