import { FreqQuestions } from "../FreqQuestions/FreqQuestions";
import { Section } from "../Section/Section";
import { Subcontainer } from "../Subcontainer/Subcontainer";
import { Content } from "../Content/Content";

const pricingShields = [
    {
        price: "$299",
        smallTextClose: { text: "Per Design", type: "purple" },
        opportunity: "Landing Page",
        describe: "When you’re ready to go beyond prototyping in Figma",
        whatYouGot: [
            { text: "All limited links", isActive: true },
            { text: "Own analytics platform", isActive: true },
            { text: "Chat support", isActive: true },
            { text: "Optimize hashtags", isActive: false },
            { text: "Unlimited users", isActive: false },
        ],
        button: { text: "Get Sterted", type: "blue" },
        backgroundColor: "#F4F6FC",
        textColor: "black"
    },
    {
        price: "$399",
        smallTextClose: { text: "Multi Design", type: "yellow" },
        opportunity: "Website Page",
        describe: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
        whatYouGot: [
            { text: "All limited links", isActive: true },
            { text: "Own analytics platform", isActive: true },
            { text: "Chat support", isActive: true },
            { text: "Optimize hashtags", isActive: true },
            { text: "Unlimited users", isActive: true },
        ],
        button: { text: "Get Sterted", type: "yellow" },
        backgroundColor: "#1C1E53",
        textColor: "white"
    },
    {
        price: "$499 +",
        smallTextClose: { text: "Per Design", type: "purple" },
        opportunity: "Complex Project",
        describe: "When you’re ready to go beyond prototyping in Figma",
        whatYouGot: [
            { text: "All limited links", isActive: true },
            { text: "Own analytics platform", isActive: true },
            { text: "Chat support", isActive: true },
            { text: "Optimize hashtags", isActive: true },
            { text: "Unlimited users", isActive: true },
            { text: "Assist and Help", isActive: true },
        ],
        button: { text: "Get Sterted", type: "blue" },
        backgroundColor: "#F4F6FC",
        textColor: "black"
    }
]

function WYG({ text, isActive }) {
    return (
        <div className="flex-container-nowrap gap-15">
            <img src={isActive ? process.env.PUBLIC_URL + "/Images/PointerActive.png" : process.env.PUBLIC_URL + "/Images/PointerNotActive.png"} className="super-sm-icon flex-bottom flex-top" />
            <p>
                {text}
            </p>
        </div>
    )
}

function Shield({ shieldObj }) {
    return (
        <div className="content pricing-container flex-container-col gap-50" style={{backgroundColor: shieldObj.backgroundColor, color: shieldObj.textColor }}>
            <p>
                <span className="big-text">{shieldObj.price}</span>
                <span class={`link-in-text-${shieldObj.smallTextClose.type}`}>    {shieldObj.smallTextClose.text}</span><br /> <br /> <br />
                <span className="medium-text">{shieldObj.opportunity}</span> <br /> <br />
                <span className="small-text">{shieldObj.describe}</span>
            </p>
            <div className="flex-container-col">
                {
                    shieldObj.whatYouGot.map(item => {
                        return (<WYG text={item.text} isActive={item.isActive} />)
                    })
                }
            </div>
            <button class={`button-form-${shieldObj.button.type} flex-right flex-left flex-bottom`}>{shieldObj.button.text}</button>
        </div>
    )
}

export function Price(props) {
    return (
        <main>
            <Section>

                <div className="main-subcontainer-grid-3 gap-20">
                    {
                        pricingShields.map(item => {
                            return (<Shield shieldObj={item} />)
                        })
                    }
                </div>

            </Section>

            <Section>
                <Subcontainer>
                    <Content>
                        <p>
                            <span className="big-text">Frequently asked questions</span> <br /> <br />
                            <span className="link-in-text-purple">Contact us for more info</span>
                        </p>
                    </Content>
                    <FreqQuestions></FreqQuestions>
                </Subcontainer>
            </Section>
        </main>
    )
}