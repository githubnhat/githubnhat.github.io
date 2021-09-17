(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+XDa":
/*!*****************************************************************!*\
  !*** ./src/app/components/chat-screen/chat-screen.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatScreenComponent", function() { return ChatScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_check_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/check-user.service */ "X12z");
/* harmony import */ var src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/web-socket.service */ "iNhY");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/search.service */ "l3hs");
/* harmony import */ var _left_screen_left_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../left-screen/left-screen.component */ "NxVQ");
/* harmony import */ var _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../chat-window/chat-window.component */ "e2wl");











class ChatScreenComponent {
    constructor(router, checkUserService, webSocketService, userService, chatService, searchService) {
        this.router = router;
        this.checkUserService = checkUserService;
        this.webSocketService = webSocketService;
        this.userService = userService;
        this.chatService = chatService;
        this.searchService = searchService;
        this.subcription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000).subscribe((x) => {
            checkUserService.updateStatus();
        });
    }
    ngOnDestroy() {
        this.subcription.unsubscribe();
    }
    ngOnInit() {
        if (this.webSocketService.webSocket === undefined ||
            this.webSocketService.webSocket.readyState !== 1) {
            this.webSocketService.openWebSocket();
            const itv = setInterval(() => {
                if (this.webSocketService.webSocket.readyState == 1) {
                    this.reLogin();
                    clearInterval(itv);
                }
            }, 500);
        }
    }
    reLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const username = localStorage.getItem('user');
            const code = localStorage.getItem('code');
            const result = yield this.userService.checkReLogin(username, code);
            if (result.status === 'success') {
                localStorage.setItem('code', result.data.RE_LOGIN_CODE);
                const userList = yield this.chatService.getUserList();
                const chatDTOs = yield this.searchService.getUserListChat(userList['data']);
                this.webSocketService.addListChats(username, chatDTOs);
            }
            else {
                localStorage.removeItem('user');
                localStorage.removeItem('code');
                this.router.navigateByUrl('login');
            }
        });
    }
}
ChatScreenComponent.ɵfac = function ChatScreenComponent_Factory(t) { return new (t || ChatScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_check_user_service__WEBPACK_IMPORTED_MODULE_4__["CheckUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_5__["WebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_7__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"])); };
ChatScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChatScreenComponent, selectors: [["app-chat-screen"]], decls: 5, vars: 0, consts: [[1, "chat-screen"], [1, "left"], [1, "right"]], template: function ChatScreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-left-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-chat-window");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_left_screen_left_screen_component__WEBPACK_IMPORTED_MODULE_9__["LeftScreenComponent"], _chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_10__["ChatWindowComponent"]], styles: [".chat-screen[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin: 0px auto;\r\n  padding: 0 5px;\r\n  background-image: url('background.jpg');\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  height: 100%;\r\n}\r\n\r\n.chat-screen[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n  margin: 5px 0px 5px 20px;\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1Q0FBNkQ7RUFDN0QsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsV0FBVztBQUNiIiwiZmlsZSI6ImNoYXQtc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1zY3JlZW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBwYWRkaW5nOiAwIDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kLmpwZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jaGF0LXNjcmVlbiAucmlnaHQge1xyXG4gIG1hcmdpbjogNXB4IDBweCA1cHggMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\HocTap\Năm III\Project\front-end-project\chat-app\src\main.ts */"zUnb");


/***/ }),

/***/ "1eW7":
/*!*******************************************************************!*\
  !*** ./src/app/components/group-member/group-member.component.ts ***!
  \*******************************************************************/
/*! exports provided: GroupMemberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMemberComponent", function() { return GroupMemberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



function GroupMemberComponent_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GroupMemberComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupMemberComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx_r4.openRemoveMember(_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GroupMemberComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Remove member");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupMemberComponent_ng_template_8_Template_button_click_3_listener() { const modal_r6 = ctx.$implicit; return modal_r6.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Do you want to remove this member from the group?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupMemberComponent_ng_template_8_Template_button_click_10_listener() { const modal_r6 = ctx.$implicit; return modal_r6.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " No ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Yes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GroupMemberComponent {
    // @Output() removeMember: EventEmitter<any> = new EventEmitter();
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    openRemoveMember(contentRemoveMember) {
        this.modalService.open(contentRemoveMember, { centered: true, size: 'sm' });
    }
    getUserSession() {
        return localStorage.getItem("user");
    }
}
GroupMemberComponent.ɵfac = function GroupMemberComponent_Factory(t) { return new (t || GroupMemberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
GroupMemberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupMemberComponent, selectors: [["app-group-member"]], inputs: { avatar: "avatar", name: "name", own: "own" }, decls: 10, vars: 4, consts: [[1, "group-member", "ps-3", "pe-3", "mb-3"], [1, "profile"], [1, "avatar", "img-fluid", "me-3", 3, "src"], ["class", "role text-secondary", 4, "ngIf"], ["class", "remove", 3, "click", 4, "ngIf"], ["contentRemoveMember", ""], [1, "role", "text-secondary"], [1, "remove", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "closeX", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "close", 3, "click"], ["type", "button", 1, "btn", "btn-primary"]], template: function GroupMemberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, GroupMemberComponent_p_6_Template, 2, 0, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GroupMemberComponent_button_7_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GroupMemberComponent_ng_template_8_Template, 14, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.own === ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.own === ctx.getUserSession() && ctx.own !== ctx.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["p[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.group-member[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.profile[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.remove[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  background: inherit;\r\n  border: none;\r\n}\r\n\r\n.remove[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #7a8792;\r\n  font-size: 25px;\r\n}\r\n\r\n.avatar[_ngcontent-%COMP%] {\r\n  max-height: 50px;\r\n}\r\n\r\n.role[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  font-style: italic;\r\n}\r\n\r\n\r\n\r\n.closeX[_ngcontent-%COMP%] {\r\n  background-color: inherit;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.closeX[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  color: #7f7f7f;\r\n}\r\n\r\n.closeX[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover {\r\n  background-color: #d6d4d4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLW1lbWJlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUEsVUFBVTs7QUFDVjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoiZ3JvdXAtbWVtYmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5ncm91cC1tZW1iZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wcm9maWxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZW1vdmUge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5yZW1vdmUgaSB7XHJcbiAgY29sb3I6ICM3YTg3OTI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uYXZhdGFyIHtcclxuICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ucm9sZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuLyogbW9kYWwgKi9cclxuLmNsb3NlWCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uY2xvc2VYIHNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogIzdmN2Y3ZjtcclxufVxyXG5cclxuLmNsb3NlWCBzcGFuOmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jbG9zZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDRkNDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Aozx":
/*!*****************************************************************!*\
  !*** ./src/app/components/member-name/member-name.component.ts ***!
  \*****************************************************************/
/*! exports provided: MemberNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberNameComponent", function() { return MemberNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MemberNameComponent {
    constructor() {
        this.deleteMember = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    delete(id) {
        console.log(id);
        this.deleteMember.emit(id);
    }
}
MemberNameComponent.ɵfac = function MemberNameComponent_Factory(t) { return new (t || MemberNameComponent)(); };
MemberNameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberNameComponent, selectors: [["app-member-name"]], inputs: { name: "name", id: "id" }, outputs: { deleteMember: "deleteMember" }, decls: 5, vars: 1, consts: [[1, "member-name"], [1, "text"], [1, "btn-add", 3, "click"], [1, "fa", "fa-times"]], template: function MemberNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberNameComponent_Template_button_click_3_listener() { return ctx.delete(ctx.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, styles: [".member-name[_ngcontent-%COMP%] {\r\n  width: 110px;\r\n  height: 27px;\r\n  margin-left: 3px;\r\n  border: #7b8793 solid 1px;\r\n  border-radius: 5px;\r\n  padding-left: 3px;\r\n  text-align: center;\r\n  display: flex;\r\n  background-color: #f9fafc;\r\n  color: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  height: 27px;\r\n  font-size: 16px;\r\n  max-width: 73px;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n\r\n}\r\n\r\nbutton.btn-add[_ngcontent-%COMP%] {\r\n  \r\n  border: none;\r\n  border-left: none;\r\n  background: #f9fafc;\r\n  \r\n  height: 25px;\r\n  width: 25px;\r\n  color: #7b8793;\r\n  font-size: 13pt;\r\n  border-radius: 6px;\r\n  margin-left: 6px;\r\n}\r\n\r\nbutton.btn-add[_ngcontent-%COMP%]:hover {\r\n  color: #047e97;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1uYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1Qjs7QUFFekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJtZW1iZXItbmFtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbWJlci1uYW1lIHtcclxuICB3aWR0aDogMTEwcHg7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzcHg7XHJcbiAgYm9yZGVyOiAjN2I4NzkzIHNvbGlkIDFweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYztcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXgtd2lkdGg6IDczcHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cclxufVxyXG5cclxuYnV0dG9uLmJ0bi1hZGQge1xyXG4gIC8qIGZsb2F0OiByaWdodDsgKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2Y5ZmFmYztcclxuICAvKiBtYXJnaW46IDIwcHg7ICovXHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGNvbG9yOiAjN2I4NzkzO1xyXG4gIGZvbnQtc2l6ZTogMTNwdDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi1hZGQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDQ3ZTk3O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "NxVQ":
/*!*****************************************************************!*\
  !*** ./src/app/components/left-screen/left-screen.component.ts ***!
  \*****************************************************************/
/*! exports provided: LeftScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftScreenComponent", function() { return LeftScreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var src_app_services_check_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/check-user.service */ "X12z");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/search.service */ "l3hs");
/* harmony import */ var _create_chat_group_create_chat_group_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../create-chat-group/create-chat-group.component */ "xHlk");
/* harmony import */ var _join_group_join_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../join-group/join-group.component */ "uAg1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../search-item/search-item.component */ "X4iX");
/* harmony import */ var _user_chat_item_user_chat_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../user-chat-item/user-chat-item.component */ "YFs9");













function LeftScreenComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftScreenComponent_div_42_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const chat_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.selectSearchItem(chat_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-search-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const chat_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("chatDTO", chat_r5);
} }
function LeftScreenComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftScreenComponent_div_49_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const uci_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.updateStatus(uci_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-user-chat-item", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const uci_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("messageDTO", ctx_r4.getLatest(uci_r8))("isSelect", uci_r8.isSelect)("isGroup", uci_r8.isGroup)("name", uci_r8.name)("status", uci_r8.status);
} }
const _c0 = function (a0) { return { in: a0 }; };
const _c1 = function (a0, a1) { return { display: a0, opacity: a1 }; };
class LeftScreenComponent {
    constructor(router, userService, chatService, checkUserService, searchService) {
        this.router = router;
        this.userService = userService;
        this.chatService = chatService;
        this.checkUserService = checkUserService;
        this.searchService = searchService;
        this.userName = localStorage.getItem('user');
        this.name = '';
        this.visible = false;
        this.visibleAnimate = false;
        this.listSearch = [];
    }
    ngOnInit() { }
    updateStatus(chatDTO) {
        this.chatService.getListChat().forEach((element) => {
            if (element.name != chatDTO.name ||
                (element.name == chatDTO.name && element.isGroup != chatDTO.isGroup)) {
                element.isSelect = false;
            }
            else {
                element.isSelect = true;
                if (element.messages.length > 0) {
                    element.messages[element.messages.length - 1].unRead = false;
                }
                this.chatService.setSelectedChat(element);
            }
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.userService.logout();
            if (result === 'success') {
                this.chatService.clearChatSelected();
                localStorage.removeItem('user');
                this.router.navigateByUrl('login');
                this.userService.webSocketService.closeWebSocket();
            }
            else {
                alert('err');
            }
        });
    }
    getListChats() {
        return this.chatService.getListChat();
    }
    getLatest(chatDTO) {
        const length = chatDTO.messages.length;
        if (length == 0) {
            return null;
        }
        else {
            if (chatDTO.isSelect) {
                chatDTO.messages[length - 1].unRead = false;
            }
            const chatLatest = Object.assign({}, chatDTO.messages[length - 1]);
            if (chatLatest.sender === localStorage.getItem('user'))
                chatLatest.sender = 'You';
            return chatLatest;
        }
    }
    search() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.listSearch = [];
            if (this.name === undefined || this.name.trim() === '') {
                alert('You must enter username');
            }
            else {
                const chatIsGroup = this.chatService.checkChatInChatList(this.name, true);
                const chatIsNotGroup = this.chatService.checkChatInChatList(this.name, false);
                // both chats are not in the chat list
                if (chatIsGroup === null && chatIsNotGroup === null) {
                    const peopleChat = yield this.searchPeopleChat();
                    const groupChat = yield this.searchGroupchat();
                    if (peopleChat != null) {
                        this.listSearch.push(peopleChat);
                    }
                    if (groupChat != null) {
                        this.listSearch.push(groupChat);
                    }
                    if (this.listSearch.length == 1) {
                        this.chatService.setSelectedChat(this.listSearch[0]);
                        this.chatService.addChat(this.listSearch[0]);
                        this.updateStatus(this.listSearch[0]);
                    }
                    else if (this.listSearch.length == 2) {
                        this.show();
                    }
                }
                else if (chatIsGroup !== null && chatIsNotGroup === null) {
                    //only group chat is available in the chat list
                    const peopleChat = yield this.searchPeopleChat();
                    if (peopleChat != null) {
                        this.listSearch.push(chatIsGroup);
                        this.listSearch.push(peopleChat);
                        this.show();
                    }
                    else {
                        this.updateStatus(chatIsGroup);
                    }
                }
                else if (chatIsGroup === null && chatIsNotGroup !== null) {
                    //only people chat is available in the chat list
                    const groupChat = yield this.searchGroupchat();
                    if (groupChat != null) {
                        this.listSearch.push(chatIsNotGroup);
                        this.listSearch.push(groupChat);
                        this.show();
                    }
                    else {
                        this.updateStatus(chatIsNotGroup);
                    }
                }
                else {
                    // both chats are available in the chat list
                    this.listSearch.push(chatIsGroup);
                    this.listSearch.push(chatIsNotGroup);
                    this.show();
                }
                this.name = '';
            }
        });
    }
    onKey(event) {
        this.search();
    }
    searchPeopleChat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let chat;
            let listMessages = [];
            let numberPage = 1;
            let peopleChat = yield this.searchService.searchPeopleChat(this.name, numberPage);
            if (peopleChat.status === 'success') {
                // while() to check next page data
                while (peopleChat.data.length !== 0) {
                    listMessages = this.getListMessages(peopleChat.data, listMessages);
                    numberPage++;
                    peopleChat = yield this.searchService.searchPeopleChat(this.name, numberPage);
                }
                const status = (yield this.checkUserService.checkUser(this.name)) === true;
                chat = {
                    name: this.name,
                    messages: listMessages,
                    isGroup: false,
                    isSelect: false,
                    members: [],
                    status: status,
                };
            }
            else {
                return null;
            }
            return chat;
        });
    }
    searchGroupchat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let chat;
            let numberPage = 1;
            let listMessages = [];
            let groupChat = yield this.searchService.searchGroupChat(this.name, numberPage);
            // while() to check next page data
            if (groupChat.status === 'success') {
                while (groupChat.data.chatData.length !== 0) {
                    listMessages = this.getListMessages(groupChat.data.chatData, listMessages);
                    numberPage++;
                    groupChat = yield this.searchService.searchGroupChat(this.name, numberPage);
                }
                const members = this.getListMembers(groupChat.data);
                let status = false;
                // check group online
                for (const member of members) {
                    if (localStorage.getItem('user') === member)
                        continue;
                    const s = yield this.checkUserService.checkUser(member);
                    if (s) {
                        status = true;
                        break;
                    }
                }
                chat = {
                    name: groupChat.data.name,
                    messages: listMessages,
                    isGroup: true,
                    isSelect: false,
                    members: members,
                    status: status,
                };
            }
            else {
                return null;
            }
            return chat;
        });
    }
    // select peopleChat or groupChat in modal
    selectSearchItem(chatDTO) {
        const chat = this.chatService.checkChatInChatList(chatDTO.name, chatDTO.isGroup);
        // if you select an unavailable chat in chat list
        if (chat === null) {
            this.chatService.setSelectedChat(chatDTO);
            this.chatService.addChat(chatDTO);
        }
        // if you select an available chat in chat list
        this.updateStatus(chatDTO);
        this.listSearch = [];
        this.hide();
        this.name = '';
    }
    getListMessages(chatData, listMessages) {
        chatData.forEach((element) => {
            const chatMessageDTO = {
                sender: element.name,
                receiver: element.to,
                message: element.mes,
                time: new Date(Date.parse(element.createAt)).toLocaleString('es-ES'),
                unRead: false,
                position: '',
            };
            listMessages.unshift(chatMessageDTO);
        });
        return listMessages;
    }
    getListMembers(userData) {
        const members = [userData.own];
        userData.userList.forEach((element) => {
            members.push(element.name);
        });
        return members;
    }
    // modal
    show() {
        this.visible = true;
        setTimeout(() => (this.visibleAnimate = true), 100);
    }
    hide() {
        this.visibleAnimate = false;
        setTimeout(() => (this.visible = false), 20);
    }
    onContainerClicked(event) {
        if (event.target.classList.contains('contentSearchModal')) {
            this.hide();
        }
    }
}
LeftScreenComponent.ɵfac = function LeftScreenComponent_Factory(t) { return new (t || LeftScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_check_user_service__WEBPACK_IMPORTED_MODULE_5__["CheckUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"])); };
LeftScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LeftScreenComponent, selectors: [["app-left-screen"]], decls: 50, vars: 11, consts: [[1, "left-screen", "float-left"], [1, "logo-and-name"], [1, "logo", "float-left"], ["src", "../../../assets/image/logo.jpg", "alt", ""], [1, "name-chat-app", "float-left"], [1, "name"], [1, "account-holder"], [1, "avatar"], ["src", "../../../assets/image/avatar.png", "alt", "", 1, "image", "rounded-circle"], [1, "user-name"], [1, "name", "text"], [1, "btn-log-out", "float-left", 3, "click"], [1, "fa", "fa-sign-out"], [1, "container-create-group"], [1, "create-group", "float-left", 3, "click"], ["modal", ""], [1, "join-group", "float-left", 3, "click"], ["modal1", ""], [1, "box"], [1, "container-search"], ["type", "search", "id", "search", "placeholder", "Search...", 3, "ngModel", "ngModelChange", "keydown.enter"], [1, "icon", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["tabindex", "-1", 1, "modal", "fade", "modal-style", 3, "ngClass", "ngStyle", "click"], ["contentSearchModal", ""], [1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "closeX", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "members-group", "scrollbar", "style-1"], [3, "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "close", 3, "click"], [1, "list-chat-items"], ["id", "style-1", 1, "scrollbar"], [1, "force-overflow"], ["class", "chat-item", 3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "chatDTO"], [1, "chat-item", 3, "click"], [3, "messageDTO", "isSelect", "isGroup", "name", "status"]], template: function LeftScreenComponent_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Messenger");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "H5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftScreenComponent_Template_button_click_13_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftScreenComponent_Template_div_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return _r0.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Create group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-create-chat-group", null, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftScreenComponent_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](25); return _r1.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Join group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "app-join-group", null, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LeftScreenComponent_Template_input_ngModelChange_28_listener($event) { return ctx.name = $event; })("keydown.enter", function LeftScreenComponent_Template_input_keydown_enter_28_listener($event) { return ctx.onKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftScreenComponent_Template_button_click_29_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftScreenComponent_Template_div_click_31_listener($event) { return ctx.onContainerClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftScreenComponent_Template_button_click_38_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, LeftScreenComponent_div_42_Template, 2, 1, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LeftScreenComponent_Template_button_click_44_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, LeftScreenComponent_div_49_Template, 2, 5, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, ctx.visibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c1, ctx.visible ? "block" : "none", ctx.visibleAnimate ? 1 : 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getListChats());
    } }, directives: [_create_chat_group_create_chat_group_component__WEBPACK_IMPORTED_MODULE_7__["CreateChatGroupComponent"], _join_group_join_group_component__WEBPACK_IMPORTED_MODULE_8__["JoinGroupComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _search_item_search_item_component__WEBPACK_IMPORTED_MODULE_11__["SearchItemComponent"], _user_chat_item_user_chat_item_component__WEBPACK_IMPORTED_MODULE_12__["UserChatItemComponent"]], styles: [".left-screen[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n\r\n.list-chat-items[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.scrollbar[_ngcontent-%COMP%] {\r\n  opacity: 1;\r\n  background-color: transparent;\r\n  float: left;\r\n  \r\n  width: 370px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n#style-1[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 10px;\r\n  background-color: #f5f5f5;\r\n}\r\n#style-1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: #bdc0c2;\r\n  border-radius: 10px;\r\n}\r\n@media (min-width: 1600px)  {\r\n  .list-chat-items[_ngcontent-%COMP%], .scrollbar[_ngcontent-%COMP%] {\r\n    min-height: 530px;\r\n    max-height: 530px;\r\n  }\r\n}\r\n@media (min-width: 1400px) and (max-width: 1599px){\r\n  .list-chat-items[_ngcontent-%COMP%], .scrollbar[_ngcontent-%COMP%] {\r\n    min-height: 405px;\r\n    max-height: 405px;\r\n  }\r\n}\r\n@media (max-width: 1399px) {\r\n  .list-chat-items[_ngcontent-%COMP%], .scrollbar[_ngcontent-%COMP%] {\r\n    min-height: 225px;\r\n    max-height: 225px;\r\n  }\r\n}\r\n@media (max-width: 1200px) { \r\n  .list-chat-items[_ngcontent-%COMP%], .scrollbar[_ngcontent-%COMP%] {\r\n    min-height: 205px;\r\n    max-height: 205px;\r\n  }\r\n}\r\n\r\n.logo-and-name[_ngcontent-%COMP%] {\r\n  width: 370px;\r\n  height: 120px;\r\n  padding-top: 15px;\r\n  margin-left: 20px;\r\n  display: flex;\r\n  border-bottom: 3px solid #007e93;\r\n}\r\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 70px;\r\n  background: cover;\r\n  padding-top: 10px;\r\n}\r\n.user-name[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n  color: #007e93;\r\n  font-weight: 700;\r\n}\r\nh2.name[_ngcontent-%COMP%] {\r\n  width: 250px;\r\n  margin: 0px 10px;\r\n  color: #047e97;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  padding: 20px 20px;\r\n  align-items: center;\r\n}\r\n\r\n.image[_ngcontent-%COMP%] {\r\n  width: 65px;\r\n  height: 65px;\r\n  margin: 10px;\r\n}\r\n.avatar[_ngcontent-%COMP%] {\r\n  width: 90px;\r\n  display: flex;\r\n}\r\n.account-holder[_ngcontent-%COMP%] {\r\n  width: 370px;\r\n  height: 90px;\r\n  margin-left: 20px;\r\n  display: flex;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  width: 240px;\r\n  margin:  30px 0px;\r\n  font-size: 25px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\nbutton.btn-log-out[_ngcontent-%COMP%] {\r\n  \r\n  border: none;\r\n  background: none;\r\n  color: #646d77;\r\n  font-size: 10pt;\r\n}\r\nbutton.btn-log-out[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 36px;\r\n}\r\nbutton.btn-log-out[_ngcontent-%COMP%]:hover {\r\n  color: #047e97;\r\n}\r\n.create-group[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  \r\n}\r\n.join-group[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  \r\n}\r\n\r\n.container-search[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  width: 370px;\r\n  vertical-align: middle;\r\n  white-space: nowrap;\r\n  margin-left: 20px;\r\n\r\n}\r\n.container-search[_ngcontent-%COMP%]   input#search[_ngcontent-%COMP%] {\r\n  opacity: 0.7;\r\n  width: 320px;\r\n  height: 50px;\r\n  background: rgb(255, 254, 254);\r\n  border: 1px solid #dbe5ed;\r\n  border-right: none;\r\n  font-size: 10pt;\r\n  float: left;\r\n  color: #000;\r\n  padding-left: 15px;\r\n  padding-right: 5px;\r\n  outline: none;\r\n}\r\n.container-search[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%] {\r\n  opacity: 0.7;\r\n  border: 1px solid #dbe5ed;\r\n  border-left: none;\r\n  background: white;\r\n  height: 50px;\r\n  width: 50px;\r\n  color: #7b8793;\r\n  font-size: 10pt;\r\n}\r\n.container-search[_ngcontent-%COMP%]:hover   button.icon[_ngcontent-%COMP%], .container-4[_ngcontent-%COMP%]:active   button.icon[_ngcontent-%COMP%], .container-4[_ngcontent-%COMP%]:focus   button.icon[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  opacity: 1;\r\n}\r\n.container-search[_ngcontent-%COMP%]:hover   button.icon[_ngcontent-%COMP%]:hover {\r\n  background: #047e97;\r\n}\r\n.container-search[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\n\r\n.container-create-group[_ngcontent-%COMP%] {\r\n  width: 370px;\r\n  height: 50px;\r\n  margin-left: 20px;\r\n  display: flex;\r\n  cursor:pointer;\r\n\r\n}\r\n.create-group[_ngcontent-%COMP%], .join-group[_ngcontent-%COMP%]{\r\n  background: white;\r\n  opacity: 0.7;\r\n}\r\n.join-group[_ngcontent-%COMP%]{\r\n  border-left: 1px solid #d6d4d4;\r\n}\r\n.create-group[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .join-group[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 18px;\r\n  height: 50px;\r\n  margin: 15px 0px;\r\n}\r\n.create-group[_ngcontent-%COMP%]:hover, .join-group[_ngcontent-%COMP%]:hover{\r\n  background-color: #007e93;\r\n  color: #f9fafc;\r\n  opacity: 2;\r\n\r\n}\r\n.container-create-group[_ngcontent-%COMP%]   button.btn-add[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-left: none;\r\n  background: #f9fafc;\r\n  width: 20px;\r\n  color: #7b8793;\r\n  font-size: 10pt;\r\n  border-radius: 5px;\r\n}\r\n.container-create-group[_ngcontent-%COMP%]   button.btn-add[_ngcontent-%COMP%]:hover {\r\n  color: #047e97;\r\n}\r\n.closeX[_ngcontent-%COMP%] {\r\n  background-color: inherit;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.closeX[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  color: #7f7f7f;\r\n}\r\n.closeX[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n}\r\n.close[_ngcontent-%COMP%]:hover {\r\n  background-color: #d6d4d4;\r\n}\r\n.modal-style[_ngcontent-%COMP%] {\r\n  background: rgba(0, 0, 0, 0.6);\r\n}\r\n.members-group[_ngcontent-%COMP%] {\r\n  min-height: 250px;\r\n  max-height: 250px;\r\n}\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  width: 700px;\r\n  margin: 10rem auto;\r\n}\r\n.members-group.scrollbar[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 100%;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n}\r\n.members-group.style-1[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 10px;\r\n  background-color: #f5f5f5;\r\n}\r\n.members-group.style-1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: #bdc0c2;\r\n  border-radius: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZnQtc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxTQUFTO0FBQ1g7QUFDQSxvQkFBb0I7QUFDcEI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0EsZUFBZTtBQUNmO0VBQ0UsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFFQTs7R0FFRztBQUNIO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNGO0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNGO0FBSUEsMkJBQTJCO0FBQzNCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFDQSxtQkFBbUI7QUFDbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjtBQUdBLFdBQVc7QUFDWDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7O0FBRW5CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTs7O0VBR0UsYUFBYTtFQUNiLFVBQVU7QUFDWjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYzs7QUFFaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLFVBQVU7O0FBRVo7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImxlZnQtc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGVmdC1zY3JlZW4ge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4vKiBsaXN0IGNoYXQgaXRlbXMgKi9cclxuLmxpc3QtY2hhdC1pdGVtcyB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuLyogc2Nyb2xsIGJhciAqL1xyXG4uc2Nyb2xsYmFyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8qIGhlaWdodDogNTUwcHg7ICovXHJcbiAgd2lkdGg6IDM3MHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuLyogLmZvcmNlLW92ZXJmbG93IHtcclxuICBtaW4taGVpZ2h0OiA0NTBweDtcclxufSAqLyAgXHJcbiNzdHlsZS0xOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuI3N0eWxlLTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjMGMyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNjAwcHgpICB7XHJcbiAgLmxpc3QtY2hhdC1pdGVtcywgLnNjcm9sbGJhciB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MzBweDtcclxuICAgIG1heC1oZWlnaHQ6IDUzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE0MDBweCkgYW5kIChtYXgtd2lkdGg6IDE1OTlweCl7XHJcbiAgLmxpc3QtY2hhdC1pdGVtcywgLnNjcm9sbGJhciB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDVweDtcclxuICAgIG1heC1oZWlnaHQ6IDQwNXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEzOTlweCkge1xyXG4gIC5saXN0LWNoYXQtaXRlbXMsIC5zY3JvbGxiYXIge1xyXG4gICAgbWluLWhlaWdodDogMjI1cHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMjVweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIHsgXHJcbiAgLmxpc3QtY2hhdC1pdGVtcywgLnNjcm9sbGJhciB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDVweDtcclxuICAgIG1heC1oZWlnaHQ6IDIwNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKiBsb2dvIGFuZCBjaGF0IGFwcCBuYW1lICovXHJcbi5sb2dvLWFuZC1uYW1lIHtcclxuICB3aWR0aDogMzcwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjMDA3ZTkzO1xyXG59XHJcbi5sb2dvIGltZyB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgYmFja2dyb3VuZDogY292ZXI7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLnVzZXItbmFtZSBoNXtcclxuICBjb2xvcjogIzAwN2U5MztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbmgyLm5hbWUge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBtYXJnaW46IDBweCAxMHB4O1xyXG4gIGNvbG9yOiAjMDQ3ZTk3O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKiBhY2NvdW50LWhvbGRlciAqL1xyXG4uaW1hZ2Uge1xyXG4gIHdpZHRoOiA2NXB4O1xyXG4gIGhlaWdodDogNjVweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmF2YXRhciB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYWNjb3VudC1ob2xkZXIge1xyXG4gIHdpZHRoOiAzNzBweDtcclxuICBoZWlnaHQ6IDkwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4udGV4dCB7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIG1hcmdpbjogIDMwcHggMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG5idXR0b24uYnRuLWxvZy1vdXQge1xyXG4gIC8qIGJvcmRlcjogMXB4IHNvbGlkICNEQkU1RUQ7ICovXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6ICM2NDZkNzc7XHJcbiAgZm9udC1zaXplOiAxMHB0O1xyXG59XHJcbmJ1dHRvbi5idG4tbG9nLW91dCBpIHtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbn1cclxuYnV0dG9uLmJ0bi1sb2ctb3V0OmhvdmVyIHtcclxuICBjb2xvcjogIzA0N2U5NztcclxufVxyXG5cclxuLmNyZWF0ZS1ncm91cHtcclxuICB3aWR0aDogNTAlO1xyXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxufVxyXG4uam9pbi1ncm91cHtcclxuICB3aWR0aDogNTAlO1xyXG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjsgKi9cclxufVxyXG5cclxuXHJcbi8qIHNlYXJjaCAqL1xyXG4uY29udGFpbmVyLXNlYXJjaCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogMzcwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cclxufVxyXG4uY29udGFpbmVyLXNlYXJjaCBpbnB1dCNzZWFyY2gge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICB3aWR0aDogMzIwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NCwgMjU0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGJlNWVkO1xyXG4gIGJvcmRlci1yaWdodDogbm9uZTtcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyLXNlYXJjaCBidXR0b24uaWNvbiB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmU1ZWQ7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGNvbG9yOiAjN2I4NzkzO1xyXG4gIGZvbnQtc2l6ZTogMTBwdDtcclxufVxyXG4uY29udGFpbmVyLXNlYXJjaDpob3ZlciBidXR0b24uaWNvbixcclxuLmNvbnRhaW5lci00OmFjdGl2ZSBidXR0b24uaWNvbixcclxuLmNvbnRhaW5lci00OmZvY3VzIGJ1dHRvbi5pY29uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5jb250YWluZXItc2VhcmNoOmhvdmVyIGJ1dHRvbi5pY29uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDQ3ZTk3O1xyXG59XHJcbi5jb250YWluZXItc2VhcmNoIGJ1dHRvbi5pY29uOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIGNyZWF0ZSBncm91cCBjaGF0ICovXHJcbi5jb250YWluZXItY3JlYXRlLWdyb3VwIHtcclxuICB3aWR0aDogMzcwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgY3Vyc29yOnBvaW50ZXI7XHJcblxyXG59XHJcbi5jcmVhdGUtZ3JvdXAsIC5qb2luLWdyb3Vwe1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmpvaW4tZ3JvdXB7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZDZkNGQ0O1xyXG59XHJcbi5jcmVhdGUtZ3JvdXAgaDUsIC5qb2luLWdyb3VwIGg1IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IDE1cHggMHB4O1xyXG59XHJcbi5jcmVhdGUtZ3JvdXA6aG92ZXIsIC5qb2luLWdyb3VwOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdlOTM7XHJcbiAgY29sb3I6ICNmOWZhZmM7XHJcbiAgb3BhY2l0eTogMjtcclxuXHJcbn1cclxuXHJcbi5jb250YWluZXItY3JlYXRlLWdyb3VwIGJ1dHRvbi5idG4tYWRkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2Y5ZmFmYztcclxuICB3aWR0aDogMjBweDtcclxuICBjb2xvcjogIzdiODc5MztcclxuICBmb250LXNpemU6IDEwcHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5jb250YWluZXItY3JlYXRlLWdyb3VwIGJ1dHRvbi5idG4tYWRkOmhvdmVyIHtcclxuICBjb2xvcjogIzA0N2U5NztcclxufVxyXG4uY2xvc2VYIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5jbG9zZVggc3BhbiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjN2Y3ZjdmO1xyXG59XHJcblxyXG4uY2xvc2VYIHNwYW46aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNGQ0O1xyXG59XHJcbi5tb2RhbC1zdHlsZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG59XHJcbi5tZW1iZXJzLWdyb3VwIHtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBtYXgtaGVpZ2h0OiAyNTBweDtcclxufVxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luOiAxMHJlbSBhdXRvO1xyXG59XHJcbi5tZW1iZXJzLWdyb3VwLnNjcm9sbGJhciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm1lbWJlcnMtZ3JvdXAuc3R5bGUtMTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcbi5tZW1iZXJzLWdyb3VwLnN0eWxlLTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjMGMyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Qa9G":
/*!*********************************************************************!*\
  !*** ./src/app/components/member-choose/member-choose.component.ts ***!
  \*********************************************************************/
/*! exports provided: MemberChooseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberChooseComponent", function() { return MemberChooseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0, a1) { return { "background-color": a0, "border": a1 }; };
const _c1 = function (a0) { return { "background-color": a0 }; };
class MemberChooseComponent {
    constructor() {
        this.deleteMember = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addMember = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    delete(id, isSelect) {
        if (isSelect) {
            this.deleteMember.emit(id);
        }
    }
    add(id, isSelect) {
        if (!isSelect) {
            this.addMember.emit(id);
        }
    }
}
MemberChooseComponent.ɵfac = function MemberChooseComponent_Factory(t) { return new (t || MemberChooseComponent)(); };
MemberChooseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberChooseComponent, selectors: [["app-member-choose"]], inputs: { avatar: "avatar", name: "name", isSelect: "isSelect", id: "id" }, outputs: { deleteMember: "deleteMember", addMember: "addMember" }, decls: 13, vars: 20, consts: [[1, "user-item", 3, "ngStyle"], [1, "avatar", 3, "click"], ["alt", "", 1, "image", "rounded-circle", "img-fluid", 3, "src"], [1, "content", "ml-3"], [1, "content-left", 3, "click"], [1, "name", "text", "ps-2", "mb-1"], [1, "content-right", 3, "click"], [1, "btn-add", 3, "ngStyle"], [1, "fa", "fa-plus"], [1, "content-right", "float-right"], [1, "btn-add", 3, "ngStyle", "click"], [1, "fa", "fa-minus"]], template: function MemberChooseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberChooseComponent_Template_div_click_1_listener() { return ctx.add(ctx.id, ctx.isSelect); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberChooseComponent_Template_div_click_4_listener() { return ctx.add(ctx.id, ctx.isSelect); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberChooseComponent_Template_div_click_7_listener() { return ctx.add(ctx.id, ctx.isSelect); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberChooseComponent_Template_button_click_11_listener() { return ctx.delete(ctx.id, ctx.isSelect); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c0, ctx.isSelect ? "#F9FAFC" : "white", ctx.isSelect ? "1px solid #DBE5ED" : "1px solid white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx.isSelect)("show", !ctx.isSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, !ctx.isSelect ? "white" : "#F9FAFC"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isSelect)("hide", !ctx.isSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c1, ctx.isSelect ? "white" : "#F9FAFC"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".user-item[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 70px;\r\n  display: flex;\r\n  cursor: pointer;\r\n}\r\n.image[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n}\r\n.avatar[_ngcontent-%COMP%] {\r\n  width: 10%;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  height: 70px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #7b8793;\r\n}\r\n.content-left[_ngcontent-%COMP%] {\r\n  width: 86%;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  color: rgba(0, 0, 0, 0.6);\r\n\r\n}\r\n.content-right[_ngcontent-%COMP%] {\r\n  width: 14%;\r\n}\r\nbutton.btn-add[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-left: none;\r\n  margin: 20px;\r\n  height: 30px;\r\n  width: 30px;\r\n  color: #7b8793;\r\n  font-size: 13pt;\r\n  border-radius: 5px;\r\n}\r\nbutton.btn-add[_ngcontent-%COMP%]:hover {\r\n  color: #047e97;\r\n}\r\n.hide[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n.show[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1jaG9vc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix5QkFBeUI7O0FBRTNCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJtZW1iZXItY2hvb3NlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1pdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmltYWdlIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5hdmF0YXIge1xyXG4gIHdpZHRoOiAxMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jb250ZW50IHAge1xyXG4gIGNvbG9yOiAjN2I4NzkzO1xyXG59XHJcbi5jb250ZW50LWxlZnQge1xyXG4gIHdpZHRoOiA4NiU7XHJcbn1cclxuLnRleHQge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG5cclxufVxyXG4uY29udGVudC1yaWdodCB7XHJcbiAgd2lkdGg6IDE0JTtcclxufVxyXG5cclxuYnV0dG9uLmJ0bi1hZGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGNvbG9yOiAjN2I4NzkzO1xyXG4gIGZvbnQtc2l6ZTogMTNwdDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuYnV0dG9uLmJ0bi1hZGQ6aG92ZXIge1xyXG4gIGNvbG9yOiAjMDQ3ZTk3O1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2hvdyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.arrUserChatItem = [
            { status: 0, statusUser: 0, avatar: '../../../assets/image/avatar.png', name: "Minh Nhật", message: 'You: How are you?', time: '' },
            { status: 1, statusUser: 1, avatar: '../../../assets/image/avatar.png', name: "Huy Phước", message: 'You: How are you?', time: '10:23' },
            { status: 1, statusUser: 2, avatar: '../../../assets/image/avatar.png', name: "Thanh Tôn", message: 'You: How are you?', time: '6.6.21' }
        ];
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "X12z":
/*!************************************************!*\
  !*** ./src/app/services/check-user.service.ts ***!
  \************************************************/
/*! exports provided: CheckUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckUserService", function() { return CheckUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-socket.service */ "iNhY");



class CheckUserService {
    constructor(webSocketService) {
        this.webSocketService = webSocketService;
    }
    checkUser(username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.webSocketService.sendMessage(JSON.stringify({
                action: "onchat",
                data: {
                    event: "CHECK_USER",
                    data: {
                        user: username
                    }
                }
            }));
            return new Promise((resolve) => {
                const res = JSON.parse(this.webSocketService.res);
                resolve(res.data.status);
            });
        });
    }
    updateStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const chatDTOs = this.webSocketService.getListChats();
            if (chatDTOs !== undefined) {
                for (const chat of this.webSocketService.getListChats()) {
                    let status;
                    if (chat.isGroup) {
                        for (const member of chat.members) {
                            if (localStorage.getItem("user") === member)
                                continue;
                            const s = yield this.checkUser(member);
                            if (s) {
                                status = true;
                                break;
                            }
                        }
                    }
                    else
                        status = (yield this.checkUser(chat.name)) ? true : false;
                    chat.status = status;
                }
            }
        });
    }
}
CheckUserService.ɵfac = function CheckUserService_Factory(t) { return new (t || CheckUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"])); };
CheckUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CheckUserService, factory: CheckUserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "X4iX":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-item/search-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchItemComponent", function() { return SearchItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SearchItemComponent {
    constructor() {
    }
    ngOnInit() { }
}
SearchItemComponent.ɵfac = function SearchItemComponent_Factory(t) { return new (t || SearchItemComponent)(); };
SearchItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchItemComponent, selectors: [["app-search-item"]], inputs: { chatDTO: "chatDTO" }, decls: 6, vars: 2, consts: [[1, "group-member", "ps-3", "pe-3", "mb-3"], [1, "profile"], [1, "avatar", "img-fluid", "me-3", 3, "src"]], template: function SearchItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.chatDTO.isGroup ? "../../../assets/image/group-avatar.png" : "../../../assets/image/avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.chatDTO.name);
    } }, styles: ["p[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n  }\r\n  \r\n  .group-member[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n  }\r\n  \r\n  .profile[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n  }\r\n  \r\n  .remove[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    background: inherit;\r\n    border: none;\r\n  }\r\n  \r\n  .remove[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    color: #7a8792;\r\n    font-size: 25px;\r\n  }\r\n  \r\n  .avatar[_ngcontent-%COMP%] {\r\n    max-height: 50px;\r\n  }\r\n  \r\n  .role[_ngcontent-%COMP%] {\r\n    font-size: 12px;\r\n    font-style: italic;\r\n  }\r\n  \r\n  \r\n  \r\n  .closeX[_ngcontent-%COMP%] {\r\n    background-color: inherit;\r\n    border: none;\r\n    outline: none;\r\n  }\r\n  \r\n  .closeX[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n    color: #7f7f7f;\r\n  }\r\n  \r\n  .closeX[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n    color: black;\r\n  }\r\n  \r\n  .close[_ngcontent-%COMP%]:hover {\r\n    background-color: #d6d4d4;\r\n  }\r\n  \r\n  .add-members[_ngcontent-%COMP%]   .scrollbar[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  float: left;\r\n  width: 100%;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n}\r\n  \r\n  .add-members[_ngcontent-%COMP%]   .list-chat-items[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n}\r\n  \r\n  .add-members[_ngcontent-%COMP%]   .list-chat-items[_ngcontent-%COMP%], .add-members[_ngcontent-%COMP%]   .scrollbar[_ngcontent-%COMP%] {\r\n  min-height: 200px;\r\n  max-height: 200px;\r\n}\r\n  \r\n  .add-members[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%] {\r\n  height: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQSxVQUFVOztFQUNWO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFDQTtFQUNBLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0VBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0VBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7RUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzZWFyY2gtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5ncm91cC1tZW1iZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5wcm9maWxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAucmVtb3ZlIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICBcclxuICAucmVtb3ZlIGkge1xyXG4gICAgY29sb3I6ICM3YTg3OTI7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hdmF0YXIge1xyXG4gICAgbWF4LWhlaWdodDogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnJvbGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIH1cclxuICBcclxuICAvKiBtb2RhbCAqL1xyXG4gIC5jbG9zZVgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIC5jbG9zZVggc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBjb2xvcjogIzdmN2Y3ZjtcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlWCBzcGFuOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmNsb3NlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQ0ZDQ7XHJcbiAgfVxyXG4gIC5hZGQtbWVtYmVycyAuc2Nyb2xsYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uYWRkLW1lbWJlcnMgLmxpc3QtY2hhdC1pdGVtcyB7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5hZGQtbWVtYmVycyAubGlzdC1jaGF0LWl0ZW1zLFxyXG4uYWRkLW1lbWJlcnMgLnNjcm9sbGJhciB7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgbWF4LWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5hZGQtbWVtYmVycyAuY2hhdC1pdGVtIHtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "XfDf":
/*!*******************************************************************!*\
  !*** ./src/app/components/message-line/message-line.component.ts ***!
  \*******************************************************************/
/*! exports provided: MessageLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageLineComponent", function() { return MessageLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function MessageLineComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} }
function MessageLineComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.username, " ");
} }
const _c0 = function (a3) { return { "background-color": "white", color: "#504848", "border-color": "#d0c5c5", "margin-top": a3 }; };
function MessageLineComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("message-text-start", ctx_r2.position === "start")("message-text-between", ctx_r2.position === "between")("message-text-end", ctx_r2.position === "end")("message-text-single", ctx_r2.position === "single");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, (ctx_r2.position === "start" || ctx_r2.position === "single") && !ctx_r2.isGroup ? "15px" : "0px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r2.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.message);
} }
const _c1 = function (a3) { return { "background-color": "#3e9cde", color: "white", "border-color": "#3e9cde", "margin-top": a3 }; };
function MessageLineComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("message-text-start-1", ctx_r3.position === "start")("message-text-between-1", ctx_r3.position === "between")("message-text-end-1", ctx_r3.position === "end")("message-text-single-1", ctx_r3.position === "single");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, (ctx_r3.position === "start" || ctx_r3.position === "single") && !ctx_r3.isGroup ? "15px" : "0px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx_r3.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.message);
} }
const _c2 = function (a0, a1) { return { "justify-content": a0, "margin-top": a1 }; };
const _c3 = function (a0) { return { "margin-left": a0 }; };
class MessageLineComponent {
    constructor() { }
    ngOnInit() {
    }
    getUserSession() {
        return localStorage.getItem("user");
    }
}
MessageLineComponent.ɵfac = function MessageLineComponent_Factory(t) { return new (t || MessageLineComponent)(); };
MessageLineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MessageLineComponent, selectors: [["app-message-line"]], inputs: { username: "username", isGroup: "isGroup", time: "time", message: "message", position: "position" }, decls: 6, vars: 11, consts: [[1, "message-line", 3, "ngStyle"], ["src", "../../../assets/image/avatar.png", "alt", "Not found", "class", "rounded-circle", 4, "ngIf"], [1, "message-details", 3, "ngStyle"], ["class", "fullname", 4, "ngIf"], ["class", "message-text", 3, "ngStyle", "message-text-start", "message-text-between", "message-text-end", "message-text-single", 4, "ngIf"], ["class", "message-text", 3, "ngStyle", "message-text-start-1", "message-text-between-1", "message-text-end-1", "message-text-single-1", 4, "ngIf"], ["src", "../../../assets/image/avatar.png", "alt", "Not found", 1, "rounded-circle"], [1, "fullname"], [1, "message-text", 3, "ngStyle"]], template: function MessageLineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MessageLineComponent_img_1_Template, 1, 0, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MessageLineComponent_p_3_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MessageLineComponent_div_4_Template, 3, 13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MessageLineComponent_div_5_Template, 3, 13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, ctx.username === ctx.getUserSession() ? "flex-end" : "flex-start", ctx.position === "start" || ctx.position === "single" ? "30px" : "0px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username !== ctx.getUserSession() && (ctx.position === "start" || ctx.position === "single"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, (ctx.position === "end" || ctx.position === "between") && ctx.username !== ctx.getUserSession() ? "60px" : "0px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isGroup && ctx.username !== ctx.getUserSession() && (ctx.position === "start" || ctx.position === "single"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username !== ctx.getUserSession());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username === ctx.getUserSession());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".message-line[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n    padding: 0 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.message-line[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n    margin-right: 10px;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n\r\n.message-text[_ngcontent-%COMP%] {\r\n    padding: 7px 10px;\r\n    border: 1px solid #888787;\r\n    \r\n}\r\n\r\n.message-text-single[_ngcontent-%COMP%]{\r\n    border-radius: 35px;\r\n}\r\n\r\n.message-text-start[_ngcontent-%COMP%]{\r\n    border-radius: 35px;\r\n    border-bottom-left-radius: 10px;\r\n}\r\n\r\n.message-text-end[_ngcontent-%COMP%]{\r\n    border-radius: 35px;\r\n    border-top-left-radius: 10px;\r\n}\r\n\r\n.message-text-between[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n    border-top-right-radius: 35px;\r\n    border-bottom-right-radius: 35px;\r\n}\r\n\r\n.message-text-single-1[_ngcontent-%COMP%]{\r\n    border-radius: 35px;\r\n}\r\n\r\n.message-text-start-1[_ngcontent-%COMP%]{\r\n    border-radius: 35px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n.message-text-end-1[_ngcontent-%COMP%]{\r\n    border-radius: 35px;\r\n    border-top-right-radius: 10px;\r\n}\r\n\r\n.message-text-between-1[_ngcontent-%COMP%]{\r\n    border-radius: 10px;\r\n    border-top-left-radius: 35px;\r\n    border-bottom-left-radius: 35px;\r\n}\r\n\r\n.message-details[_ngcontent-%COMP%] {\r\n    max-width: 500px;\r\n    overflow-wrap: break-word;\r\n}\r\n\r\n.fullname[_ngcontent-%COMP%] {\r\n    margin: 0;\r\n    color: #151719;\r\n    font-size: 13px;\r\n    margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7O0FBRTdCOztBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLCtCQUErQjtBQUNuQzs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQzs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1QiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksU0FBUztJQUNULGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6Im1lc3NhZ2UtbGluZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2UtbGluZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1saW5lIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXRleHQge1xyXG4gICAgcGFkZGluZzogN3B4IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4Nzg3O1xyXG4gICAgXHJcbn1cclxuLm1lc3NhZ2UtdGV4dC1zaW5nbGV7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG59XHJcbi5tZXNzYWdlLXRleHQtc3RhcnR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxufVxyXG4ubWVzc2FnZS10ZXh0LWVuZHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5tZXNzYWdlLXRleHQtYmV0d2VlbntcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzNXB4O1xyXG59XHJcbi5tZXNzYWdlLXRleHQtc2luZ2xlLTF7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xyXG59XHJcbi5tZXNzYWdlLXRleHQtc3RhcnQtMXtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcclxufVxyXG4ubWVzc2FnZS10ZXh0LWVuZC0xe1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5tZXNzYWdlLXRleHQtYmV0d2Vlbi0xe1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzNXB4O1xyXG59XHJcblxyXG4ubWVzc2FnZS1kZXRhaWxzIHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4uZnVsbG5hbWUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICMxNTE3MTk7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "XofG":
/*!*******************************************************************!*\
  !*** ./src/app/components/registerform/registerform.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterformComponent", function() { return RegisterformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/web-socket.service */ "iNhY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RegisterformComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Need to enter username ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " please try again\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterformComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Password has 6 characters or more !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " please try again\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterformComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Password has space !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " please try again\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterformComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Confirm password is wrong !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " please try again\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterformComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Username already exists !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " please try again\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class RegisterformComponent {
    constructor(router, userService, webSocketService) {
        this.router = router;
        this.userService = userService;
        this.webSocketService = webSocketService;
        this.alert_username = false;
        this.alert_password = false;
        this.alert_space = false;
        this.alert_confirm = false;
        this.alert_wronguser = false;
        this.register_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            confirm_password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ngOnInit() {
        const username = localStorage.getItem('user');
        if (username !== null) {
            this.router.navigateByUrl('chat');
        }
        else {
            if (this.webSocketService.webSocket === undefined || this.webSocketService.webSocket.readyState == 3 || this.webSocketService.webSocket.readyState == 2) {
                this.webSocketService.openWebSocket();
            }
        }
    }
    signUp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let username = this.register_form.value.username == null
                ? ''
                : this.register_form.value.username;
            let password = this.register_form.value.password == null
                ? ''
                : this.register_form.value.password;
            let confirm_password = this.register_form.value.confirm_password == null
                ? ''
                : this.register_form.value.confirm_password;
            if (username.trim() === '') {
                this.onErrorUsername();
            }
            else if (password.length < 6) {
                this.onErrorPassword();
            }
            else if (password.includes(' ')) {
                this.onErrorSpace();
            }
            else if (password !== confirm_password) {
                this.onErrorConfirm();
            }
            else {
                const user = {
                    username: username,
                    password: password,
                };
                const result = yield this.userService.checkRegister(user);
                if (result === 'success') {
                    const resultLogin = yield this.userService.checkLogin(user);
                    if (resultLogin['status'] === 'success') {
                        localStorage.setItem('code', resultLogin['data']['RE_LOGIN_CODE']);
                        localStorage.setItem('user', username);
                        this.webSocketService.addListChats(username, []);
                        this.router.navigateByUrl('chat');
                    }
                    else {
                        // alert("wrong ")
                    }
                }
                else {
                    this.onErrorUser();
                    this.register_form.reset();
                }
            }
        });
    }
    returnLogin() {
        this.router.navigateByUrl('/');
    }
    // Username = null or username = ''
    onErrorUsername() {
        this.alert_username = true;
        setTimeout(() => {
            this.alert_username = false;
        }, 4000);
    }
    // Password.length >= 6
    onErrorPassword() {
        this.alert_password = true;
        setTimeout(() => {
            this.alert_password = false;
        }, 4000);
    }
    // Password has space
    onErrorSpace() {
        this.alert_space = true;
        setTimeout(() => {
            this.alert_space = false;
        }, 4000);
    }
    // Password !== confirmpassword
    onErrorConfirm() {
        this.alert_confirm = true;
        setTimeout(() => {
            this.alert_confirm = false;
        }, 4000);
    }
    // User already exists
    onErrorUser() {
        this.alert_wronguser = true;
        setTimeout(() => {
            this.alert_wronguser = false;
        }, 4000);
    }
}
RegisterformComponent.ɵfac = function RegisterformComponent_Factory(t) { return new (t || RegisterformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_5__["WebSocketService"])); };
RegisterformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterformComponent, selectors: [["app-registerform"]], decls: 22, vars: 6, consts: [["action", "", 3, "formGroup", "ngSubmit"], [1, "body"], ["src", "../../../assets/image/logo.jpg", "alt", ""], [1, "input"], [1, "md-form", "input-group", "mt-0", "mb-3", "full-width"], ["type", "text", "placeholder", "Username*", "formControlName", "username", 1, "form-control"], ["type", "password", "placeholder", "Password*", "formControlName", "password", 1, "form-control"], ["type", "password", "placeholder", "Confirm Password*", "formControlName", "confirm_password", 1, "form-control"], [1, "button-register"], [1, "button", 3, "onclick"], [1, "button-return"], [3, "click"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"]], template: function RegisterformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterformComponent_Template_form_ngSubmit_0_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onclick", function RegisterformComponent_Template_button_onclick_11_listener() { return ctx.signUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterformComponent_Template_a_click_14_listener() { return ctx.returnLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Return to login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RegisterformComponent_div_16_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RegisterformComponent_div_17_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, RegisterformComponent_div_18_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, RegisterformComponent_div_19_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, RegisterformComponent_div_20_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.register_form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alert_username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alert_password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alert_space);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alert_confirm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alert_wronguser);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["form[_ngcontent-%COMP%] {\r\n    background-image: url('background.jpg');\r\n    height: 100vh;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n    font-family: \"Times New Roman\", Times, serif;\r\n  }\r\n  \r\n  .body[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 20%;\r\n    padding: 20px 0px;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    border: 1px solid #ffffff;\r\n    margin: 0px auto;\r\n    border-radius: 40px;\r\n    width: 350px;\r\n    height: 500px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }\r\n  \r\n  .full-width[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    font-size: 18px;\r\n    margin: 0px auto;\r\n  }\r\n  \r\n  .full-width[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n    border: none;\r\n    border-bottom: 1px solid grey;\r\n    background: none;\r\n    border-radius: 0px;\r\n  }\r\n  \r\n  .body-control[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    border: none;\r\n    border-bottom: 1px solid grey;\r\n    background: none;\r\n    border-radius: 0px;\r\n  }\r\n  \r\n  .body[_ngcontent-%COMP%]   .button-register[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    background-color: #047e97;\r\n    color: white;\r\n    border: 1px solid white;\r\n    box-shadow: 5px 5px 4px grey;\r\n    font-size: 30px;\r\n    margin-bottom: 20px;\r\n    opacity: 0.9;\r\n    border: 0px;\r\n    outline: 0px;\r\n  }\r\n  \r\n  .button-register[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n    transform: scale(1.1);\r\n  }\r\n  \r\n  .button-return[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    position: inherit;\r\n    margin: 0 10px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: black;\r\n    opacity: 0.6;\r\n  }\r\n  \r\n  .button-return[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .alert[_ngcontent-%COMP%]{\r\n    top: 20px;\r\n    right: 10px;\r\n    position: absolute;\r\n    width: 450px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUNBQTZEO0lBQzdELGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBQ0E7SUFDRSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixZQUFZO0VBQ2QiLCJmaWxlIjoicmVnaXN0ZXJmb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLmJvZHkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5ib2R5IGRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgfVxyXG4gIC5mdWxsLXdpZHRoIGlucHV0e1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gIH1cclxuICAuYm9keS1jb250cm9sIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbiAgLmJvZHkgLmJ1dHRvbi1yZWdpc3RlciBidXR0b24ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ3ZTk3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDRweCBncmV5O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgb3V0bGluZTogMHB4O1xyXG4gIH1cclxuICAuYnV0dG9uLXJlZ2lzdGVyIGJ1dHRvbjpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcbiAgLmJ1dHRvbi1yZXR1cm4gYSB7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi1yZXR1cm4gYTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5hbGVydHtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ "YFs9":
/*!***********************************************************************!*\
  !*** ./src/app/components/user-chat-item/user-chat-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: UserChatItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserChatItemComponent", function() { return UserChatItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function UserChatItemComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 10);
} }
const _c0 = function (a0, a1) { return { "font-weight": a0, "color": a1 }; };
function UserChatItemComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r1.messageDTO !== null && ctx_r1.messageDTO.unRead ? "bold" : "normal", ctx_r1.messageDTO !== null && ctx_r1.messageDTO.unRead ? "#000000" : "#7B8793"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.messageDTO.sender, ": ", ctx_r1.messageDTO.message, "");
} }
function UserChatItemComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, ctx_r2.messageDTO !== null && ctx_r2.messageDTO.unRead ? "bold" : "normal", ctx_r2.messageDTO !== null && ctx_r2.messageDTO.unRead ? "#000000" : "#7B8793"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.messageDTO.message);
} }
function UserChatItemComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.messageDTO.time);
} }
const _c1 = function (a0, a1, a2) { return { "background-color": a0, "border": a1, "opacity": a2 }; };
const _c2 = function (a0) { return { "font-weight": a0 }; };
class UserChatItemComponent {
    constructor() { }
    ngOnInit() { }
}
UserChatItemComponent.ɵfac = function UserChatItemComponent_Factory(t) { return new (t || UserChatItemComponent)(); };
UserChatItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserChatItemComponent, selectors: [["app-user-chat-item"]], inputs: { isSelect: "isSelect", isGroup: "isGroup", name: "name", messageDTO: "messageDTO", status: "status" }, decls: 12, vars: 14, consts: [[1, "user-item", 3, "ngStyle"], [1, "avatar"], ["alt", "", 1, "image", "rounded-circle", 3, "src"], ["class", "status green", 4, "ngIf"], [1, "content"], [1, "content-left", "float-left"], [1, "name", "text", "ps-2", "pt-2", "mb-1", 3, "ngStyle"], ["class", "newest-message text ps-2", 3, "ngStyle", 4, "ngIf"], [1, "content-right", "float-right"], ["class", "time", 4, "ngIf"], [1, "status", "green"], [1, "newest-message", "text", "ps-2", 3, "ngStyle"], [1, "time"]], template: function UserChatItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UserChatItemComponent_div_3_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "H5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserChatItemComponent_p_8_Template, 2, 6, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserChatItemComponent_p_9_Template, 2, 5, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserChatItemComponent_p_11_Template, 2, 1, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c1, ctx.isSelect == true ? "#eeeeee" : "white", ctx.isSelect == true ? "1px solid #DBE5ED" : "1px solid white", ctx.isSelect == true ? "1" : "0.7"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.isGroup ? "../../../assets/image/group-avatar.png" : "../../../assets/image/avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c2, ctx.messageDTO !== null && ctx.messageDTO.unRead ? "bold" : "normal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageDTO !== null && ctx.isGroup || ctx.messageDTO !== null && ctx.messageDTO.sender === "You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageDTO !== null && !ctx.isGroup && ctx.messageDTO.sender !== "You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.messageDTO !== null);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".user-item[_ngcontent-%COMP%]{\r\n    width: 360px;\r\n    height: 70px;\r\n    display: flex;\r\n    cursor: pointer;\r\n}\r\n.image[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    height: 50px;\r\n    margin: 10px 10px 10px 10px;\r\n}\r\n.avatar[_ngcontent-%COMP%]{\r\n    \r\n    width: 70px;\r\n    display: flex;\r\n}\r\n.status[_ngcontent-%COMP%]{\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n    width: 10px;\r\n    height: 10px;\r\n    \r\n    margin-left: -24px;\r\n    margin-top: 48px;\r\n}\r\n.content[_ngcontent-%COMP%]{\r\n    width: 280px;\r\n    height: 70px;\r\n    display: flex;\r\n    background: transparent; \r\n\r\n}\r\n.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: #7B8793;\r\n}\r\n.content-left[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n    max-width: 60%;\r\n   \r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n.content-right[_ngcontent-%COMP%]{\r\n    width: 90px;\r\n}\r\n.time[_ngcontent-%COMP%]{\r\n    margin-top: 9px;\r\n}\r\n.yellow[_ngcontent-%COMP%]{\r\n    background-color: #FFBD08;\r\n}\r\n.green[_ngcontent-%COMP%]{\r\n    background-color: #76C00D;\r\n}\r\n.gray[_ngcontent-%COMP%]{\r\n    background-color: #AFBBC6;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItY2hhdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1Qjs7QUFFM0I7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYzs7SUFFZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCIiwiZmlsZSI6InVzZXItY2hhdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1pdGVte1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaW1hZ2V7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMTBweDtcclxufVxyXG4uYXZhdGFye1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uc3RhdHVze1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0yNHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDhweDtcclxufVxyXG4uY29udGVudHtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcblxyXG59XHJcbi5jb250ZW50IHB7XHJcbiAgICBjb2xvcjogIzdCODc5MztcclxufVxyXG4uY29udGVudC1sZWZ0e1xyXG4gICAgd2lkdGg6IDcwJTtcclxufVxyXG4udGV4dHtcclxuICAgIG1heC13aWR0aDogNjAlO1xyXG4gICBcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLmNvbnRlbnQtcmlnaHR7XHJcbiAgICB3aWR0aDogOTBweDtcclxufVxyXG4udGltZXtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxufVxyXG4ueWVsbG93e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkQwODtcclxufVxyXG4uZ3JlZW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzZDMDBEO1xyXG59XHJcbi5ncmF5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0FGQkJDNjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-emoji-picker */ "H9Do");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/loginform/loginform.component */ "liyL");
/* harmony import */ var _components_registerform_registerform_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/registerform/registerform.component */ "XofG");
/* harmony import */ var _components_message_line_message_line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/message-line/message-line.component */ "XfDf");
/* harmony import */ var _components_user_chat_item_user_chat_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-chat-item/user-chat-item.component */ "YFs9");
/* harmony import */ var _components_forgotpasswordform_forgotpasswordform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/forgotpasswordform/forgotpasswordform.component */ "ZB1s");
/* harmony import */ var _components_left_screen_left_screen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/left-screen/left-screen.component */ "NxVQ");
/* harmony import */ var _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/chat-window/chat-window.component */ "e2wl");
/* harmony import */ var _components_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/chat-screen/chat-screen.component */ "+XDa");
/* harmony import */ var _components_create_chat_group_create_chat_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/create-chat-group/create-chat-group.component */ "xHlk");
/* harmony import */ var _components_member_choose_member_choose_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/member-choose/member-choose.component */ "Qa9G");
/* harmony import */ var _components_member_name_member_name_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/member-name/member-name.component */ "Aozx");
/* harmony import */ var _components_group_member_group_member_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/group-member/group-member.component */ "1eW7");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_join_group_join_group_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/join-group/join-group.component */ "uAg1");
/* harmony import */ var _components_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/search-item/search-item.component */ "X4iX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ "fXoL");






















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_3__["NgxEmojiPickerModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_20__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_5__["LoginformComponent"],
        _components_registerform_registerform_component__WEBPACK_IMPORTED_MODULE_6__["RegisterformComponent"],
        _components_message_line_message_line_component__WEBPACK_IMPORTED_MODULE_7__["MessageLineComponent"],
        _components_user_chat_item_user_chat_item_component__WEBPACK_IMPORTED_MODULE_8__["UserChatItemComponent"],
        _components_forgotpasswordform_forgotpasswordform_component__WEBPACK_IMPORTED_MODULE_9__["ForgotpasswordformComponent"],
        _components_left_screen_left_screen_component__WEBPACK_IMPORTED_MODULE_10__["LeftScreenComponent"],
        _components_chat_window_chat_window_component__WEBPACK_IMPORTED_MODULE_11__["ChatWindowComponent"],
        _components_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_12__["ChatScreenComponent"],
        _components_create_chat_group_create_chat_group_component__WEBPACK_IMPORTED_MODULE_13__["CreateChatGroupComponent"],
        _components_member_choose_member_choose_component__WEBPACK_IMPORTED_MODULE_14__["MemberChooseComponent"],
        _components_member_name_member_name_component__WEBPACK_IMPORTED_MODULE_15__["MemberNameComponent"],
        _components_group_member_group_member_component__WEBPACK_IMPORTED_MODULE_16__["GroupMemberComponent"],
        _components_join_group_join_group_component__WEBPACK_IMPORTED_MODULE_18__["JoinGroupComponent"],
        _components_search_item_search_item_component__WEBPACK_IMPORTED_MODULE_19__["SearchItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"], ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_3__["NgxEmojiPickerModule"]] }); })();


/***/ }),

/***/ "ZB1s":
/*!*******************************************************************************!*\
  !*** ./src/app/components/forgotpasswordform/forgotpasswordform.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ForgotpasswordformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordformComponent", function() { return ForgotpasswordformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ForgotpasswordformComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    returnLogin() {
        this.router.navigateByUrl('/');
    }
}
ForgotpasswordformComponent.ɵfac = function ForgotpasswordformComponent_Factory(t) { return new (t || ForgotpasswordformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ForgotpasswordformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForgotpasswordformComponent, selectors: [["app-forgotpasswordform"]], decls: 12, vars: 0, consts: [["action", ""], [1, "body"], ["src", "../../../assets/image/logo.jpg", "alt", ""], [1, "input"], [1, "md-form", "input-group", "mt-0", "mb-3", "full-width"], ["type", "email", "placeholder", "Email*", 1, "form-control"], [1, "button-login"], ["type", "submit", 1, "button"], [1, "button-signup"], [3, "click"]], template: function ForgotpasswordformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotpasswordformComponent_Template_a_click_10_listener() { return ctx.returnLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Return to login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: ["form[_ngcontent-%COMP%] {\r\n    background-image: url('background.jpg');\r\n    height: 100vh;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n    font-family: \"Times New Roman\", Times, serif;\r\n  }\r\n  \r\n  .body[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: 20%;\r\n    padding: 20px 0px;\r\n    background-color: rgba(255, 255, 255, 0.5);\r\n    border: 1px solid #ffffff;\r\n    margin: 0px auto;\r\n    border-radius: 40px;\r\n    width: 350px;\r\n    height: 350px;\r\n    text-align: center;\r\n  }\r\n  \r\n  .body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    margin-top: 15px;\r\n  }\r\n  \r\n  .full-width[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    font-size: 18px;\r\n    margin: 0px auto;\r\n  }\r\n  \r\n  .full-width[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  border: none;\r\n  border-bottom: 1px solid grey;\r\n  background: none;\r\n  border-radius: 0px;\r\n}\r\n  \r\n  .body-control[_ngcontent-%COMP%] {\r\n    margin-top: 5px;\r\n    border: none;\r\n    border-bottom: 1px solid grey;\r\n    background: none;\r\n    border-radius: 0px;\r\n  }\r\n  \r\n  .body[_ngcontent-%COMP%]   .button-login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n    height: 50px;\r\n    border-radius: 15px;\r\n    background-color: #047e97;\r\n    color: white;\r\n    border: 1px solid white;\r\n    box-shadow: 5px 5px 4px grey;\r\n    font-size: 25px;\r\n    margin-bottom: 20px;\r\n    opacity: 0.9;\r\n\r\n  }\r\n  \r\n  .button-signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    position: inherit;\r\n    margin: 0 10px;\r\n    text-decoration: none;\r\n    font-size: 20px;\r\n    color: black;\r\n    opacity: 0.6;\r\n  }\r\n  \r\n  .button-signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n    cursor: pointer;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3N3b3JkZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUNBQTZEO0lBQzdELGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsNENBQTRDO0VBQzlDOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsMENBQTBDO0lBQzFDLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCOztFQUFFO0lBQ0EsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0VBQ0E7RUFDQSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0VBQ0U7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztFQUNBO0lBQ0UsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTs7RUFFZDs7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtFQUNqQiIsImZpbGUiOiJmb3Jnb3RwYXNzd29yZGZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlL2JhY2tncm91bmQuanBnXCIpO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xyXG4gIH1cclxuICBcclxuICAuYm9keSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwJTtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9IC5ib2R5IGRpdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuIFxyXG4gIC5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIH1cclxuICAuZnVsbC13aWR0aCBpbnB1dHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuICAuYm9keS1jb250cm9sIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICB9XHJcbiAgLmJvZHkgLmJ1dHRvbi1sb2dpbiBidXR0b24ge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ3ZTk3O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDRweCBncmV5O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuXHJcbiAgfVxyXG4gIC5idXR0b24tc2lnbnVwIGEge1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQ7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcblxyXG4gIC5idXR0b24tc2lnbnVwIGE6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "e2wl":
/*!*****************************************************************!*\
  !*** ./src/app/components/chat-window/chat-window.component.ts ***!
  \*****************************************************************/
/*! exports provided: ChatWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatWindowComponent", function() { return ChatWindowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/search.service */ "l3hs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-emoji-picker */ "H9Do");
/* harmony import */ var _message_line_message_line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message-line/message-line.component */ "XfDf");
/* harmony import */ var _group_member_group_member_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../group-member/group-member.component */ "1eW7");









const _c0 = ["scrollMe"];
function ChatWindowComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 28);
} }
function ChatWindowComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatWindowComponent_div_2_div_3_Template, 1, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r0.chat.isGroup ? "../../../assets/image/group-avatar.png" : "../../../assets/image/avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.chat.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.chat.name);
} }
function ChatWindowComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Emoji ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_4_div_3_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20); return ctx_r15.openChangeGroupName(_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Group name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Mute Notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "View Media & Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_4_div_3_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24); return ctx_r17.openAddMembers(_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Add Members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_4_div_3_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26); return ctx_r18.openMembers(_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Group Members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Something's Wrong ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_div_4_div_3_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22); return ctx_r19.openLeaveGroup(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Leave Group ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChatWindowComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "View Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Emoji ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Mute Notifications ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "View Media & Files ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Something's Wrong ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Block ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChatWindowComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatWindowComponent_div_4_div_3_Template, 31, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChatWindowComponent_div_4_div_4_Template, 25, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.chat.isGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.chat.isGroup);
} }
function ChatWindowComponent_app_message_line_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-message-line", 48);
} if (rf & 2) {
    const item_r20 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("username", item_r20.sender)("isGroup", ctx_r3.chat.isGroup)("time", item_r20.time)("message", item_r20.message)("position", item_r20.position);
} }
function ChatWindowComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Change Group Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_ng_template_19_Template_button_click_3_listener() { const modal_r21 = ctx.$implicit; return modal_r21.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Changing the name of a group chat changes it for everyone. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_ng_template_19_Template_button_click_11_listener() { const modal_r21 = ctx.$implicit; return modal_r21.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChatWindowComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Leave Group Chat?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_ng_template_21_Template_button_click_3_listener() { const modal_r24 = ctx.$implicit; return modal_r24.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " You will stop receiving messages from this conversation and people will see that you left. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_ng_template_21_Template_button_click_10_listener() { const modal_r24 = ctx.$implicit; return modal_r24.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Leave Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { width: a0 }; };
function ChatWindowComponent_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Add Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_ng_template_23_Template_button_click_3_listener() { const modal_r27 = ctx.$implicit; return modal_r27.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Members:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_ng_template_23_Template_button_click_23_listener() { const modal_r27 = ctx.$implicit; return modal_r27.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c1, ctx_r9.lengthScrollbarMember));
} }
function ChatWindowComponent_ng_template_25_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-group-member", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mb_r32 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", mb_r32)("own", ctx_r31.chat.members[0]);
} }
function ChatWindowComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_ng_template_25_Template_button_click_3_listener() { const modal_r30 = ctx.$implicit; return modal_r30.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ChatWindowComponent_ng_template_25_div_7_Template, 2, 2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_ng_template_25_Template_button_click_9_listener() { const modal_r30 = ctx.$implicit; return modal_r30.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r11.chat.members);
} }
const _c2 = function (a0) { return { visibility: a0 }; };
class ChatWindowComponent {
    constructor(modalService, chatService, searchService) {
        this.modalService = modalService;
        this.chatService = chatService;
        this.searchService = searchService;
        this.toggleEmoji = false;
        this.message = '';
        this.chat = {
            name: null,
            messages: [],
            isGroup: false,
            isSelect: false,
            members: [],
            status: false,
        };
        this.countMessages = 0;
        this.subscription = this.chatService
            .getSelectChat()
            .subscribe((value) => (this.chat = value));
    }
    ngAfterViewChecked() {
        const messages = this.chatService.getListChatMessage(this.chat);
        if (messages !== undefined) {
            if (this.countMessages !== messages.length) {
                this.scrollToBottom();
                this.countMessages = messages.length;
            }
        }
    }
    ngOnInit() {
        $('.text-message').keydown(function (e) {
            // Enter pressed
            if (e.keyCode == 13 && !e.shiftKey) {
                //method to prevent from default behavior
                e.preventDefault();
            }
        });
    }
    scrollToBottom() {
        try {
            this.myScrollContainer.nativeElement.scrollTop =
                this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
    handleSelection(event) {
        this.message += event.char;
    }
    openChangeGroupName(contentChangeGroupName) {
        this.modalService.open(contentChangeGroupName, { centered: true });
    }
    openLeaveGroup(contentLeaveGroup) {
        this.modalService.open(contentLeaveGroup, { centered: true });
    }
    openAddMembers(contentAddMembers) {
        const modal = this.modalService.open(contentAddMembers, { centered: true });
        // modal.result.then(() => { this.clearMembersChoose() }, () => { this.clearMembersChoose() })
    }
    openMembers(contentMembers) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const chatDTO = yield this.searchService.searchGroupChat(this.chat.name, 1);
            if (chatDTO.status === 'success') {
                const members = this.getListMembers(chatDTO.data);
                this.chat.members = members;
            }
            const modal = this.modalService.open(contentMembers, { centered: true });
        });
    }
    getListMembers(userData) {
        const members = [userData.own];
        userData.userList.forEach((element) => {
            members.push(element.name);
        });
        return members;
    }
    // send chat
    sendMessage() {
        if (this.message.length === 0)
            return;
        this.chatService.sendMessage(this.chat.name, this.chat.isGroup, this.message);
        this.message = '';
    }
    getListChatMessage() {
        const messages = this.chatService.getListChatMessage(this.chat);
        return messages;
    }
    onKey(event) {
        this.sendMessage();
    }
}
ChatWindowComponent.ɵfac = function ChatWindowComponent_Factory(t) { return new (t || ChatWindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_search_service__WEBPACK_IMPORTED_MODULE_4__["SearchService"])); };
ChatWindowComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatWindowComponent, selectors: [["app-chat-window"]], viewQuery: function ChatWindowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myScrollContainer = _t.first);
    } }, decls: 27, vars: 9, consts: [[1, "chat-window"], [1, "header", "row", "align-items-center"], ["class", "col-6 chat-title", 4, "ngIf"], [1, "col-5"], ["class", "col-1 chat-settings d-inline-block col-1", "ngbDropdown", "", 4, "ngIf"], [1, "content"], [1, "scrollbar", "style-1", "pt-3"], ["scrollMe", ""], [3, "username", "isGroup", "time", "message", "position", 4, "ngFor", "ngForOf"], [1, "footer", 3, "ngStyle"], ["placeholder", "Type a message...", 1, "text-message", 3, "value", "input", "keydown.enter"], ["type", "button", 1, "btn", "btn-emoji"], ["aria-hidden", "true", 1, "fa", "fa-smile-o", 3, "emojiPickerIf", "emojiPickerDirection", "click", "emojiPickerIfChange", "emojiPickerSelect"], [1, "btn-file"], ["for", "file-upload"], ["aria-hidden", "true", 1, "fa", "fa-paperclip"], ["type", "file", "id", "file-upload"], ["type", "button", 1, "btn", "btn-send", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane-o"], ["contentChangeGroupName", ""], ["contentLeaveGroup", ""], ["contentAddMembers", ""], ["contentMembers", ""], [1, "col-6", "chat-title"], [1, "avatar"], [1, "rounded-circle", 3, "src"], ["class", "status green", 4, "ngIf"], [1, "chat-name"], [1, "status", "green"], ["ngbDropdown", "", 1, "col-1", "chat-settings", "d-inline-block", "col-1"], ["type", "button", "id", "dropdownSettings", "ngbDropdownToggle", "", 1, "btn", "settings-icon"], ["aria-hidden", "true", 1, "fa", "fa-ellipsis-v"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownSettings", 4, "ngIf"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownSettings"], ["ngbDropdownItem", ""], ["aria-hidden", "true", 1, "fa", "fa-paint-brush", "me-3"], ["aria-hidden", "true", 1, "fa", "fa-smile-o", "me-3"], ["ngbDropdownItem", "", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-pencil", "me-3"], [1, "dropdown-divider"], ["aria-hidden", "true", 1, "fa", "fa-bell", "me-3"], ["aria-hidden", "true", 1, "fa", "fa-file-image-o", "me-3"], ["aria-hidden", "true", 1, "fa", "fa-user-plus", "me-3"], ["aria-hidden", "true", 1, "fa", "fa-users", "me-3"], ["aria-hidden", "true", 1, "fa", "fa-exclamation-triangle", "me-3"], ["aria-hidden", "true", 1, "fa", "fa-sign-out", "me-3"], ["aria-hidden", "true", 1, "fa", "fa-user", "me-3"], ["aria-hidden", "true", 1, "fa", "fa-minus-circle", "me-3"], [3, "username", "isGroup", "time", "message", "position"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "closeX", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "text-secondary"], ["type", "text", 1, "group-name-change"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", "close", 3, "click"], ["type", "button", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-light", "close", "ps-3", "pe-3", 3, "click"], ["type", "button", 1, "btn", "btn-danger", "ps-3", "pe-3"], [1, "modal-body", "add-members"], [1, "member-name"], [1, "title"], [1, "list-member"], ["id", "style-2", 1, "scrollbar-1"], [1, "force-overflow-1", 3, "ngStyle"], [1, "box"], [1, "container-search"], ["type", "search", "id", "search", "placeholder", "Search..."], [1, "icon"], [1, "fa", "fa-search"], [1, "list-chat-items"], [1, "scrollbar", "style-1"], [1, "force-overflow"], ["type", "button", 1, "btn", "btn-primary", "ps-3", "pe-3"], [1, "modal-body", "members-group", "scrollbar", "style-1"], ["class", "force-overflow", 4, "ngFor", "ngForOf"], ["avatar", "../../../assets/image/avatar.png", 3, "name", "own"]], template: function ChatWindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatWindowComponent_div_2_Template, 6, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ChatWindowComponent_div_4_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ChatWindowComponent_app_message_line_8_Template, 1, 5, "app-message-line", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function ChatWindowComponent_Template_textarea_input_10_listener($event) { return ctx.message = $event.target.value; })("keydown.enter", function ChatWindowComponent_Template_textarea_keydown_enter_10_listener($event) { return ctx.onKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_Template_i_click_12_listener() { return ctx.toggleEmoji = !ctx.toggleEmoji; })("emojiPickerIfChange", function ChatWindowComponent_Template_i_emojiPickerIfChange_12_listener($event) { return ctx.toggleEmoji = $event; })("emojiPickerSelect", function ChatWindowComponent_Template_i_emojiPickerSelect_12_listener($event) { return ctx.handleSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatWindowComponent_Template_button_click_17_listener() { return ctx.sendMessage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ChatWindowComponent_ng_template_19_Template, 15, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ChatWindowComponent_ng_template_21_Template, 14, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ChatWindowComponent_ng_template_23_Template, 27, 3, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ChatWindowComponent_ng_template_25_Template, 11, 1, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chat.name !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.chat.name !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getListChatMessage());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c2, ctx.chat.name === null ? "hidden" : "visible"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("emojiPickerIf", ctx.toggleEmoji)("emojiPickerDirection", "bottom" || false || false || false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], ngx_emoji_picker__WEBPACK_IMPORTED_MODULE_6__["EmojiPickerApiDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownItem"], _message_line_message_line_component__WEBPACK_IMPORTED_MODULE_7__["MessageLineComponent"], _group_member_group_member_component__WEBPACK_IMPORTED_MODULE_8__["GroupMemberComponent"]], styles: [".chat-window[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: 1px solid #007e93;\r\n  border-radius: 20px;\r\n  margin-right: 30px;\r\n}\r\n\r\n.chat-window[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\r\n  background-color: #007e93;\r\n  border-top-left-radius: 20px;\r\n  border-top-right-radius: 20px;\r\n  height: 80px;\r\n  margin: 0;\r\n  padding-left: 15px;\r\n}\r\n\r\n.chat-window[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.chat-window[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin-left: -10px;\r\n  margin-top: 30px;\r\n}\r\n\r\n.chat-window[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .chat-title[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  border: 1px solid white;\r\n}\r\n\r\n.chat-window[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .chat-name[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-weight: bold;\r\n  margin-left: 25px;\r\n  font-size: 25px;\r\n}\r\n\r\n.chat-window[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .chat-settings[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n.chat-window[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .chat-settings[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]::after {\r\n  display: none;\r\n}\r\n\r\n.chat-window[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .chat-settings[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover {\r\n  background-color: #007f92;\r\n  color: white;\r\n}\r\n\r\n.chat-window[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .chat-settings[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  width: 15px;\r\n}\r\n\r\n.chat-window[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .settings-icon[_ngcontent-%COMP%] {\r\n  font-size: 45px;\r\n  color: white;\r\n  outline: none;\r\n  box-shadow: none;\r\n}\r\n\r\n\r\n\r\n.closeX[_ngcontent-%COMP%] {\r\n  background-color: inherit;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.closeX[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  color: #7f7f7f;\r\n}\r\n\r\n.closeX[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n}\r\n\r\n.close[_ngcontent-%COMP%]:hover {\r\n  background-color: #d6d4d4;\r\n}\r\n\r\n.group-name-change[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  border: 1px solid #b6b5b5;\r\n  padding: 3px;\r\n}\r\n\r\n.group-name-change[_ngcontent-%COMP%]:focus {\r\n  outline: none !important;\r\n  border: 1px solid #007f92;\r\n}\r\n\r\n.yellow[_ngcontent-%COMP%] {\r\n  background-color: #ffbd08;\r\n}\r\n\r\n.green[_ngcontent-%COMP%] {\r\n  background-color: #76c00d;\r\n}\r\n\r\n.gray[_ngcontent-%COMP%] {\r\n  background-color: #afbbc6;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 1600px) {\r\n\r\n  .chat-window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .scrollbar[_ngcontent-%COMP%] {\r\n    min-height: 690px;\r\n    max-height: 690px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1400px) and (max-width: 1599px) {\r\n\r\n  .chat-window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .scrollbar[_ngcontent-%COMP%] {\r\n    min-height: 575px;\r\n    max-height: 575px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1399px) {\r\n\r\n  .chat-window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .scrollbar[_ngcontent-%COMP%] {\r\n    min-height: 395px;\r\n    max-height: 395px;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n\r\n  .chat-window[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%], .scrollbar[_ngcontent-%COMP%] {\r\n    min-height: 370px;\r\n    max-height: 370px;\r\n  }\r\n}\r\n\r\n.scrollbar[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 100%;\r\n  overflow-y: scroll;\r\n  height: 100%;\r\n}\r\n\r\n.style-1[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 10px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.style-1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: #bdc0c2;\r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  background: white;\r\n  border: 1px solid #007e93;\r\n  border-radius: 25px;\r\n  margin: 15px;\r\n  padding: 5px 10px 5px 20px;\r\n  max-height: 55px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .text-message[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 40px;\r\n  outline: none;\r\n  border: none;\r\n  resize: none;\r\n  padding-top: 7px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .btn-emoji[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .btn-file[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  box-shadow: none;\r\n  color: #257f8e;\r\n  font-size: 22px;\r\n  padding: 8px;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .btn-file[_ngcontent-%COMP%] > input[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .btn-file[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   .btn-send[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  padding: 6px 12px;\r\n  background-color: #76bd30;\r\n  border-radius: 50%;\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.add-members[_ngcontent-%COMP%]   .list-member[_ngcontent-%COMP%], .add-members[_ngcontent-%COMP%]   .scrollbar-1[_ngcontent-%COMP%] {\r\n  float: left;\r\n  width: 100%;\r\n  height: 36px;\r\n}\r\n\r\n.add-members[_ngcontent-%COMP%]   .scrollbar-1[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  float: left;\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.add-members[_ngcontent-%COMP%]   #style-2[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  height: 6px;\r\n  border-radius: 10px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.add-members[_ngcontent-%COMP%]   #style-2[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: #bdc0c2;\r\n  border-radius: 10px;\r\n}\r\n\r\n.add-members[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n}\r\n\r\n.add-members[_ngcontent-%COMP%]   .member-item[_ngcontent-%COMP%] {\r\n  float: left;\r\n  height: 27px;\r\n}\r\n\r\n\r\n\r\n.add-members[_ngcontent-%COMP%]   .container-search[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  \r\n  width: 100%;\r\n  vertical-align: middle;\r\n  white-space: nowrap;\r\n  padding-top: 10px;\r\n  \r\n}\r\n\r\n.add-members[_ngcontent-%COMP%]   .container-search[_ngcontent-%COMP%]   input#search[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  height: 50px;\r\n  background: white;\r\n  border: 1px solid #dbe5ed;\r\n  border-right: none;\r\n  font-size: 18px;\r\n  float: left;\r\n  color: #65737e;\r\n  padding-left: 15px;\r\n  padding-right: 5px;\r\n  outline: none;\r\n}\r\n\r\n.add-members[_ngcontent-%COMP%]   .container-search[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%] {\r\n  border: 1px solid #dbe5ed;\r\n  border-left: none;\r\n  background: white;\r\n  height: 50px;\r\n  width: 45px;\r\n  color: #7b8793;\r\n  font-size: 18px;\r\n}\r\n\r\n.add-members[_ngcontent-%COMP%]   .container-search[_ngcontent-%COMP%]:hover   button.icon[_ngcontent-%COMP%], .add-members[_ngcontent-%COMP%]   .container-4[_ngcontent-%COMP%]:active   button.icon[_ngcontent-%COMP%], .add-members[_ngcontent-%COMP%]   .container-4[_ngcontent-%COMP%]:focus   button.icon[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  opacity: 1;\r\n}\r\n\r\n.add-members[_ngcontent-%COMP%]   .container-search[_ngcontent-%COMP%]:hover   button.icon[_ngcontent-%COMP%]:hover {\r\n  background: #047e97;\r\n}\r\n\r\n.add-members[_ngcontent-%COMP%]   .container-search[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.add-members[_ngcontent-%COMP%]   .scrollbar[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  float: left;\r\n  width: 100%;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.add-members[_ngcontent-%COMP%]   .list-chat-items[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n}\r\n\r\n.add-members[_ngcontent-%COMP%]   .list-chat-items[_ngcontent-%COMP%], .add-members[_ngcontent-%COMP%]   .scrollbar[_ngcontent-%COMP%] {\r\n  min-height: 200px;\r\n  max-height: 200px;\r\n}\r\n\r\n.add-members[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%] {\r\n  height: 70px;\r\n}\r\n\r\n\r\n\r\n.members-group[_ngcontent-%COMP%] {\r\n  min-height: 345px;\r\n  max-height: 345px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQtd2luZG93LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUEsVUFBVTs7QUFDVjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLGlCQUFpQjs7QUFFakI7O0VBRUU7O0lBRUUsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBOztFQUVFOztJQUVFLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTs7RUFFRTs7SUFFRSxpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7O0VBRUU7O0lBRUUsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBLGdCQUFnQjs7QUFDaEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQSxXQUFXOztBQUNYOztFQUVFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxXQUFXOztBQUNYO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsZUFBZTs7QUFDZjtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxrQkFBa0I7O0FBQ2xCO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJjaGF0LXdpbmRvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtd2luZG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3ZTkzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uY2hhdC13aW5kb3cgLmhlYWRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2U5MztcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uY2hhdC13aW5kb3cgLmhlYWRlciAuY2hhdC10aXRsZSAuYXZhdGFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGF0LXdpbmRvdyAuaGVhZGVyIC5jaGF0LXRpdGxlIC5hdmF0YXIgLnN0YXR1cyB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcblxyXG4uY2hhdC13aW5kb3cgLmhlYWRlciAuY2hhdC10aXRsZSAuYXZhdGFyIGltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG59XHJcblxyXG4uY2hhdC13aW5kb3cgLmhlYWRlciAuY2hhdC1uYW1lIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uY2hhdC13aW5kb3cgLmhlYWRlciAuY2hhdC1zZXR0aW5ncyB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jaGF0LXdpbmRvdyAuaGVhZGVyIC5jaGF0LXNldHRpbmdzIC5kcm9wZG93bi10b2dnbGU6OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY2hhdC13aW5kb3cgLmhlYWRlciAuY2hhdC1zZXR0aW5ncyAuZHJvcGRvd24taXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2Y5MjtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jaGF0LXdpbmRvdyAuaGVhZGVyIC5jaGF0LXNldHRpbmdzIC5kcm9wZG93bi1pdGVtIGkge1xyXG4gIHdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG4uY2hhdC13aW5kb3cgLmhlYWRlciAuc2V0dGluZ3MtaWNvbiB7XHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi8qIG1vZGFsICovXHJcbi5jbG9zZVgge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jbG9zZVggc3BhbiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjN2Y3ZjdmO1xyXG59XHJcblxyXG4uY2xvc2VYIHNwYW46aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNsb3NlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNGQ0O1xyXG59XHJcblxyXG4uZ3JvdXAtbmFtZS1jaGFuZ2Uge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYjZiNWI1O1xyXG4gIHBhZGRpbmc6IDNweDtcclxufVxyXG5cclxuLmdyb3VwLW5hbWUtY2hhbmdlOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwN2Y5MjtcclxufVxyXG5cclxuLnllbGxvdyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmQwODtcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzZjMDBkO1xyXG59XHJcblxyXG4uZ3JheSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYmJjNjtcclxufVxyXG5cclxuLyogQ29udGVudCBjaGF0ICovXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcblxyXG4gIC5jaGF0LXdpbmRvdyAuY29udGVudCxcclxuICAuc2Nyb2xsYmFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDY5MHB4O1xyXG4gICAgbWF4LWhlaWdodDogNjkwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTQwMHB4KSBhbmQgKG1heC13aWR0aDogMTU5OXB4KSB7XHJcblxyXG4gIC5jaGF0LXdpbmRvdyAuY29udGVudCxcclxuICAuc2Nyb2xsYmFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDU3NXB4O1xyXG4gICAgbWF4LWhlaWdodDogNTc1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTM5OXB4KSB7XHJcblxyXG4gIC5jaGF0LXdpbmRvdyAuY29udGVudCxcclxuICAuc2Nyb2xsYmFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDM5NXB4O1xyXG4gICAgbWF4LWhlaWdodDogMzk1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4gIC5jaGF0LXdpbmRvdyAuY29udGVudCxcclxuICAuc2Nyb2xsYmFyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDM3MHB4O1xyXG4gICAgbWF4LWhlaWdodDogMzcwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2Nyb2xsYmFyIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc3R5bGUtMTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uc3R5bGUtMTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZGMwYzI7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLyogRm9vdGVyIGNoYXQgKi9cclxuLmZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdlOTM7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDIwcHg7XHJcbiAgbWF4LWhlaWdodDogNTVweDtcclxufVxyXG5cclxuLmZvb3RlciAudGV4dC1tZXNzYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIHBhZGRpbmctdG9wOiA3cHg7XHJcbn1cclxuXHJcbi5mb290ZXIgLmJ0bi1lbW9qaSxcclxuLmZvb3RlciAuYnRuLWZpbGUsXHJcbi5mb290ZXIgLmJ0bi1zZW5kIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgY29sb3I6ICMyNTdmOGU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmZvb3RlciAuYnRuLWZpbGU+aW5wdXQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXIgLmJ0bi1maWxlIGxhYmVsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb290ZXIgLmJ0bi1zZW5kIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBwYWRkaW5nOiA2cHggMTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzZiZDMwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIG1lbWJlciAqL1xyXG4uYWRkLW1lbWJlcnMgLmxpc3QtbWVtYmVyLFxyXG4uYWRkLW1lbWJlcnMgLnNjcm9sbGJhci0xIHtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5hZGQtbWVtYmVycyAuc2Nyb2xsYmFyLTEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG5cclxuLmFkZC1tZW1iZXJzICNzdHlsZS0yOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgaGVpZ2h0OiA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4uYWRkLW1lbWJlcnMgI3N0eWxlLTI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjMGMyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5hZGQtbWVtYmVycyAubWVtYmVyLW5hbWUge1xyXG4gIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmFkZC1tZW1iZXJzIC5tZW1iZXItaXRlbSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG59XHJcblxyXG4vKiBzZWFyY2ggKi9cclxuLmFkZC1tZW1iZXJzIC5jb250YWluZXItc2VhcmNoIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIC8qIHdpZHRoOiA2MzRweDsgKi9cclxuICB3aWR0aDogMTAwJTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDIwcHg7ICovXHJcbn1cclxuXHJcbi5hZGQtbWVtYmVycyAuY29udGFpbmVyLXNlYXJjaCBpbnB1dCNzZWFyY2gge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmU1ZWQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogIzY1NzM3ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5hZGQtbWVtYmVycyAuY29udGFpbmVyLXNlYXJjaCBidXR0b24uaWNvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZTVlZDtcclxuICBib3JkZXItbGVmdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgY29sb3I6ICM3Yjg3OTM7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYWRkLW1lbWJlcnMgLmNvbnRhaW5lci1zZWFyY2g6aG92ZXIgYnV0dG9uLmljb24sXHJcbi5hZGQtbWVtYmVycyAuY29udGFpbmVyLTQ6YWN0aXZlIGJ1dHRvbi5pY29uLFxyXG4uYWRkLW1lbWJlcnMgLmNvbnRhaW5lci00OmZvY3VzIGJ1dHRvbi5pY29uIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5hZGQtbWVtYmVycyAuY29udGFpbmVyLXNlYXJjaDpob3ZlciBidXR0b24uaWNvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzA0N2U5NztcclxufVxyXG5cclxuLmFkZC1tZW1iZXJzIC5jb250YWluZXItc2VhcmNoIGJ1dHRvbi5pY29uOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi8qIHNjcm9sbCBiYXIgKi9cclxuLmFkZC1tZW1iZXJzIC5zY3JvbGxiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5hZGQtbWVtYmVycyAubGlzdC1jaGF0LWl0ZW1zIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuLmFkZC1tZW1iZXJzIC5saXN0LWNoYXQtaXRlbXMsXHJcbi5hZGQtbWVtYmVycyAuc2Nyb2xsYmFyIHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmFkZC1tZW1iZXJzIC5jaGF0LWl0ZW0ge1xyXG4gIGhlaWdodDogNzBweDtcclxufVxyXG5cclxuLyogbWVtYmVycyBncm91cCAqL1xyXG4ubWVtYmVycy1ncm91cCB7XHJcbiAgbWluLWhlaWdodDogMzQ1cHg7XHJcbiAgbWF4LWhlaWdodDogMzQ1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "iNhY":
/*!************************************************!*\
  !*** ./src/app/services/web-socket.service.ts ***!
  \************************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WebSocketService {
    constructor() {
        this.chatStorage = {};
    }
    openWebSocket() {
        this.webSocket = new WebSocket('ws://203.113.148.132:23023/chat/chat');
        this.webSocket.onopen = (event) => {
            console.log('Open', event);
        };
        this.webSocket.onclose = (event) => {
            console.log('Close', event);
        };
    }
    sendMessage(message) {
        this.webSocket.send(message);
        return new Promise((resolve) => {
            this.webSocket.onmessage = (event) => {
                const response = JSON.parse(event.data);
                if (response.event === 'SEND_CHAT') {
                    const isGroup = response.data.type === 0 ? false : true;
                    const chatMessage = {
                        sender: response.data.name,
                        receiver: response.data.to,
                        message: response.data.mes,
                        time: new Date().toLocaleString('es-ES'),
                        unRead: true,
                        position: ""
                    };
                    this.addChatMessage(chatMessage, false, isGroup);
                }
                this.res = event.data;
                resolve(this.res);
            };
        });
    }
    sendChatMessage(message) {
        this.webSocket.send(message);
    }
    closeWebSocket() {
        this.webSocket.close();
    }
    searchGroupChat(groupName, page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.sendMessage(JSON.stringify({
                action: 'onchat',
                data: {
                    event: 'GET_ROOM_CHAT_MES',
                    data: {
                        name: groupName,
                        page: page,
                    },
                },
            }));
            return new Promise((resolve) => {
                const res = JSON.parse(this.res);
                resolve(res);
            });
        });
    }
    searchPeopleChat(groupName, page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.sendMessage(JSON.stringify({
                action: 'onchat',
                data: {
                    event: 'GET_PEOPLE_CHAT_MES',
                    data: {
                        name: groupName,
                        page: page,
                    },
                },
            }));
            return new Promise((resolve) => {
                const res = JSON.parse(this.res);
                resolve(res);
            });
        });
    }
    addChatMessage(chatMessage, isSend, isGroup) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let name;
            if (isGroup) {
                name = chatMessage.receiver;
            }
            else {
                name = isSend ? chatMessage.receiver : chatMessage.sender;
            }
            const hasChat = this.hasChat(name, isGroup);
            if (hasChat) {
                let chat;
                this.chatStorage[this.getUserSession()].forEach((e) => {
                    if (e.name.toLowerCase() === name.toLowerCase() && e.isGroup === isGroup) {
                        e.messages.push(chatMessage);
                        chat = e;
                        const index = this.chatStorage[this.getUserSession()].indexOf(e);
                        this.chatStorage[this.getUserSession()].splice(index, 1);
                        return;
                    }
                });
                this.chatStorage[this.getUserSession()].unshift(chat);
            }
            else {
                let chatDTO = {
                    name: name,
                    messages: [chatMessage],
                    isGroup: isGroup,
                    isSelect: isSend ? true : false,
                    members: [],
                    status: false,
                };
                // trick
                if (!chatDTO.isGroup) {
                    yield this.searchPeopleChat(chatDTO.name, 1);
                }
                if (chatDTO.isGroup) {
                    yield this.searchGroupChat(chatDTO.name, 1);
                }
                chatDTO = yield this.updateNewChat(chatDTO);
                this.chatStorage[this.getUserSession()].unshift(chatDTO);
            }
        });
    }
    hasChat(name, isGroup) {
        for (const element of this.chatStorage[this.getUserSession()])
            if (element.name.toLowerCase() === name.toLowerCase() &&
                element.isGroup === isGroup)
                return true;
        return false;
    }
    getUserSession() {
        return localStorage.getItem('user');
    }
    getListChats() {
        return this.chatStorage[this.getUserSession()];
    }
    addListChats(username, chatDTOs) {
        // if (this.chatStorage[username] === undefined) {
        this.chatStorage[username] = chatDTOs;
        // }
    }
    updateNewChat(chatDTO) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let numberPage = 1;
            let listMessages = [];
            if (chatDTO.isGroup) {
                let groupChat = yield this.searchGroupChat(chatDTO.name, numberPage);
                if (groupChat.status === 'success') {
                    // while() to check next page data
                    while (groupChat.data.chatData.length !== 0) {
                        listMessages = this.getListMessages(groupChat.data.chatData, listMessages);
                        numberPage++;
                        groupChat = yield this.searchGroupChat(chatDTO.name, numberPage);
                    }
                    const members = this.getListMembers(groupChat.data);
                    listMessages[listMessages.length - 1].unRead = true;
                    chatDTO.messages = listMessages;
                    chatDTO.members = members;
                }
            }
            else {
                let peopleChat = yield this.searchPeopleChat(chatDTO.name, numberPage);
                if (peopleChat.status === 'success') {
                    // while() to check next page data
                    while (peopleChat.data.length !== 0) {
                        listMessages = this.getListMessages(peopleChat.data, listMessages);
                        numberPage++;
                        peopleChat = yield this.searchPeopleChat(chatDTO.name, numberPage);
                    }
                    listMessages[listMessages.length - 1].unRead = true;
                    chatDTO.messages = listMessages;
                }
            }
            return chatDTO;
        });
    }
    getListMessages(chatData, listMessages) {
        chatData.forEach((element) => {
            const chatMessageDTO = {
                sender: element.name,
                receiver: element.to,
                message: element.mes,
                time: new Date(Date.parse(element.createAt)).toLocaleString('es-ES'),
                unRead: false,
                position: ""
            };
            listMessages.unshift(chatMessageDTO);
        });
        return listMessages;
    }
    getListMembers(userData) {
        const members = [userData.own];
        userData.userList.forEach((element) => {
            members.push(element.name);
        });
        return members;
    }
}
WebSocketService.ɵfac = function WebSocketService_Factory(t) { return new (t || WebSocketService)(); };
WebSocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WebSocketService, factory: WebSocketService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "l3hs":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-socket.service */ "iNhY");



class SearchService {
    constructor(webSocketService) {
        this.webSocketService = webSocketService;
    }
    searchGroupChat(groupName, page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.webSocketService.sendMessage(JSON.stringify({
                action: 'onchat',
                data: {
                    event: 'GET_ROOM_CHAT_MES',
                    data: {
                        name: groupName,
                        page: page,
                    },
                },
            }));
            return new Promise((resolve) => {
                const res = JSON.parse(this.webSocketService.res);
                resolve(res);
            });
        });
    }
    searchPeopleChat(username, page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.webSocketService.sendMessage(JSON.stringify({
                action: 'onchat',
                data: {
                    event: 'GET_PEOPLE_CHAT_MES',
                    data: {
                        name: username,
                        page: page,
                    },
                },
            }));
            return new Promise((resolve) => {
                const res = JSON.parse(this.webSocketService.res);
                resolve(res);
            });
        });
    }
    getUserListChat(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = [];
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                let chatDTO;
                let pageNumber = 1;
                if (element['type'] === 0) {
                    let messages = yield this.searchPeopleChat(element['name'], pageNumber);
                    let listMessages = [];
                    if (messages['status'] === 'success') {
                        while (messages['data'].length != 0) {
                            listMessages = this.getListMessage(messages['data'], listMessages);
                            pageNumber++;
                            messages = yield this.searchPeopleChat(element['name'], pageNumber);
                        }
                        chatDTO = {
                            name: element['name'],
                            messages: listMessages,
                            isGroup: false,
                            isSelect: false,
                            members: [],
                            status: false,
                        };
                        result.push(chatDTO);
                    }
                }
                else if (element['type'] === 1) {
                    let messages = yield this.searchGroupChat(element['name'], pageNumber);
                    let listMessages = [];
                    if (messages['status'] === 'success') {
                        const members = this.getListMembers(messages['data']);
                        while (messages['data']['chatData'].length != 0) {
                            listMessages = this.getListMessage(messages['data']['chatData'], listMessages);
                            pageNumber++;
                            messages = yield this.searchGroupChat(element['name'], pageNumber);
                        }
                        chatDTO = {
                            name: element['name'],
                            messages: listMessages,
                            isGroup: true,
                            isSelect: false,
                            members: members,
                            status: false,
                        };
                        result.push(chatDTO);
                    }
                }
            }
            return result;
        });
    }
    getListMessage(data, listMessages) {
        data.forEach((element) => {
            const chatMessageDTO = {
                sender: element.name,
                receiver: element.to,
                message: element.mes,
                time: new Date(Date.parse(element.createAt)).toLocaleString('es-ES'),
                unRead: false,
                position: '',
            };
            listMessages.unshift(chatMessageDTO);
        });
        return listMessages;
    }
    getListMembers(userData) {
        const members = [userData.own];
        userData.userList.forEach((element) => {
            members.push(element.name);
        });
        return members;
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"])); };
SearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "liyL":
/*!*************************************************************!*\
  !*** ./src/app/components/loginform/loginform.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginformComponent", function() { return LoginformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/web-socket.service */ "iNhY");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "qfBg");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/search.service */ "l3hs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");










function LoginformComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Need to enter username !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " please try again\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginformComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Password has 6 characters or more !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " please try again\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginformComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Password has space !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " please try again\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginformComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Incorrect username or password !");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " please try again\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class LoginformComponent {
    constructor(router, webSocketService, userService, chatService, searchService) {
        this.router = router;
        this.webSocketService = webSocketService;
        this.userService = userService;
        this.chatService = chatService;
        this.searchService = searchService;
        this.alert_username = false;
        this.alert_password = false;
        this.alert_space = false;
        this.alert = false;
        this.login_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ngOnInit() {
        const username = localStorage.getItem('user');
        if (username !== null) {
            this.router.navigateByUrl('chat');
        }
        else {
            if (this.webSocketService.webSocket === undefined || this.webSocketService.webSocket.readyState == 3 || this.webSocketService.webSocket.readyState == 2) {
                this.webSocketService.openWebSocket();
            }
        }
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let username = this.login_form.value.username == null
                ? ' '
                : this.login_form.value.username;
            let password = this.login_form.value.password == null
                ? ' '
                : this.login_form.value.password;
            if (username.trim() === '') {
                this.onErrorUsername();
            }
            else if (password.length < 6) {
                this.onErrorPassword();
            }
            else if (password.includes(' ')) {
                this.onErrorSpace();
            }
            else {
                const user = {
                    username: username,
                    password: password,
                };
                const result = yield this.userService.checkLogin(user);
                if (result.status === 'success') {
                    localStorage.setItem('user', username);
                    localStorage.setItem('code', result.data.RE_LOGIN_CODE);
                    const userList = yield this.chatService.getUserList();
                    const chatDTOs = yield this.searchService.getUserListChat(userList['data']);
                    this.webSocketService.addListChats(username, chatDTOs);
                    this.router.navigateByUrl('chat');
                }
                else {
                    this.onError();
                    this.login_form.reset();
                }
            }
        });
    }
    register() {
        this.router.navigateByUrl('register');
    }
    forgotpassword() {
        this.router.navigateByUrl('forgotpassword');
    }
    onError() {
        this.alert = true;
        setTimeout(() => {
            this.alert = false;
        }, 4000);
    }
    // Username = null or username = ''
    onErrorUsername() {
        this.alert_username = true;
        setTimeout(() => {
            this.alert_username = false;
        }, 4000);
    }
    // Password.length >= 6
    onErrorPassword() {
        this.alert_password = true;
        setTimeout(() => {
            this.alert_password = false;
        }, 4000);
    }
    // Password has space
    onErrorSpace() {
        this.alert_space = true;
        setTimeout(() => {
            this.alert_space = false;
        }, 4000);
    }
}
LoginformComponent.ɵfac = function LoginformComponent_Factory(t) { return new (t || LoginformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_web_socket_service__WEBPACK_IMPORTED_MODULE_4__["WebSocketService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_search_service__WEBPACK_IMPORTED_MODULE_7__["SearchService"])); };
LoginformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginformComponent, selectors: [["app-loginform"]], decls: 24, vars: 5, consts: [["action", "", 3, "formGroup", "ngSubmit"], [1, "body"], ["src", "../../../assets/image/logo.jpg", "alt", ""], [1, "input"], [1, "md-form", "input-group", "mt-0", "mb-3", "full-width"], ["type", "text", "id", "Username", "placeholder", "Username*", "formControlName", "username", 1, "form-control"], ["type", "password", "placeholder", "Password*", "formControlName", "password", 1, "form-control"], ["type", "submit", 3, "click"], [1, "button-login"], ["type", "submit", 1, "button", 3, "onclick"], [1, "button-signup"], ["type", "submit", 1, "button", 3, "click"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-danger"]], template: function LoginformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function LoginformComponent_Template_form_ngSubmit_0_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginformComponent_Template_a_click_8_listener() { return ctx.forgotpassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Forgot your password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onclick", function LoginformComponent_Template_button_onclick_11_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginformComponent_Template_a_click_15_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Don't have account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginformComponent_Template_a_click_17_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Sign up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, LoginformComponent_div_19_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, LoginformComponent_div_20_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, LoginformComponent_div_21_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, LoginformComponent_div_22_Template, 4, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.login_form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alert_username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alert_password);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alert_space);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.alert);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["form[_ngcontent-%COMP%] {\r\n  background-image: url('background.jpg');\r\n  height: 100vh;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  width: 100%;\r\n  font-family: \"Times New Roman\", Times, serif;\r\n}\r\n\r\n.body[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 20%;\r\n  padding: 20px 0px;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n  border: 1px solid #ffffff;\r\n  margin: 0px auto;\r\n  border-radius: 40px;\r\n  width: 350px;\r\n  height: 500px;\r\n  text-align: center;\r\n}\r\n\r\n.body-control[_ngcontent-%COMP%] {\r\n  margin-top: 5px;\r\n  border: none;\r\n  border-bottom: 1px solid grey;\r\n  background: none;\r\n  border-radius: 0px;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\n.full-width[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  font-size: 18px;\r\n  margin: 0px auto;\r\n}\r\n\r\n.full-width[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\r\n  border: none;\r\n  border-bottom: 1px solid grey;\r\n  background: none;\r\n  border-radius: 0px;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  color: black;\r\n  opacity: 0.6;\r\n  left: 15%;\r\n  font-size: 18px;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .button-login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  width: 70%;\r\n  height: 50px;\r\n  border-radius: 15px;\r\n  background-color: #047e97;\r\n  color: white;\r\n  border: 1px solid white;\r\n  box-shadow: 5px 5px 4px grey;\r\n  font-size: 30px;\r\n  margin-bottom: 20px;\r\n  opacity: 0.9;\r\n  border: 0px;\r\n  outline: 0px;\r\n}\r\n\r\n.body[_ngcontent-%COMP%]   .button-signup[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  border-radius: 15px;\r\n  background-color: #047e97;\r\n  color: white;\r\n  border: 1px solid white;\r\n  box-shadow: 5px 5px 4px grey;\r\n  padding: 10px;\r\n  font-size: 18px;\r\n  text-transform: uppercase;\r\n  opacity: 0.9;\r\n  border:0px;\r\n  outline: 0px;\r\n\r\n}\r\n\r\n.button-signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  position: inherit;\r\n  margin: 0 10px;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n \r\n}\r\n\r\n.button-signup[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  transform: scale(1.1);\r\n}\r\n\r\n.button-login[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{\r\n  transform: scale(1.1);\r\n}\r\n\r\n.alert[_ngcontent-%COMP%]{\r\n  top: 20px;\r\n  right: 10px;\r\n  position: absolute;\r\n  width: 450px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUNBQTZEO0VBQzdELGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsMENBQTBDO0VBQzFDLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsNEJBQTRCO0VBQzVCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osVUFBVTtFQUNWLFlBQVk7O0FBRWQ7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlOztBQUVqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZCIsImZpbGUiOiJsb2dpbmZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvcm0ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDIwJTtcclxuICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgd2lkdGg6IDM1MHB4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5ib2R5LWNvbnRyb2wge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuLmJvZHkgZGl2IHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5ib2R5IC5pbWcge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogODAlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcbi5mdWxsLXdpZHRoIGlucHV0e1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDBweDtcclxufVxyXG4uYm9keSBhIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIG9wYWNpdHk6IDAuNjtcclxuICBsZWZ0OiAxNSU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5ib2R5IC5idXR0b24tbG9naW4gYnV0dG9uIHtcclxuICB3aWR0aDogNzAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDdlOTc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNHB4IGdyZXk7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIG91dGxpbmU6IDBweDtcclxufVxyXG4uYm9keSAuYnV0dG9uLXNpZ251cCAuYnV0dG9uIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQ3ZTk3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICBib3gtc2hhZG93OiA1cHggNXB4IDRweCBncmV5O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgb3BhY2l0eTogMC45O1xyXG4gIGJvcmRlcjowcHg7XHJcbiAgb3V0bGluZTogMHB4O1xyXG5cclxufVxyXG4uYnV0dG9uLXNpZ251cCBhIHtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICBtYXJnaW46IDAgMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gXHJcbn1cclxuXHJcbi5idXR0b24tc2lnbnVwIGE6aG92ZXJ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG59XHJcbi5idXR0b24tbG9naW4gYnV0dG9uOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxufVxyXG4uYWxlcnR7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNDUwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "qfBg":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-socket.service */ "iNhY");



class UserService {
    constructor(webSocketService) {
        this.webSocketService = webSocketService;
    }
    getMessage(username, password) {
        return {
            action: 'onchat',
            data: {
                event: 'LOGIN',
                data: {
                    user: username,
                    pass: password,
                },
            },
        };
    }
    getRegister(username, password) {
        return {
            action: "onchat",
            data: {
                event: "REGISTER",
                data: {
                    user: username,
                    pass: password
                }
            }
        };
    }
    getReLogin(username, code) {
        return {
            action: "onchat",
            data: {
                event: "RE_LOGIN",
                data: {
                    user: username,
                    code: code
                }
            }
        };
    }
    checkLogin(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.webSocketService.sendMessage(JSON.stringify(this.getMessage(user.username, user.password)));
            return new Promise((resolve) => {
                const res = JSON.parse(this.webSocketService.res);
                resolve(res);
            });
        });
    }
    checkReLogin(username, code) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.webSocketService.sendMessage(JSON.stringify(this.getReLogin(username, code)));
            return new Promise((resolve) => {
                const res = JSON.parse(this.webSocketService.res);
                resolve(res);
            });
        });
    }
    checkRegister(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.webSocketService.sendMessage(JSON.stringify(this.getRegister(user.username, user.password)));
            return new Promise((resolve) => {
                const res = JSON.parse(this.webSocketService.res);
                resolve(res.status);
            });
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.webSocketService.sendMessage(JSON.stringify({
                action: 'onchat',
                data: {
                    event: 'LOGOUT'
                }
            }));
            return new Promise((resolve) => {
                const res = JSON.parse(this.webSocketService.res);
                resolve(res.status);
            });
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "sjK5":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./web-socket.service */ "iNhY");




class ChatService {
    constructor(webSocketService) {
        this.webSocketService = webSocketService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    getSendMessage(to, type, mes) {
        return {
            action: 'onchat',
            data: {
                event: 'SEND_CHAT',
                data: {
                    type: type,
                    to: to,
                    mes: mes,
                },
            },
        };
    }
    getUserListMessage() {
        return {
            action: 'onchat',
            data: {
                event: 'GET_USER_LIST',
            },
        };
    }
    getUserList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.webSocketService.sendMessage(JSON.stringify(this.getUserListMessage()));
            return new Promise((resolve) => {
                const res = JSON.parse(this.webSocketService.res);
                console.log("Alo", res);
                resolve(res);
            });
        });
    }
    sendMessage(to, isGroup, mes) {
        const type = isGroup ? 'room' : 'people';
        this.webSocketService.sendChatMessage(JSON.stringify(this.getSendMessage(to, type, mes)));
        const chatMessage = {
            sender: localStorage.getItem('user'),
            receiver: to,
            message: mes,
            time: new Date().toLocaleString('es-ES'),
            unRead: false,
            position: '',
        };
        if (chatMessage.sender !== to ||
            (chatMessage.sender === to && isGroup === true)) {
            this.webSocketService.addChatMessage(chatMessage, true, isGroup);
        }
    }
    getListChatMessage(chatDTO) {
        let listMesDTO;
        const chatDTOs = this.webSocketService.getListChats();
        if (chatDTOs !== undefined) {
            for (const element of chatDTOs)
                if (element.name === chatDTO.name &&
                    element.isGroup === chatDTO.isGroup) {
                    listMesDTO = element.messages;
                    this.setPosition(listMesDTO);
                }
            return listMesDTO;
        }
    }
    getListChat() {
        return this.webSocketService.getListChats();
    }
    addChat(chatDTO) {
        this.webSocketService.getListChats().unshift(chatDTO);
    }
    setSelectedChat(chatDTO) {
        this.selectedChat = chatDTO;
        this.subject.next(this.selectedChat);
    }
    getSelectChat() {
        return this.subject.asObservable();
    }
    checkChatInChatList(name, isGroup) {
        let result = null;
        this.getListChat().forEach((element) => {
            if (element.name.toLowerCase() === name.toLowerCase() &&
                element.isGroup === isGroup) {
                result = element;
                return;
            }
        });
        return result;
    }
    clearChatSelected() {
        this.getListChat().forEach((element) => {
            element.isSelect = false;
        });
    }
    setPosition(listMessagesDTO) {
        for (let i = 0; i < listMessagesDTO.length; i++) {
            const eBefore = listMessagesDTO[i - 1];
            const element = listMessagesDTO[i];
            const eAfter = listMessagesDTO[i + 1];
            if (eBefore === undefined ||
                eBefore.sender !== element.sender ||
                this.compareDate(eBefore.time, element.time) > 30000) {
                if (eAfter !== undefined) {
                    if (element.sender !== eAfter.sender ||
                        this.compareDate(element.time, eAfter.time) > 30000) {
                        element.position = 'single';
                    }
                    else if (element.sender === eAfter.sender &&
                        this.compareDate(element.time, eAfter.time) <= 30000) {
                        element.position = 'start';
                    }
                }
                else {
                    element.position = 'single';
                }
            }
            else if (eBefore !== undefined &&
                (eBefore.sender === element.sender ||
                    this.compareDate(eBefore.time, element.time) <= 30000)) {
                if (eAfter !== undefined) {
                    if (element.sender === eAfter.sender &&
                        this.compareDate(element.time, eAfter.time) <= 30000) {
                        element.position = 'between';
                    }
                    else if (element.sender !== eAfter.sender ||
                        this.compareDate(element.time, eAfter.time) > 30000) {
                        element.position = 'end';
                    }
                }
                else {
                    element.position = 'end';
                }
            }
        }
    }
    compareDate(date1, date2) {
        return this.toDate(date2).getTime() - this.toDate(date1).getTime();
    }
    toDate(dateString) {
        const temp = dateString.split(' ');
        const ntn = temp[0].split('/');
        const gpg = temp[1].split(':');
        return new Date(Number(ntn[0]), Number(ntn[1]), Number(ntn[2]), Number(gpg[0]), Number(gpg[1]), Number(gpg[2]));
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_web_socket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "uAg1":
/*!***************************************************************!*\
  !*** ./src/app/components/join-group/join-group.component.ts ***!
  \***************************************************************/
/*! exports provided: JoinGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinGroupComponent", function() { return JoinGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/room.service */ "yWY+");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var src_app_services_check_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/check-user.service */ "X12z");
/* harmony import */ var src_app_services_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/search.service */ "l3hs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








const _c0 = ["gName"];
const _c1 = function (a0) { return { in: a0 }; };
const _c2 = function (a0, a1) { return { display: a0, opacity: a1 }; };
class JoinGroupComponent {
    constructor(roomService, chatService, checkUserService, searchService) {
        this.roomService = roomService;
        this.chatService = chatService;
        this.checkUserService = checkUserService;
        this.searchService = searchService;
        this.groupName = '';
        this.visible = false;
        this.visibleAnimate = false;
    }
    ngOnInit() { }
    // modal
    show() {
        this.visible = true;
        setTimeout(() => (this.visibleAnimate = true), 100);
    }
    hide() {
        this.visibleAnimate = false;
        setTimeout(() => (this.visible = false), 20);
    }
    onContainerClicked(event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    }
    // reset input
    reset() {
        this.myInputVariable.nativeElement.value = '';
        this.groupName = '';
    }
    joinGroupChat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.groupName.trim() === '') {
                alert('You must enter group name!');
                return;
            }
            let numberPage = 2;
            let listMessages = [];
            const result = yield this.roomService.joinGroupChat(this.groupName);
            console.log(result);
            if (result.status === 'success') {
                listMessages = this.getListMessages(result.data.chatData, listMessages);
                let groupChat = yield this.searchService.searchGroupChat(this.groupName, numberPage);
                if (groupChat.status === 'success') {
                    // while() to check next page data
                    while (groupChat.data.chatData.length !== 0) {
                        listMessages = this.getListMessages(groupChat.data.chatData, listMessages);
                        numberPage++;
                        groupChat = yield this.searchService.searchGroupChat(this.groupName, numberPage);
                    }
                }
                const members = this.getListMembers(result.data);
                let status = false;
                // check group online
                for (const member of members) {
                    if (localStorage.getItem('user') === member)
                        continue;
                    const s = yield this.checkUserService.checkUser(member);
                    if (s) {
                        status = true;
                        break;
                    }
                }
                const chat = {
                    name: result.data.name,
                    messages: listMessages,
                    isGroup: true,
                    isSelect: false,
                    members: members,
                    status: status,
                };
                if (this.chatService.checkChatInChatList(chat.name, chat.isGroup) !== null) {
                    alert('You have joined to ' + this.groupName + ' group!');
                    this.reset();
                }
                else {
                    this.chatService.addChat(chat);
                    alert('Join ' + this.groupName + ' success!');
                    this.reset();
                    this.hide();
                }
                this.updateStatus(chat);
            }
            else {
                alert(this.groupName + ' group not found!');
                this.reset();
            }
        });
    }
    onKey(event) {
        this.joinGroupChat();
    }
    updateStatus(chatDTO) {
        this.chatService.getListChat().forEach((element) => {
            if (element.name != chatDTO.name ||
                (element.name == chatDTO.name && element.isGroup != chatDTO.isGroup)) {
                element.isSelect = false;
            }
            else {
                element.isSelect = true;
                this.chatService.setSelectedChat(element);
            }
        });
    }
    getListMessages(chatData, listMessages) {
        chatData.forEach((element) => {
            const chatMessageDTO = {
                sender: element.name,
                receiver: element.to,
                message: element.mes,
                time: new Date(Date.parse(element.createAt)).toLocaleString('es-ES'),
                unRead: false,
                position: '',
            };
            listMessages.unshift(chatMessageDTO);
        });
        return listMessages;
    }
    getListMembers(userData) {
        const members = [userData.own];
        userData.userList.forEach((element) => {
            members.push(element.name);
        });
        return members;
    }
}
JoinGroupComponent.ɵfac = function JoinGroupComponent_Factory(t) { return new (t || JoinGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_check_user_service__WEBPACK_IMPORTED_MODULE_4__["CheckUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"])); };
JoinGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: JoinGroupComponent, selectors: [["app-join-group"]], viewQuery: function JoinGroupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myInputVariable = _t.first);
    } }, decls: 23, vars: 8, consts: [["tabindex", "-1", 1, "modal", "fade", "modal-style", 3, "ngClass", "ngStyle", "click"], [1, "modal-dialog", "modal-lg", "modal-xl"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "closeX", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "container", "chat-group"], [1, "group-name"], [1, "title"], ["type", "text", 1, "name-text", 3, "ngModel", "ngModelChange", "keydown.enter"], ["gName", ""], [1, "btn-join", 3, "click"], [1, "modal-footer"], [1, "exit"], [1, "btn-exit", 3, "click"]], template: function JoinGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JoinGroupComponent_Template_div_click_0_listener($event) { return ctx.onContainerClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Join Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JoinGroupComponent_Template_button_click_6_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Group name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function JoinGroupComponent_Template_input_ngModelChange_15_listener($event) { return ctx.groupName = $event; })("keydown.enter", function JoinGroupComponent_Template_input_keydown_enter_15_listener($event) { return ctx.onKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JoinGroupComponent_Template_button_click_17_listener() { return ctx.joinGroupChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Join");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function JoinGroupComponent_Template_button_click_21_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx.visibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c2, ctx.visible ? "block" : "none", ctx.visibleAnimate ? 1 : 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.groupName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: [".modal-style[_ngcontent-%COMP%] {\r\n  background: rgba(0, 0, 0, 0.6);\r\n}\r\n.modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n  color:rgba(0, 0, 0, 0.6);\r\n}\r\n.group-name[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  color:rgba(0, 0, 0, 0.6);\r\n}\r\n.closeX[_ngcontent-%COMP%] {\r\n  background-color: inherit;\r\n  border: none;\r\n  outline: none;\r\n}\r\n.closeX[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  color: #7f7f7f;\r\n}\r\n.closeX[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n}\r\n.modal-content[_ngcontent-%COMP%] {\r\n  width: 700px;\r\n}\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  width: 700px;\r\n  margin: 10rem auto;\r\n}\r\n.chat-group[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  height: 60px;\r\n  width: 660px;\r\n}\r\n.group-name[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  padding-top: 10px;\r\n  display: flex;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  float: left;\r\n}\r\n.name-text[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n  width: 400px;\r\n  margin-left: 20px;\r\n  border: none;\r\n  border-bottom: #7b8793 solid 2px;\r\n  padding-left: 10px;\r\n  padding-top: 5px;\r\n  font-size: 18px;\r\n  background-color: white;\r\n}\r\n.name-text[_ngcontent-%COMP%]:focus {\r\n  border-bottom: #06c9f0 solid 2px;\r\n  outline: none;\r\n}\r\n.btn-join[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n  width: 80px;\r\n  margin-left: 28px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: #047e97;\r\n  color: white;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n.btn-join[_ngcontent-%COMP%]:active {\r\n  transform: translate(0, 2px);\r\n  -webkit-transform: translate(0, 2px);\r\n}\r\n.btn-join[_ngcontent-%COMP%]:hover {\r\n  border: #047e97 solid 2px;\r\n  background-color: #0a9cb9;\r\n}\r\n.exit[_ngcontent-%COMP%] {\r\n  margin-left: 524px;\r\n}\r\n.btn-exit[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n  width: 80px;\r\n  margin-left: 28px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: #dd0f00;\r\n  color: white;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n.btn-exit[_ngcontent-%COMP%]:active {\r\n  transform: translate(0, 2px);\r\n  -webkit-transform: translate(0, 2px);\r\n}\r\n.btn-exit[_ngcontent-%COMP%]:hover {\r\n  border: #dd0f00 solid 2px;\r\n  background-color: #ff1100;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvaW4tZ3JvdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0Usd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCIiwiZmlsZSI6ImpvaW4tZ3JvdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1zdHlsZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG59XHJcbi5tb2RhbC1oZWFkZXIgaDV7XHJcbiAgY29sb3I6cmdiYSgwLCAwLCAwLCAwLjYpO1xyXG59XHJcbi5ncm91cC1uYW1lIC50aXRsZSBwe1xyXG4gIGNvbG9yOnJnYmEoMCwgMCwgMCwgMC42KTtcclxufVxyXG4uY2xvc2VYIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5jbG9zZVggc3BhbiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjN2Y3ZjdmO1xyXG59XHJcblxyXG4uY2xvc2VYIHNwYW46aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG59XHJcbi5tb2RhbC1kaWFsb2cge1xyXG4gIHdpZHRoOiA3MDBweDtcclxuICBtYXJnaW46IDEwcmVtIGF1dG87XHJcbn1cclxuLmNoYXQtZ3JvdXAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHdpZHRoOiA2NjBweDtcclxufVxyXG5cclxuLmdyb3VwLW5hbWUge1xyXG4gIGhlaWdodDogNjBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4ubmFtZS10ZXh0IHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAjN2I4NzkzIHNvbGlkIDJweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLm5hbWUtdGV4dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogIzA2YzlmMCBzb2xpZCAycHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uYnRuLWpvaW4ge1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogODBweDtcclxuICBtYXJnaW4tbGVmdDogMjhweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDdlOTc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5idG4tam9pbjphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDJweCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAycHgpO1xyXG59XHJcblxyXG4uYnRuLWpvaW46aG92ZXIge1xyXG4gIGJvcmRlcjogIzA0N2U5NyBzb2xpZCAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBhOWNiOTtcclxufVxyXG4uZXhpdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUyNHB4O1xyXG59XHJcbi5idG4tZXhpdCB7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkMGYwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLmJ0bi1leGl0OmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMnB4KTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDJweCk7XHJcbn1cclxuXHJcbi5idG4tZXhpdDpob3ZlciB7XHJcbiAgYm9yZGVyOiAjZGQwZjAwIHNvbGlkIDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYxMTAwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/chat-screen/chat-screen.component */ "+XDa");
/* harmony import */ var _components_forgotpasswordform_forgotpasswordform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/forgotpasswordform/forgotpasswordform.component */ "ZB1s");
/* harmony import */ var _components_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loginform/loginform.component */ "liyL");
/* harmony import */ var _components_registerform_registerform_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/registerform/registerform.component */ "XofG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _components_loginform_loginform_component__WEBPACK_IMPORTED_MODULE_3__["LoginformComponent"] },
    { path: 'register', component: _components_registerform_registerform_component__WEBPACK_IMPORTED_MODULE_4__["RegisterformComponent"] },
    { path: 'forgotpassword', component: _components_forgotpasswordform_forgotpasswordform_component__WEBPACK_IMPORTED_MODULE_2__["ForgotpasswordformComponent"] },
    { path: 'chat', component: _components_chat_screen_chat_screen_component__WEBPACK_IMPORTED_MODULE_1__["ChatScreenComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xHlk":
/*!*****************************************************************************!*\
  !*** ./src/app/components/create-chat-group/create-chat-group.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CreateChatGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateChatGroupComponent", function() { return CreateChatGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/room.service */ "yWY+");
/* harmony import */ var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chat.service */ "sjK5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







const _c0 = ["gName"];
const _c1 = function (a0) { return { "in": a0 }; };
const _c2 = function (a0, a1) { return { "display": a0, "opacity": a1 }; };
class CreateChatGroupComponent {
    constructor(roomService, chatService) {
        this.roomService = roomService;
        this.chatService = chatService;
        this.newGroupEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.groupName = '';
        this.visible = false;
        this.visibleAnimate = false;
        this.arrMemberChoose = [
            { id: 0, isSelect: false, isSelectUser: 0, avatar: '../../../assets/image/avatar.png', name: "Minh Nhật", message: 'You: How are you?', time: '' },
            { id: 1, isSelect: false, isSelectUser: 1, avatar: '../../../assets/image/avatar.png', name: "Huy Phước", message: 'You: How are you?', time: '10:23' },
            { id: 2, isSelect: false, isSelectUser: 2, avatar: '../../../assets/image/avatar.png', name: "Thanh Tôn", message: 'You: How are you?', time: '6.6.21' },
            { id: 3, isSelect: false, isSelectUser: 1, avatar: '../../../assets/image/avatar.png', name: "Loan Loan Loan", message: 'You: How are you?', time: '10:23' },
            { id: 4, isSelect: false, isSelectUser: 2, avatar: '../../../assets/image/avatar.png', name: "Thanh Hoa Hoa", message: 'You: How are you?', time: '6.6.21' },
        ];
        this.arrMember = [];
    }
    // modal
    show() {
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
    }
    hide() {
        this.visibleAnimate = false;
        this.arrMember = [];
        this.arrMemberChoose.forEach(e => e.isSelect = false);
        setTimeout(() => this.visible = false, 20);
    }
    onContainerClicked(event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    }
    // reset input
    reset() {
        this.myInputVariable.nativeElement.value = "";
    }
    ngOnInit() {
    }
    // tao group
    createGroupChat() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.groupName.trim() === "") {
                alert("You must enter group name");
                return;
            }
            const result = yield this.roomService.createGroupChat(this.groupName);
            if (result.status === 'success') {
                const chat = {
                    name: result.data.name,
                    messages: result.data.chatData,
                    isGroup: true,
                    isSelect: false,
                    members: [localStorage.getItem("user")],
                    status: false
                };
                this.chatService.addChat(chat);
                alert('Create ' + this.groupName + ' success!');
                this.updateStatus(chat.name);
                this.reset();
                this.hide();
            }
            else {
                alert(this.groupName + ' group has been created!');
                this.reset();
            }
        });
    }
    onKey(event) {
        this.createGroupChat();
    }
    updateStatus(name) {
        this.chatService.getListChat().forEach(element => {
            if (element.name != name) {
                element.isSelect = false;
            }
            else {
                element.isSelect = true;
                this.chatService.setSelectedChat(element);
            }
        });
    }
    deleteMember(id) {
        const indexOfArrMember = this.arrMember.findIndex(member => member.id === id);
        this.arrMember.splice(indexOfArrMember, 1);
        const indexOfArrMemberChoose = this.arrMemberChoose.findIndex(member => member.id === id);
        this.arrMemberChoose[indexOfArrMemberChoose].isSelect = false;
    }
    addMember(id) {
        this.arrMemberChoose.forEach(e => {
            if (e.id === id) {
                e.isSelect = true;
                this.arrMember.unshift(e);
                this.length = (this.arrMember.length * 120).toString() + "px";
            }
        });
    }
}
CreateChatGroupComponent.ɵfac = function CreateChatGroupComponent_Factory(t) { return new (t || CreateChatGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"])); };
CreateChatGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateChatGroupComponent, selectors: [["app-create-chat-group"]], viewQuery: function CreateChatGroupComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myInputVariable = _t.first);
    } }, outputs: { newGroupEvent: "newGroupEvent" }, decls: 21, vars: 8, consts: [["tabindex", "-1", 1, "modal", "fade", "modal-style", 3, "ngClass", "ngStyle", "click"], [1, "modal-dialog", "modal-lg", "modal-xl"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "closeX", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "group-name"], [1, "title"], ["type", "text", 1, "name-text", 3, "ngModel", "ngModelChange", "keydown.enter"], ["gName", ""], [1, "btn-create", 3, "click"], [1, "modal-footer"], [1, "btn", "btn-danger", 3, "click"]], template: function CreateChatGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateChatGroupComponent_Template_div_click_0_listener($event) { return ctx.onContainerClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Create Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateChatGroupComponent_Template_button_click_6_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Group name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreateChatGroupComponent_Template_input_ngModelChange_14_listener($event) { return ctx.groupName = $event; })("keydown.enter", function CreateChatGroupComponent_Template_input_keydown_enter_14_listener($event) { return ctx.onKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateChatGroupComponent_Template_button_click_16_listener() { return ctx.createGroupChat(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateChatGroupComponent_Template_button_click_19_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx.visibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c2, ctx.visible ? "block" : "none", ctx.visibleAnimate ? 1 : 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.groupName);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: [".modal-style[_ngcontent-%COMP%] {\r\n\r\n  \r\n  background: rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.modal-content[_ngcontent-%COMP%] {\r\n  width: 700px;\r\n}\r\n\r\n.modal-dialog[_ngcontent-%COMP%] {\r\n  width: 700px;\r\n  margin: 10rem auto;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.group-name[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  padding-top: 10px;\r\n  display: flex;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  float: left;\r\n}\r\n\r\n.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: rgba(0, 0, 0, 0.6);\r\n\r\n}\r\n\r\n.name-text[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n  width: 400px;\r\n  margin-left: 20px;\r\n  border: none;\r\n  border-bottom: #7B8793 solid 2px;\r\n  padding-left: 10px;\r\n  padding-top: 5px;\r\n  font-size: 18px;\r\n  background-color: white;\r\n}\r\n\r\n.name-text[_ngcontent-%COMP%]:focus {\r\n  border-bottom: #06c9f0 solid 2px;\r\n  outline: none;\r\n}\r\n\r\n.btn-create[_ngcontent-%COMP%] {\r\n  height: 35px;\r\n  width: 80px;\r\n  margin-left: 28px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  background-color: #047e97;\r\n  color: white;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.btn-create[_ngcontent-%COMP%]:active {\r\n  transform: translate(0, 2px);\r\n  -webkit-transform: translate(0, 2px);\r\n  \r\n}\r\n\r\n.btn-create[_ngcontent-%COMP%]:hover {\r\n  border: #047e97 solid 2px;\r\n  background-color: #0a9cb9;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.list-member[_ngcontent-%COMP%], .scrollbar-1[_ngcontent-%COMP%] {\r\n  float: left;\r\n  min-width: 550px;\r\n  max-width: 550px;\r\n  height: 36px;\r\n}\r\n\r\n.scrollbar-1[_ngcontent-%COMP%] {\r\n  background-color: #ffffff;\r\n  float: left;\r\n  overflow-x: scroll;\r\n  overflow-y: hidden;\r\n}\r\n\r\n#style-2[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  height: 6px;\r\n  border-radius: 10px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n#style-2[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: #bdc0c2;\r\n  border-radius: 10px;\r\n}\r\n\r\n.member-name[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n}\r\n\r\n.member-item[_ngcontent-%COMP%] {\r\n  float: left;\r\n  height: 27px;\r\n}\r\n\r\n\r\n\r\n.container-search[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  \r\n  width: 100%;\r\n  vertical-align: middle;\r\n  white-space: nowrap;\r\n  padding-top: 10px;\r\n  \r\n}\r\n\r\n.container-search[_ngcontent-%COMP%]   input#search[_ngcontent-%COMP%] {\r\n  width: 584px;\r\n  height: 50px;\r\n  background: white;\r\n  border: 1px solid #dbe5ed;\r\n  border-right: none;\r\n  font-size: 18px;\r\n  float: left;\r\n  color: #65737e;\r\n  padding-left: 15px;\r\n  padding-right: 5px;\r\n  outline: none;\r\n}\r\n\r\n.container-search[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%] {\r\n  border: 1px solid #dbe5ed;\r\n  border-left: none;\r\n  background: white;\r\n  height: 50px;\r\n  width: 50px;\r\n  color: #7b8793;\r\n  font-size: 18px;\r\n}\r\n\r\n.container-search[_ngcontent-%COMP%]:hover   button.icon[_ngcontent-%COMP%], .container-4[_ngcontent-%COMP%]:active   button.icon[_ngcontent-%COMP%], .container-4[_ngcontent-%COMP%]:focus   button.icon[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  opacity: 1;\r\n}\r\n\r\n.container-search[_ngcontent-%COMP%]:hover   button.icon[_ngcontent-%COMP%]:hover {\r\n  background: #047e97;\r\n}\r\n\r\n.container-search[_ngcontent-%COMP%]   button.icon[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n}\r\n\r\n\r\n\r\n.scrollbar[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  float: left;\r\n  \r\n  width: 100%;\r\n  overflow-x: hidden;\r\n  overflow-y: scroll;\r\n}\r\n\r\n#style-1[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 6px;\r\n  border-radius: 10px;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n#style-1[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: #bdc0c2;\r\n  border-radius: 10px;\r\n}\r\n\r\n.list-chat-items[_ngcontent-%COMP%] {\r\n  padding-top: 20px;\r\n}\r\n\r\n.list-chat-items[_ngcontent-%COMP%], .scrollbar[_ngcontent-%COMP%] {\r\n  min-height: 200px;\r\n  max-height: 200px;\r\n}\r\n\r\n.chat-item[_ngcontent-%COMP%] {\r\n  height: 70px;\r\n}\r\n\r\n.closeX[_ngcontent-%COMP%] {\r\n  background-color: inherit;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.closeX[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  color: #7f7f7f;\r\n}\r\n\r\n.closeX[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\r\n  color: black;\r\n}\r\n\r\n.modal-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\r\n  color:rgba(0, 0, 0, 0.6);\r\n}\r\n\r\n.group-name[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  color:rgba(0, 0, 0, 0.6);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS1jaGF0LWdyb3VwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7OztHQUdHOztBQUNIOzs7O0dBSUc7O0FBRUg7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7O0FBRTNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsb0NBQW9DO0VBQ3BDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUEsV0FBVzs7QUFDWDs7O0dBR0c7O0FBQ0g7O0VBRUUsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFJQSxXQUFXOztBQUNYO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBR0EsZUFBZTs7QUFDZjtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6ImNyZWF0ZS1jaGF0LWdyb3VwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtc3R5bGUge1xyXG5cclxuICAvKiBvcGFjaXR5OiAwLjU7ICovXHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtZGlhbG9nIHtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luOiAxMHJlbSBhdXRvO1xyXG59XHJcblxyXG4vKiAubW9kYWwtY29udGVudHtcclxuICBtYXJnaW46IDEwcmVtIGF1dG87XHJcbiAgd2lkdGg6IDcwMHB4O1xyXG59ICovXHJcbi8qIC5jaGF0LWdyb3VwIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogNDQwcHg7XHJcbiAgd2lkdGg6IDY2MHB4O1xyXG59ICovXHJcblxyXG4uZ3JvdXAtbmFtZSB7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4udGl0bGUgcCB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuXHJcbn1cclxuXHJcbi5uYW1lLXRleHQge1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206ICM3Qjg3OTMgc29saWQgMnB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hbWUtdGV4dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogIzA2YzlmMCBzb2xpZCAycHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLmJ0bi1jcmVhdGUge1xyXG4gIGhlaWdodDogMzVweDtcclxuICB3aWR0aDogODBweDtcclxuICBtYXJnaW4tbGVmdDogMjhweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNDdlOTc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uYnRuLWNyZWF0ZTphY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDJweCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAycHgpO1xyXG4gIC8qIGJveC1zaGFkb3c6MCAxcHggZ3JheTsgICAqL1xyXG59XHJcblxyXG4uYnRuLWNyZWF0ZTpob3ZlciB7XHJcbiAgYm9yZGVyOiAjMDQ3ZTk3IHNvbGlkIDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE5Y2I5O1xyXG59XHJcblxyXG4vKiBtZW1iZXIgKi9cclxuLyogLmxpc3QtbWVtYmVye1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAxMDAwcHg7XHJcbn0gKi9cclxuLmxpc3QtbWVtYmVyLFxyXG4uc2Nyb2xsYmFyLTEge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1pbi13aWR0aDogNTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1NTBweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5zY3JvbGxiYXItMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBmbG9hdDogbGVmdDtcclxuICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG59XHJcblxyXG4jc3R5bGUtMjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuI3N0eWxlLTI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjMGMyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5tZW1iZXItbmFtZSB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4ubWVtYmVyLWl0ZW0ge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGhlaWdodDogMjdweDtcclxufVxyXG5cclxuXHJcblxyXG4vKiBzZWFyY2ggKi9cclxuLmNvbnRhaW5lci1zZWFyY2gge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgLyogd2lkdGg6IDYzNHB4OyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAvKiBtYXJnaW4tbGVmdDogMjBweDsgKi9cclxufVxyXG5cclxuLmNvbnRhaW5lci1zZWFyY2ggaW5wdXQjc2VhcmNoIHtcclxuICB3aWR0aDogNTg0cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmU1ZWQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBjb2xvcjogIzY1NzM3ZTtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXItc2VhcmNoIGJ1dHRvbi5pY29uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGJlNWVkO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogNTBweDtcclxuICBjb2xvcjogIzdiODc5MztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItc2VhcmNoOmhvdmVyIGJ1dHRvbi5pY29uLFxyXG4uY29udGFpbmVyLTQ6YWN0aXZlIGJ1dHRvbi5pY29uLFxyXG4uY29udGFpbmVyLTQ6Zm9jdXMgYnV0dG9uLmljb24ge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLmNvbnRhaW5lci1zZWFyY2g6aG92ZXIgYnV0dG9uLmljb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwNDdlOTc7XHJcbn1cclxuXHJcbi5jb250YWluZXItc2VhcmNoIGJ1dHRvbi5pY29uOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4vKiBzY3JvbGwgYmFyICovXHJcbi5zY3JvbGxiYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIC8qIGhlaWdodDogNjAwcHg7ICovXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxufVxyXG5cclxuI3N0eWxlLTE6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxuI3N0eWxlLTE6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRjMGMyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5saXN0LWNoYXQtaXRlbXMge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcblxyXG4ubGlzdC1jaGF0LWl0ZW1zLFxyXG4uc2Nyb2xsYmFyIHtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBtYXgtaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmNoYXQtaXRlbSB7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4uY2xvc2VYIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5jbG9zZVggc3BhbiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjN2Y3ZjdmO1xyXG59XHJcblxyXG4uY2xvc2VYIHNwYW46aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciBoNXtcclxuICBjb2xvcjpyZ2JhKDAsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbi5ncm91cC1uYW1lIC50aXRsZSBwe1xyXG4gIGNvbG9yOnJnYmEoMCwgMCwgMCwgMC42KTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "yWY+":
/*!******************************************!*\
  !*** ./src/app/services/room.service.ts ***!
  \******************************************/
/*! exports provided: RoomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomService", function() { return RoomService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _web_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-socket.service */ "iNhY");



class RoomService {
    constructor(webSocketService) {
        this.webSocketService = webSocketService;
    }
    createGroupChat(groupName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.webSocketService.sendMessage(JSON.stringify({
                action: 'onchat',
                data: {
                    event: 'CREATE_ROOM',
                    data: {
                        name: groupName,
                    },
                },
            }));
            return new Promise((resolve) => {
                const res = JSON.parse(this.webSocketService.res);
                resolve(res);
            });
        });
    }
    joinGroupChat(groupName) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.webSocketService.sendMessage(JSON.stringify({
                action: 'onchat',
                data: {
                    event: 'JOIN_ROOM',
                    data: {
                        name: groupName,
                    },
                },
            }));
            return new Promise((resolve) => {
                const res = JSON.parse(this.webSocketService.res);
                resolve(res);
            });
        });
    }
}
RoomService.ɵfac = function RoomService_Factory(t) { return new (t || RoomService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_web_socket_service__WEBPACK_IMPORTED_MODULE_2__["WebSocketService"])); };
RoomService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RoomService, factory: RoomService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map