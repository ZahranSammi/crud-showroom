import './style.css'
import { Navbar } from './components/Navbar.js'
import { Card} from './components/Card.js'
document.querySelector('#app').innerHTML = `
  <div class="w-full">
  ${Navbar()}
  ${Card()}
  </div>
`

