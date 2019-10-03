function displayHikeList() {
    const hikeListElement = document.getElementById('hikes');
    hikeListElement.innerHTML = '';
    hikeList.forEach(hike => {
        hikeListElement.appendChild(buildHikeHtml(hike));
    });
}

function buildHikeHtml(hike=null) {
    const item = document.createElement('li');
    item.classList.add('light');
    item.innerHTML = `
    <h2>${hike.name}</h2>
        <div class="image"><img src="https://byui-cit.github.io/cit261/examples/${hike.imgSrc}"
        alt="${hike.imgAlt}"></div>
        <div>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
        <div>`
        item.addEventListener('touchend', function(event){
            console.dir(event.currentTarget);
            const touchedHike = hikeList.find(hike => hike.name == event.currentTarget.children[0].innerText);
            buildHikeHtmlDetailed(touchedHike);
            const hikeListElement = document.getElementById('hikes');
            hikeListElement.innerHTML = '';
            hikeListElement.appendChild(buildHikeHtmlDetailed(touchedHike));
        });
    // const img = document.createElement('img');
    // img.src = 'https://byui-cit.github.io/cit261/examples/' + hike.imgSrc;
    // img.alt = hike.imgAlt;
    // item.appendChild(img);
    // const title = document.createElement('h2');
    // title.innerText = hike.name;
    // item.appendChild(title);
    // console.dir(item);
    return item;
}

function buildHikeHtmlDetailed(hike=null) {
    const item = document.createElement('li');
    item.innerHTML = `<img
    src="https://byui-cit.github.io/cit261/examples/${hike.imgSrc}"
    alt="${hike.imgAlt}"
  />
  <h2>${hike.name}</h2>
  <div>
    <h3>Distance</h3>
    <p>3 miles</p>
  </div>
  <div>
    <h3>Difficulty</h3>
    <p>Easy</p>
  </div>
  <div>
    <h3>Description</h3>
    <p>Beautiful short hike along the Bechler river to Bechler Falls</p>
  </div>
  <div>
    <h3>How to get there</h3>
    <p>
      Take Highway 20 north to Ashton. Turn right into the town and
      continue through. Follow that road for a few miles then turn left
      again onto the Cave Falls road. Drive to the end of the Cave Falls
      road. There is a parking area at the trailhead.
    </p>
  </div>`
    return item;
}

// window.onload = displayHikeList;
window.addEventListener('load', displayHikeList);
// displayHikeList();