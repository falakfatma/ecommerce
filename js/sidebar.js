let openSidebarTrigger = document.getElementById('openSidebarTrigger');
let sidebar = document.getElementById('sidebar');

openSidebarTrigger.addEventListener('click', function triggerNav() {
    if (screen.width <= 578) {
        sidebar.style.width = "20rem";
    } else if (screen.width <= 992) {
        sidebar.style.width = "20rem";
    } else {
        sidebar.style.width = "20rem";
    }
})

let CloseBtnId = document.getElementById('closeBtnId')
CloseBtnId.addEventListener('click', function closeNav() {
    document.getElementById('sidebar').style.width = "0";
})

let sideNavListPlusTrigger = document.getElementById('sideNavListPlusTrigger');

sideNavListPlusTrigger.addEventListener('click', function triggerSideNavInnerList(){
    console.log(sideNavListPlusTrigger.childNodes)
})
