import { Link } from "react-router-dom";

const Nav_one = () => {
    return (  
        <div style={{
        backgroundColor:'rgb(255,226,225)',
       height:'150px',
        textAlign:'center',
       }}>
           
           <p
           style={{fontSize:'70px',fontFamily:'Brush Script MT, Brush Script Std, cursive'}}>Dream Event</p>
         <Link to="Account"><div style={{fontSize:'20px',marginLeft:"1500px"}}
         >create account</div></Link>
        
         </div>
    );
}
 
export default Nav_one;