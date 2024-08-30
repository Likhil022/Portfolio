const navHome = document.querySelector(".nav_home");
const navAbout = document.querySelector(".nav_about");
const navQual = document.querySelector(".nav_qual");
const navSer = document.querySelector(".nav_service");
const navproj = document.querySelector(".nav_projects");
const navtouch = document.querySelector(".nav_touch");

const hero = document.querySelector("#nav");
const about = document.querySelector("#about");
const qualification = document.querySelector("#qualification");
const service = document.querySelector("#services");
const projects = document.querySelector("#projects");
const touch = document.querySelector("#touch");

scroll(navHome,hero);
scroll(navAbout,about);
scroll(navQual,qualification);
scroll(navSer,service);
scroll(navproj,projects);
scroll(navtouch,touch);


function scroll(nav_button,section_id){
    nav_button.addEventListener("click",function(e){
        section_id.scrollIntoView({ behavior: 'smooth' } );
    })
}