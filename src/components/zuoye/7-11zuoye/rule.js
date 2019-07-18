export default (param = {}, pandName) => {
    const { userName, passWord, tesTing, passWordEnd } = param;
    switch (pandName) {
        //前两次点击,走这个里面的判断
        case "login2":
            // 验证用户名是否为空
            if (userName === "") {
                return {
                    status: false,
                    msg: "亲,用户名没写呢(^_^),如果不知道用户名是什么,就写 websong 吧o(∩_∩)o"
                }
            }
            // 验证用户名是否正确
            if (userName !== "websong") {
                return {
                    status: false,
                    msg: "亲,用户名写错了呢(^_^),是 websong 哦o(∩_∩)o"
                }
            }
            // 验证密码是否为空
            if (passWord === "") {
                return {
                    status: false,
                    msg: "亲,密码没写呢?(￣△￣；),密码是 521song"
                }
            }
            // 验证密码是否匹配
            if (passWord !== "521song") {
                return {
                    status: false,
                    msg: "密码又写错了?(￣△￣；),密码是 521song 啊"
                }
            }
            break;
        case "login1":
            //验证码框,出来后,走这个里面的判断
            // 验证用户名是否为空
            if (userName === "") {
                return {
                    status: false,
                    msg: "亲,用户名没写呢(^_^),如果不知道用户名是什么,就写 websong 吧o(∩_∩)o"
                }
            }
            // 验证用户名是否正确
            if (userName !== "websong") {
                return {
                    status: false,
                    msg: "亲,用户名写错了呢(^_^),是 websong 哦o(∩_∩)o"
                }
            }
            // 验证密码是否为空
            if (passWord === "") {
                return {
                    status: false,
                    msg: "亲,密码没写呢?(￣△￣；),密码是 521song\n=￣ω￣="
                }
            }
            // 验证密码是否匹配
            if (passWord !== "521song") {
                return {
                    status: false,
                    msg: "密码又写错了?(￣△￣；),密码是 521song 啊"
                }
            }
            // 验证验证码是否为空
            if (tesTing.length !== 4) {
                return {
                    status: false,
                    msg: "亲,因为你两次输入都错误了,所以要输入验证码哦=￣ω￣=\n友情提示:验证是四位"
                }
            }
            break;
        case "login3":
            // 验证用户名是否为空
            if (userName === "") {
                return {
                    status: false,
                    msg: "亲,用户名没写呢(^_^),如果不知道用户名是什么,就写 websong 吧o(∩_∩)o"
                }
            }
            // 验证用户名是否正确
            if (userName !== "websong") {
                return {
                    status: false,
                    msg: "亲,用户名写错了呢(^_^),是 websong 哦o(∩_∩)o"
                }
            }
            // 验证密码是否为空
            if (passWord === "") {
                return {
                    status: false,
                    msg: "亲,密码没写呢?(￣△￣；),密码是 521song"
                }
            }
            // 验证密码是否匹配
            if (passWord !== "521song") {
                return {
                    status: false,
                    msg: "密码又写错了?(￣△￣；),密码是 521song 啊"
                }
            }
            // 判断密码是否与去人密码一致
            if (passWord !== passWordEnd) {
                return {
                    status: false,
                    msg: "两次密码不一致"
                }
            }
    }
    return {
        status: true,
        msg: `恭喜您! ${pandName === "login3" ? "注册" : "登录"}成功了呢!^(^o^)^`
    }
}