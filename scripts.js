function toggleFunc(ele) {
    var get_ele = document.getElementById(ele);
    // if (get_ele.style.display == "block") {
    //     get_ele.style.display = "none";
    // } else {
    //     get_ele.style.display = "block";
    // }
    $(get_ele).toggle(400);
}