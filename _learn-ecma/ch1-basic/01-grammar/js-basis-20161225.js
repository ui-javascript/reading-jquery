var unknown = {};

// console.log(typeof unknown);

function judgeType(unknown) {
    switch(typeof unknown) {
        case "string":
            console.log("我是字符串");
            break;
        case "object":
            console.log("我是对象");
            break;
        default:
           console.log("我也不知道我是谁...");
            break;
    }
}

judgeType(unknown);
