import{Link} from 'react-router-dom'
import './LeftBar.css'

// components.....................
import currentUser from '../../FackApis/CurrentUseerData'

//icon image .........................................
import Firend from '../../assets/icons/1.png'
import Groups from '../../assets/icons/2.png'
import Market from '../../assets/icons/3.png'
import Watch from '../../assets/icons/4.png'
import Gallery from '../../assets/icons/5.png'
import Videos from '../../assets/icons/6.png'
import Message from '../../assets/icons/7.png'

export default function LeftBar() {
  return (
    <div className='leftBar'>
      <div className="left-container">
        <div className="menu">
          <Link to='/profile/id'>
          <div className="user">
            <img src={currentUser.map(user=>(user.ProfieImage))} alt="" />
            <h4>Beg jocker</h4>
          </div>
          </Link>

          <Link to='/'>
          <div className="item">
            <img src={Firend} alt="" />
            <h4>Firends</h4>
          </div>
          </Link>
          <Link to='/'>
          <div className="item">
            <img src={Groups} alt="" />
            <h4>Groups</h4>
          </div>
          </Link>
          <Link to='/'>
          <div className="item">
            <img src={Market} alt="" />
            <h4>Market</h4>
          </div>
          </Link>

          <Link to='/'>
          <div className="item">
            <img src={Watch} alt="" />
            <h4>Watch</h4>
          </div>
          </Link>
        </div>
         
       <hr />

        <div className="menu">
        <h4 className='others'>your shortcuts</h4>
        <Link to='/'>
          <div className="item">
            <img src={Gallery} alt="" />
            <h4>gallery</h4>
          </div>
          </Link>

          <Link to='/'>
          <div className="item">
            <img src={Videos} alt="" />
            <h4>videos</h4>
          </div>
          </Link>

          <Link to='/chatbox/id'>
          <div className="item">
            <img src={Message} alt="" />
            <h4>message</h4>
          </div>
          </Link>
          </div>
      </div>
    </div>
  )
}
