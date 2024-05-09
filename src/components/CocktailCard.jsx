import { Link, useOutletContext } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";
import { toast } from "react-toastify";

const CocktailCard = ({ id, name, image, info, glass }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link className="btn" to={`/cocktail/${id}`}>
          More info
        </Link>
      </div>
    </Wrapper>
  );
};
export default CocktailCard;
