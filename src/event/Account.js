const Account = () => {
    
    return ( 
        <div className="account" style={{maxWidth:"800px",margin:"0 auto",textAlign:"center"}}> 
            <form>
               
                <h2 style={{fontSize:"30px",marginBottom:"30px"}}> Create your account please !</h2>
                <div style={{backgroundColor:'#FFFB7D',height:'30px'}}></div>
             
                <label style={{textAlign:"left",display:"block"}}>User Name</label>
                <input type="text" style={{width:"100%",padding:"6px 10px",margin:"10px 0",border:"1px solid",boxSizing:"border-box",display:"block"}}></input>

                <label style={{textAlign:"left",display:"block"}}>Email</label>
                <input type="text" style={{width:"100%",padding:"6px 10px",margin:"10px 0",border:"1px solid",boxSizing:"border-box",display:"block"}}></input>
                <label style={{textAlign:"left",display:"block"}}>Adresse</label>
            
                <input type="text" style={{width:"100%",padding:"6px 10px",margin:"10px 0",border:"1px solid",boxSizing:"border-box",display:"block"}}></input>
                <label style={{textAlign:"left",display:"block"}}>Gender</label>
            <select style={{width:"100%",padding:"6px 10px",margin:"10px 0",border:"1px solid",boxSizing:"border-box",display:"block"}}> 
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
            </select>
            <button style={{background:"#FFFB7D",padding:"8px",borderRadius:"8px",cursor:"pointer"}}>Submit !</button>
            </form>
        </div>
     );
}
 
export default Account;