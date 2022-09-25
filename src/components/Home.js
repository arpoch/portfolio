import './Home.css';

function Home() {
    return (
        <section id="home">
            <div className='salutation '>
                <h4>Hi, My name is</h4>
            </div>
            <div className='name'>
                <h1 >Harshit Chopra</h1>
            </div>
            <div>
                <h2>I am a Software Developer</h2>
            </div>
            <div className='intro'>
                <p>About me</p>
            </div>
            <div className='contact-box'>
                <button className='contact-btn'>harshitchopra0712@gmail.com</button>
            </div>
        </section>
    )
}

export default Home;