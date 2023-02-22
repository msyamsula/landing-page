import './pageOne.css'
import pp from './pp.png'

function PageOne(props) {


    return (
        <div className="text-button-image">
            <div className='image'>
                <img src={pp} alt="logo"></img>
            </div>
            <div className='text'>
                <div>
                    <p>
                        Hello, my name is <span>Muhammad Syamsul Arifin</span>. Thanks for visiting my web.
                        This is a place where I put my creativity as a <span>Software Engineer</span> and document some of my projects
                    </p>
                </div>
            </div>
            <div className='button'>
                <a href='#page-2'>
                    <button>My Projects</button>
                </a>
            </div>
        </div>
    );
}

export default PageOne;
