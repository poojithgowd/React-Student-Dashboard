import React from 'react'
import stud1 from"../assets/student (1).png"
import loc from "../assets/location.png"
import std from "../assets/student (2).png"
const Card2 = () => {
  const handleMouseEnter = (event) => {
    event.currentTarget.style.transform = 'rotate(-10deg)scale(1.09)';
    
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.transform = 'rotate(0deg)';
  };
  return (
    <div className='cards2 text-center ' style={{color:"white", width:"76%",height:"90vh"}}  >
    <h3 className='pt-4 '><strong>My Peers</strong><span className='' style={{marginLeft:"250px"}}><input type="text" placeholder='🔍 Search' style={{backgroundColor:'#352d5c'}}/></span></h3>
    <div className='d-flex flex-wrap mt-3
    ' style={{marginLeft:"100px"}}>
      <div><div className='border rounded-4  pt-3 m-3' style={{width:"200px",backgroundColor:'rgba(255, 255, 255, 0.1)',transition: 'transform 0.2s' }}
     onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}>
      <div className='d-flex justify-content-center '>
        <div><img src={stud1} alt="noimage" style={{width:"75px" , backgroundColor:"yellow"}} className='rounded-4 ms-4'/></div>
        <spam className='ps-1'>
          <h5 style={{color:'pink'}}><strong>19</strong></h5>
          <h5>Mar</h5>
        </spam>
        
      </div>
      <h5 className='pt-2'><b>Sreenu</b> </h5>
      <h6  style={{color:"orange"}}>Sales Representative</h6>
      <div className='d-flex justify-content-center'>
        <img src={loc} alt=""  style={{width:"25px", height:"20px"}}/><h6 className=''>Berlin,</h6>

      </div>
      <p>Germany-Midwest</p>
     <div className='container  '>
     <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning text-dark" style={{width: "70%"}}>1.lesson-ABC</div>
</div>
    
            

     </div>
        
    </div></div>
    
    <div className='border rounded-4  pt-3 m-3' style={{width:"200px",backgroundColor:'rgba(255, 255, 255, 0.1)',transition: 'transform 0.2s' }} onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}>
      <div className='d-flex justify-content-center '>
        <div><img src={stud1} alt="noimage" style={{width:"75px" , backgroundColor:"yellow"}} className='rounded-4 ms-4'/></div>
        <spam className='ps-1'>
          <h5 style={{color:'pink'}}><strong>20</strong></h5>
          <h5>Apr</h5>
        </spam>
        
      </div>
      <h5 className='pt-2'><b>Sanjay</b> </h5>
      <h6  style={{color:"orange"}}>Ceo</h6>
      <div className='d-flex justify-content-center'>
        <img src={loc} alt=""  style={{width:"25px", height:"20px"}}/><h6 className=''>Berlin,</h6>

      </div>
      <p>Amalapuram</p>
     <div className='container  '>
     <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning text-dark" style={{width: "90%"}}>2.lesson-ABC</div>
</div>
    
            

     </div>
        
    </div>
    <div className='border rounded-4  pt-3 m-3' style={{width:"200px",backgroundColor:'rgba(255, 255, 255, 0.1)',transition: 'transform 0.2s' }} onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}>
      <div className='d-flex justify-content-center '>
        <div><img src={std} alt="noimage" style={{width:"75px" , backgroundColor:"yellow"}} className='rounded-4 ms-4'/></div>
        <spam className='ps-1'>
          <h5 style={{color:'pink'}}><strong>30</strong></h5>
          <h5>Nov</h5>
        </spam>
        
      </div>
      <h5 className='pt-2'><b>Fareeza</b> </h5>
      <h6  style={{color:"orange"}}>Manager</h6>
      <div className='d-flex justify-content-center'>
        <img src={loc} alt=""  style={{width:"25px", height:"20px"}}/><h6 className=''>Berlin,</h6>

      </div>
      <p>Germany-Midwest</p>
     <div className='container  '>
     <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning text-dark" style={{width: "70%"}}>1.lesson-ABC</div>
</div>
    
            

     </div>
        
    </div>
    <div className='border rounded-4  pt-3 m-3' style={{width:"200px",backgroundColor:'rgba(255, 255, 255, 0.1)',transition: 'transform 0.2s' }} onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}>
      <div className='d-flex justify-content-center '>
        <div><img src={stud1} alt="noimage" style={{width:"75px" , backgroundColor:"yellow"}} className='rounded-4 ms-4'/></div>
        <spam className='ps-1'>
          <h5 style={{color:'pink'}}><strong>19</strong></h5>
          <h5>Mar</h5>
        </spam>
        
      </div>
      <h5 className='pt-2'><b>Sanju</b> </h5>
      <h6  style={{color:"orange"}}>Sales Representative</h6>
      <div className='d-flex justify-content-center'>
        <img src={loc} alt=""  style={{width:"25px", height:"20px"}}/><h6 className=''>Berlin,</h6>

      </div>
      <p>Germany-Midwest</p>
     <div className='container  '>
     <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning text-dark" style={{width: "70%"}}>1.lesson-ABC</div>
</div>
    
            

     </div>
        
    </div>
    <div className='border rounded-4  pt-3 m-3' style={{width:"200px",backgroundColor:'rgba(255, 255, 255, 0.1)',transition: 'transform 0.2s' }} onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}>
      <div className='d-flex justify-content-center '>
        <div><img src={stud1} alt="noimage" style={{width:"75px" , backgroundColor:"yellow"}} className='rounded-4 ms-4'/></div>
        <spam className='ps-1'>
          <h5 style={{color:'pink'}}><strong>19</strong></h5>
          <h5>Mar</h5>
        </spam>
        
      </div>
      <h5 className='pt-2'><b>Sujith</b> </h5>
      <h6  style={{color:"orange"}}>Sales Representative</h6>
      <div className='d-flex justify-content-center'>
        <img src={loc} alt=""  style={{width:"25px", height:"20px"}}/><h6 className=''>Berlin,</h6>

      </div>
      <p>Germany-Midwest</p>
     <div className='container  '>
     <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning text-dark" style={{width: "70%"}}>1.lesson-ABC</div>
</div>
    
            

     </div>
        
    </div>
    <div className='border rounded-4  pt-3 m-3' style={{width:"200px",backgroundColor:'rgba(255, 255, 255, 0.1)',transition: 'transform 0.2s' }} onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}>
      <div className='d-flex justify-content-center '>
        <div><img src={stud1} alt="noimage" style={{width:"75px" , backgroundColor:"yellow"}} className='rounded-4 ms-4'/></div>
        <spam className='ps-1'>
          <h5 style={{color:'pink'}}><strong>19</strong></h5>
          <h5>Mar</h5>
        </spam>
        
      </div>
      <h5 className='pt-2'><b>Michael Kopfler</b> </h5>
      <h6  style={{color:"orange"}}>Sales Representative</h6>
      <div className='d-flex justify-content-center'>
        <img src={loc} alt=""  style={{width:"25px", height:"20px"}}/><h6 className=''>Berlin,</h6>

      </div>
      <p>Germany-Midwest</p>
     <div className='container  '>
     <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning text-dark" style={{width: "70%"}}>1.lesson-ABC</div>
</div>
    
            

     </div>
        
    </div>
    <div className='border rounded-4  pt-3 m-3' style={{width:"200px",backgroundColor:'rgba(255, 255, 255, 0.1)',transition: 'transform 0.2s' }} onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}>
      <div className='d-flex justify-content-center '>
        <div><img src={stud1} alt="noimage" style={{width:"75px" , backgroundColor:"yellow"}} className='rounded-4 ms-4'/></div>
        <spam className='ps-1'>
          <h5 style={{color:'pink'}}><strong>19</strong></h5>
          <h5>Mar</h5>
        </spam>
        
      </div>
      <h5 className='pt-2'><b>Michael Kopfler</b> </h5>
      <h6  style={{color:"orange"}}>Sales Representative</h6>
      <div className='d-flex justify-content-center'>
        <img src={loc} alt=""  style={{width:"25px", height:"20px"}}/><h6 className=''>Berlin,</h6>

      </div>
      <p>Germany-Midwest</p>
     <div className='container  '>
     <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning text-dark" style={{width: "70%"}}>1.lesson-ABC</div>
</div>
    
            

     </div>
        
    </div>
    <div className='border rounded-4  pt-3 m-3' style={{width:"200px",backgroundColor:'rgba(255, 255, 255, 0.1)',transition: 'transform 0.2s' }} onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}>
      <div className='d-flex justify-content-center '>
        <div><img src={stud1} alt="noimage" style={{width:"75px" , backgroundColor:"yellow"}} className='rounded-4 ms-4'/></div>
        <spam className='ps-1'>
          <h5 style={{color:'pink'}}><strong>19</strong></h5>
          <h5>Mar</h5>
        </spam>
        
      </div>
      <h5 className='pt-2'><b>Michael Kopfler</b> </h5>
      <h6  style={{color:"orange"}}>Sales Representative</h6>
      <div className='d-flex justify-content-center'>
        <img src={loc} alt=""  style={{width:"25px", height:"20px"}}/><h6 className=''>Berlin,</h6>

      </div>
      <p>Germany-Midwest</p>
     <div className='container  '>
     <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning text-dark" style={{width: "70%"}}>1.lesson-ABC</div>
</div>
    
            

     </div>
        
    </div>
    <div className='border rounded-4  pt-3 m-3' style={{width:"200px",backgroundColor:'rgba(255, 255, 255, 0.1)',transition: 'transform 0.2s' }} onMouseEnter={handleMouseEnter}
     onMouseLeave={handleMouseLeave}>
      <div className='d-flex justify-content-center '>
        <div><img src={stud1} alt="noimage" style={{width:"75px" , backgroundColor:"yellow"}} className='rounded-4 ms-4'/></div>
        <spam className='ps-1'>
          <h5 style={{color:'pink'}}><strong>19</strong></h5>
          <h5>Mar</h5>
        </spam>
        
      </div>
      <h5 className='pt-2'><b>Michael Kopfler</b> </h5>
      <h6  style={{color:"orange"}}>Sales Representative</h6>
      <div className='d-flex justify-content-center'>
        <img src={loc} alt=""  style={{width:"25px", height:"20px"}}/><h6 className=''>Berlin,</h6>

      </div>
      <p>Germany-Midwest</p>
     <div className='container  '>
     <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div class="progress-bar bg-warning text-dark" style={{width: "70%"}}>1.lesson-ABC</div>
</div>
    
            

     </div>
        
    </div>
    </div>
    

  </div>
  )
}

export default Card2
