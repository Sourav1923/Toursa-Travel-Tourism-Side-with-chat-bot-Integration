const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});


;
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
window.onscroll= () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
};

document.getElementById("London").addEventListener("click", function() {
    location.assign("https://www.google.com/search?q=london&rlz=1C1OPNX_en-gbIN1103IN1103&oq=london&gs_lcrp=EgZjaHJvbWUqBwgAEAAYjwIyBwgAEAAYjwIyDwgBEC4YQxixAxiABBiKBTIMCAIQABhDGIAEGIoFMgwIAxAAGEMYgAQYigUyDwgEEAAYQxixAxiABBiKBTIMCAUQABhDGIAEGIoFMgwIBhAAGEMYgAQYigUyDAgHEAAYQxiABBiKBTIMCAgQABhDGIAEGIoFMg8ICRAAGEMYsQMYgAQYigXSAQkzOTI1ajFqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8");
});
document.getElementById("newyork").addEventListener("click", function() {
    location.assign("https://www.google.com/search?sca_esv=932fa0c181db1930&rlz=1C1OPNX_en-gbIN1103IN1103&sxsrf=ADLYWIIlOcbmOmLmkZpeJQ5gm5zTK07YJw:1732642682548&q=new+york&spell=1&sa=X&ved=2ahUKEwjYwPb8xPqJAxV_RmwGHT2YB88QBSgAegQIChAB&biw=1707&bih=811&dpr=1.13");
});
document.getElementById("Dubai").addEventListener("click", function() {
    location.assign("https://www.google.com/search?q=Dubai&sca_esv=932fa0c181db1930&rlz=1C1OPNX_en-gbIN1103IN1103&biw=1707&bih=811&sxsrf=ADLYWILrE7IiKQZc2ktzCzbuszpNWwsUkw%3A1732642683951&ei=ewdGZ-LkOby5seMPwKibUA&ved=0ahUKEwiijsz9xPqJAxW8XGwGHUDUBgoQ4dUDCA8&uact=5&oq=Dubai&gs_lp=Egxnd3Mtd2l6LXNlcnAiBUR1YmFpMg0QLhiABBixAxhDGIoFMgoQABiABBhDGIoFMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFMggQABiABBixAzIKEAAYgAQYQxiKBTIIEAAYgAQYsQMyCxAAGIAEGLEDGIMBMg4QABiABBixAxiDARiKBTIIEAAYgAQYsQMyHBAuGIAEGLEDGEMYigUYlwUY3AQY3gQY4ATYAQFI1Q1QAFixBXABeAGQAQCYAasBoAGrAaoBAzAuMbgBA8gBAPgBAfgBApgCAqACuQGoAhDCAgcQIxgnGOoCwgIHEC4YJxjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQGYAwe6BgYIARABGAiSBwMxLjGgB_EH&sclient=gws-wiz-serp");
});
document.getElementById("goa").addEventListener("click", function() {
    location.assign("https://www.google.com/search?q=goa&sca_esv=932fa0c181db1930&rlz=1C1OPNX_en-gbIN1103IN1103&biw=1707&bih=811&sxsrf=ADLYWIKCoyTr3um5U2ZlNlcxVWSNllDLbw%3A1732642799661&ei=7wdGZ7KAKPi5vr0PsouU0AM&ved=0ahUKEwjys-K0xfqJAxX4nK8BHbIFBToQ4dUDCA8&uact=5&oq=goa&gs_lp=Egxnd3Mtd2l6LXNlcnAiA2dvYTIKECMYgAQYJxiKBTIKEAAYgAQYQxiKBTINEC4YgAQYsQMYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyDhAuGIAEGLEDGMcBGK8BMgoQABiABBhDGIoFMggQLhiABBixAzILEAAYgAQYsQMYigVInh1QAFiWFnACeAGQAQCYAdoBoAG2BqoBBTAuMS4zuAEDyAEA-AEBmAIGoALMBqgCEcICBxAjGCcY6gLCAgcQLhgnGOoCwgIWEC4YgAQYQxi0AhjIAxiKBRjqAtgBAcICJRAuGIAEGEMYtAIYxwEYmAUYyAMYmQUYigUY6gIYngUYrwHYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgIKEC4YgAQYJxiKBcICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMY0QMYgwEYxwHCAggQABiABBixA8ICEBAuGIAEGNEDGEMYxwEYigXCAhAQLhiABBhDGMcBGIoFGK8BwgIQEAAYgAQYsQMYQxiDARiKBcICFhAuGIAEGLEDGNEDGEMYgwEYxwEYigWYAwe6BgYIARABGAiSBwUyLjEuM6AHyzU&sclient=gws-wiz-serp");
});
document.getElementById("manali").addEventListener("click", function() {
    location.assign("https://www.google.com/search?q=manali&sca_esv=932fa0c181db1930&rlz=1C1OPNX_en-gbIN1103IN1103&biw=1707&bih=811&sxsrf=ADLYWIL04hfFQYF3iTWBvG_Z_I2fgEE3Ng%3A1732642885830&ei=RQhGZ428MuSNseMPxeSGsQw&ved=0ahUKEwjN8u3dxfqJAxXkRmwGHUWyIcYQ4dUDCA8&uact=5&oq=manali&gs_lp=Egxnd3Mtd2l6LXNlcnAiBm1hbmFsaTIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTINEC4YgAQYsQMYQxiKBTIFEAAYgAQyCxAAGIAEGLEDGIMBMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyCxAAGIAEGLEDGIMBMg0QABiABBixAxhDGIoFMggQABiABBixAzIcEC4YgAQYsQMYQxiKBRiXBRjcBBjeBBjgBNgBAUjG4wJQmM4CWLbgAnACeAGQAQGYAeEBoAGyDKoBBTAuNC40uAEDyAEA-AEBmAIIoAKwCagCEsICChAAGLADGNYEGEfCAg0QABiABBiwAxhDGIoFwgIOEAAYsAMY5AIY1gTYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AEBwgIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAcICBxAjGCcY6gLCAgcQLhgnGOoCwgIQEAAYAxi0AhjqAhiPAdgBAcICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgIKEC4YgAQYQxiKBcICEBAAGIAEGLEDGEMYgwEYigXCAhAQLhiABBixAxhDGIMBGIoFwgITEC4YgAQYsQMY0QMYQxjHARiKBcICChAAGIAEGEMYigWYAweIBgGQBhO6BgYIARABGAmSBwUyLjMuM6AH13s&sclient=gws-wiz-serp");
});
document.getElementById("Lakshadweed").addEventListener("click", function() {
    location.assign("https://www.google.com/search?sca_esv=932fa0c181db1930&rlz=1C1OPNX_en-gbIN1103IN1103&sxsrf=ADLYWILYiFhN1v0JI_-oooIGAAmo5sgv2A:1732643087836&q=Lakshadweep&spell=1&sa=X&ved=2ahUKEwjwo5e-xvqJAxUHT2wGHSRPCksQBSgAegQIDBAB&biw=1707&bih=811&dpr=1.13");
});
document.getElementById("jaipur").addEventListener("click", function() {
    location.assign("https://www.google.com/search?q=jaipur&sca_esv=932fa0c181db1930&rlz=1C1OPNX_en-gbIN1103IN1103&sxsrf=ADLYWIII8Mhdix7Iuq15fG7cj20X3sOawA%3A1732642593118&ei=IQdGZ979BuflseMP2oKO2AE&ved=0ahUKEwiekqTSxPqJAxXncmwGHVqBAxsQ4dUDCA8&uact=5&oq=jaipur&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmphaXB1cjINEC4YgAQYsQMYQxiKBTIFEAAYgAQyEBAAGIAEGLEDGEMYgwEYigUyBRAuGIAEMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFMgUQABiABDIKEAAYgAQYQxiKBTINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIcEC4YgAQYsQMYQxiKBRiXBRjcBBjeBBjgBNgBAUjhEVAAWKQJcAF4AZABAJgBgQKgAYECqgEDMi0xuAEDyAEA-AEB-AECmAICoAKNAqgCE8ICBxAjGCcY6gLCAgcQLhgnGOoCwgIQEAAYAxi0AhjqAhiPAdgBAcICEBAuGAMYtAIY6gIYjwHYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBwgIWEC4YgAQYQxi0AhjIAxiKBRjqAtgBAZgDB-IDBRIBMSBAugYGCAEQARgKkgcFMS4wLjGgB_cJ&sclient=gws-wiz-serp");
});
document.getElementById("varanasi").addEventListener("click", function() {
    location.assign("https://www.google.com/search?q=varanasi&sca_esv=932fa0c181db1930&rlz=1C1OPNX_en-gbIN1103IN1103&sxsrf=ADLYWIJtUnF_cVrc2LJUL2aNzP8qBw08_A%3A1732642469915&ei=pQZGZ77JN5mSseMPlczpkAo&ved=0ahUKEwj-r8SXxPqJAxUZSWwGHRVmGqIQ4dUDCA8&uact=5&oq=varanasi&gs_lp=Egxnd3Mtd2l6LXNlcnAiCHZhcmFuYXNpMg0QLhiABBixAxhDGIoFMhAQABiABBixAxhDGIMBGIoFMgUQABiABDIQEC4YgAQYQxjHARiKBRivATIQEC4YgAQYQxjHARiKBRivATINEAAYgAQYsQMYQxiKBTIKEAAYgAQYQxiKBTIFEAAYgAQyChAAGIAEGEMYigUyBRAAGIAEMhwQLhiABBixAxhDGIoFGJcFGNwEGN4EGOAE2AEBSN8NUABYuAVwAXgBkAEAmAH3AaAB9wGqAQMyLTG4AQPIAQD4AQH4AQKYAgKgAogCqAIQwgIHECMYJxjqAsICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBmAMIugYGCAEQARgIkgcFMS4wLjGgB-8M&sclient=gws-wiz-serp");
});
document.getElementById("ladakh").addEventListener("click", function() {
    location.assign("https://www.google.com/search?q=ladakh&sca_esv=932fa0c181db1930&rlz=1C1OPNX_en-gbIN1103IN1103&sxsrf=ADLYWIJ-nJoFHgIaLDC_O42a7K0nNo_1cg%3A1732643285104&ei=1QlGZ6aJBpqWjuMP9f7esQU&ved=0ahUKEwjmx5-cx_qJAxUai2MGHXW_N1YQ4dUDCA8&uact=5&oq=ladakh&gs_lp=Egxnd3Mtd2l6LXNlcnAiBmxhZGFraDINEC4YgAQYsQMYQxiKBTINEAAYgAQYsQMYQxiKBTIFEAAYgAQyChAAGIAEGEMYigUyCBAAGIAEGLEDMgUQABiABDIIEAAYgAQYsQMyBRAAGIAEMg4QLhiABBixAxjHARivATIIEAAYgAQYsQMyHBAuGIAEGLEDGEMYigUYlwUY3AQY3gQY4ATYAQFIzBBQAFiNC3ABeAGQAQCYAe8BoAHvAaoBAzItMbgBA8gBAPgBAfgBApgCAqAC_AGoAhLCAgcQIxgnGOoCwgITEAAYgAQYQxi0AhiKBRjqAtgBAcICFhAuGIAEGEMYtAIYyAMYigUY6gLYAQHCAhwQLhiABBhDGLQCGMcBGMgDGIoFGOoCGK8B2AEBmAMGugYGCAEQARgBkgcFMS4wLjGgB4EK&sclient=gws-wiz-serp");
});







