/**
 * Created by HunterYoung on 2018/9/28 0028.
 * Desc: moveMessage()函数的抽象函数
 *      每次调用这个新函数时可能发生变化的东西:
 *      1.打算移动的元素的ID。
 *      2.该元素的目的地的“左”位置。
 *      3.该元素的目的地的“右”位置。
 *      4.两次移动之间的停顿时间。
 *
 * Parmas:
 */

function moveElement(elementID, final_x, final_y, inerval) {
    if (!document.getElementById) return false;
    if (!document.getElementById(elementID)) return false;
    var elem = document.getElementById(elementID);
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    if (xpos === final_x && ypos === final_y) {
        return true;
    }
    if (xpos < final_x ) {
        xpos++;
    }
    if (xpos > final_x ) {
        xpos--;
    }
    if (ypos < final_y ) {
        ypos++;
    }
    if (ypos > final_y ) {
        ypos--;
    }
    elem.style.left = xpos + "px";
    elem.style.top = ypos + "px";
    var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+inerval+")";
    movement = setTimeout(repeat, 10);

}