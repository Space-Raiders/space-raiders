export interface LieuDAtterrissage {
    id: number;
    name: string;
    city: string;
    state: string;
    photo: string;
    availableUnits: number;
    wifi: number;
    laundry: number | string | undefined;
}
