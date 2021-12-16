import React from 'react'

function Modal() {

    const Close=()=>{
        document.getElementById('pincode-modal').setAttribute('style','display:hidden');
    }

    return (
        <div id="pincode-modal" class="container modal in" style={{display: "block" ,paddingRight: "17px"}}>
	{/* <!-- Modal content --> */}
	<form action="localhost:3000" method="POST">
		<input type="hidden" name="_token" value="7qetYXVFnK7VjXswIEsigsgLUCAmCqGcnLufF29t"/>		<div class="modal-content">
			<span class="close" data-dismiss="modal" aria-label="Close" id="pincode_declined" h="" onClick={Close}>×</span>
			<div class="text-center">
				<div class="pb-2 pt-2">
					<img src="https://shop.storiafoods.com/public/front/images/location.jpg" />
				</div>
				<h4 class="pb-2">
					Please enter your pincode to proceed
				</h4>
				<div class="pb-2">
					
						<i class="fa fa-map-marker markermin" aria-hidden="true"></i>
						<input name="pincode" maxlength="6" class="input mainfull" type="search" placeholder="Please Enter Pincode" autocomplete="off"/>
						<button className="btn btn-success" onClick={Close}>SUBMIT</button>
				</div>
			</div>
		</div></form>
	
</div>
    )
}

export default Modal
