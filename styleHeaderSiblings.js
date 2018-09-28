/*
*
* 利用className属性改变一级标题之后的那个元素的样式，只需要在CSS里修改.intro类的样式声明
* .intro {
*   font-weight: bold;
*   font-size: 1.4em;
* }
*
* */
function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false;
    const headers = document.getElementsByTagName("h1");
    let elem;
    for ( var i=0; i<headers.length; i++ ){
        elem = getNextElement(headers[i].nextSibling);
        elem.className = "intro";
    }

}