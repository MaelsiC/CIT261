      //create an array of hikes
      const hikeList = [
        {
          name: 'Bechler Falls',
          imgSrc: 'falls.jpg',
          imgAlt: 'Image of Bechler Falls',
          distance: '3 miles',
          difficulty: 'Easy',
          description:
            'Beautiful short hike along the Bechler river to Bechler Falls',
          directions:
            'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
        },
        {
          name: 'Teton Canyon',
          imgSrc: 'falls.jpg',
          imgAlt: 'Image of Bechler Falls',
          distance: '3 miles',
          difficulty: 'Easy',
          description: 'Beautiful short (or long) hike through Teton Canyon.',
          directions:
            'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.'
        },
        {
          name: 'Denanda Falls',
          imgSrc: 'falls.jpg',
          imgAlt: 'Image of Bechler Falls',
          distance: '7 miles',
          difficulty: 'Moderate',
          description:
            'Beautiful hike through Bechler meadows river to Denanda Falls',
          directions:
            'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.'
        }
      ];

      const imgBasePath = '//byui-cit.github.io/cit261/examples/';
      //on load grab the array and insert it into the page on load

      class Hike {
          constructor(elementId) {
              this.dad = document.getElementById(elementId);

              this.button = this.buildBackButton();
          }

          getHikeByName(hikeName){
              return this.hikeList.find(hike => hike.name === hikeName);
          }

          buildBackButton() {
            const button = document.createElement('button');
            button.innerHTML = '&lt;- All Hikes';
            button.addEventListener('touchend', () => {
              this.showHikeList();
            });
            button.classList.add('hidden');
            this.parentElement.before(button);
            return button;

              return button;
          }

          showHikeList() {
            this.dad.innerHTML = '';
            renderHikeList(hikeList, this.dad);
            this.addHikeListener();
            this.button.classList.add('hidden');
          }

          showOneHikeFull(hikeName) {
            renderOneHikeFull(hikeName);
          }

          addHikeListener() {
              const childrenList = Array.from(this.dad.children);
              childrenList.forEach(child => {
                  child.addEventListener('touchend', e => {this.showOneHikeFull(e.currentTarget.dataset.name)});
              });
          }

      }




      function renderHikeList(hikes, parent) {
        hikes.forEach(hike => {
          parent.appendChild(renderOneHikeLight(hike));
        });
      }


      function renderOneHikeLight(hike) {
        const item = document.createElement('li');

        item.innerHTML = ` <h2>${hike.name}</h2>
        <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${
          hike.imgAlt
        }"></div>
        <div>
                <div>
                    <h3>Distance</h3>
                    <p>${hike.distance}</p>
                </div>
                <div>
                    <h3>Difficulty</h3>
                    <p>${hike.difficulty}</p>
                </div>
        </div>`;

        return item;
      }

      function renderOneHikeFull(hike) {
        const item = document.createElement('li');
        item.innerHTML = `<img
        src="${imgBasePath}${hike.imgSrc}"
        alt="${hike.imgAlt}"
      />
      <h2>${hike.name}</h2>
      <div>
        <h3>Distance</h3>
        <p>${hike.distance}</p>
      </div>
      <div>
        <h3>Difficulty</h3>
        <p>${hike.difficulty}</p>
      </div>
      <div>
        <h3>Description</h3>
        <p>${hike.description}</p>
      </div>
      <div>
        <h3>How to get there</h3>
        <p>
        ${hike.directions}
        </p>
      </div>`;

        return item;
      }

      document.onload = function() {
          const hikes = new Hike("hikes");
          hikes.showHikeList();
      }