var links = [
    {text: "Home", link: window.location.origin, isBold: "true"},
    {text: "About Us", link: window.location.origin + "/about-us", isBold: "false"},
    {text: "Features", link: "#", isBold: "false"},
    {text: "Pricing", link: window.location.origin  + "/price", isBold: "false"},
    {text: "FAQ", link: "#", isBold: "false"},
    {text: "Blog", link: "#", isBold: "false"},
]

export function HeaderFooterLinks({ isHeader = true }) {
    return(
        <div className="header-section right-section flex-bottom flex-top">
            {
                links.map(item => {
                    return (
                        <a href={item.link} className={`${isHeader ? "header-element header-text header-link" : "footer-element footer-text footer-link"} ${item.isBold ? "bold" : ""}`}>{item.text}</a>
                    )
                })
            }
        </div>
    )
}