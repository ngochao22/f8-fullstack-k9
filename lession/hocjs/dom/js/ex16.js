var nav = document.querySelector("nav");
var contents = [
    {
        id: 1,
        header: "Section 1",
        param: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt earum reprehenderit perferendis ex illum ab consequuntur molestiae, nemo officiis impedit temporibus voluptatem minima tempora porro blanditiis eum, sed cum in.",
    },
    {
        id: 2,
        header: "Section 2",
        param: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt earum reprehenderit perferendis ex illum ab consequuntur molestiae, nemo officiis impedit temporibus voluptatem minima tempora porro blanditiis eum, sed cum in.",
    },
    {
        id: 3,
        header: "Section 3",
        param: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt earum reprehenderit perferendis ex illum ab consequuntur molestiae, nemo officiis impedit temporibus voluptatem minima tempora porro blanditiis eum, sed cum in.",
    },
];
contents.forEach((content) => {
    var btn = document.createElement("button");
    btn.dataset.target = `section-${content.id}`;
    btn.innerText = `${content.header}`;
    nav.append(btn);

    var section = document.createElement("section");
    var h2 = document.createElement("h2");
    var p = document.createElement("p");
    section.dataset.target = `section-${content.id}`;
    h2.innerText = `Section ${content.id}`;
    p.innerText = `${content.param}`;
    section.append(h2);
    section.append(p);
    document.body.append(section);

    var height = nav.clientHeight;
    btn.addEventListener("click", function () {
        var sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            if (this.dataset.target === section.dataset.target) {
                var x = section.offsetTop;
                console.log(height);
                window.scroll({
                    top: x - height,
                    behavior: "smooth",
                });
            }
        });
    });
    window.addEventListener("scroll", function () {});
});

// const observer = new IntersectionObserver(
//     (entries, observer) => {
//         entries.forEach((entry) => {
//             var idBtn = entry.target.dataset.target;
//             var btnNew = document.querySelector(`[data-target=${idBtn}]`);
//             console.log(btnNew);

//             if (entry.isIntersecting) {
//                 btnNew.classList.add("active");
//             } else {
//                 btnNew.classList.remove("active");
//             }
//         });
//     },
//     {
//         threshold: 0.5, //Giữa màn hình
//     }
// );

// const elements = document.querySelectorAll("section");

// elements.forEach((element) => {
//     observer.observe(element);
// });

var observer = new IntersectionObserver(
    function (entries) {
        if (entries[0].isIntersecting) {
            console.log("Section 3 đã xuất hiện");
        }
    },
    {
        threshold: 0.5, //Giữa màn hình
    }
);

var sectionList = document.querySelectorAll("section");
sectionList.forEach(function (sectionEl) {
    observer.observe(sectionEl);
});
