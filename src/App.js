// import React, { useState } from 'react'
import Styles from './Components/Styles.css'
import learn from "../src/assets/learn.png"
import peer from "../src/assets/peer.png"
import settings from "../src/assets/settings.png"
import Card2 from './Components/Card2'
import student from './assets/student (1).png'
import star from "./assets/starlogo.png"
import cup from './assets/TpCYeB-winner-clipart-hd-logo.png'
import flag from '../src/assets/Flag-Australia.webp'

const App = () => {
  return (
    <div className='container-fluid bg p-2 ' >
   <div className='border m-3 rounded-4 d-flex abc overflow-hidden'>
    <div className='cards1 text-center' style={{color:"white", width:"12%",height:"90vh", backgroundColor:'rgba(255, 255, 255, 0.05)'}} >
      <h3 className='p-4'><strong>DEL</strong></h3>
      <div><a href=""><img src={learn} alt="no image" width={"30%"} className='mx-5'/></a></div>
      <p className='px-4'>MY learning plan</p>
      
      <div><a href=""><img src={peer} alt="no" width={"30%"} className='mx-5 my-3'/></a></div>
      <p className='px-4'>MY peers</p>
      <div><a href=""><img src={settings} alt="no" width={"30%"} className='mx-5 my-3'/></a></div>
      <p className='px-4'>Settings</p>
      <div  className='px-5 ' style={{marginTop:"80px"}}><h6>Nikitin</h6></div>
      <div><img src={student} alt=""  style={{width:"30px",height:"30px",backgroundColor:"yellow"}} className='border m-1'/>
      <img src={flag} alt="" style={{width:"30px",height:"30px"}} className='border ' />
      </div>


    </div>
   <Card2/>

   <div></div>
    <div className='card3 ' style={{color:"white", width:"30%",height:"",backgroundColor:"#FECD09" ,borderRadius:"0px 15px 15px"}}  >
    <img src={cup} alt="" style={{width:"80px",height:"50px",position:'absolute',marginLeft:"-40px", marginTop:"30px"}} />

      <h3 className='p-4 ms-5' style={{color:"black"}}><strong>Leader-Board</strong></h3>

      <div  >
        <div className='d-flex justify-content-around' style={{color:"black"}}>
       <div className='pt-3 '>90%</div>
       <div>100%</div>
       <div className='pt-4'>80%</div>
       </div>
      <div className='d-flex' >
         <div className=' mt-4' style={{width:"125px",backgroundColor:"#3b3461",borderRadius:"40px 40px 0px 0px"}}>
         <div className='d-flex justify-content-center p-1'>
          <img src={star} alt="" style={{width:"40px", height:"40px",position:'absolute'}}  /> <div className='p-2 '>2</div></div>
          <div><img src={student} alt="noimage" style={{width:"75px"}} className='rounded-4 ms-4'/></div>
          <div className='d-flex justify-content-center '>Koresh</div>
          <div></div>
          <div></div>

         </div>
         <div className='  ' style={{width:"127px",backgroundColor:"#3b3461" ,borderRadius:"40px 40px 0px 0px"}}>
         <div className='d-flex justify-content-center p-1'>
          <img src={star} alt="" style={{width:"40px", height:"40px",position:'absolute'}} /> <div className='p-2 '>1</div></div>
          <div><img src={student} alt="noimage" style={{width:"75px"}} className='rounded-4 ms-4'/></div>
          <div className='d-flex justify-content-center'>Sai</div>
          <div></div>
          <div></div>

         </div>
         <div className='mt-5' style={{width:"125px",backgroundColor:"#3b3461",borderRadius:"40px 40px 0px 0px"}}>
         <div className='d-flex justify-content-center p-1'>
          <img src={star} alt="" style={{width:"40px", height:"40px",position:'absolute'}}  /> <div className='p-2 '>3</div></div>
          <div><img src={student} alt="noimage" style={{width:"75px"}} className='rounded-4 ms-4'/></div>
          <div className='d-flex justify-content-center'>Vinay</div>
          <div></div>
          <div></div>

         </div>
         </div>
         
    <div className=' pt-3 d-flex ' style={{backgroundColor:"#3b3461"}}>
      <div className='ps-5' >
      <img src={star} alt="" style={{width:"40px", height:"40px",position:'absolute'}} className='' /> <div className='p-2 ps-3'>4</div>
      </div>
      <div className='ps-4 pt-2'>Vijay</div>
      <div className='ms-auto pe-5 pt-2'>70%</div>
    </div>
    <div className=' pt-3 d-flex' style={{backgroundColor:"#3b3461"}}>
      <div className='ps-5' >
      <img src={star} alt="" style={{width:"40px", height:"40px",position:'absolute'}} className='' /> <div className='p-2 ps-3'>5</div>
      </div>
      <div className='ps-4 pt-2'>Sonia</div>
      <div className='ms-auto pe-5 pt-2'>60%</div>
    </div>
     <div className=' pt-3 d-flex' style={{backgroundColor:"#3b3461"}}>
      <div className='ps-5' >
      <img src={star} alt="" style={{width:"40px", height:"40px",position:'absolute'}} className='' /> <div className='p-2 ps-3'>6</div>
      </div>
      <div className='ps-4 pt-2'>Harsha</div>
      <div className='ms-auto pe-5 pt-2'>50%</div>
    </div> 
    <div className=' pt-3 d-flex' style={{backgroundColor:"#3b3461"}}>
      <div className='ps-5' >
      <img src={star} alt="" style={{width:"40px", height:"40px",position:'absolute'}} className='' /> <div className='p-2 ps-3'>7</div>
      </div>
      <div className='ps-4 pt-2'>Vivek</div>
      <div className='ms-auto pe-5 pt-2'>40%</div>
    </div>
    <div className=' pt-3 d-flex' style={{backgroundColor:"#3b3461"}}>
      <div className='ps-5' >
      <img src={star} alt="" style={{width:"40px", height:"40px",position:'absolute'}} className='' /> <div className='p-2 ps-3'>8</div>
      </div>
      <div className='ps-4 pt-2'>Lilly</div>
      <div className='ms-auto pe-5 pt-2'>30%</div>
    </div>
    <div className=' pt-3 d-flex' style={{backgroundColor:"#3b3461"}}>
      <div className='ps-5' >
      <img src={star} alt="" style={{width:"40px", height:"40px",position:'absolute'}} className='' /> <div className='p-2 ps-3'>9</div>
      </div>
      <div className='ps-4 pt-2'>yogesh</div>
      <div className='ms-auto pe-5 pt-2'>25%</div>
    </div>
      
    
    </div>
   

     


    </div>
         
       
   
        </div>
        </div>
  )
}

export default App
