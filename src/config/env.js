/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
let baseUrl = 'https://www.wl521.cn/admin';
let routerMode = 'hash';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
    baseUrl = 'https://www.wl521.cn/admin';
    baseImgPath = '/img/';
} else {
    baseUrl = 'https://www.wl521.cn/admin';
    baseImgPath = 'https://www.wl521.cn/img/';
}

export {
    baseUrl,
    routerMode,
    baseImgPath
}