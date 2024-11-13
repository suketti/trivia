import './App.css'
import CookieConsent from './component/cookie-consent/CookieConsent'
import { useCookies } from 'react-cookie'

function App() {
  const [cookie] = useCookies(['cookie_consent'])

  return (
    <>
      <div>
      
        {!cookie.cookie_consent && <CookieConsent/>}
      </div>
    </>
  )
}

export default App
