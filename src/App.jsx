import './App.css';
import {inventory, bestSellingTv} from "./constants/inventory.js";
import {getStock, getTotalSold, getTotalBought} from './helpers/inventoryCalculator.js';
import {formatProductName, formatProductPrice, formatProductSizes} from "./helpers/formatters.js";
import checkIcon from "./assets/check.png";
import minusIcon from "./assets/minus.png"


function App() {

    function handleMostSold(){
        console.log("De bestverkochte tv's komen eerst");
    }
    function handleCheapestFirst(){
        console.log("De goedkoopste tv's eerst");
    }
    function handleSportTV(){
        console.log("De beste tv's voor sport eerst");
    }

    return (
        <>
            <div className="inner-container">
                <h1>Tech it easy dashboard</h1>
                <section className="sales-dashboard">
                    <h2>Verkoopoverzicht</h2>
                    <div>
                        <article className="dashboard-object" id="sold-products">
                            <p>Aantal verkochte producten</p>
                            <span>{getTotalSold(inventory)}</span>
                        </article>
                        <article className="dashboard-object" id="bought-products">
                            <p>Aantal ingekochte producten</p>
                            <span>{getTotalBought(inventory)}</span>
                        </article>
                        <article className="dashboard-object" id="stock-products">
                            <p>Aantal te verkopen producten</p>
                            <span>{getStock(getTotalBought(inventory), getTotalSold(inventory))}</span>
                        </article>
                    </div>
                </section>
                <section>
                    <h2>Best verkochte tv</h2>
                    <article className="best-sold">
                        <div className="image-wrapper"><img src={bestSellingTv.sourceImg}
                                                            alt={formatProductName(bestSellingTv.brand, bestSellingTv.type, bestSellingTv.name)}/>
                        </div>
                        <div className="product-content">
                            <h3>{formatProductName(bestSellingTv.brand, bestSellingTv.type, bestSellingTv.name)}</h3>
                            <span className="product-price">{formatProductPrice(bestSellingTv.price)}</span>
                            <span className="product-sizes">{formatProductSizes(bestSellingTv.availableSizes)}</span>
                            <ul>
                                <li>
                                    <img src={checkIcon} alt="aanwezig"/> wifi
                                </li>
                                <li>
                                    <img src={minusIcon} alt="niet aanwezig"/> speech
                                </li>
                                <li>
                                    <img src={checkIcon} alt="aanwezig"/> hdr
                                </li>
                                <li>
                                    <img src={checkIcon} alt="aanwezig"/> bluetooth
                                </li>
                                <li>
                                    <img src={minusIcon} alt="niet aanwezig"/> ambiLight
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>
                <section>
                    <h2>Alle tv&rsquo;s</h2>
                    <div className="product-filters">
                        <button type="button" className="primary-button" onClick={() => {handleMostSold()}}>Meest verkocht eerst</button>
                        <button type="button" className="primary-button" onClick={() => {handleCheapestFirst()}}>Goedkoopste eerst</button>
                        <button type="button" className="primary-button" onClick={() => {handleSportTV()}}>Meest geschikt voor sport</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default App
