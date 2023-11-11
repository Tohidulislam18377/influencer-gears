
import BannerItem from '../BannerItem/BannerItem';
import BannerSection from '../BannerSection/BannerSection';
import Footer from '../Footer/Footer';
import IconSection from '../IconSection/IconSection';
import PopularContain from '../PopularContain/PopularContain';
import './Home.css'
import {Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={{backgroundColor:'#FFF'}}>
          <nav className='nav-container'>
            <h3 style={{marginLeft:'30px', fontSize:'34px', fontWeight:'700', marginTop:'15px'}}>Influencer products</h3>
            <div>
                <ul className='nav-item'>
                <li><Link  className='abc'>Home</Link></li>
                <li><Link className='abc'>Products</Link></li>
                <li><Link className='abc'>Login</Link></li>
                <li><Link className='abc'>Sing Up</Link></li>
                </ul>
            </div>
          </nav>
          {/* banner item */}
         <BannerItem></BannerItem>
         {/* icon section */}
         <IconSection></IconSection>
         {/* popular contain */}
         <PopularContain></PopularContain>
         {/* banner section */}
         <BannerSection></BannerSection>
         {/* Footer section */}
         <Footer></Footer>
        </div>
    );
};

export default Home;