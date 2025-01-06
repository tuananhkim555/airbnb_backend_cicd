import { PrismaService } from 'src/common/prisma/prisma.service';
import { LocationDto } from './dto/location.dto';
export declare class LocationService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAllLocations: (req: Request) => Promise<{
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
    createLocation: (locationDto: LocationDto) => Promise<{
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
    searchLocations: (query: any) => Promise<{
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
    getLocationById: (id: number) => Promise<{
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
    updateLocation: (id: number, locationDto: LocationDto) => Promise<{
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
    deleteLocation: (id: number) => Promise<{
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
    uploadImageLocation: (id: number, file: Express.Multer.File) => Promise<{
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
