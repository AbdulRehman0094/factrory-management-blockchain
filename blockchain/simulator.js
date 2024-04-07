const { getAllEquipments } = require("./interactions/equipmentsContract");
const { updateTotalProduction, updateUnsoldProduction, getProductById, isProductExist } = require("./interactions/productsContract");

const simulator = async () => {
    const equipments = await getAllEquipments();
    for (let i = 0; i < equipments.length; i++) {
        const equipment = equipments[i];
        const productId = equipment.productId;
        if (await isProductExist(productId)) {
            if (equipment.state == 'Running') {
                const product = await getProductById(productId);
                await updateTotalProduction(product.productId, 1, equipment.userAddress);
                await updateUnsoldProduction(parseInt(product.productId.toString()), parseInt(product.unsoldProduction.toString()) + 1, equipment.userAddress);
                console.log("Production increased for equipment Id", equipment.equipmentId, ' and  ProductId', product.productId)
            }
        }
    }
}

simulator();