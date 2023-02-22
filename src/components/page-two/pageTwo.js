import './pageTwo.css'

function PageTwo(props) {


    return (
        <div className='projects-section'>
            <div className='disclaimer'>
                <div>
                    <p>
                    <div className='disclaimer-text'>DISCLAIMER!!!</div>
                    <br></br>
                    <br></br>
                    I'm specialized more on <span>backend software engineering</span>. Things like:
                    <br></br>
                    <ul className='disclaimer-ul'>
                        <li>Network API {"(REST, GRPC, Websocket, GQL)"}</li>
                        <li>Database</li>
                        <li>System/architecture design</li>
                        <li>Pub/sub or asynchronous mechanism</li>
                        <li>Scheduler</li>
                        <li>Batching</li>
                        <li>Locking process</li>
                        <li>Object Relational Mapping</li>
                        <li>Containerization {"(docker)"}</li>
                        <li>Orchestration {"(kubernetes)"}</li>
                        <li>etc</li>
                    </ul>
                    There is a limitation to my frontend skills.
                    <br></br>
                    Having said that, I hope you can understand the design of this website.
                    </p>
                    <br></br>
                    <br></br>
                    Regards,
                    <br></br>
                    Syamsul
                </div>
            </div>
            <div className='project-list'>
                <div className='click'>Click, to see my projects</div>
                <ul>
                    <li>
                        <button>messaging web app</button>
                    </li>
                    <li>
                        <button>graph algo visualization</button>
                    </li>
                    <li>
                        <button className='on-going-project'>more will come</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default PageTwo;
