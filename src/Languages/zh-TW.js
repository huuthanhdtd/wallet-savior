const flatten = require('flat')

export const ZH_TW = flatten({
    wallet_savior: "錢包救星",
    language: "語言",
    languages: {
        en: "英文",
        zh: "中文(繁體)",
    },
    sign_in: {
        login: "登入",
        email_address: "電子郵件地址",
        password: "密碼",
        already_have_an_account: "已經有帳號了嗎？",
        click: "點擊",
        here: "這裡",
        to_login: "以登入",
        login_with_facebook: "用Facebook登入",
        login_with_google: "用Google登入"
    },
    password_change: {
        new_password: "新密碼",
        confirm: "新密碼",
        reset: "重設密碼"
    },
    password_forget: {
        password_forget: "忘記密碼",
        ask: "忘記密碼？",
        reset: "重設"
    },
    sign_up: {
        sign_up: "註冊",
        username: "用戶名稱",
        confirm_password: "確認密碼",
        no_account: "尚未註冊帳號嗎？"
    },
    first_use: {
        welcome: "歡迎使用錢包救星！",
        text: "您現在將能夠追蹤您個人或任何您屬於的團體的支出費用。歡迎創建群組並且邀請您的好友們進來！",
        alright: "好的！"
    },
    nav: {
        personal: "個人",
        group: "群組",
        add_wallet: "新增錢包",
        create_group: "創建群組",
        history: "歷史",
        account: "帳號",
        language: "語言",
        sign_out: "登出"
    },
    home: {
        check: "查看",
        history: "歷史",
        edit_wallet_name: "編輯錢包名稱",
    },
    operations: {
        insert: "存入",
        withdraw: "提取",
        reset: "重設",
        delete: "刪除",
        quit: "離開",
        operation_successful: "操作成功！"
    },
    dialogs: {
        insert: {
            title: "存入金錢",
            text: "請輸入將存入至錢包中的金額:",
            money_amount: "金額",
            description: "描述(可選)",
            cancel: "取消",
            insert: "存入"
        },
        withdraw: {
            title: "提取金錢",
            text: "請輸入將從錢包中提出的金額:",
            money_amount: "金額",
            description: "描述(可選)",
            cancel: "取消",
            withdraw: "提取"
        },
        reset:{
            title: "重設錢包",
            text: "請輸入錢包重設後的金額:",
            money_amount: "金額",
            cancel: "取消",
            reset: "重設"
        },
        rename: {
            title: "重新命名錢包",
            text: "請輸入錢包的新名字:",
            name: "名字",
            cancel: "取消",
            rename: "改名"
        },
        delete: {
            title: "刪除錢包",
            text: "您將無法復原刪除後的錢包。您確定要刪除嗎？",
            no: "取消",
            yes: "刪除"
        },
        create: {
            wallet_title: "新增錢包",
            group_title: "創建群組",
            wallet_text: "請提供此錢包的名稱",
            group_text: "請提供此群組的名稱",
            name: "名字",
            cancel: "取消",
            create: "創建"
        },
        members: {
            title: "成員",
            you: "您",
            add: "新增成員"
        },
        invite: {
            error: {
                not_found: "未找到用戶！",
                already_in: "用戶已在此群組！"
            },
            title: "新增成員",
            text: "請輸入您想邀請之成員的電子郵件:",
            email: "電子郵件",
            cancel: "取消",
            add: "新增"
        },
        quit: {
            title: "離開",
            text: "您確定要離開此群組嗎？",
            no: "取消",
            yes: "離開"
        }
    },
    group: {
        edit_wallet_name: "編輯錢包名稱",
        members: "成員",
        invite: "邀請",
        history: "歷史",
        no_records: "此群組尚未有任何紀錄",
        user: "用戶",
        type: "操作類型",
        amount: "金額",
        description: "描述"
    },
    history: {
        title: "歷史",
        no_records: "您尚未有任何紀錄",
        wallet: "錢包",
        type: "操作類型",
        amount: "金額",
        description: "描述",
        delete_all: "刪除所有歷史紀錄",
        text: "您確定要刪除所有歷史紀錄嗎？",
        no: "取消",
        yes: "刪除"
    },
    account: {
        email: "電子郵件",
        username: "用戶名稱",
        reset: "重設",
        change_password: "變更密碼",
        delete: "刪除",
        title: "警告",
        text: "至今為止在此平台上儲存過的一切都將被清除。您確定要刪除此帳號嗎？",
        no: "取消",
        yes: "刪除"
    },
    not_found: "噢，不！此頁面不存在！"
})