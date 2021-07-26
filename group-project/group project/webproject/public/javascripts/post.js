/*
 * @Author       : Hao Zhang
 * @Date         : 2021-05-14 18:48:32
 * @LastEditors  : Hao Zhang
 * @LastEditTime : 2021-05-14 19:07:15
 * @FilePath     : \web_project\public\javascripts\post.js
 */


var vueinst = new Vue({
    el: '#check_in_history',
    data: {

        c_text: 'Type in the check_in code',
        c_arr: [],
    },
    methods: {
        addcomment(text) {
            push_message = this.c_text + " and the detail of venue";
            this.c_arr.push(push_message);
        }
    },
})