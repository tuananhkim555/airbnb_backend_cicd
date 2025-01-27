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
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
            description: string | null;
            guestCount: number;
            bedroom: number;
            bed: number;
            bathroom: number;
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
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
            description: string | null;
            guestCount: number;
            bedroom: number;
            bed: number;
            bathroom: number;
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
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
            description: string | null;
            guestCount: number;
            bedroom: number;
            bed: number;
            bathroom: number;
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
        }[];
    }>;
    searchPaginationRooms(query: RoomFilterDto): Promise<{
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
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
            description: string | null;
            guestCount: number;
            bedroom: number;
            bed: number;
            bathroom: number;
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
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
            description: string | null;
            guestCount: number;
            bedroom: number;
            bed: number;
            bathroom: number;
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
            status: number;
            createdAt: Date;
            updatedAt: Date | null;
            description: string | null;
            guestCount: number;
            bedroom: number;
            bed: number;
            bathroom: number;
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
        };
    }>;
    uploadAvatarCloud(file: Express.Multer.File, roomId: string): Promise<{
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
