import About from '../Components/About/About';
import Hero from '../Components/Hero/Hero';
import Navbar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div className='bg-black'>
            <Navbar></Navbar>
            <Hero></Hero>
            <About></About>
        </div>
    );
};

export default Main;