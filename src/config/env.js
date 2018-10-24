/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 * 
 */
let baseUrl = 'http://www.wl521.cn/admin';
let routerMode = 'hash';
let baseImgPath;

if (process.env.NODE_ENV == 'development') {
    baseUrl = 'http://www.wl521.cn/admin';
    baseImgPath = '/img/';
} else {
    baseUrl = '//www.wl521.cn/admin';
    baseImgPath = '//www.wl521.cn/img/';
}

export {
    baseUrl,
    routerMode,
    baseImgPath
}