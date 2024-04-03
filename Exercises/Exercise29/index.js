class Specialites {
  constructor(_img, _title, _desc) {
    this.img = _img;
    this.title = _title;
    this.desc = _desc;
  }
}

class Features extends Specialites {
  constructor(_img, _title, _stars, _icon) {
    super(_img, _title, undefined);
    this.stars = _stars;
    this.icon = _icon;
  }
}

class FoodCard extends Specialites {
  constructor(_title, _desc, _price) {
    super(undefined, _title, _desc);
    this.price = _price;
  }
}

const createSpecialties = (specData) => `<div class="col-4">
        <div class="bordered">
        <img src="./img/${specData.img}" class="mb-3" />
        <h4>${specData.title}</h4>
        <p>${specData.desc}</p>
        </div>
    </div>`;

specialitiesData.forEach((el) => {
  const specialitiesObj = new Specialites(el.img, el.title, el.desc);
  document.querySelector(".specialities").innerHTML += createSpecialties(specialitiesObj);
});

const createStars = (numStars) => {
  const starsArr = [];
  for (let i = 0; i < numStars; i++) {
    starsArr.push(`<i class="fa fa-star" aria-hidden="true"></i>`);
  }
  return starsArr;
};

const createFeatures = (featuresData) => `<div class="col-3">
<div class="row featuredd">
  <div class="col-12">
    <img class="img-fluid" src="./img/${featuresData.img}" />
    <div class="row mt-3 align-items-start">
      <div class="col-8">
        <h4>${featuresData.title}</h4>
        <div class="stars">
          ${createStars(featuresData.stars).join("")}
          <p>${featuresData.stars}</p>
        </div>
      </div>
      <div class="col-4">
        <button class="btn btn-block order">${featuresData.icon}</button>
      </div>
    </div>
  </div>
</div>
</div>`;

featuresData.forEach((el) => {
  const featuresObj = new Features(el.img, el.title, el.stars, el.icon);
  document.querySelector(".featured-food").innerHTML += createFeatures(featuresObj);
});

const breakfastCards = [];
const dinnerCards = [];
const lunchCards = [];

const createFoodCard = (foodObj) => `<div class="row">
<div class="col-12">
  <div class="row">
    <div class="col-8">
      <h3>${foodObj.title}</h3>
    </div>
    <div class="col-4 text-right">
      <h3>${foodObj.price}</h3>
    </div>
  </div>
  <p>${foodObj.desc}</p>
</div>
</div>`;

foodCardsData.forEach((el) => {
  const foodCardObj = new FoodCard(el.title, el.desc, el.price);

  breakfastCards.push(foodCardObj);
  dinnerCards.push(foodCardObj);
  lunchCards.push(foodCardObj);
  document.querySelector(".breakfast").innerHTML += createFoodCard(foodCardObj);

  document.querySelector(".lunch").innerHTML += createFoodCard(foodCardObj);
  document.querySelector(".dinner").innerHTML += createFoodCard(foodCardObj);
});
