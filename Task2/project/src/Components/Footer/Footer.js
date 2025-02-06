import { Content } from "../Content/Content";
import { HeaderFooterLinks } from "../HeadeFooterLinks/HeaderFooterLinks";
import { Section } from "../Section/Section";
import { Subcontainer } from "../Subcontainer/Subcontainer";

export function Footer(props) {
    return (
        <footer>
            <Section additionalMcClasses="p-b-0" mcbg="#1C1E53">
                <Subcontainer additionalClasses="space-between">
                    <Content additionalClasses="flex-container-col">
                        <p className="text-white">
                            <span className="logo-text">{`{Finsweet`}</span> <br /> <br />
                            <span className="small-text">We are always open to discuss your project and improve your online presence.</span>
                        </p>

                        <div className="flex-bottom w-100 p-20 flex-container gap-30" style={{backgroundColor: "#FCD980"}}>
                            <p>
                                <span className="small-text bold">Email me at</span> <br />
                                <span className="small-text">contact@website.com</span>
                            </p>
                            <p>
                                <span className="small-text bold">Call us</span> <br />
                                <span className="small-text">0927 6277 28525</span>
                            </p>
                        </div>
                    </Content>
                    <Content>
                        <p className="text-white">
                            <span className="biggest-text">Lets Talk!</span> <br /> <br />
                            <span className="small-text">We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</span>
                        </p>
                    </Content>
                </Subcontainer>
            </Section> 
            <div className="flex-container m-h-10">
                <div className="footer-section left-section flex-center">
                    <p className="medium-rare-text footer-text footer-element">
                        Copyright 2022, Finsweet.com
                    </p>
                </div>
                <HeaderFooterLinks isHeader={false}></HeaderFooterLinks>
            </div>
        </footer >
    )
}