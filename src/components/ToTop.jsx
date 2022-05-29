import "../style/css/totop.css";

const ToTop = (props) => {
        
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    
    return ( 
        <button className="totop" onClick={scrollToTop}><i className="fa-solid fa-angles-up"></i></button>
     );
}
 
export default ToTop;
