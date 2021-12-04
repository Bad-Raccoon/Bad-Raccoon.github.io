let tabs = document.querySelectorAll('.tabs');

tabs.forEach(function(tab){
    tab.querySelectorAll('.tabs__nav-btn').forEach(function (item) {
        if(item.parentElement.parentElement.parentElement == tab) {
            item.addEventListener("click", function () {
                let tabId = item.getAttribute("data-tab");
                let currentTab = tab.querySelector(tabId);
    
                if(! item.classList.contains('active')){
                    tab.querySelectorAll(".tabs__nav-btn").forEach(function(item){
                        item.classList.remove('active');
                    });
                    tab.querySelectorAll(".tabs__item").forEach(function(item){
                        item.classList.remove('active');
                    });
                    
                    item.classList.add('active');
                    currentTab.classList.add('active');

                }
            });
        }
    });
});

// document.querySelectorAll(".tabs__nav-btn")[0].click();


document.querySelectorAll(".tabs__item--image").forEach(function(item){
    item.addEventListener("click", function(){
        document.querySelector("body").style.overflow = 'hidden';
        document.querySelector(".file-viewer-image").src = this.src;
        document.querySelector(".file-viewer").style.display = "flex";
        document.querySelector(".file-viewer-background").style.display = "block";
        setTimeout(() => {
            document.querySelector(".file-viewer").style.opacity = 1;
            document.querySelector(".file-viewer-background").style.opacity = 1;
            document.querySelector(".file-viewer-content").style.transform = 'scale(1)';
        }, 40);
    });
});

document.querySelectorAll("[data-dismiss=\"file-viewer\"]").forEach(function(item){
    item.addEventListener("click", function(){
        document.querySelector(".file-viewer-content").style.transform = 'scale(.9)';
        document.querySelector("body").style.overflow = 'overlay';
        document.querySelector(".file-viewer").style.opacity = 0;
        document.querySelector(".file-viewer-background").style.opacity = 0;
        setTimeout(() => {
            document.querySelector(".file-viewer").style.display = "none";
            document.querySelector(".file-viewer-image").src = '';
            document.querySelector(".file-viewer-content").style.transform = 'scale(1.1)';
            document.querySelector(".file-viewer-background").style.display = "none";
        }, 500);
    });
});;