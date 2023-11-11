import camera from '../../assets/images/main-camera.png'
import './BannerItem.css'
const BannerItem = () => {
    return (
       <div>
         <div className='banner'>
            <div>
                <h5 style={{margin:'0px', fontSize:'44px', width:'100%', fontWeight:'700', lineHeight:'40px'}}>Start your Journey as Influencer</h5>
                <p style={{marginTop:'10px'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Sem vestibulum sed scelerisque eros. Lectus faucibus.</p>
                <button>Preebook now</button>
            </div>
           <div className='bg'>
           <img src={camera} alt="" />
           </div>
        </div>
        <hr />
       </div>
    );
};

export default BannerItem;