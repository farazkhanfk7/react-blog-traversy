import { useState } from 'react';

const Home = () => {

    const [name, setname] = useState('Faraz')

    const handleClick = () => {
        setname('Hasan')
    }

    return (
        <div className="home">
            <h1>Homepage</h1>
            <h4>{ name }</h4>
            <button onClick={handleClick}>Change Name</button>
            {/* Incase you want to pass parameter to event handler function
            <button onClick={()=>handleClick('faraz')}>Click</button> */}
        </div>
        );
}
 
export default Home;