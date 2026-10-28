import './App.css';
import {inventory, bestSellingTv} from "./constants/inventory.js";
import showOutcomeInConsole from "./constants/oefenbestand.js";
import {getStock, getTotalSold, getTotalBought} from './helpers/inventoryCalculator.js';
import {formatProductName, formatProductPrice, formatProductSizes} from "./helpers/formatters.js";
import checkicon from "./assets/check.png";
import minusicon from "./assets/minus.png";
import TvCard from "./components/TvCard/TvCard.jsx";
import {useState} from "react";
import PrimaryButton from "./components/PrimaryButton/PrimaryButton.jsx";

function App() {
    showOutcomeInConsole();

    const [sortedTvList, setSortedTvList] = useState(inventory);

    function handleMostSold() {
        console.log("De bestverkochte tv's eerst");
        const sorted = [...inventory].sort((a, b) => b.sold - a.sold);
        console.log(sorted);
        setSortedTvList(sorted);
    }

    function handleCheapestFirst() {
        console.log("De goedkoopste tv's eerst");
        const sorted = [...inventory].sort((a, b) => a.price - b.price);
        console.log(sorted);
        setSortedTvList(sorted);
    }

    function handleSportTV() {
        console.log("De beste tv's voor sport eerst");
        //const sorted = [...inventory].sort((a, b) => b.refreshRate - a.refreshRate);

        const filterSportTv = [...inventory].filter((tv) => tv.refreshRate >= 100);
        console.log(filterSportTv);
        setSortedTvList(filterSportTv);
    }

    function handleLargeTv() {
        console.log("De grootste tv's eerst");
        const sorted = [...inventory].sort((a, b) => {
            const largeTvA = Math.max(...a.availableSizes);
            const largeTvB = Math.max(...b.availableSizes);
            return largeTvB - largeTvA;
        });
        setSortedTvList(sorted);
    }

    function handleAvailability() {
        console.log("geklikt, hier alleen beschikbare tv's filteren");
        const filterAvailableProduct = [...inventory].filter((tv) => tv.originalStock - tv.sold >= 1);
        console.log(filterAvailableProduct);
        setSortedTvList(filterAvailableProduct);
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
                                    <img src={checkicon} alt="aanwezig"/> wifi
                                </li>
                                <li>
                                    <img src={minusicon} alt="niet aanwezig"/> speech
                                </li>
                                <li>
                                    <img src={checkicon} alt="aanwezig"/> hdr
                                </li>
                                <li>
                                    <img src={checkicon} alt="aanwezig"/> bluetooth
                                </li>
                                <li>
                                    <img src={minusicon} alt="niet aanwezig"/> ambiLight
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>
                <section>
                    <h2>Alle tv&rsquo;s</h2>
                    <div className="product-filters">
                        <PrimaryButton buttonLabel={"Bestverkocht"} onClick={() => {
                            handleMostSold()
                        }}/>
                        <PrimaryButton buttonLabel={'Prijs laag > hoog'} onClick={() => {
                            handleCheapestFirst()
                        }}/>
                        <PrimaryButton buttonLabel={"Sport tv's"} onClick={() => {
                            handleSportTV()
                        }}/>
                        <PrimaryButton buttonLabel={"Grootste tv's eerst"} onClick={() => {
                            handleLargeTv()
                        }}/>
                        <PrimaryButton buttonLabel={"Alleen beschikbare tv's"} onClick={() => {
                            handleAvailability()
                        }}/>
                    </div>
                    <div className="products">
                        {sortedTvList.map((tv, key) => {
                            key = "tv00" + key;
                            return (
                                <TvCard key={key} tv={tv}/>
                            )
                        })}
                    </div>

                </section>
            </div>
        </>
    )
}

export default App
