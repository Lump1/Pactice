import { Logo } from "../Logo/Logo.js"
import { Button } from "../Button/Button.js";
import { HeaderFooterLinks } from "../HeadeFooterLinks/HeaderFooterLinks.js";

export function Header() {
    return (
        <header className="p-r-10">
            <div className="header-section left-section">
                <p className="logo-text bold header-text header-element">
                    <Logo />
                </p>
            </div>

            <HeaderFooterLinks></HeaderFooterLinks>
            
            <Button buttonType="transparent">
                Contact Us
            </Button>

        </header>
    );
}