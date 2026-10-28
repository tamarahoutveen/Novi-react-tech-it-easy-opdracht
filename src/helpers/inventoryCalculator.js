export function getTotalBought(inventory) {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        total += inventory[i].originalStock;
    }
    return total;
}

export function getTotalSold(inventory) {
    let total = 0;
    for (let i = 0; i < inventory.length; i++) {
        total += inventory[i].sold;
    }
    return total;
}

export function getStock(inventory, sold) {
    return inventory - sold;
}