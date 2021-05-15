import IMGM from '../image/3.jpg'
import IMGR from '../image/6.jpg'
import IMG from '../image/1.jpg'
import { Link} from 'react-router-dom';
const Home = () => {
    return ( 
        <div>
          <div className="content">
        <img src={IMG} height= {700} width = {1688}/>
        <p style={{fontSize:'50px'}}>Choose Your Event</p>
        
        <div style={{backgroundColor:'#FFFB7D',height:'30px'}}></div>
<div class="card border-light mb-3" style={{maxWidth:'100%',height:'600px'}}>
        
  <div class="card-body">
    <img src= {IMGM} style={{
  position: 'absolute',
  top: '130px',
  right: '0',
  Width: '700px',
  height: '788px'}}/>
  </div>
</div>
<div class="card border-light mb-3" style={{maxWidth:'60rem',
position: 'relative',
top: '130px',
right: '0',
height: '400px'
}}>
  <div class="card-body">
  <Link to="/Wedding">

<p class="card-title"style={{fontSize:'40px'}}>Marriage</p>
</Link>
    
    <p class="card-text">Les mariés, eux, auront des besoins spécifiques, mais 
    c’est à vous de plonger dans les détails de l’organisation. Certains clients 
auront toute une liste de commandes et ce sera à vous de vous en charger.
     Certes, vous serez celui dont on applaudira les prouesses au terme de cette journée 
     épique, mais au prix de longs mois de préparatifs. De ce fait,
     un wedding planner doit avoir les qualités essentielles et suivre la bonne formation
      pour le métier.</p>
  </div>
</div>


<div class="card border-light mb-3" style={{maxWidth:'100%',height:'600px'}}>
        
  <div class="card-body">
    <img src= {IMGR} style={{
  position: 'absolute',
  top: '130px',
  left: '0',
  Width: '700px',
  height: '788px'}}/>
  </div>
</div>
<div class="card border-light mb-3" style={{maxWidth:'60rem',
position: 'relative',
top: '130px',
left: '700px',
height: '400px'
}}>
  <div class="card-body">
  <Link to="/Reception"><p class="card-title"style={{fontSize:'40px'}}>Reception</p></Link>
    <p class="card-text">Les mariés, eux, auront des besoins spécifiques, mais 
    c’est à vous de plonger dans les détails de l’organisation. Certains clients 
auront toute une liste de commandes et ce sera à vous de vous en charger.
     Certes, vous serez celui dont on applaudira les prouesses au terme de cette journée 
     épique, mais au prix de longs mois de préparatifs. De ce fait,
     un wedding planner doit avoir les qualités essentielles et suivre la bonne formation
      pour le métier.</p>
  </div>
</div>
</div></div>
     );
}
 
export default Home;