import "../style/css/specialCard.css";

const SpecialCard = ({data}) => {
    const {Title, Year, Rated, Type, Poster} = data;
    return ( 
            <div className="special-card">
                <div className="image-container">
                    <img src={Poster} alt="movie poster" className="poster"/>
                </div>
                <div className="hover">
                    <div className="details-container">
                        <h2 className="title">{Title}</h2>
                        <div className="list">
                            <p className="list-item">{Year}</p>
                            <p className="list-item">{Type}</p>
                            <p className="list-item">{Rated}</p>
                        </div>
                    </div>
                    <div className="bookmark-icon-container">
                        <img src="./images/icons/icon-bookmark-empty.svg" alt="" className="bookmark-icon"/>
                    </div>
                </div>
            </div>
    );
}
 
export default SpecialCard;