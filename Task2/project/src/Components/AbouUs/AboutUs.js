import { ContentCard } from "../ContentCard/ContentCard";
import { ImageElement } from "../ImageElement/ImageElement";
import { Section } from "../Section/Section";
import { Subcontainer } from "../Subcontainer/Subcontainer";

var followedProcesses = [
    { title: "Planning", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." },
    { title: "Conception", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." },
    { title: "Design", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." },
    { title: "Development", text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." },
]

var benefitsOfWorking = [
    { title: "Customize with ease", url: process.env.PUBLIC_URL + "/Images/icon6.png", text: "Morbi nec pulvinar neque. Maecenas et condimentum diam. Fusce semper libero eget lorem dapibus, a mattis ipsum faucibus. Ut a quam turpis. Vivamus pellentesque aliquet augue a luctus. Nullam nec auctor ipsum, quis gravida diam." },
    { title: "Perfectly Responsive", url: process.env.PUBLIC_URL + "/Images/icon3.png", text: "Morbi nec pulvinar neque. Maecenas et condimentum diam. Fusce semper libero eget lorem dapibus, a mattis ipsum faucibus. Ut a quam turpis. Vivamus pellentesque aliquet augue a luctus. Nullam nec auctor ipsum, quis gravida diam." },
    { title: "Friendly Support", url: process.env.PUBLIC_URL + "/Images/icon1.png", text: "Morbi nec pulvinar neque. Maecenas et condimentum diam. Fusce semper libero eget lorem dapibus, a mattis ipsum faucibus. Ut a quam turpis. Vivamus pellentesque aliquet augue a luctus. Nullam nec auctor ipsum, quis gravida diam." }
]

var logos = [
    process.env.PUBLIC_URL + "/Images/Logo 1.png",
    process.env.PUBLIC_URL + "/Images/Logo 2.png",
    process.env.PUBLIC_URL + "/Images/Logo 3.png",
    process.env.PUBLIC_URL + "/Images/Logo 4.png",
    process.env.PUBLIC_URL + "/Images/Logo 5.png"
]

var meetTeam = [
    {title: "John Smith", text: "CEO", url: process.env.PUBLIC_URL + "/Images/14a14988c15daed744abd077d2e75d94.png"},
    {title: "Simon Adams", text: "CTO", url: process.env.PUBLIC_URL + "/Images/35aaebfdeb7acbb107459f0b8643ad03.png"},
    {title: "Paul Jones", text: "Design Lead", url: process.env.PUBLIC_URL + "/Images/5ab4d67761af2ea0410c9ca7461ad67a.png"},
    {title: "Sara Hardin", text: "Project Manager", url: process.env.PUBLIC_URL + "/Images/f7e17cd48bd93bc23df7cb7a5a4e421f.png"}
]

export function AboutUs(props) {
    return (
        <main>
            <Section>
                <Subcontainer additionalClasses="space-between">
                    <p className="w-50">
                        <span className="small-text">About us</span> <br />
                        <span className="big-text">Our designs solve problems</span> <br /> <br />
                        <span className="smaller-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</span>
                    </p>
                    <ImageElement imgWidth="30vw" imgHeight="30vh" additionalClasses="flex-right" imgUrl={process.env.PUBLIC_URL + "/Images/f71b71ae2cb5579a9f049b428e54f788.png"}></ImageElement>
                </Subcontainer>
            </Section>
            <Section additionalMccClasses="p-0" mccbg="#F4F5F5">
                <div className="w-100 p-100">
                    <p className="small-text">
                        Who we are
                    </p>
                    <Subcontainer additionalClasses="gap-30">
                        <p>
                            <span className="big-text">Goal focussed</span><br />
                            <span className="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </p>
                        <p>
                            <span className="big-text">Continuous improvement</span> <br />
                            <span className="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </p>
                    </Subcontainer>
                </div>

                <img src={process.env.PUBLIC_URL + "/Images/77583630b5c592cfe693a45ac8529324.jfif"} className="default-image w-100" style={{ height: "400px" }} />
            </Section>

            <Section>
                <p className="text-center biggest-text">
                    The process we follow
                </p>
                <Subcontainer additionalClasses="space-between">
                    {
                        followedProcesses.map(item => {
                            return (
                                <ContentCard title={item.title} text={item.text} imgUrl={process.env.PUBLIC_URL + "/Images/Line and Icon.png"}></ContentCard>
                            )
                        })
                    }
                </Subcontainer>
            </Section>

            <Section additionalMccClasses="gap-50" mcbg="#EEF4FA">
                <Subcontainer additionalClasses="space-between">
                    <p className="w-50">
                        <span className="small-text">Our Mission </span> <br /> <br />
                        <span className="big-text">Inspire, Innovate, Share</span> <br /> <br />
                        <span className="smaller-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    </p>
                    <ImageElement imgWidth="33%" imgHeight="35vh" imgUrl={process.env.PUBLIC_URL + "/Images/3a70e704917f40e1fc7c23c2bbe34f88.png"}></ImageElement>
                </Subcontainer>
                <Subcontainer additionalClasses="space-between">
                    <ImageElement imgWidth="33%" imgHeight="35vh" imgUrl={process.env.PUBLIC_URL + "/Images/39709c5f6b1201a1eca31bdc4097c6b4.png"}></ImageElement>

                    <p className="w-50">
                        <span className="small-text">Our Vision </span> <br /> <br />
                        <span className="big-text">Laser focus</span> <br /> <br />
                        <span className="smaller-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                    </p>
                </Subcontainer>
            </Section>

            <Section>
                <p className="text-center biggest-text">
                    The benefits of working <br />
                    with us
                </p>
                <Subcontainer grid="3" additionalClasses="gap-20">
                    {
                        benefitsOfWorking.map(item => {
                            return (
                                <ContentCard bgcolor="#F4F6FC" title={item.title} text={item.text} imgUrl={item.url} isIcon={true}></ContentCard>
                            );
                        })
                    }

                </Subcontainer>
                <Subcontainer additionalClasses="space-between">
                    <p>
                        <span className="big-text">100.000+</span> <br />
                        <span className="smaller-text">Finsweet Users</span>
                    </p>
                    {
                        logos.map(logo => {
                            return (
                                <img src={logo} className="logo-image flex-center" />
                            )
                        })
                    }
                </Subcontainer>
            </Section>

            <Section mcbg="#EEF4FA">
                <p class="text-center biggest-text">
                    Meet our team
                </p>
                <Subcontainer grid={meetTeam.length}>
                    {
                        meetTeam.map(item => {
                            return (
                                <ContentCard bgcolor="white" title={item.title} text={item.text} imgUrl={item.url} imgType="profile"></ContentCard>
                            )
                        })
                    }
                </Subcontainer>
            </Section>
        </main>
    )
}