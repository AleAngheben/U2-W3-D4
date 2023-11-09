// DQTO53JoTvRTIM8xiaJdlDMI7r8y4RJEmwXskzuvVNiOBalNMhjLQReB
// https://api.pexels.com/v1/

const loadImgBtn = document.getElementById("load-img");
const secondLoadBtn = document.getElementById("second-load-img");

const firstLoad = async function (url) {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        authorization:
          "DQTO53JoTvRTIM8xiaJdlDMI7r8y4RJEmwXskzuvVNiOBalNMhjLQReB",
      },
    });
    if (!response.ok) {
      throw new Error("General Fetching Error");
    }
    const img = await response.json();
    const imgArr = img.photos;

    console.log(imgArr);

    imgArr.forEach((img) => {
      const myRow = document.getElementById("my-row");
      const col = document.createElement("div");
      col.classList = "col-md-4";
      col.innerHTML = `
       <div class="card mb-4 shadow-sm " >
    
    <div style="height: 300px">
    <img src="${img.src.medium}" class="card-img-top" alt="${img.alt}" style="object-fit: cover; height: 100%;"/>
  </div>
    <div class="card-body">
      <h5 class="card-title">${img.alt}</h5>
      <p class="card-text">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
      <div
        class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary"
          >
            View
          </button>
          <button
            type="button"
            class="btn btn-sm btn-outline-secondary hide-btn"
           
          >
      Hide
          </button>
        </div>
        <small class="text-muted">${img.id}</small>
      </div>
    </div>
  </div>`;

      myRow.appendChild(col);

      const hideBtn = col.querySelector(".hide-btn");
      hideBtn.addEventListener("click", function () {
        col.remove();
      });
    });
  } catch (error) {
    console.log("erroreeeeeee", error);
  }
};

let urlApi;

loadImgBtn.addEventListener("click", function () {
  urlApi = "https://api.pexels.com/v1/search/?query=nature";
  firstLoad(urlApi);
});
// secondLoadBtn.onclick = firstLoad,{  const response = await fetch(
//     "https://api.pexels.com/v1/search/?query=cat",
//     {
//       method: "GET",
//       headers: {
//         authorization:
//           "DQTO53JoTvRTIM8xiaJdlDMI7r8y4RJEmwXskzuvVNiOBalNMhjLQReB",
//       },
//     }
//   );

// }
secondLoadBtn.addEventListener("click", function () {
  urlApi = "https://api.pexels.com/v1/search/?query=cat";
  firstLoad(urlApi);
});
