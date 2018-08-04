$(function () {
  /**
   * 初始化
   * @type {number}
   */
  var pageNum = 0; // 当前页左侧页码(视为当前页), 0~4 01122334

  // 遍历图书页数(5)，分配显示z-index优先级
  for (var i = 0; i < $('.runPage').length; i++) {
    $('.runPage').eq(i).css('z-index', 7 - 2 * i);
    $('.runPage').eq(i).children('div').css('z-index', 7 - 2 * i); // div指的就是文字
    $('.runPage').eq(i).children('img').css('z-index', 6 - 2 * i);
  }

  // 使同一页的文字优先级比图片高 1
  // 使上一页的图片或文字优先级总比下一页高 1
  // 最终这是连续的优先级数字

  /**
   * 翻下一页的处理逻辑
   */
  $('.nextBtn').bind('click', function () {
    // 限定页数
    if (pageNum <= 2) {
      runNext(pageNum);
      pageNum++;
    }
    // console.log('当前页' + pageNum);
  });

  // 翻下一页样式变化函数
  function runNext(index) {
    $('.runPage').eq(index).addClass('runClass'); // 旋转当前页
    zIndexNext(index, $('.runPage').eq(index));
  }

  // 翻下一页优先级调整
  function zIndexNext(index, element) {
    // if (index >= 1) {
    element.css('z-index', 3 + 2 * index);
    // }

    setTimeout(function () {
      // if (index == 0) {
      //   element.css('z-index', 3 + 2 * index);
      // }

      element.children('div').css('z-index', 2 + 2 * index);
      element.children('img').css('z-index', 3 + 2 * index);
    }, 1000); // 翻页不宜过快，否则效果会很粗糙
  }

  // 使同一页图片优先级比文字优先级大，即显示图片
  // 使上一页的图片或文字总比下一页小1
  // 因为操作是连续的，所以翻页效果优先级有序进行着

  /**
   * 翻上一页的处理逻辑
   */

  $('.lastBtn').bind('click', function () {
    if (pageNum >= 1) {
      pageNum--;
      runLast(pageNum);
    }
    // console.log(pageNum);
  });

  function runLast(index) {
    $('.runPage').eq(index).removeClass('runClass');
    zIndexLast(index, $('.runPage').eq(index));
  }

  function zIndexLast(index, element) {
    if (index == 0) {
      element.css('z-index', 7 - 2 * index);
    }

    setTimeout(function () {
      element.css('z-index', 7 - 2 * index);
      element.children('div').css('z-index', 7 - 2 * index);
      element.children('img').css('z-index', 6 - 2 * index);
    }, 1000);
  }
});