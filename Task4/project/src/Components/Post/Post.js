import styles from "./post.module.css"

export function Post({title, imgUrl, craft, description, account, date, id}) {
    return(
        <div id={id} className={styles.postContainer}>
            <img src={imgUrl} className={styles.postImage} />
            <p className={styles.craftText}>{craft}</p>
            <div className={styles.flexContainer} style={{gap: "10px"}}>
                <p className={styles.titleText}>{title}</p>
                <p className={styles.pointerToBlog}>{`>`}</p>
            </div>

            <p className={styles.descriptionText}>{description}</p>

            <div className={styles.accountContainer}>
                <img src={account.accountImageUrl} className={styles.accountImage}  />
                <div>
                    <p className={styles.accountText}>{account.login}</p>
                    <p className={styles.date}>{date}</p>
                </div>
            </div>
        </div>
    )
}