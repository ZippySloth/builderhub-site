import'./Background.css' /* Linking backgound css */
import ClinicOffice from '../../assets/ClinicOffice.webp'
import Clinic from '../../assets/Clinic.webp'
import Reception from '../../assets/Reception.webp'
import Pool1 from '../../assets/Pool2.webp'
import Hotel3 from '../../assets/Hotel3.webp'

export const Background = ({heroCount}) => {

        if (heroCount===0) {
            return <img src={ClinicOffice} className='background' alt="Inside Clinic image"/>
        }
        else if (heroCount===1) {
            return <img src={Clinic} className='background' alt="Clinic image"/>
        }
        else if (heroCount===2) {
            return <img src={Reception} className='background' alt="Reception Clinic image"/>
        }
       
        else if (heroCount===3) {
            return <img src={Pool1} className='background' alt="Indoor pool image"/>
        }
        else {
            return <img src={ClinicOffice} className='background' alt="Clinic image"/>
        }
    
}
export default Background;