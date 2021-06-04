export interface PlantSummary {
    plantId: string,
    plantCommonName: string|null,
    plantDuration: string|null,
    plantGrowthHabit: string|null,
    plantScientificName: string|null,
    plantToxicity:number|null
}

export interface Plant {
    plantId: string,
    plantBloomPeriod: string|null,
    plantCommonName: string|null,
    plantDuration: string|null,
    plantDroughtTolerance: number|null,
    plantGrowthHabit: string|null,
    plantGrowthPeriod: string|null,
    plantMatureHeight:number|null,
    plantMinFrostFreeDays:number|null,
    plantPrecipitationMax:number|null,
    plantPrecipitationMin:number|null,
    plantRootDepthMinimum:number|null,
    plantScientificName: string|null,
    plantShadeTolerance: number|null,
    plantToxicity:number|null
}