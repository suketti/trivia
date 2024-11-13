import { useCookies } from "react-cookie"
import styles from "./CookieConsent.module.css"
const CookieConsent = () => {
    const [_,setCookie] = useCookies(['cookie_consent'])

    const acceptCookies = () => {
        setCookie("cookie_consent", true)
    }

    return (
    <div className={styles.wrapper}>
        <div>
            <p>このサイトは最高の体験をお届けするためにクッキーを利用しています</p>
            <button onClick={acceptCookies}>同意</button>
        </div>
    
    </div>
    
  )
}

export default CookieConsent