import React, { Component } from 'react'
import axios from 'axios'

 class Demo extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              data:[],info:[],loading:false
         }
     }
     componentDidMount(){
        const RAPIDAPI_REQUEST_HEADERS = {
            'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
            , 'X-RapidAPI-Key': 'c81aaf7080msh81ddbbfa13356a0p1fa514jsnb933c2593299'            
          };
        axios.get("https://corona-virus-world-and-india-data.p.rapidapi.com/api_india",{headers:RAPIDAPI_REQUEST_HEADERS})
        .then(resp=>{
            console.log(resp.data.state_wise["Andhra Pradesh"]);
            this.setState({info:resp.data.state_wise["Andhra Pradesh"]})
            this.setState({loading:true})           

            let Anantapur=resp.data.state_wise["Andhra Pradesh"].district.Anantapur.confirmed;
            let Chittoor=resp.data.state_wise["Andhra Pradesh"].district.Chittoor.confirmed;
            let East=resp.data.state_wise["Andhra Pradesh"].district["East Godavari"].confirmed;
            let Guntur=resp.data.state_wise["Andhra Pradesh"].district.Guntur.confirmed;
            let Krishna=resp.data.state_wise["Andhra Pradesh"].district.Krishna.confirmed;
            let Kurnool=resp.data.state_wise["Andhra Pradesh"].district.Kurnool.confirmed;
            let Prakasam=resp.data.state_wise["Andhra Pradesh"].district.Prakasam.confirmed;
            let Nellore=resp.data.state_wise["Andhra Pradesh"].district["S.P.S. Nellore"].confirmed;
            let Visakhapatnam=resp.data.state_wise["Andhra Pradesh"].district.Visakhapatnam.confirmed;
            let west=resp.data.state_wise["Andhra Pradesh"].district["West Godavari"].confirmed;   
            let ysr=resp.data.state_wise["Andhra Pradesh"].district["Y.S.R."].confirmed
                
            let arr=[
                {"state":"Anantapur","confirmed":Anantapur},{"state":"Chittoor","confirmed":Chittoor},
                {"state":"East Godavari","confirmed":East},{"state":"Guntur","confirmed":Guntur},
                {"state":"Krishna","confirmed":Krishna},{"state":"Kurnool","confirmed":Kurnool},
                {"state":"Prakasam","confirmed":Prakasam},{"state":"Nellore","confirmed":Nellore},
                {"state":"Visakhapatnam","confirmed":Visakhapatnam},{"state":"west Godavari","confirmed":west},
                {"state":"ysr","confirmed":ysr}            
             ]
             this.setState({data:arr})             
     })
     .catch(error=>{
        //  this.setState({loading:true})
         alert(error)
     })
    }
    render() {
        const {data,info,loading}=this.state
        return (
            <div >
                <h3>Covid19 Andhra Statastics</h3> 
                {loading ?  
                <div style={{backgroundColor:"black",color:"yellow",display:"inline-block",width:"300px",height:"210px"}}>
              <p>Active Cases : {info.active}</p>
              <p>Confirmed : {info.confirmed}</p>
              <p>Recovered : {info.recovered}</p>
              <p>Deaths : {info.deaths}</p>
              <p>lastupdated : {info.lastupdatedtime}</p>
                </div>:<h2>Loading...</h2>} 
                {loading ?
                <div>
                <table className="striped" style={{display:"inline-block",width:"300px",height:"auto"}}>
        <thead>
          <tr>
              <th>SNO</th>
              <th>District</th>
              <th>Total Cases</th>
          </tr>
        </thead>
        <tbody>                        
                    {data.map((i,index)=>(
                        <React.Fragment key={index}>
                            <tr>
            <td>{index+1}</td>
            <td>{i.state}</td>
            <td>{i.confirmed}</td>
          </tr>                             
                        </React.Fragment>
                    ))}
                     </tbody>
                    </table>
                </div>:<h2>Loading...</h2>}
            </div>
        )
    }
}
export default Demo