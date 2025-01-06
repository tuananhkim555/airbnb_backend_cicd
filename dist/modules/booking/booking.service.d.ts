import { PrismaService } from '../../common/prisma/prisma.service';
import { CreateBookingDto, UpdateBookingDto } from './dto/booking.dto';
export declare class BookingService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findAll: (req: Request) => Promise<{
        statusCode: number;
        pageIndex: any;
        pageSize: any;
        totalItems: number;
        totalPages: number;
        items: {
            id: number;
            createdAt: Date;
            updatedAt: Date | null;
            roomId: number;
            userId: number;
            guestCount: number;
            checkIn: Date;
            checkOut: Date;
        }[];
    }>;
    createBooking: (createBookingDto: CreateBookingDto) => Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        roomId: number;
        userId: number;
        guestCount: number;
        checkIn: Date;
        checkOut: Date;
    }>;
    findById: (id: number) => Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        roomId: number;
        userId: number;
        guestCount: number;
        checkIn: Date;
        checkOut: Date;
    }>;
    updateBooking: (id: number, updateBookingDto: UpdateBookingDto) => Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        roomId: number;
        userId: number;
        guestCount: number;
        checkIn: Date;
        checkOut: Date;
    }>;
    deleteBooking: (id: number) => Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        roomId: number;
        userId: number;
        guestCount: number;
        checkIn: Date;
        checkOut: Date;
    }>;
    findByUserId: (id: number) => Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        roomId: number;
        userId: number;
        guestCount: number;
        checkIn: Date;
        checkOut: Date;
    }[]>;
}
