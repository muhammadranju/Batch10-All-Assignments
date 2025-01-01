const sortByPiceButton = id("sortByPiceButton"); // this button will sort the pets by price
const productCards = id("productCards"); // this div will show the pets
const productCardImages = id("productCardImages"); // this div will show the image of the pet
const categoryButtons = id("categoryButtons"); // this div will show the category buttons

const cardContainerSection = id("cardContainerSection"); // this div will show the pets
const errorSection = id("errorSection"); // this div will show the error message
const petModalData = id("petModalData"); // this div will show the pet details
const countNumber = id("countNumber"); // this div will show the countdown

const sinnerOne = id("sinnerOne"); // this div will show the first sinner
const sinnerTwo = id("sinnerTwo"); // this div will show the second sinner
const alertSuccessMessage = id("alertSuccessMessage"); // this div will show the alert message
const noImageSection = id("noImageSection"); // this div will show the no image message

// this function will be called when the page is loaded
async function main(url) {
  if (!url) {
    return console.log("You must be provide a baseURL");
  }
  sinnerOne.classList.remove("hidden");
  sinnerTwo.classList.remove("hidden");

  cardContainerSection.classList.add("hidden");
  categoryButtons.classList.add("hidden");
  const data = await fetchData(url);
  for (let post of data.pets) {
    const { breed, date_of_birth, price, image, gender, pet_name, petId } =
      post;
    productCards.innerHTML += showCardsHTML(
      image,
      pet_name,
      breed,
      date_of_birth,
      gender,
      price,
      petId
    );
  }
  setTimeout(() => {
    sinnerOne.classList.add("hidden");
    sinnerTwo.classList.add("hidden");
    categoryButtons.classList.remove("hidden");
    cardContainerSection.classList.remove("hidden");
  }, 2000);
}

// this function will be called when the user click on the category button
async function showCategoryButtons(url) {
  if (!url) {
    return console.log("You must be provide a baseURL");
  }
  const data = await fetchData(url);
  for (let cate of data.categories) {
    const { category, category_icon } = cate;
    categoryButtons.innerHTML += showButtonsHTML(category_icon, category);
  }
}

// this function will be called when the user click on the category card
async function showCategoryCards(name, btn) {
  activeButtonClickStyle(btn);

  productCards.innerHTML = "";
  sinnerTwo.classList.remove("hidden");
  productCards.classList.add("hidden");
  cardContainerSection.classList.add("hidden");
  errorSection.classList.add("hidden");
  const data = await fetchData(`category/${name}`);

  if (data.data.length === 0) {
    productCards.classList.add("hidden");
    cardContainerSection.classList.remove("hidden");
    errorSection.classList.remove("hidden");
    sinnerTwo.classList.add("hidden");
    return;
  }

  for (let post of data.data) {
    const { breed, date_of_birth, price, image, gender, pet_name, petId } =
      post;
    productCards.innerHTML += showCardsHTML(
      image,
      pet_name,
      breed,
      date_of_birth,
      gender,
      price,
      petId
    );
  }
  setTimeout(() => {
    sinnerTwo.classList.add("hidden");
    productCards.classList.remove("hidden");
    productCardImages.classList.remove("hidden");
    errorSection.classList.add("hidden");
    cardContainerSection.classList.remove("hidden");
  }, 1500);
}

// this function will show the image of the pet
function showCardImage(image) {
  alertSuccessMessage.classList.remove("hidden");
  noImageSection.classList.add("hidden");
  productCardImages.innerHTML += /*html*/ `
    <div class="border rounded-xl lg:w-full">
              <img src=${image} class="rounded-xl w-full h-32 object-cover" alt=""/>
    </div>
    `;
  setTimeout(() => {
    alertSuccessMessage.classList.add("hidden");
  }, 1000);
}

// this function will show the details of the pet
async function showPatsDetails(id) {
  const data = await fetchData(`pet/${id}`);
  const {
    breed,
    date_of_birth,
    price,
    image,
    pet_details,
    vaccinated_status,
    pet_name,
    gender,
    petId,
  } = data.petData;
  petModalData.innerHTML = showModelData(
    image,
    pet_name,
    breed,
    date_of_birth,
    gender,
    vaccinated_status,
    price,
    pet_details,
    petId
  );
  petsDetails.showModal();
}

// this function will countdown the pets
function countdown(button) {
  const counters = countNumber.innerText;
  let i = parseFloat(counters);
  adoptChallengeModal.showModal();
  const count = setInterval(() => {
    i--;
    countNumber.innerText = i;
    if (i <= 0) {
      clearInterval(count);
      adoptChallengeModal.close();
      countNumber.innerText = counters;
      button.disabled = true;
      button.innerText = "Adopted";
    }
  }, 1000);
}

// this function will sort the pets by price
sortByPiceButton.addEventListener("click", async () => {
  sinnerTwo.classList.remove("hidden");
  productCards.innerHTML = "";

  cardContainerSection.classList.add("hidden");
  const data = await fetchData("pets");
  data.pets.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

  for (let post of data.pets) {
    const { breed, date_of_birth, price, image, gender, pet_name, petId } =
      post;
    productCards.innerHTML += showCardsHTML(
      image,
      pet_name,
      breed,
      date_of_birth,
      gender,
      price,
      petId
    );
  }

  setTimeout(() => {
    sinnerTwo.classList.add("hidden");
    cardContainerSection.classList.remove("hidden");
  }, 2000);
});

showCategoryButtons("categories"); // show all category
main("pets"); // show all posts

// this function will subscribe the user
subscribeButton.addEventListener("click", async () => {
  const email = document.getElementById("email");

  subscribeMessage.showModal();
  setTimeout(() => {
    subscribeMessage.close();
  }, 2000);

  email.value = "";
});
