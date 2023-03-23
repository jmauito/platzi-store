async function getCategories() {
  const response = await fetch("https://api.escuelajs.co/api/v1/categories");
  const json = await response.json();
  return json;
}

async function listCategories() {
  const categories = await getCategories();
  categories.forEach((category) => {
    const element = document.createElement("div");
    const categoryName = document.createElement("h1");
    const img = document.createElement("img");
    img.setAttribute("src", category.image);
    categoryName.innerHTML = category.name;
    element.appendChild(categoryName);
    element.appendChild(img);
    document.body.appendChild(element);
    
  });
}

listCategories();
