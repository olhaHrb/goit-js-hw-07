const categories = document.querySelector("#categories");
console.log(`Number of categories: ${categories.children.length}`);

const items = document.querySelectorAll(".item");
for (const item of items) {
    console.log(`Category: ${item.children[0].innerText}`);
    console.log(`Elements: ${item.children[1].children.length}`);
}
