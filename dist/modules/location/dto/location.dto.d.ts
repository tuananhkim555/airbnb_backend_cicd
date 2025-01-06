export declare class LocationDto {
    id: number;
    name_location: string;
    province: string;
    country: string;
    image: string;
}
export declare class LocationFilterDto {
    pageIndex: number;
    pageSize: number;
    keyword?: string;
}
export declare class UploadImageLocationDto {
    imageLocation: any;
}
