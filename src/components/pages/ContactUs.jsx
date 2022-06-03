import "../../style/css/contactus.css";

const ContactUs = (props) => {
    return ( 
        <section className="contactus">
            <h1 className="h1">Contact us</h1>
            <form action="/" method="post">
                <div className="formGroup">
                    <label htmlFor="username" className="label">User Name</label>
                    <input type="text" name="username" id="username" className="inputFeild"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="accountNumber" className="label">Account Number</label>
                    <input type="text" name="accountNumber" id="accountNumber" className="inputFeild" placeholder="#td"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="email" className="label">Email</label>
                    <input type="email" name="email" id="email" className="inputFeild"/>
                </div>
                <div className="formGroup">
                    <label htmlFor="subject" className="label">Subject</label>
                    <input type="text" name="subject" id="subject" className="inputFeild"/>
                </div>
                <div className="formGroupTextArea">
                    <label htmlFor="message" className="label">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" className="textarea"></textarea>
                </div>
                <input type="submit" value="Send Message" className="sendBtn"/>
            </form>
        </section>
     );
}
 
export default ContactUs;