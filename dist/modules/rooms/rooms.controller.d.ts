import { RoomsService } from './rooms.service';
import { RoomDto, RoomFilterDto } from './dto/room.dto';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    getAllRooms(req: Request): Promise<{
        statusCode: number;
        message: string;
        pageIndex?: undefined;
        pageSize?: undefined;
        totalItems?: undefined;
        totalPages?: undefined;
        items?: undefined;
    } | {
        statusCode: number;
        pageIndex: any;
        pageSize: any;
        totalItems: number;
        totalPages: number;
        items: {
            id: number;
            name: string;
            guestCount: number;
            bedroom: number;
            bed: number;
            bathroom: number;
            description: string | null;
            price: number;
            washer: boolean;
            iron: boolean;
            tv: boolean;
            airCon: boolean;
            wifi: boolean;
            kitchen: boolean;
            parking: boolean;
            pool: boolean;
            flatIron: boolean;
            locationId: number;
            image: string | null;
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
        }[];
        message?: undefined;
    }>;
    createRoom(body: RoomDto): Promise<{
        statusCode: number;
        message: string;
        data?: undefined;
    } | {
        statusCode: number;
        message: string;
        data: {
            id: number;
            name: string;
            guestCount: number;
            bedroom: number;
            bed: number;
            bathroom: number;
            description: string | null;
            price: number;
            washer: boolean;
            iron: boolean;
            tv: boolean;
            airCon: boolean;
            wifi: boolean;
            kitchen: boolean;
            parking: boolean;
            pool: boolean;
            flatIron: boolean;
            locationId: number;
            image: string | null;
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
        };
    }>;
    getRoomByLocationId(id: number): Promise<{
        statusCode: number;
        message: string;
        data?: undefined;
    } | {
        statusCode: number;
        message: string;
        data: {
            id: number;
            name: string;
            guestCount: number;
            bedroom: number;
            bed: number;
            bathroom: number;
            description: string | null;
            price: number;
            washer: boolean;
            iron: boolean;
            tv: boolean;
            airCon: boolean;
            wifi: boolean;
            kitchen: boolean;
            parking: boolean;
            pool: boolean;
            flatIron: boolean;
            locationId: number;
            image: string | null;
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
        }[];
    }>;
    searchPaginationRooms(query: RoomFilterDto): Promise<{
        data: {
            id: number;
            name: string;
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
            email: string;
            password: string;
            phone: string | null;
            birthday: string | null;
            gender: import(".prisma/client").$Enums.Gender | null;
            role: import(".prisma/client").$Enums.Role | null;
            avatar: string | null;
        }[];
        total: number;
        currentPage: number;
        itemsPerPage: number;
    }>;
    getRoomById(id: number): Promise<{
        statusCode: number;
        message: string;
        data?: undefined;
    } | {
        statusCode: number;
        message: string;
        data: {
            id: number;
            name: string;
            guestCount: number;
            bedroom: number;
            bed: number;
            bathroom: number;
            description: string | null;
            price: number;
            washer: boolean;
            iron: boolean;
            tv: boolean;
            airCon: boolean;
            wifi: boolean;
            kitchen: boolean;
            parking: boolean;
            pool: boolean;
            flatIron: boolean;
            locationId: number;
            image: string | null;
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
        }[];
    }>;
    updateRoom(id: number, body: RoomDto): Promise<{
        statusCode: number;
        message: string;
        data?: undefined;
    } | {
        statusCode: number;
        message: string;
        data: {
            id: number;
            name: string;
            guestCount: number;
            bedroom: number;
            bed: number;
            bathroom: number;
            description: string | null;
            price: number;
            washer: boolean;
            iron: boolean;
            tv: boolean;
            airCon: boolean;
            wifi: boolean;
            kitchen: boolean;
            parking: boolean;
            pool: boolean;
            flatIron: boolean;
            locationId: number;
            image: string | null;
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
        };
    }>;
    deleteRoom(id: number): Promise<{
        statusCode: number;
        message: string;
        data?: undefined;
    } | {
        statusCode: number;
        message: string;
        data: {
            id: number;
            name: string;
            guestCount: number;
            bedroom: number;
            bed: number;
            bathroom: number;
            description: string | null;
            price: number;
            washer: boolean;
            iron: boolean;
            tv: boolean;
            airCon: boolean;
            wifi: boolean;
            kitchen: boolean;
            parking: boolean;
            pool: boolean;
            flatIron: boolean;
            locationId: number;
            image: string | null;
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
        };
    }>;
    uploadAvatarCloud(file: Express.Multer.File, roomId: string): Promise<{
        id: number;
        image: string;
        createdAt: Date;
        updatedAt: Date | null;
        name_location: string;
        province: string;
        country: string;
    } | {
        statusCode: number;
        message: string;
    }>;
}
