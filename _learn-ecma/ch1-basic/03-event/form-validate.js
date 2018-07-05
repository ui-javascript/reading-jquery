/**
 * 表单验证
 * 重写了onsubmit
 * @return {[type]} [description]
 */
function validateForm() {
  // JS判空
  var x = document.forms.myForm.fname.value;
  if (x === null || x === "") {
    alert("姓必须填写");
    return false;
  }

  // emaiL验证
  x = document.forms.myForm.email.value;
  // x = document.forms["myForm"]["email"].value;
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
  if (atpos < 1 ||
    dotpos < atpos + 2 ||
    dotpos + 2 >= x.length) {
    alert("不是一个有效的 e-mail 地址");
    return false;
  }
}
