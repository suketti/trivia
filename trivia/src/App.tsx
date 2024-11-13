import { useEffect } from 'react'
import './App.css'
import CookieConsent from './component/cookie-consent/CookieConsent'
import { useCookies } from 'react-cookie'
import { getTrivia } from './services/TriviaService'

function App() {
  const [cookie] = useCookies(['cookie_consent'])

  useEffect(() => {
    getTrivia(10).then(data => console.log(data))
  })

  return (
    <>
      <div>
      
        {!cookie.cookie_consent && <CookieConsent/>}
      </div>
    </>
  )
}

export default App
