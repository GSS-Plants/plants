export interface PartialProfile {
    profileId : string|null,
    profileEmail: string,
    profileLogin: string,
}

export interface Profile {
    profileId : string|null,
    profileActivationToken : string|null,
    profileEmail: string,
    profileHash: string,
    profileLogin: string,

}