import Card from "../Card/Card";
import styled from "styled-components";
import { Movie } from "../../interfaces";

const CarouselContainer = styled.div`
    background-color : #f3f7fe;

    .label {
        padding : 15px;
    }

    .carousel-item-container {
        display:flex;
        align-items : stretch;
        justify-content : space-evenly;
    }
`;

type Props = {
    label : string
    data : Movie[]
}

const Carousel = (props:Props) =>{
    return (
        <CarouselContainer className="container">
            <h2 className="label">{props.label}</h2>
            <div className="carousel-item-container row">
                {props.data.map((item:Movie, index:number) => (
                    <Card data={item} key={index}/>
                ))}
            </div>
        </CarouselContainer>
    );
}

export default Carousel;