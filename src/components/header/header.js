import './header.css'

function Header(props) {
    return (
        <div className="header">
            <div className='logo'>Logo</div>
            <a href='/test'>Certs</a>
            <a href='/test'>Awards</a>
            <a href='/test'>About Me</a>
        </div>
    );
}

export default Header;
