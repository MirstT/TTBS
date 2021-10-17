/*
 * @Descripttion: 
 * @version: 
 * @Author: Mirst
 * @Date: 2021-10-17 18:28:13
 * @LastEditors: Mirst
 * @LastEditTime: 2021-10-17 18:34:29
 */

var swiper = new Swiper('.blog-slider',{
    spaceBetween:30,
    effect:'fade',
    loop:true,
    mousewheel:{
        invert:false,
    },

    pagination:{
        el:'.blog-slider_pagination',
        clickable:true,
    }
});
