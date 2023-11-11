import './PopularContain.css'
import img1 from '../../assets/images/action.png'
import img2 from '../../assets/images/airpod.png'
import img3 from '../../assets/images/camera.png'
import img4 from '../../assets/images/drone.png'
import img5 from '../../assets/images/gear.png'
import img6 from '../../assets/images/lights.png'
import img7 from '../../assets/images/mic.png'
import img8 from '../../assets/images/single-light.png'
import img9 from '../../assets/images/tripod.png'

const PopularContain = () => {
    return (
        <div>
            <h3 style={{ textAlign: 'center', color: '#3A3A3A', fontSize: '28px', fontWeight: '600' }}>Popular Collection</h3>
            <div className="popular-content">
                <div className="sub-content1">
                   <img src={img1} alt="" />
                    <h4 style={{margin:'0px 0px', paddingLeft:'25px'}}>Action Camera</h4>
                    <p style={{margin:'0px 0px', paddingLeft:'25px'}}>$380.00</p>
                    <p style={{margin:'0px 5px' , paddingLeft:'20px'}}>Wordwide shifting available
                        Buyers protection possible!</p>
                </div>
                <div className="sub-content2">
                    <img src={img2} alt="" />
                    <h4 style={{margin:'0px 0px', paddingLeft:'25px'}}>Airbuds</h4> 
                    <p style={{margin:'0px 0px', paddingLeft:'25px'}}>$150.15</p>
                    <p style={{margin:'0px 5px' , paddingLeft:'20px'}}>Wordwide shifting available
                        Buyers protection possible!</p>
                </div>
                <div className="sub-content3">
                    <img src={img3} alt="" />
                    <h4 style={{margin:'0px 0px', paddingLeft:'25px'}}>Vlogging Camera</h4>
                    <p style={{margin:'0px 0px', paddingLeft:'25px'}}>$1800.80</p>
                    <p style={{margin:'0px 5px' , paddingLeft:'20px'}}>Wordwide shifting available
                        Buyers protection possible!</p>
                </div>
                <div className="sub-content4">
                    <img src={img4} alt="" />
                    <h4 style={{margin:'0px 0px', paddingLeft:'25px'}}>Drone</h4>
                    <p style={{margin:'0px 0px', paddingLeft:'25px'}}>$980.25</p>
                    <p style={{margin:'0px 5px' , paddingLeft:'20px'}}>Wordwide shifting available
                        Buyers protection possible!</p>
                </div>
                <div className="sub-content5">
                    <img src={img5} alt="" />
                    <h4 style={{margin:'0px 0px', paddingLeft:'25px'}}>Photoshoot set</h4>
                    <p style={{margin:'0px 0px', paddingLeft:'25px'}}>$520.25</p>
                    <p style={{margin:'0px 5px' , paddingLeft:'20px'}}>Wordwide shifting available
                        Buyers protection possible!</p>
                </div>
                <div className="sub-content6">
                    <img src={img6} alt="" />
                    <h4 style={{margin:'0px 0px', paddingLeft:'25px'}}>Light Setup</h4>
                    <p style={{margin:'0px 0px', paddingLeft:'25px'}}>$1200.00</p>
                    <p style={{margin:'0px 5px' , paddingLeft:'20px'}}>Wordwide shifting available
                        Buyers protection possible!</p>
                </div>
                <div className="sub-content7">
                    <img src={img7} alt="" />
                    <h4 style={{margin:'0px 0px', paddingLeft:'25px'}}>microphone</h4>
                    <p style={{margin:'0px 0px', paddingLeft:'25px'}}>$250.00</p>
                    <p style={{margin:'0px 5px' , paddingLeft:'20px'}}>Wordwide shifting available
                        Buyers protection possible!</p>
                </div>
                <div className="sub-content8">
                    <img src={img8} alt="" />
                    <h4 style={{margin:'0px 0px', paddingLeft:'25px'}}>Green Screen</h4>
                    <p style={{margin:'0px 0px', paddingLeft:'25px'}}>$540.50</p>
                    <p style={{margin:'0px 5px' , paddingLeft:'20px'}}>Wordwide shifting available
                        Buyers protection possible!</p>
                </div>
                <div className="sub-content9">
                    <img src={img9} alt="" />
                    <h4 style={{margin:'0px 0px', paddingLeft:'25px'}}>Flex Tripod</h4>
                    <p style={{margin:'0px 0px', paddingLeft:'25px'}}>$250.50</p>
                    <p style={{margin:'0px 5px' , paddingLeft:'20px'}}>Wordwide shifting available
                        Buyers protection possible!</p>
                </div>
            </div>
            <div className='btn '>
                <button style={{border:'0px', height:'30px', width:'80px', borderRadius:'5px', backgroundColor:'#E02C6DDE', color:'#fff'}}>See More</button>
            </div>
        </div>
    );
};

export default PopularContain;