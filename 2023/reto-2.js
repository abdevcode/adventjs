function manufacture(gifts, materials) {
    const canManufacture = []

    const hasAllMaterials = (gift, materials) => {
        for (const material of gift) {
            if (materials.indexOf(material) === -1) return false
        }

        return true
    }

    for (const gift of gifts) {
        if (hasAllMaterials(gift, materials)) canManufacture.push(gift)
    }

    return canManufacture
}
