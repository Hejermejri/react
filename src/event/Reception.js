import drink from '../image/drink.jpg'
import eat from '../image/eat.jpg'
import flower from '../image/flower.jpg'
import Inviation from '../image/inviation.png'
import { Link} from 'react-router-dom';
const Reception = () => {
    return ( 
        <div>
            <p style={{fontSize:'50px'}}>Start your Reception preparations</p>
        <div style={{backgroundColor:'#FFFB7D',height:'30px' ,marginBottom:'50px'}}>  </div>
        <div class="row">
        <div class="col-sm" >
        <div class="card"style={{height: "500px",width:"400px"}}>
        <div class="card-body">
        <img src={drink}style={{height: "400px",width:"370px",}}></img>
        <Link to="/Drink"><div class="card-title" style={{fontSize:'40px'}}>Drink</div></Link>
        </div>
        </div>
        </div>
        <div class="col-sm" >
        <div class="card"style={{height: "500px",width:"400px"}}>
        <div class="card-body">
        <img src={eat}style={{height: "400px",width:"370px",}}></img>
        <Link to="/Eat"><div class="card-title" style={{fontSize:'40px'}}>Eat </div></Link></div>
        </div>
        </div>
        <div class="col-sm" >
        <div class="card"style={{height: "500px",width:"400px"}}>
        <div class="card-body">
        <img src={flower}style={{height: "400px",width:"370px",}}></img>
        <Link to="/Flowers"><div class="card-title" style={{fontSize:'40px'}}>Flowers </div></Link></div>
        </div>
        </div>
        <div class="col-sm" >
        <div class="card"style={{height: "500px",width:"380px"}}>
        <div class="card-body">
        <img src={Inviation}style={{height: "400px",width:"350px",}}></img>
        <Link to="/Invitations"><div class="card-title" style={{fontSize:'40px'}}>Invitation Card </div></Link></div>
        </div>
        </div>
        </div>
        </div>
     );
}
export default Reception;