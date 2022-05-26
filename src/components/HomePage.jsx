import Carousel from './Carousel';
import Card from './Card';
import "../style/css/homepage.css";
import movies from "../json/movies.json";
import tvshows from "../json/tvshows.json";
import mostpopular from "../json/mostpopular.json";
import { useState } from 'react';

const HomePage = (props) => {
    const [movieLimit, setMovieLimit] = useState(10);
    const [tvshowLimit, setTvhowLimit] = useState(10);

    const increseMovieLimit = () => {
        setMovieLimit(prevVal => prevVal + 10);
    };

    const increseTvshowLimit = () => {
        setTvhowLimit(prevVla => prevVla + 10);
    };

    return ( 
        <div className='homePage container'>
            <section>
                <Carousel data={mostpopular}/>
            </section>
            <section className='section'>
                <h2 className='TitleH2'>Movies</h2>
                <div className='card-container'>
                    {movies.slice(0, movieLimit).map(item => <Card data={item}/>)}
                </div>
                <button className='showMoreBtn' onClick={increseMovieLimit}>Show More...</button>
            </section>
            <section className='section'>
                <h2 className='TitleH2'>TV Shows</h2>
                <div className='card-container'>
                    {tvshows.slice(0, tvshowLimit).map(item => <Card data={item}/>)}
                </div>
                <button className='showMoreBtn' onClick={increseTvshowLimit}>Show More...</button>
            </section>
        </div>
     );
}
 
export default HomePage;