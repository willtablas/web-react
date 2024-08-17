import './darkMood.css'


//fontAwesome icon ...............
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {falightbulb} from '@fortawesome/free-solid-svg-icons'

export default function DarkMoode() {

    const DarkHandele = () => {
        document.querySelector('body').classList.toggle('darkmood')
    }

  //dark mode icon with click event
  return (
    <div className='dark-mood-icon'>
        <FontAwesomeIcon icon= {falightbulb} onclick={DarkHandele}/>
    </div>
  )
}
