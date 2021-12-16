import React from 'react'
function Footer() {
    return (
        <div>
            <footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-5">
						<img src="https://cleancreations.com/data/config/client_logo.png?md=f341c123680491a1ca69dd7a67ca190e" className="footer-logo" alt="" />
						 {/* <p>
							We, at Storia®, are committed to achieving a truly circular food and beverage ecosystem.
						</p>  */}
						{/* <div class="footer-social">
							<a href="https://www.instagram.com/storiafoods" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><i class="fa fa-facebook"></i></a>
							<a href=" https://twitter.com/storiafoods/" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><i class="fa fa-twitter"></i></a>
							 <a href="#" data-toggle="tooltip" data-placement="top" title="Pinterest"><i class="fa fa-pinterest"></i></a>
							<a href="https://www.instagram.com/storiafoods/" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><i class="fa fa-instagram"></i></a>
							<a href="https://www.youtube.com/channel/UC65SDDRJScUEFNnxLUsjtAA" data-toggle="tooltip" data-placement="top" title="" data-original-title="Youtube"><i class="fa fa-youtube"></i></a>
						</div> */}
						<div className="position-absolute bottom-50 end-0">
						<button className="btn-danger "><h1>FOOD HUB</h1></button>
						</div>
					</div>
					<div className="col-lg-2 col-md-2 col-xs-6">
						<div className="widget">
							<h3 className="widget-title">Information</h3>
							<ul>
								<li><a href="#">Home</a></li>
								<li><a href="#">About Us</a></li>
								<li><a href="#">Our Blog</a></li>
								<li><a href="#">Contact Us</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-2 col-xs-6">
						<div className="widget">
							<h3 className="widget-title">Useful Link</h3>
							<ul>
								<li><a href="#">Terms of Use</a></li>
								<li><a href="#">Privacy Policy</a></li>
								<li><a href="#"> Refund Policy</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-3 col-md-3 col-xs-12">
						<div className="widget">
							<h3 className="widget-title">Subscribe</h3>
							<p>
								Enter your email address for our mailing list to keep yourself updated.
							</p>
							<form className="newsletter" method="POST" action="#">
								<input type="hidden" name="_token" value="iFimoKGQXEMJPxK0GfspTqt76Gw3Gg36tdZcCwhS"/>								<input type="email" name="email" placeholder="Your email address" required=""/>
								<button type="submit"><i className="fa fa-paper-plane"></i></button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</footer>
        </div>
    )
}

export default Footer
