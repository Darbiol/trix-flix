import { GetServerSideProps, NextPage } from 'next'
import { getById, getSimilar } from "../../service/Movie";
import {IMG_BASE_URL} from "../../utils/constants";
import styled from "styled-components";
import Layout from "../../components/Layout/Layout";
import Carousel from "../../components/Carousel/Carousel";
import FavoriteStar from "../../components/FavoriteStar/FavoriteStar";
import QueryString from "querystring";

interface Props {
    movie?: any;
    similar : any[];
}


const Details = styled.div`
    padding-top : 30px;
    background-color : #f3f7fe;

    .details-header {
        display: flex;
        flex-direction : row;
        flex-wrap : wrap;
        justify-content : space-between;
    }

    .title {
        display : flex;
        flex-direction : row;
        flex-wrap: wrap;
        align-items : center
    }

    .title img {
        width : 100px;
        margin : 0px 10px;
    }

    .title .title-wrapper {
        font-size : 24px;
        font-weight : 400px;
        display : flex;
        flex-direction : row;
    }

    .actions {
        display: flex;
        flex-wrap : wrap;
        flex-direction : column;
        justify-content : space-evenly;

        @media (max-width:991px) { 
            flex-direction : row;
            margin-top : 7px;
            text-align : center
        }
    }

    .movie-img {
        border-radius : 35px;
    }
`;

const Button = styled.button`
    margin : 3px;
    flex-basis : 0;
    font-size : 0.75em;

    @media (max-width:991px) { 
        flex-grow : 1;
    }

    @media (max-width:420px) { 
        font-size : 0.75em;
    }
`;
const BackButton = styled.button`
    i {
        padding-right : 5px;
    }
`;

const Navigator = styled.div`
    display : flex;
    flex-direction : row;
    align-items : center;
    justify-content : space-between;

    .form-container {
        flex-grow : 1
    }

    .back-btn-container {
        flex-grow : 1
    }
`;

const DeatailsBody = styled.div`
    display : flex;
    flex-direction : row;
    flex-wrap : wrap-reverse;
    justify-content : space-evenly;

    .synopsis {
        margin-top : 30px;
        flex-shrink : 2
        order : 1
    }

    .poster {
        margin-top : 30px;
        flex-shrink : 1
        order : 2
    }
`;

const MoviePage:NextPage<Props>  = ({movie, similar}) => {
    return (<Layout>
        <Details className="container">
            <div className="details-header">
                <div className="row col-lg-12 pr-0">
                    <div className="title col-lg-10">
                        <div className="col-auto px-0">
                            <img src={`${IMG_BASE_URL}/${movie['backdrop_path']}`} alt="" className="movie-img"/>
                        </div>
                        <div className="title-wrapper col-auto px-0">
                            <span>{movie.title}</span>
                            <FavoriteStar id={movie.id}/>
                        </div>
                    </div>
                    <div className="actions col-lg-2 col-md-12 pr-0">
                        <Button className="btn btn-outline-primary">Play Video</Button>
                        <Button className="btn btn-outline-primary">Watch Later</Button>
                        <Button className="btn btn-outline-primary">Share</Button>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="detail-nav">
                <Navigator>
                    <div className="back-btn-container">
                        <BackButton type="button" className="btn btn-primary btn-sm back-btn">
                            <i className="fa fa-chevron-left"></i>
                            Back
                        </BackButton>
                    </div>
                    
                    <div className="form-container">
                        <input className="form-control form-control-md" type="text" placeholder="Search for a Movie" id="inputSmall"/>
                    </div>
                </Navigator>
            </div>
            <DeatailsBody className="details-body col-md-12 px-0">
                <div className="synopsis col-lg-9 col-md-9 pl-0">
                    <h2> Synopsis</h2>
                    <p>{movie.overview}</p>
                </div>
                <div className="poster col-lg-3 col-md-3 pr-0">
                    <img src={`${IMG_BASE_URL}/${movie['poster_path']}`} alt="" className="img-fluid"/>
                </div>
            </DeatailsBody>
        </Details>
        <Carousel label="Similar Movies" data={similar}/>
    </Layout>);
}

interface Params extends QueryString.ParsedUrlQuery {
    id: string,
 }

export const getServerSideProps: GetServerSideProps<Props, Params> = async (context) => {
    const params = context.params as Params;
    const data = await Promise.all([getById(params.id), getSimilar(params.id)]);

    return {
        props : {
            movie : data[0],
            similar : data[1].results
        }
    }
}


export default MoviePage;