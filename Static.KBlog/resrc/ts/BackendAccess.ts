/// <reference path="d.ts/jquery.d.ts" />
class BackendAccess {
    loginHandler = '';
    constructor() {
        $('.login .submit').click((e) => this.handleLoginClick(e));
    }

    login() {


    }
    handleLoginClick(event) {
        var password = $('login input[name="password"]').val();
        var username = $('login input[name="username"]').val();
        this.verifyLogIn(username, password);
    }

    verifyLogIn(username: string, password: string) {
        var request = $.ajax({
            url: this.loginHandler,
            data: {
                username: username,
                password: password,
            },
            type: 'POST',
        });
        request.done((response) => this.loginAccepted(response));
        request.fail((response) => this.loginFail(response));
    }

    loginFail(response) {

    }
    loginAccepted(response) {

    }
}