const id = (id) => document.getElementById(id);
const baseURL = "https://openapi.programming-hero.com/api/peddy";

// this function will fetch the data from the server
async function fetchData(path) {
  const res = await fetch(`${baseURL}/${path}`);
  return await res.json();
}
/**
 *
 * @param {string} image - pates image url
 * @param {string} name - pates name
 * @param {string} breed - pates breed
 * @param {string} birth - pates birth
 * @param {string} gender - pates gender
 * @param {string} price - pates price for adopt
 * @param {string} id - pates id
 * @returns html for card
 */
// this function will show the card
function showCardsHTML(image, name, breed, birth, gender, price, id) {
  return /*html*/ `

    <div class="border rounded-xl">
        <figure class="lg:p-5 p-3 w-full h-64">
        <img
            src=${image}
            class="rounded-xl object-cover w-full h-full "
            alt="Shoes"
        />
        </figure>
        <div class="lg:px-5 px-3">
        <h2 class="font-bold text-2xl">${name}</h2>
        <ul class="text-gray-500">
            <li>
            <i class="fa-solid fa-table-cells mr-1"></i>Breed: ${
              breed ?? "Not Available"
            }
            </li>
            <li>
            <i class="fa-regular fa-calendar mr-1"></i> Birth: ${
              birth ?? "Not Available"
            }
            </li>
            <li>
            <i class="fa-solid fa-mercury mr-1"></i> Gender: ${
              gender ?? "Not Available"
            }
            </li>
            <li>
            <i class="fa-solid fa-dollar-sign mr-1"></i> Price : ${
              price ?? "Not Available"
            }
            </li>
        </ul>
        <div class="divider"></div>
        <div class="mb-5 flex justify-between items-center">
            <button
            class="btn bg-transparent border lg:px-6 font-black lg:text-2xl text-lg"
            onclick="showCardImage('${image}')"
            >
            <i class="fa-regular fa-thumbs-up"></i>
            </button>
            <button
            class="btn text-colorPrimary border bg-transparent rounded-xl lg:px-6 font-black lg:text-lg"
            onclick="countdown(this)"
            >
            Adopt
            </button>
            <button
            class="btn text-colorPrimary border bg-transparent rounded-xl lg:px-6 font-black lg:text-lg"
            onclick="showPatsDetails('${id}')"
            >
            Details
            </button>
        </div>
        </div>
   </div>
`;
}

/**
 *
 * @param {string} image - pat category image
 * @param {*} typeName - pat category name
 * @returns
 */
// this function will show the category buttons
function showButtonsHTML(image, typeName) {
  return /*html*/ `
    <div
        class="flex justify-center items-center cursor-pointer border-[2px] rounded-xl lg:px-14 px-7 py-3 lg:space-x-4"
        onclick= "showCategoryCards('${typeName}',this)"  >
        
        <img src=${image} class="w-full h-full object-cover" alt="Dogs"/>
        <span class="font-bold text-2xl">${typeName}</span>
    </div>
          `;
}

// this function will show the model data
function showModelData(
  image,
  name,
  breed,
  birth,
  gender,
  vaccinated_status,
  price,
  pet_details
) {
  return /*html*/ `
    <figure class="lg:p-5 p-3 w-full h-96">
        <img
            src=${image}
            class="rounded-xl object-cover w-full h-full "
            alt="Shoes"
        />
        </figure>
          <h1 class="text-2xl font-bold my-3">${name}</h1>
          <div class="flex">
            <ul>
              <li>
                <i class="fa-solid fa-table-cells mr-1"></i>Breed: ${
                  breed ?? "Not Available"
                }
              </li>

              <li>
                <i class="fa-solid fa-mercury mr-1"></i> Gender: ${
                  gender ?? "Not Available"
                }
              </li>
              <li>
                <i class="fa-solid fa-mercury mr-1"></i> Gender: Vaccinated
                status: Partially ${vaccinated_status ?? "Not Available"}
              </li>
            </ul>
            <ul>
              <li>
                <i class="fa-regular fa-calendar mr-1"></i> Birth: ${
                  birth ?? "Not Available"
                }
              </li>
              <li>
                <i class="fa-solid fa-dollar-sign mr-1"></i> Price : ${
                  price ?? "Not Available"
                }
              </li>
            </ul>
          </div>
          <div class="divider"></div>
          <div>
            <h4 class="text-lg font-bold">Details Information</h4>
            <p>
              ${pet_details}
            </p>
          </div>`;
}

// this function will active the button style
let isActiveButtonStyle = null;
function activeButtonClickStyle(btn) {
  if (isActiveButtonStyle) {
    isActiveButtonStyle.classList.remove(
      "border-colorPrimary",
      "bg-slate-100",
      "rounded-full"
    );
    isActiveButtonStyle.classList.add("rounded-xl");
  }

  btn.classList.add("border-colorPrimary", "bg-slate-100", "rounded-full");
  btn.classList.remove("rounded-xl");

  isActiveButtonStyle = btn;
}
