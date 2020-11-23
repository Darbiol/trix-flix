import styled from "styled-components";
import {IMG_BASE_URL} from "../../utils/constants";
import Link from "next/link";
import { Movie } from "../../interfaces";

const CardBody = styled.div`
    display : flex
    flex-wrap : wrap;
    flex-direction : column;
    text-align  : left;
    background-color : #fff;
    margin-bottom : 10px;

    .title-container {
        margin-bottom : 15px;
        height : 44px;
        font-size : 14px;

        white-space: wrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
    }
`

const Card = styled.div`
    margin-right : 5px;

    @media (max-width:767px) { 
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: 40%;
    }

    .card-thumbnail {
        height : 295px;
    }
`;
type Props = {
    data : Movie
}

const CardCmp = (props:Props) => {
    return (
        <Card className="col-lg-2 col-md-3 col-sm-6 px-0">
            <Link href="/movie/[id]" as={`/movie/${props.data.id}`}>
                <a href="">
                    <img src={`${IMG_BASE_URL}/${props.data['poster_path']}`} alt="" className="img-fluid card-thumbnail"/>
                </a>
            </Link>
            <CardBody className="card-body">
                <div className="title-container">
                    <Link href="/movie/[id]" as={`/movie/${props.data.id}`}>
                        <a href="">
                            <span>{props.data.title}</span>
                        </a>
                    </Link>
                </div>
                <div>
                    <button className="btn btn-primary col-md-12">Watch</button>
                </div>
            </CardBody>
        </Card>
    )
}

export default CardCmp;