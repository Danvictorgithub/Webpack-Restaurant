 function component() {
    const container = document.createElement('div');
    container.setAttribute('id','container');

    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');
        const unlistedItem = document.createElement('ul');

            const home = document.createElement('li');
            home.classList.add('home');
            home.textContent = 'Home';

            const menu = document.createElement('li');
            menu.classList.add('menu');
            menu.textContent = 'Menu'

            const aboutUs = document.createElement('li');
            aboutUs.classList.add('about-us');
            aboutUs.textContent = 'About Us';
    [home,menu,aboutUs].forEach( (child) => unlistedItem.appendChild(child));
    navBar.appendChild(unlistedItem);
    container.appendChild(navBar);
    container.appendChild(genMenu());
    // Generates the Landing Page
    function genHome() {
        const homeContent = document.createElement('div');
        homeContent.classList.add('content');
        homeContent.classList.add('home-page');
            const landingImage = document.createElement('div');
            landingImage.classList.add('landing-image');

            const landTitle = document.createElement('div');
            landTitle.classList.add('landing-title');
                const headerOne = document.createElement('h1');
                headerOne.textContent = 'Kderya Restaurant';
                landTitle.appendChild(headerOne);

                const bar = document.createElement('div');
                bar.classList.add('bar');
                landTitle.appendChild(bar);

                const headerThree = document.createElement('h3');
                headerThree.textContent = 'ORGANIC FOOD';
                landTitle.appendChild(headerThree);
                
                const image = document.createElement('img');
                image.setAttribute('src','./apostrophe.png');
                image.classList.add('apostrophe');
                landTitle.appendChild(image);
                
                const paragraph = document.createElement('p');
                paragraph.classList.add('quote');
                paragraph.textContent = 'We bring the dishes from most country, bringing the best of all worlds. Crafted to the taste of the masses with our organic products. Healthy and Organic';
                landTitle.appendChild(paragraph);

                const headerTwo = document.createElement('h2');
                headerTwo.textContent = '- Dan Victor Lofranco';
                landTitle.appendChild(headerTwo);
        [landingImage,landTitle].forEach((child) => homeContent.appendChild(child));
        return homeContent;
    }
    function genMenu() {
        /*
            <!-- Menu-Page
        <div class="content menu-page">
            <div class="card-list">
                <div class="card">
                    <p>Dish 1</p>
                    <img src="./dish1.png">
                    <h3>porta eu mi sed</h3>
                </div>
                <div class="card">
                    <p>Dish 2</p>
                    <img src="./dish2.png">
                    <h3>porta eu mi sed</h3>
                </div>
                <div class="card">
                    <p>Dish 3</p>
                    <img src="./dish3.png">
                    <h3>porta eu mi sed</h3>
                </div>
                <div class="card">
                    <p>Dish 4</p>
                    <img src="./dish5.png">
                    <h3>porta eu mi sed</h3>
                </div>
            </div>
        </div>
        */
        const menuContent = document.createElement('div');
        menuContent.classList.add('content');
        menuContent.classList.add('menu-page');
            const mainDish = document.createElement('div');
            mainDish.classList.add('main-dish');
            menuContent.appendChild(mainDish);
                // <div class="dish-text">
                const dishText = document.createElement('div');
                dishText.classList.add('dish-text');
                mainDish.appendChild(dishText);
                    // <h1>Our Main Dish</h1>
                    const dishTexth1 = document.createElement('h1');
                    dishTexth1.textContent = 'Our Main Dish';
                    dishText.appendChild(dishTexth1);
                    // <div class="bar1"></div>
                    const bar = document.createElement('div');
                    bar.classList.add('bar1');
                    dishText.appendChild(bar);
                    // <div class="m1">
                    const mainDishOne = document.createElement('div');
                    mainDishOne.classList.add('m1');
                    dishText.appendChild(mainDishOne);
                        // <h2>Pancit Canton</h2>
                        const mainDishOneName = document.createElement('h2');
                        mainDishOneName.textContent = 'Pancit Canton';
                        mainDishOne.appendChild(mainDishOneName);
                        // <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor augue, dignissim porttitor eros vel, ultrices rutrum lacus.</p>
                        const mainDishOneDescription = document.createElement('p');
                        mainDishOneDescription.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dolor augue, dignissim porttitor eros vel, ultrices rutrum lacus.';
                        mainDishOne.appendChild(mainDishOneDescription);

                    const mainDishTwo = document.createElement('div');
                    mainDishTwo.classList.add('m2');
                    dishText.appendChild(mainDishTwo);
                        // <h2>Adobo</h2>
                        const mainDishTwoName = document.createElement('h2');
                        mainDishTwoName.textContent = 'Adobo';
                        mainDishTwo.appendChild(mainDishTwoName);
                        // <p>Nam lectus velit, porta eu mi sed, consectetur tincidunt sem. Morbi ut sodales eros. Curabitur sed posuere arcu.</p>
                        const mainDishTwoDescription = document.createElement('p');
                        mainDishTwoDescription.textContent = 'Nam lectus velit, porta eu mi sed, consectetur tincidunt sem. Morbi ut sodales eros. Curabitur sed posuere arcu.';
                        mainDishTwo.appendChild(mainDishTwoDescription);
                // <div class="m-dish-container">
                const mDishContainerOne = document.createElement('div');
                mDishContainerOne.classList.add('m-dish-container');
                mainDish.appendChild(mDishContainerOne);
                    // <img class="m-dish" src="./dish3.png">
                    const mDishImageOne = document.createElement('img');
                    mDishImageOne.classList.add('m-dish');
                    mDishImageOne.setAttribute('src','./dish4.png');
                    mDishContainerOne.appendChild(mDishImageOne);
                    // <p>Pancit Canton</p>
                    const mDishParaOne = document.createElement('p');
                    mDishParaOne.textContent = 'Pancit Cantot';
                    mDishContainerOne.appendChild(mDishParaOne);

                // <div class="m-dish-container">
                const mDishContainerTwo = document.createElement('div');
                mDishContainerTwo.classList.add('m-dish-container');
                mainDish.appendChild(mDishContainerTwo);
                    // <img class="m-dish" src="./dish4.png">
                    const mDishImageTwo = document.createElement('img');
                    mDishImageTwo.classList.add('m-dish');
                    mDishImageTwo.setAttribute('src','./dish3.png');
                    mDishContainerTwo.appendChild(mDishImageTwo);
                    // <p>Adobo</p>
                    const mDishParaTwo = document.createElement('p');
                    mDishParaTwo.textContent = 'Adobo';
                    mDishContainerTwo.appendChild(mDishParaTwo);
            // <div class="card-list">
            const cardList = document.createElement('div');
            cardList.classList.add('card-list');
            menuContent.appendChild(cardList);
                // <div class="card">
                const cardOne = document.createElement('div');
                cardOne.classList.add('card');
                cardList.appendChild(cardOne);
                    // <p>Dish 1</p>
                    const cardParaOne = document.createElement('p');
                    cardParaOne.textContent = 'Dish 1';
                    cardOne.appendChild(cardParaOne);
                    // <img src="./dish1.png">
                    const cardImageOne = document.createElement('img');
                    cardImageOne.setAttribute('src','./dish1.png');
                    cardOne.appendChild(cardImageOne);
                    // <h3>porta eu mi sed</h3>
                    const cardNameOne = document.createElement('h3');
                    cardNameOne.textContent = 'prote eu mi sed';
                    cardOne.appendChild(cardNameOne);
                
                const cardTwo = document.createElement('div');
                cardTwo.classList.add('card');
                cardList.appendChild(cardTwo);
                    // <p>Dish 1</p>
                    const cardParaTwo = document.createElement('p');
                    cardParaTwo.textContent = 'Dish 2';
                    cardTwo.appendChild(cardParaTwo);
                    // <img src="./dish1.png">
                    const cardImageTwo = document.createElement('img');
                    cardImageTwo.setAttribute('src','./dish2.png');
                    cardTwo.appendChild(cardImageTwo);
                    // <h3>porta eu mi sed</h3>
                    const cardNameTwo = document.createElement('h3');
                    cardNameTwo.textContent = 'prote eu mi sed';
                    cardTwo.appendChild(cardNameTwo);

                const cardThree = document.createElement('div');
                cardThree.classList.add('card');
                cardList.appendChild(cardThree);
                    // <p>Dish 1</p>
                    const cardParaThree = document.createElement('p');
                    cardParaThree.textContent = 'Dish 3';
                    cardThree.appendChild(cardParaThree);
                    // <img src="./dish1.png">
                    const cardImageThree = document.createElement('img');
                    cardImageThree.setAttribute('src','./dish3.png');
                    cardThree.appendChild(cardImageThree);
                    // <h3>porta eu mi sed</h3>
                    const cardNameThree = document.createElement('h3');
                    cardNameThree.textContent = 'prote eu mi sed';
                    cardThree.appendChild(cardNameThree);
                
                const cardFour = document.createElement('div');
                cardFour.classList.add('card');
                cardList.appendChild(cardFour);
                    // <p>Dish 1</p>
                    const cardParaFour = document.createElement('p');
                    cardParaFour.textContent = 'Dish 4';
                    cardFour.appendChild(cardParaFour);
                    // <img src="./dish1.png">
                    const cardImageFour = document.createElement('img');
                    cardImageFour.setAttribute('src','./dish4.png');
                    cardFour.appendChild(cardImageFour);
                    // <h3>porta eu mi sed</h3>
                    const cardNameFour = document.createElement('h3');
                    cardNameFour.textContent = 'prote eu mi sed';
                    cardFour.appendChild(cardNameFour);


        return menuContent;
    }
    return container;
 }
document.body.appendChild(component());