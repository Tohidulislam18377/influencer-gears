import './IconSection.css'
import icon1 from '../../assets/logos/Alibaba.svg'
import icon2 from '../../assets/logos/Amazon.svg'
import icon3 from '../../assets/logos/Daraz.pk Logo.svg'
import icon4 from '../../assets/logos/Ebay.svg'
import icon5 from '../../assets/logos/Rakuten.svg'
import icon6 from '../../assets/logos/Target.svg'
import icon7 from '../../assets/logos/Walmart.svg'

const IconSection = () => {
    return (
        <div>
            <div className="icon-container">
            <img style={{width:'55px', height:'31px'}} src={icon1} alt="" />
            <img style={{width:'84px', height:'25px', marginTop:'25px'}} src={icon2} alt="" />
            <img style={{width:'84px', height:'26px'}} src={icon3} alt="" />
            <img style={{width:'99px', height:'40px'}} src={icon4} alt="" />
            <img style={{width:'97px', height:'28px'}}src={icon5} alt="" />
            <img style={{width:'111px', height:'84px'}} src={icon6} alt="" />
            <img style={{width:'68px', height:'84px'}} src={icon7} alt="" />
            </div>
            <hr style={{marginTop:'20px'}} />
        </div>
    );
};

export default IconSection;