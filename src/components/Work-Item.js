

function WorkItem(){
    return (
        <>
            <li className='hero-project'>
                <div className='project-video'>
                    <iframe width="550px" height="350px"
                        src="https://www.youtube.com/embed/lJIrF4YjHfQ?controls=0"
                        title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                    </iframe>
                </div>

                <div className='project-content'>
                    <div>

                        <h3 className='project-title'>Googly Eye Board</h3>
                        <div>
                            <p className='project-feature'>Notable Features</p>
                            <ul className='feature-list'>
                                <li>Major components include a pen with multiple color shades, thickness, eraser and selection tool , which
leverages useContext and useReducer hooks for data-binding.</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                                <li>Feature 4</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className='project-connect'>
                    <ul className='project-tech'>
                        <li>React</li>
                        <li>JavaScript</li>
                    </ul>
                    <div className='project-links'>
                        {/* <a >Linkedin</a> */}
                    </div>
                </div>

                <div className='project-description'>
                    <p>About the project</p>
                </div>
            </li>
        </>
    );
}

export default WorkItem;