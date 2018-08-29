const flatten = require('flat')

export const EN = flatten({
    wallet_savior: "Wallet $avior",
    language: "Language",
    languages: {
        en: "English",
        zh: "Chinese (Traditional)",
        zh_cn: "Chinese (Simplified)"
    },
    sign_in: {
        login: "login",
        email_address: "Email address",
        password: "Password",
        already_have_an_account: "Already have an account?",
        click: "Click",
        here: "here",
        to_login: "to login",
        login_with_facebook: "Login with Facebook",
        login_with_google: "Login with Google"
    },
    password_forget: {
        password_forget: "Password Forget",
        ask: "Forgot password?",
        reset: "Reset Password"
    },
    sign_up: {
        sign_up: "Sign Up",
        username: "Username",
        confirm_password: "Confirm password",
        no_account: "Don't have an account?"
    },
    first_use: {
        welcome: "Welcome to Wallet $avior!!",
        text: "You will now be able to keep track of your own expenditures as well as any organization you belong to. Feel free to form your own groups and invite your friends in!!",
        alright: "Alright!"
    },
    nav: {
        personal: "Personal",
        group: "Group",
        add_wallet: "Add Wallet",
        create_group: "Create Group",
        history: "History",
        account: "Account",
        sign_out: "Sign Out"
    },
    home: {
        check: "Check",
        history: "history",
        edit_wallet_name: "Edit wallet name",
    },
    operations: {
        insert: "Insert",
        withdraw: "Withdraw",
        reset: "Reset",
        delete: "Delete",
        operation_successful: "Operation succefful!"
    }
})