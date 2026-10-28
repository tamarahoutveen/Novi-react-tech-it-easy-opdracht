import {inventory} from './inventory.js';

function showOutcomeInConsole() {
    //Deel 2, Opdracht 1a

    const tvTypes = inventory.map((tv) => {
        return tv.type;
    });
    console.log('Alle tv type namen in 1 array:' + tvTypes);

    //Deel 2, Opdracht 1b

    const filterSoldOut = inventory.filter((tv) => tv.originalStock - tv.sold === 0);
    console.log(filterSoldOut);

    //Deel 2, Opdracht 1c

    const findProductNHSmart = inventory.find((tv) => tv.type === "NH3216SMART");
    console.log(findProductNHSmart);

    //Deel 2, Opdracht 1d

    const sportTvs = inventory.map((tv) => {
        return {
            name: `${tv.brand} ${tv.name}`,
            suitable: tv.refreshRate >= 100
        };
    });
    console.log(sportTvs);

    //Deel 2, Opdracht 1e

    const largeTvSizes = inventory.filter((tv) => tv.availableSizes.some(tvSize => tvSize >= 65));
    console.log(largeTvSizes);

    //Deel 2, Opdracht 1f

    const ambiLightTvs = inventory.filter((tv) => tv.options[4].applicable);
    console.log(ambiLightTvs);
}

export default showOutcomeInConsole;