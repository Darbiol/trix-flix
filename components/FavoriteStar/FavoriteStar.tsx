import React, {useEffect, useState, MouseEvent} from "react";
import styled from "styled-components";

type Props = {
    id : string;
}

const Favorite = styled.div`
    margin : 0px 5px;

    .wrapper {
        position: relative;
    }

    .fa.fa-star {
        font-size: 1.5em;
    }

    .fa.fa-star.checked {
        color : #E4D446;
    }

    .icon-set {
        position: absolute;
        left : 6px;
        top : 10px;
    }

    .icon-container {
        position: relative;
        left : 13px;
        top : 7px;
    }

    .icon-container i {
        position: absolute;
    }

    .icon-container i.fa.fa-plus {
        color: white;
        left : 3.5px;
        top : 4px;
        z-index : 102;
        font-size : 10px;
    }

    .icon-container i.fa.fa-circle {
        color: #2780e3;
        left : 1px;
        top : 1px;
        z-index : 101;
        font-size : 15px;
    }

    .icon-container i.fa.fa-circle.outline {
        color: #f3f7fe;
        left : 0px;
        top : 0px;
        z-index : 100;
        font-size : 18px;
    }

    @media (hover: hover) {
        a:hover {
            color : #E4D446;
        }

        a:hover .icon-container i.fa.fa-circle {
            color : #E4D446;
        }

        a:hover .icon-container i.fa.fa-circle.outline {
            color: #f3f7fe;
        }
    }
`;

const FavoriteStar : React.FunctionComponent<Props> = ({id}) => {
    let movieId:string = `movie-${id}`;
    const [isFave, setFave] = useState('false');

    const toggleFavorite = (e:MouseEvent) => {
        e.preventDefault();
        let favValue = localStorage.getItem(movieId) === 'true' ? 'false' : 'true';
        setFave(favValue);
        localStorage.setItem(movieId, favValue);
    };

    useEffect(() => {
        let value : string = localStorage.getItem(movieId) || 'false';
        setFave(value);
    });
    return (
        <Favorite className="col-lg-1 col-auto px-0">
            <a href="" onClick={toggleFavorite}>
                <div className="wrapper">
                    <span>
                        <i className={`fa fa-star ${isFave === 'true' ? 'checked' : ''}`}></i>
                    </span>
                    {
                        (isFave !== 'true') && (<div className="icon-set">
                        <span className="icon-container">
                            <i className="fa fa-circle outline" data-fa-mask="fa fa-circle"></i>
                            <i className="fa fa-circle" data-fa-mask="fa fa-circle"></i>
                            <i className="fa fa-plus" data-fa-mask="fa fa-circle"></i>
                        </span>
                    </div>)
                    }
                    
                </div>
            </a>
        </Favorite>
    );
};

export default FavoriteStar;