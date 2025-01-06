import { User } from "@prisma/client";
export declare class CreateUserDto {
    name: string;
    phone: string;
    email: string;
    password: string;
    birthday: string;
    gender: string;
    role?: string;
    status: number;
}
export declare class UpdateUserDto {
    id: number;
    name: string;
    phone: string;
    email: string;
    password: string;
    birthday: string;
    gender: string;
    role?: string;
    status: number;
}
export declare class UserFilterDto {
    pageIndex: number;
    pageSize: number;
    keyword?: string;
}
export declare class UserNameSearchDto {
    name: string;
}
export interface UserPaginationResponseType {
    data: User[];
    total: number;
    currentPage: number;
    itemsPerPage: number;
}
export declare class UploadAvatarDto {
    avatar: any;
}
