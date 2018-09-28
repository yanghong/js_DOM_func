/**
 * Created by HunterYoung on 2018/9/28 0028.
 * Desc: 在需要给一个元素追加新的class时，你可以按照以下步骤操作：
 *       1.检查className属性的值是否是null
 *       2.如果是，把心的class设置值直接赋值给className属性；
 *       3.如果不是，把一个空格和新的class设置值追加到className属性上。
 * Params: element:需要添加新class元素，value:新的class设置值。
 */
function addClass(element, value) {
    if (!element.className) {
        element.className = value;
    } else {
        element.className = element.className + " " + value;
    }
}