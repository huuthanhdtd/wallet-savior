const flatten = require('flat')

export const ZH_TW = flatten({
    wallet_savior: "錢包救星",
    language: "語言",
    languages: {
        en: "英文",
        zh: "中文(繁體)",
        zh_cn: "中文(簡體)"
    },
    sign_in: {
        login: "登入",
        email_address: "電子郵件地址",
        password: "密碼",
        already_have_an_account: "已經有帳號了嗎?",
        click: "點擊",
        here: "這裡",
        to_login: "以登入",
        login_with_facebook: "用Facebook登入",
        login_with_google: "用Google登入"
    },
    password_forget: {
        password_forget: "忘記密碼",
        ask: "忘記密碼?",
        reset: "重設"
    },
    sign_up: {
        sign_up: "註冊",
        username: "使用者名稱",
        confirm_password: "確認密碼",
        no_account: "尚未註冊帳號嗎?"
    },
    first_use: {
        welcome: "歡迎使用錢包救星!",
        text: "您現在將能夠追蹤您個人或任何您屬於的團體的支出費用。歡迎創建群組並且邀請您的好友們進來!",
        alright: "好的!"
    },
    nav: {
        personal: "個人",
        group: "群組",
        add_wallet: "新增錢包",
        create_group: "創建群組",
        history: "歷史",
        account: "帳號",
        sign_out: "登出"
    },
    home: {
        check: "查看",
        history: "歷史",
        edit_wallet_name: "編輯錢包名字",
    },
    operations: {
        insert: "存入",
        withdraw: "提出",
        reset: "重設",
        delete: "刪除",
        operation_successful: "操作成功!"
    }
})