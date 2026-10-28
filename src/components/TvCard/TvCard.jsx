import './TvCard.css';
import minusIcon from '../../assets/minus.png';
import checkIcon from '../../assets/check.png';
import soldOutImg from '../../assets/out-of-stock.png';
import PropTypes from 'prop-types';
import formatProductName, {formatProductPrice, formatProductSizes} from "../../helpers/formatters.js";

function TvCard({tv}) {
    return (
        <div className="tv-card">
            <div className="image-wrapper">
                <img src={tv.sourceImg} alt={formatProductName(tv.brand, tv.type, tv.name)} className="tv-image"/>
                {tv.originalStock - tv.sold === 0 && (
                    <img src={soldOutImg} alt="Uitverkocht" className="sold-out"/>
                )}
            </div>
            <div className="tv-content">
                <h3>{formatProductName(tv.brand, tv.type, tv.name)}</h3>
                <span className="tv-price">{formatProductPrice(tv.price)}</span>
                <span className="tv-sizes">{formatProductSizes(tv.availableSizes)}</span>
                <ul className="tv-options">
                    {tv.options.map((option) => {
                        return (
                            <li key={option.name}>
                                <img src={option.applicable ? checkIcon : minusIcon}
                                     alt={option.applicable ? "aanwezig" : "niet aanwezig"}/>
                                {option.name}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

TvCard.propTypes = {
    tv: PropTypes.object.isRequired,
};

export default TvCard;