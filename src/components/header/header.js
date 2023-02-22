import './header.css'
import home from "./home.png"

function Header(props) {
    return (
        <div className="header">
            <div className='home'>
                <a href='#page-1'>
                    <img src={home} alt="home"></img>  Home
                </a>
            </div>
            <a href='/test'>Certs</a>
            <a href='/test'>Awards</a>
            <a href='/test'>About Me</a>
        </div>
    );
}

export default Header;
