import React from 'react'
import emailjs from 'emailjs-com';
import Fade from 'react-reveal/Fade';



const ContactForm = () => {


    function sendEmail(e) {
        e.preventDefault();
         
       e.target["name"].value && e.target["email"].value && e.target["subject"].value && e.target["message"].value 
       ? emailjs.sendForm('service_obpb55q', 'template_xcgw1lo', e.target, 'user_pegAukgH8WXBrEqp40JO2' )
       .then(() => {
        document.querySelector(".contactForm").reset();
        document.querySelector(".form-message-success").style.display = "block"
        document.querySelector(".form-message-warning").style.display = "none" 
       }, (error) => {
           console.log(error.text);
       })
       :  document.querySelector(".form-message-warning").style.display = "block"       

       
       

        
      }

    return (
        <section className="ftco-section Contact" id="Contact">
		<div className="container">
		<Fade bottom>
			<div className="row justify-content-center">
				<div className="col-lg-10">
					<div className="wrapper img" style={{backgroundImage: 'url(https://images.pexels.com/photos/3756853/pexels-photo-3756853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)'}}>
						<div className="row">
							<div className="col-md-9 col-lg-7">
								<div className="contact-wrap w-100 p-md-5 p-4">
									<h3 className="mb-4">Get in touch with us</h3>
									<div id="form-message-warning" className="mb-4 form-message-warning">
                                        Form cannot be empty
                                        </div> 
				      		<div id="form-message-success" className="mb-4 form-message-success">
				            Your message was sent, thank you!
				      		</div>
									<form  id="contactForm" className="contactForm" onSubmit={sendEmail} >
										<div className="row">
											<div className="col-md-6">
												<div className="form-group">
													<label className="label" htmlFor="name">Full Name</label>
													<input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div className="col-md-6"> 
												<div className="form-group">
													<label className="label" htmlFor="email">Email Address</label>
													<input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" htmlFor="subject">Subject</label>
													<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<label className="label" htmlFor="#">Message</label>
													<textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
												</div>
											</div>
											<div className="col-md-12 mt-1 ">
												<div className="form-group">
													<input type="submit" value="Send Message" className="btn btn-primary"/>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			</Fade>
		</div>
	</section>
    )
}

export default ContactForm
