/// <reference path="d.ts/jquery.d.ts" />
var BackendAccess = (function () {
    function BackendAccess() {
        var _this = this;
        this.loginHandler = '';
        $('.login .submit').click(function (e) {
            return _this.handleLoginClick(e);
        });
    }
    BackendAccess.prototype.login = function () {
    };
    BackendAccess.prototype.handleLoginClick = function (event) {
        var password = $('login input[name="password"]').val();
        var username = $('login input[name="username"]').val();
        this.verifyLogIn(username, password);
    };

    BackendAccess.prototype.verifyLogIn = function (username, password) {
        var _this = this;
        var request = $.ajax({
            url: this.loginHandler,
            data: {
                username: username,
                password: password
            },
            type: 'POST'
        });
        request.done(function (response) {
            return _this.loginAccepted(response);
        });
        request.fail(function (response) {
            return _this.loginFail(response);
        });
    };

    BackendAccess.prototype.loginFail = function (response) {
    };
    BackendAccess.prototype.loginAccepted = function (response) {
    };
    return BackendAccess;
})();
//# sourceMappingURL=BackendAccess.js.map
