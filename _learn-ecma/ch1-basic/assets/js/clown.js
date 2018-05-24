var clown = {
    // 输出换行
    hr : function() {
      console.log("---------------------");
    },

    // hr : function(name) {
    //   console.log("---------" + name + "------------");
    // },

    // 判断是否为数组
    isArray : function(arr) {
        // console.log(arr.constructor.toString());
        return arr.constructor.toString().indexOf("Array") >= 0;
    },

    // 检测是不是汉字
    checkChineseName : function(name) {
      const regex = /[^\u4E00-\u9FA5]/;

      // var regexObj = new RegExp(regex);
      // if(regexObj.test(realName) === true) { return false; } // 只要找到不是汉字的就返回false

      if(regex.test(name) === true) {
        return false;
      }
      return true;
    }
}

module.exports = clown;
