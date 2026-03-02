import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface MenuItem {
    name: string;
    description: string;
    badge?: string;
    price: bigint;
}
export interface MenuCategory {
    title: string;
    items: Array<MenuItem>;
}
export interface SpecialOffer {
    title: string;
    description: string;
}
export interface BusinessInfo {
    instagram: string;
    name: string;
    facebook: string;
    address: string;
    phone: string;
}
export interface backendInterface {
    getAllCategories(): Promise<Array<MenuCategory>>;
    getBusinessInfo(): Promise<BusinessInfo>;
    getMenuCategory(category: string): Promise<MenuCategory>;
    getSpecialOffer(): Promise<SpecialOffer>;
    initializeMenu(): Promise<void>;
    updateBusinessInfo(newInfo: BusinessInfo): Promise<void>;
    updateMenuCategory(category: string, newCategory: MenuCategory): Promise<void>;
    updateSpecialOffer(newOffer: SpecialOffer): Promise<void>;
}
