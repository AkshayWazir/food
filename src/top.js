import React from 'react'
import './toplayer.css'
function top() {
    return (
        <div className="my-4">
           <div className="topbar topbar1 ">
			<div className="container ">
                
				<div className="row ">
                    
                    <div className="col-md-12 text-center my-4" style={{color:'orange',fontSize: '15px',fontWeight: '800'}}>
                        Free shipping on orders above Rs. 599/-
                    </div>
					<div className="col-md-6">
						<div className="topbar-text">
							<span> </span>
							<span> </span>
						</div>
					</div>

					<div className="col-md-6">
						<div className="topbar-menu">
							<ul className="topbar-menu">
								
								<li><a href="#">Login</a></li>
								<li><a href="#">Register</a></li>
								<li><a href="#">Track Order</a></li>
															</ul>
						</div>
					</div>
                    
				</div>
                
			</div>
		</div> 
        </div>
    )
}

export default top
