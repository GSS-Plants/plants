export interface PartialProfilePlant {
    profilePlantId: string,
    profilePlantNotes: string|null
}


export interface ProfilePlant {
    profilePlantId: string|null,
    profilePlantPlantId: string,
    profilePlantProfileId: string,
    profilePlantNotes: string|null,
}