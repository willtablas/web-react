import {Link} from 'react-router-dom'
import './login.css'

export default function Login() {
  return (
    <div className=" login">
        <div className='card'>
        <div className="left">
            <h2>-<br /> NapaExtra signup<br  />-</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati quo fugiat voluptas tempore soluta ut! Ipsa expedita perspiciatis dolorem iste,
            </p>
            <span>Do Not have any account?</span>
            <Link to='/signup'> 
            <button className='btn btn-primary'>Register</button>
            </Link>
        </div>
        <form className="right">
            <input type="text"  required placeholder='username' />
            <input type="password"  required placeholder='password' />
            <button type='submit' className='btn'>Login</button>
        </form>   
    </div>
    </div>
  )
}
