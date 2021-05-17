import Navbar from '../Navbar';
import Footer from '../Footer';
import Steps from '../Steps';

import './styles.scss';

const Home = () => {

    return (
        <>
            <Navbar />
            <div className='container'>
                <h1>Home</h1>
            </div>
            <Footer />
        </>
    );
}

export default Home;
