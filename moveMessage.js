/**
 * Created by HunterYoung on 2018/9/28 0028.
 * Desc: 让元素的移动以渐变的形式发生。
 *      1.获取元素的当前位置。
 *      2.如果元素已经达到它的目的地，则退出这个函数。
 *      3.如果元素尚未到达它的目的地，则把它向目的地移近一点儿。
 *      4.经过一段时间间隔后从步骤一开始重复上述步骤。
 * Parmas:
 */
function moveMessage() {
    if (!document.getElementById) return false;
    if (!document.getElementById("message")) return false;
    var elem = document.getElementById("message");
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos === 200 && ypos === 100) {
        return true;
    }
    if (xpos < 200 ) {
        xpos++;
    }
    if (xpos > 200 ) {
        xpos--;
    }
    if (ypos < 100 ) {
        ypos++;
    }
    if (ypos > 100 ) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    movement = setTimeout("moveMessage()", 10);

}