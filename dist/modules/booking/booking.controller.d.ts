import { BookingService } from './booking.service';
import { CreateBookingDto, UpdateBookingDto } from './dto/booking.dto';
import { PrismaService } from 'src/common/prisma/prisma.service';
export declare class BookingController {
    private readonly bookingService;
    private prisma;
    constructor(bookingService: BookingService, prisma: PrismaService);
    findAll(req: Request): Promise<{
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
    createBooking(createBookingDto: CreateBookingDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        roomId: number;
        userId: number;
        guestCount: number;
        checkIn: Date;
        checkOut: Date;
    }>;
    findById(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        roomId: number;
        userId: number;
        guestCount: number;
        checkIn: Date;
        checkOut: Date;
    }>;
    updateBooking(id: number, updateBookingDto: UpdateBookingDto): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        roomId: number;
        userId: number;
        guestCount: number;
        checkIn: Date;
        checkOut: Date;
    }>;
    deleteBooking(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date | null;
        roomId: number;
        userId: number;
        guestCount: number;
        checkIn: Date;
        checkOut: Date;
    }>;
    findByUserId(id: number): Promise<{
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
