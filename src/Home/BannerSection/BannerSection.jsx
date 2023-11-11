import './BannerSection.css'
import img from '../../assets/images/gear.png'

const BannerSection = () => {
    return (
        <div>
            <div className='banner-section'>
                <img className='img' style={{width:'404px', height:'270px',}} src={img} alt="" />
                <div>
                    <p style={{fontSize:'38px', fontWeight:'600', width:'100%', marginBottom:'10px', lineHeight:'40px'}}>Featured products at one place</p>
                    <p style={{marginTop:'5px', fontSize:'18px', marginBottom:'5px', lineHeight:'20px'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <button style={{border:'0px', padding:'10px', borderRadius:'5px', backgroundColor:'#E02C6D', color:'white'}}>Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default BannerSection;