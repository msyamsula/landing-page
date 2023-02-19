import './text.css'

function Text(props) {

    // let text = `Hello, my name is Muhammad Syamsul Arifin. Thanks for visiting my web. 
    // This is a place where I put my creativity as a software engineer and document some of my projects`

    return (
        <div className="text-button-image">
            <div className='image'>image</div>
            <div className='text'>
                <div>
                    <p>
                        Hello, my name is <span>Muhammad Syamsul Arifin</span>. Thanks for visiting my web.
                        This is a place where I put my creativity as a <span>Software Engineer</span> and document some of my projects
                    </p>
                </div>
            </div>
            <div className='button'>
                <button>Projects</button>
            </div>
        </div>
    );
}

export default Text;
