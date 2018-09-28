/**
 * Created by HunterYoung on 2018/9/28 0028.
 * Desc: 通过改变奇数表格行的背景颜色来实现斑马线的效果
 *      现在format.css 文件里增加一条对应于class="odd"的样式声明：
 *      .odd {
 *          background-color: #ffc;
 *      }
 */
function stripeTables() {
    if (!document.getElementsByTagName) return false;
    const tables = document.getElementsByTagName("table");
    let odd, rows;
    for (let i=0; i<tables.length; i++ ) {
        odd = false;
        rows = tables[i].getElementsByTagName("tr");
        for (let j=0; i<rows.length; j++ ) {
            if (odd === true) {
                rows[i].style.backgroundColor = "#ffc";
                odd = false;
            } else {
                odd = true;
            }
        }
    }
}