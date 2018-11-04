export interface LoginUser {
    [key: string]: any;
    account?: string; // 主帐号
    isOldUser?: string; // 用户IP
    nickname?: string; // 用户昵称
    subAccount?: string; // 子帐号
}