const sidebarContainer = document.getElementById("sidebar-container");
const logo = document.querySelector("#top-sidebar div");
const sidebarItem = document.querySelectorAll("#nav-sidebar li");
const userData = document.getElementById("user");
const menuToggle = document.getElementById("menuToggle");

window.addEventListener("load", (e) => {

    // navbar item selected
    sidebarItem.forEach(itemElement => {        
        itemElement.addEventListener("click", (e) => {
            sidebarItem.forEach(itemEl => {
                if (itemEl.hasAttribute("selected")) {
                    itemEl.removeAttribute("selected");
                };
            });
            
            itemElement.setAttribute("selected", "");
        });
    });

    menuToggle.addEventListener("click", (e) => {
        sidebarContainer.toggleAttribute("hide");
        
        if (sidebarContainer.hasAttribute("hide")) {
            logo.style.opacity = 0;
            setTimeout(() => {
                logo.style.display = "none"
                userData.style.display = "none"
                document.querySelector("#top-sidebar").style.justifyContent = "center";
                document.querySelector("#bottom-sidebar #log-out").style.justifyContent = "center";
            }, 400)
            
        } else {
            
            logo.style.display = "flex"
            userData.style.display = "flex"
            
            setTimeout(() => {
                logo.style.opacity = 1;
            }, 0)

            document.querySelector("#top-sidebar").style.justifyContent = "space-between";
            document.querySelector("#bottom-sidebar  #log-out").style.justifyContent = "space-between";

        }

    })

})