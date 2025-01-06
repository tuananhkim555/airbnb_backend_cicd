import { LocationService } from './location.service';
import { LocationDto, LocationFilterDto } from './dto/location.dto';
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    getAllLocations(req: Request): Promise<{
        statusCode: number;
        pageIndex: any;
        pageSize: any;
        totalItems: number;
        totalPages: number;
        items: {
            id: number;
            createdAt: Date;
            updatedAt: Date | null;
            image: string;
            name_location: string;
            province: string;
            country: string;
        }[];
    }>;
    createLocation(locationDto: LocationDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        image: string;
        name_location: string;
        province: string;
        country: string;
    } | {
        statusCode: number;
        message: string;
    }>;
    searchLocations(query: LocationFilterDto): Promise<{
        data: {
            id: number;
            name: string;
            email: string;
            password: string;
            phone: string | null;
            birthday: string | null;
            gender: import(".prisma/client").$Enums.Gender | null;
            role: import(".prisma/client").$Enums.Role | null;
            avatar: string | null;
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
        }[];
        total: number;
        currentPage: any;
        itemsPerPage: any;
    }>;
    getLocationById(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        image: string;
        name_location: string;
        province: string;
        country: string;
    } | {
        statusCode: number;
        message: string;
    }>;
    updateLocation(id: number, locationDto: LocationDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        image: string;
        name_location: string;
        province: string;
        country: string;
    } | {
        statusCode: number;
        message: string;
    }>;
    deleteLocation(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        image: string;
        name_location: string;
        province: string;
        country: string;
    } | {
        statusCode: number;
        message: string;
    }>;
    uploadAvatarCloud(file: Express.Multer.File, maViTri: string, req: any): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        image: string;
        name_location: string;
        province: string;
        country: string;
    } | {
        statusCode: number;
        message: string;
    }>;
}
