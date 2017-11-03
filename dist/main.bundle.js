webpackJsonp([1,5],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(_http) {
        this._http = _http;
    }
    DataService.prototype.getUsers = function () {
        var _this = this;
        return this._http.get("/api/users")
            .map(function (result) { return _this.result = result.json().data; });
    };
    DataService.prototype.getUser = function (user) {
        var url = "/api/users/" + user;
        return this._http.get(url)
            .map(function (result) {
            return result.json().data;
        });
    };
    // Get a user that isn't the currently logged in user.
    DataService.prototype.getAnonymousUser = function (id) {
        var url = "/api/usersanon/" + id;
        return this._http.get(url)
            .map(function (result) {
            return result.json().data;
        });
    };
    DataService.prototype.registerUser = function (user) {
        // Convert the user object to JSON
        var body = JSON.stringify(user);
        /* Create the headers to tell the API we are using
        JSON */
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // Set these in options
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // Make the request
        return this._http.post("/api/users", body, options)
            .map(function (data) { return data.json(); })
            .subscribe();
    };
    DataService.prototype.updateUser = function (user) {
        // Convert the user object to JSON
        var body = JSON.stringify(user);
        console.log(body);
        /* Create the headers to tell the API we are using
        JSON */
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // Set these in options
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // Make the request
        return this._http.post("/api/users/" + user.email, body, options)
            .map(function (data) { return data.json(); })
            .subscribe();
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_dataService) {
        var _this = this;
        this._dataService = _dataService;
        this.title = 'app';
        this._dataService.getUsers()
            .subscribe(function (res) { return _this.users = res; });
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(186),
        styles: [__webpack_require__(172)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_data_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_post_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_friend_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_news_feed_news_feed_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_logout_logout_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_friends_friends_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_user_user_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_add_friend_add_friend_component__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// Create routes
var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'news-feed', component: __WEBPACK_IMPORTED_MODULE_14__components_news_feed_news_feed_component__["a" /* NewsFeedComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_15__components_logout_logout_component__["a" /* LogoutComponent */] },
    { path: 'friends', component: __WEBPACK_IMPORTED_MODULE_16__components_friends_friends_component__["a" /* FriendsComponent */] },
    { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_17__components_user_user_component__["a" /* UserComponent */] },
    { path: 'add-friend/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_add_friend_add_friend_component__["a" /* AddFriendComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_news_feed_news_feed_component__["a" /* NewsFeedComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_logout_logout_component__["a" /* LogoutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_friends_friends_component__["a" /* FriendsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_user_user_component__["a" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_add_friend_add_friend_component__["a" /* AddFriendComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_12__services_post_service__["a" /* PostService */],
            __WEBPACK_IMPORTED_MODULE_13__services_friend_service__["a" /* FriendService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_friend_service__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFriendComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddFriendComponent = (function () {
    function AddFriendComponent(route, router, dataService, friendService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.friendService = friendService;
        // Start Authentication Code
        this.userEmail = sessionStorage.getItem("user");
        if (this.userEmail == null) {
            // Set for error message
            alert("You must be logged in to view that!");
            this.router.navigate(['/']);
        }
        // End Authentication Code
        // Get the users id from the parameter
        this.sub = this.route.params.subscribe(function (params) {
            _this.friendID = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        // Get the logged in user
        this.dataService.getUser(sessionStorage.getItem("user"))
            .subscribe(function (res) {
            _this.user = res;
            // Get the anonymous user (friend)
            // Get the user based on the sessionStorage
            _this.dataService.getAnonymousUser(_this.friendID)
                .subscribe(function (res) {
                _this.friendUser = res;
                // Create the friendship object
                _this.friendRelationship = {
                    friend1: _this.user["_id"],
                    friend1Name: _this.user["firstName"] + " " + _this.user["lastName"],
                    friend1Profile: _this.user["profile"],
                    friend2: _this.friendID,
                    friend2Name: _this.friendUser["firstName"] + " " + _this.friendUser["lastName"],
                    friend2Profile: _this.friendUser["profile"]
                };
                // Send this to the service.
                _this.sub = _this.friendService.createFriendship(_this.friendRelationship);
                alert("You are now friends!");
                _this.router.navigate(['/friends']);
            });
        });
    }
    AddFriendComponent.prototype.ngOnInit = function () {
        // We need to get the current logged in user.
    };
    return AddFriendComponent;
}());
AddFriendComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-add-friend',
        template: __webpack_require__(187),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_friend_service__["a" /* FriendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_friend_service__["a" /* FriendService */]) === "function" && _d || Object])
], AddFriendComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-friend.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_friend_service__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FriendsComponent = (function () {
    function FriendsComponent(dataService, postService, router, friendService) {
        this.dataService = dataService;
        this.postService = postService;
        this.router = router;
        this.friendService = friendService;
        // Found users
        this.foundUsers = [];
        // Start Authentication Code
        this.user = sessionStorage.getItem("user");
        if (this.user == null) {
            // Set for error message
            alert("You must be logged in to view that!");
            this.router.navigate(['/']);
        }
        // End Authentication Code
    }
    FriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Put in seperate methods so they can be called again
        this.getUser();
        // On the page load get all users so we can compare if the user exists
        this.dataService.getUsers()
            .subscribe(function (res) { return _this.users = res; });
    };
    FriendsComponent.prototype.getUser = function () {
        var _this = this;
        // Get the user based on the sessionStorage
        this.dataService.getUser(sessionStorage.getItem("user"))
            .subscribe(function (res) {
            _this.dbUser = res;
            _this.userID = _this.dbUser["_id"];
            // While we are here get the friends
            _this.friendService.getFriends(_this.dbUser["_id"])
                .subscribe(function (res) { return _this.friendsFromDB = res; });
        });
    };
    FriendsComponent.prototype.updateAccount = function () {
        // Construct the user object.
        this.updatedUser = {
            firstName: this.dbUser["firstName"],
            lastName: this.dbUser["lastName"],
            email: this.dbUser["email"],
            password: this.dbUser["password"],
            profile: this.profile,
            currentThought: this.dbUser["currentThought"],
            about: this.about,
        };
        this.result = this.dataService.updateUser(this.updatedUser);
        alert("Profile information updated!");
        this.getUser();
    };
    FriendsComponent.prototype.searchFriends = function () {
        // search the users for what was searched.
        for (var i = 0; i < this.users.length; i++) {
            // If the first name contains the search or the last name
            if (this.users[i].firstName.toLowerCase().indexOf(this.friendSearch.toLowerCase()) >= 0
                || this.users[i].lastName.toLowerCase().indexOf(this.friendSearch.toLocaleLowerCase()) >= 0) {
                if (this.users[i].email != sessionStorage.getItem("user")) {
                    this.foundUsers.push(this.users[i]);
                }
            }
        }
    };
    return FriendsComponent;
}());
FriendsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-friends',
        template: __webpack_require__(188),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_friend_service__["a" /* FriendService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_friend_service__["a" /* FriendService */]) === "function" && _d || Object])
], FriendsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=friends.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.register = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.changeComponent = function () {
        this.register = !this.register;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(189),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.counter = 0;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        // On the page load get all users so we can compare if the user exists
        this.dataService.getUsers()
            .subscribe(function (res) { return _this.users = res; });
    };
    LoginComponent.prototype.login = function () {
        // We have to take the information and check if its correct
        for (var i = 0; i < this.users.length; i++) {
            // If the email matches
            if (this.users[i]["email"] == this.email) {
                // Check if the passwords match
                if (this.users[i]["password"] == this.password) {
                    // Set the user session if its all okay!
                    sessionStorage.setItem("user", this.email);
                    this.router.navigate(['/profile']);
                }
                else {
                    alert("The provided password is incorrect.");
                    this.router.navigate(['/']);
                }
            }
            else {
                this.counter++;
            }
        }
        /* If the number of iterations is equal to the number of users,
        the user does not exist */
        if (this.counter == this.users.length) {
            alert("That user does not exist");
            this.router.navigate(['/']);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(190),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = (function () {
    function LogoutComponent(router) {
        this.router = router;
        if (sessionStorage.getItem("user") == null) {
            this.router.navigate(['/']);
        }
        else {
            // Remove the user session
            sessionStorage.removeItem("user");
            alert("You have now been logged out.");
            this.router.navigate(['/']);
        }
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    return LogoutComponent;
}());
LogoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-logout',
        template: __webpack_require__(191),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LogoutComponent);

var _a;
//# sourceMappingURL=logout.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.displayLogout = false;
        this.user = sessionStorage.getItem("user");
        if (this.user != null) {
            this.displayLogout = true;
        }
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(192),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsFeedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsFeedComponent = (function () {
    function NewsFeedComponent(dataService, postService, router) {
        this.dataService = dataService;
        this.postService = postService;
        this.router = router;
        // Start Authentication Code
        this.user = sessionStorage.getItem("user");
        if (this.user == null) {
            // Set for error message
            alert("You must be logged in to view that!");
            this.router.navigate(['/']);
        }
        // End Authentication Code
    }
    NewsFeedComponent.prototype.ngOnInit = function () {
        // Put in seperate methods so they can be called again
        this.getUser();
        this.getPosts();
    };
    NewsFeedComponent.prototype.getUser = function () {
        var _this = this;
        // Get the user based on the sessionStorage
        this.dataService.getUser(sessionStorage.getItem("user"))
            .subscribe(function (res) {
            _this.dbUser = res;
        });
    };
    NewsFeedComponent.prototype.getPosts = function () {
        var _this = this;
        // Get the users posts
        this.postService.getUserPosts(sessionStorage.getItem("user"))
            .subscribe(function (res) {
            _this.dbPosts = res;
        });
    };
    NewsFeedComponent.prototype.post = function () {
        // Create the post object
        this.postObj = {
            email: sessionStorage.getItem("user"),
            body: this.postBody,
            time: new Date().getMinutes().toString(),
            date: new Date().toString()
        };
        // Post it to the API
        this.result = this.postService.createPost(this.postObj);
    };
    return NewsFeedComponent;
}());
NewsFeedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-news-feed',
        template: __webpack_require__(193),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], NewsFeedComponent);

var _a, _b, _c;
//# sourceMappingURL=news-feed.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_post_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(dataService, postService, router) {
        this.dataService = dataService;
        this.postService = postService;
        this.router = router;
        // Start Authentication Code
        this.user = sessionStorage.getItem("user");
        if (this.user == null) {
            // Set for error message
            alert("You must be logged in to view that!");
            this.router.navigate(['/']);
        }
        // End Authentication Code
    }
    ProfileComponent.prototype.ngOnInit = function () {
        // Put in seperate methods so they can be called again
        this.getUser();
        this.getPosts();
    };
    ProfileComponent.prototype.getUser = function () {
        var _this = this;
        // Get the user based on the sessionStorage
        this.dataService.getUser(sessionStorage.getItem("user"))
            .subscribe(function (res) {
            _this.dbUser = res;
        });
    };
    ProfileComponent.prototype.getPosts = function () {
        var _this = this;
        // Get the users posts
        this.postService.getUserPosts(sessionStorage.getItem("user"))
            .subscribe(function (res) {
            _this.dbPosts = res;
        });
    };
    ProfileComponent.prototype.post = function () {
        // Create the post object
        this.postObj = {
            email: sessionStorage.getItem("user"),
            body: this.postBody,
            time: new Date().getMinutes().toString(),
            date: new Date().toString()
        };
        // Post it to the API
        this.result = this.postService.createPost(this.postObj);
        // Notify the user.
        alert("Post created successfully");
        // Call posts again to update the list.
        this.getPosts();
    };
    ProfileComponent.prototype.thought = function () {
        // Construct the user object.
        this.updatedUser = {
            firstName: this.dbUser["firstName"],
            lastName: this.dbUser["lastName"],
            email: this.dbUser["email"],
            password: this.dbUser["password"],
            profile: this.dbUser["profile"],
            currentThought: this.currentThought,
            about: this.dbUser["about"],
        };
        this.result = this.dataService.updateUser(this.updatedUser);
        alert("Current thought updated!");
        this.getUser();
    };
    ProfileComponent.prototype.updateAccount = function () {
        // Construct the user object.
        this.updatedUser = {
            firstName: this.dbUser["firstName"],
            lastName: this.dbUser["lastName"],
            email: this.dbUser["email"],
            password: this.dbUser["password"],
            profile: this.profile,
            currentThought: this.dbUser["currentThought"],
            about: this.about,
        };
        this.result = this.dataService.updateUser(this.updatedUser);
        alert("Profile information updated!");
        this.getUser();
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__(194),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    // Create the data service instance in the constructor.
    function RegisterComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        // Boolean to determine if the user exists and for user error
        this.userExists = false;
        this.userError = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        // On the page load get all users so we can compare if the user exists
        this.dataService.getUsers()
            .subscribe(function (res) { return _this.users = res; });
    };
    RegisterComponent.prototype.registerUser = function () {
        // Assigning values to the user object
        this.user = {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            password: this.password,
            profile: "http://www.informatics.illinois.edu/wp-content/uploads/2013/10/profile-placeholder.png",
            currentThought: "",
            about: "Nothing yet"
        };
        /* We have all the users now we need to loop through them and check
        to see if any match */
        for (var i = 0; i < this.users.length; i++) {
            if (this.users[i]["email"] == this.user.email) {
                this.userExists = true;
                this.userError = true;
            }
        }
        // Now we can register the user if they don't exist using the data service.
        if (!this.userExists) {
            this.result = this.dataService.registerUser(this.user);
            // Set a session variable to get user data and proove they are logged in
            sessionStorage.setItem("user", this.user.email);
            // Alert the user
            alert("You have registered successfully and will now be logged in");
            // Now redirect to the news feed.
            this.router.navigate(['/news-feed']);
        }
        else {
            alert("A user with that email already exists. Choose another or try again.");
        }
        this.userExists = false;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__(195),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], RegisterComponent);

var _a, _b;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_post_service__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(router, route, dataService, postService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.postService = postService;
        // Start Authentication Code
        this.loggedInUser = sessionStorage.getItem("user");
        if (this.loggedInUser == null) {
            // Set for error message
            alert("You must be logged in to view that!");
            this.router.navigate(['/']);
        }
        // End Authentication Code
        // Get the users id from the parameter
        this.sub = this.route.params.subscribe(function (params) {
            _this.user = params['id']; // (+) converts string 'id' to a number
            // In a real app: dispatch action to load the details here.
        });
        // Check to see if the logged in user is trying to find their profile and if so send them there
        if (this.user == sessionStorage.getItem("user")) {
            this.router.navigate(['/profile']);
        }
        // Now lets get that user
        this.getUser();
    }
    UserComponent.prototype.getUser = function () {
        var _this = this;
        // Get the user based on the sessionStorage
        this.dataService.getAnonymousUser(this.user)
            .subscribe(function (res) {
            _this.userObj = res;
            // While we are asynchronous we may aswell grab the posts too!
            _this.postService.getUserPosts(_this.userObj["email"])
                .subscribe(function (res) {
                _this.userPosts = res;
            });
        });
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__(196),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_post_service__["a" /* PostService */]) === "function" && _d || Object])
], UserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<!-- This specifies that the router will handle this -->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<p>\n Please wait...\n</p>\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<br/>\n<ul class=\"nav nav-pills nav-fill\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/profile\">Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" href=\"/friends\">Friends</a>\n    </li>\n  </ul>\n<br/>\n\n\n<div class=\"row\">\n<div class=\"col-md-3\">\n    <img src=\"{{dbUser.profile}}\" width=\"100%\" style=\"border-radius: 5px; margin-bottom: 5px;\" />\n<h3>{{dbUser.firstName}} {{dbUser.lastName}}\n  <br/>\n  <small>{{dbUser.about}}</small></h3>\n<hr/>\n\n<form (submit)=\"updateAccount()\">\n  <div class=\"form-group\">\n      <label for=\"profile\">Profile Picture:</label>\n      <input type=\"text\" class=\"form-control\" id=\"profile\" value=\"{{dbUser.profile}}\" [(ngModel)]=\"profile\" name=\"profile\">\n  </div>\n  <div class=\"form-group\">\n      <label for=\"about\">About:</label>\n      <textarea class=\"form-control\" id=\"about\" [(ngModel)]=\"about\" name=\"about\">{{dbUser.about}}</textarea>\n  </div>\n  <input type=\"submit\" value=\"Edit Account\" class=\"btn btn-secondary btn-block\" />\n</form>\n\n</div>\n<div class=\"col-md-9\">\n  <h3>Search for a Friend:</h3>\n  <form (submit)=\"searchFriends()\">\n    <div class=\"form-group\">\n        <input class=\"form-control form-control-lg\" type=\"text\" placeholder=\"Enter a Name\" name=\"friendSearch\" [(ngModel)]=\"friendSearch\">\n    </div>\n    <div class=\"float-right\">\n        <input type=\"submit\" value=\"Search\" class=\"btn btn-secondary btn-block\" />\n    </div>\n  </form>\n  <br/><br/>\n  <div *ngIf=\"foundUsers.length > 0\">\n      Search Results:\n      <hr/>\n      <div *ngFor=\"let friend of foundUsers\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-2\">\n                  <img src=\"{{friend.profile}}\" width=\"100%\" style=\"border-radius: 5px; margin-bottom: 5px;\" />\n              </div>\n              <div class=\"col-md-10\">\n                <p>{{friend.firstName}} {{friend.lastName}}<br/>\n                <small>{{friend.about}}</small></p>\n                <a href=\"/user/{{friend._id}}\" class=\"btn btn-secondary\">View Profile</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br/>\n      </div>\n  </div>\n  <hr/>\n  <h4>Your Friends:</h4>\n  <div *ngIf=\"friendsFromDB\">\n    <div *ngFor=\"let friend of friendsFromDB\">\n\n      <!-- If the logged in user is the first friend, take the second friend-->\n      <div *ngIf=\"friend.friend1 == userID\">\n          <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-2\">\n                      <img src=\"{{friend.friend2Profile}}\" width=\"100%\" style=\"border-radius: 5px; margin-bottom: 5px;\" />\n                  </div>\n                  <div class=\"col-md-10\">\n                    <p>{{friend.friend2Name}}<br/>\n                    <a href=\"/user/{{friend.friend2}}\" class=\"btn btn-secondary\">View Profile</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n      </div>\n\n      <!-- If the logged in user is the second friend, take the first friend-->\n      <div *ngIf=\"friend.friend2 == userID\">\n          <div class=\"card\">\n              <div class=\"card-body\">\n                <div class=\"row\">\n                  <div class=\"col-md-2\">\n                      <img src=\"{{friend.friend1Profile}}\" width=\"100%\" style=\"border-radius: 5px; margin-bottom: 5px;\" />\n                  </div>\n                  <div class=\"col-md-10\">\n                    <p>{{friend.friend1Name}}<br/>\n                    <a href=\"/user/{{friend.friend1}}\" class=\"btn btn-secondary\">View Profile</a>\n                  </div>\n                </div>\n              </div>\n            </div>\n      </div>\n\n      <br/>\n    </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<br/><br/>\n<div class=\"row\">\n  <div class=\"col-md-5\">\n\n  </div>\n  <div class=\"col-md-6\">\n    <div *ngIf=\"error == true\">\n      <div class=\"alert alert-danger\" role=\"alert\">\n          You must be logged in to view that!\n      </div>\n    </div>\n    <app-register *ngIf=\"register == true\"></app-register>\n    <app-login *ngIf=\"register == false\"></app-login>\n\n    <br/>\n    <div class=\"float-right\">\n      <button *ngIf=\"register == true\" class=\"btn btn-default\" (click)=\"changeComponent()\">Want to Login Instead?</button>\n      <button *ngIf=\"register == false\" class=\"btn btn-default\" (click)=\"changeComponent()\">Want to Register Instead?</button>\n    </div>\n  </div>\n  <div class=\"col-md-1\">\n\n  </div>\n</div>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<h3>Welcome Back!</h3>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <form (submit)=\"login()\">\n    <div class=\"form-group\">            \n      <label for=\"email\">Email:</label>\n      <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n      <small id=\"email_help\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>  \n    </div>\n    <div class=\"form-group\">\n        <label for=\"name\">Password:</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n  </form>\n  </div>\n</div>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<p>\nYou are now logged out.\n</p>\n"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"/\">Vark</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n          <li *ngIf=\"displayLogout == true\" class=\"nav-item\">\n              <a class=\"nav-link\" href=\"/logout\">Logout ({{user}})</a>\n          </li>\n      </ul>\n      <!--\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    -->\n    </div>\n    </div>\n  </nav>"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<br/>\n<ul class=\"nav nav-pills nav-fill\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/news-feed\">News Feed</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" href=\"/profile\">Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/friends\">Friends</a>\n    </li>\n  </ul>\n<br/>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <img src=\"{{dbUser.profile}}\" width=\"20%\" style=\"border-radius: 5px; margin-bottom: 5px;\" />\n    <P>{{dbUser.firstName}} {{dbUser.lastName}}</P>\n  </div>\n\n  <div *ngFor=\"let post of dbPosts\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <img src=\"{{dbUser.profile}}\" width=\"40%\" style=\"border-radius: 5px; margin-bottom: 5px;\" /><br/>\n              {{dbUser.firstName}} {{dbUser.lastName}}<br/>\n              <small>{{post.time}} {{post.date}}</small>\n            </div>\n            <div class=\"col-md-8\">\n              <p class=\"lead\">{{post.body}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <br/>\n  </div>"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "<br/>\n  <ul class=\"nav nav-pills nav-fill\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link active\" href=\"/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/friends\">Friends</a>\n      </li>\n    </ul>\n<br/>\n\n<div class=\"row\">\n<div class=\"col-md-3\">\n  <img src=\"{{dbUser.profile}}\" width=\"100%\" style=\"border-radius: 5px; margin-bottom: 5px;\" />\n</div>\n<div class=\"col-md-9\">\n\n\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n      <!-- Purposely Empty -->\n    </div>\n\n    <div class=\"col-md-8\" style=\"padding-top: 60px;\">\n      <h2>{{dbUser.currentThought}}</h2>\n    </div>\n  </div>\n\n</div>\n</div>\n<div class=\"row\">\n<div class=\"col-md-3\">\n  <h3>{{dbUser.firstName}} {{dbUser.lastName}}\n    <br/>\n    <small>{{dbUser.about}}</small></h3>\n  <hr/>\n\n  <form (submit)=\"updateAccount()\">\n    <div class=\"form-group\">\n        <label for=\"profile\">Profile Picture:</label>\n        <input type=\"text\" class=\"form-control\" id=\"profile\" value=\"{{dbUser.profile}}\" [(ngModel)]=\"profile\" name=\"profile\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"about\">About:</label>\n        <textarea class=\"form-control\" id=\"about\" [(ngModel)]=\"about\" name=\"about\">{{dbUser.about}}</textarea>\n    </div>\n    <input type=\"submit\" value=\"Edit Account\" class=\"btn btn-secondary btn-block\" />\n  </form>\n\n  </div>\n<div class=\"col-md-9\">\n  <form (submit)=\"thought()\">\n        <h4>Update Current Thought</h4>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"form-group\">\n                 <input type=\"text\" class=\"form-control\" placeholder=\"Update Current Thought\" [(ngModel)]=\"currentThought\" name=\"currentThought\">\n            </div>\n             <div class=\"float-right\">\n                   <input type=\"submit\" value=\"Update Current Thought\" class=\"btn btn-secondary btn-block\" />\n              </div>\n           </div>\n         </div>\n       </form>\n       <br/>\n       <h4>Make a Post</h4>\n       <form (submit)=\"post()\">\n         <div class=\"card\">\n           <div class=\"card-body\">\n             <div class=\"form-group\">\n                 <textarea class=\"form-control\" placeholder=\"Make a post..\" name=\"postBody\" [(ngModel)]=\"postBody\"></textarea>\n            </div>\n            <div class=\"float-right\">\n              <input type=\"submit\" value=\"Post\" class=\"btn btn-secondary\">\n            </div>\n          </div>\n        </div>\n      </form>\n      <br/>\n      <h4>Your Posts:</h4>\n\n      <div *ngFor=\"let post of dbPosts\">\n        <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <img src=\"{{dbUser.profile}}\" width=\"40%\" style=\"border-radius: 5px; margin-bottom: 5px;\" /><br/>\n                  {{dbUser.firstName}} {{dbUser.lastName}}<br/>\n                  <small>{{post.time}} {{post.date}}</small>\n                </div>\n                <div class=\"col-md-8\">\n                  <p class=\"lead\">{{post.body}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <br/>\n      </div>\n</div>\n</div>"

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

module.exports = "<h3>Come Join The Fun!</h3>\n<div class=\"card\">\n  <div class=\"card-body\">\n      <form (submit)=\"registerUser()\">\n          <div class=\"form-group\">            \n            <label for=\"email\">Email:</label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\">\n            <small id=\"email_help\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>  \n            \n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n\n                    <label for=\"name\">First Name:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"firstName\" name=\"firstName\">\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    \n                    <label for=\"name\">Last Name:</label>\n                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lastName\" name=\"lastName\">\n                </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n              <label for=\"name\">Password:</label>\n              <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n          </div>\n          <input type=\"submit\" class=\"btn btn-primary\" value=\"Register\">\n      </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 196:
/***/ (function(module, exports) {

module.exports = "<br/>\n<ul class=\"nav nav-pills nav-fill\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/news-feed\">News Feed</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"/profile\">Profile</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" href=\"/friends\">Friends</a>\n    </li>\n  </ul>\n<br/>\n\n<div class=\"row\">\n<div class=\"col-md-3\">\n<img src=\"{{userObj.profile}}\" width=\"100%\" style=\"border-radius: 5px; margin-bottom: 5px;\" />\n</div>\n<div class=\"col-md-9\">\n\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <!-- Purposely Empty -->\n  </div>\n\n  <div class=\"col-md-8\" style=\"padding-top: 60px;\">\n    <h2>{{userObj.currentThought}}</h2>\n  </div>\n</div>\n\n</div>\n</div>\n<div class=\"row\">\n<div class=\"col-md-3\">\n<h3>{{userObj.firstName}} {{userObj.lastName}}\n  <br/>\n  <small>{{userObj.about}}</small></h3>\n<hr/>\n<a href=\"/add-friend/{{userObj._id}}\" class=\"btn btn-secondary\">Add as a Friend</a>\n\n</div>\n<div class=\"col-md-9\">\n    <br/>\n    <h4>{{objUser}}'s Posts:</h4>\n\n    <div *ngFor=\"let post of userPosts\">\n      <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-md-4\">\n                <img src=\"{{userObj.profile}}\" width=\"40%\" style=\"border-radius: 5px; margin-bottom: 5px;\" /><br/>\n                {{userObj.firstName}} {{userObj.lastName}}<br/>\n                <small>{{post.time}} {{post.date}}</small>\n              </div>\n              <div class=\"col-md-8\">\n                <p class=\"lead\">{{post.body}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <br/>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
    }
    // Create a post
    PostService.prototype.createPost = function (post) {
        // Convert the post object to JSON
        var body = JSON.stringify(post);
        /* Create the headers to tell the API we are using
        JSON */
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // Set these in options
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // Make the request
        return this._http.post("/api/posts", body, options)
            .map(function (data) { return data.json(); })
            .subscribe();
    };
    // Get all posts based on user
    PostService.prototype.getUserPosts = function (user) {
        var _this = this;
        return this._http.get("/api/posts/" + user)
            .map(function (result) { return _this.result = result.json().data; });
    };
    return PostService;
}());
PostService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(96);


/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FriendService = (function () {
    function FriendService(http) {
        this.http = http;
    }
    FriendService.prototype.getFriends = function (user) {
        var _this = this;
        // Takes users id in and finds all of their friends
        return this.http.get("/api/friends/" + user)
            .map(function (result) { return _this.result = result.json().data; });
    };
    FriendService.prototype.createFriendship = function (friendship) {
        // Convert the user object to JSON
        var body = JSON.stringify(friendship);
        /* Create the headers to tell the API we are using
        JSON */
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        // Set these in options
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        // Make the request
        return this.http.post("/api/friends", body, options)
            .map(function (data) { return data.json(); })
            .subscribe();
    };
    return FriendService;
}());
FriendService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], FriendService);

var _a;
//# sourceMappingURL=friend.service.js.map

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 95;


/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(117);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[247]);
//# sourceMappingURL=main.bundle.js.map