import './style.css';
import apostrophe from './apostrophe.png';
import dish1 from './dish1.png';
import dish2 from './dish2.png';
import dish3 from './dish3.png';
import dish4 from './dish4.png';
function component() {
    const container = document.createElement('div');
    container.setAttribute('id','container');
    const _Home = genHome();
    const _Menu = genMenu();
    const _About = genAboutUs();
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
    container.appendChild(genHome());

    home.addEventListener('click', () => {
        container.removeChild(container.lastChild);
        container.appendChild(_Home);
    });
    menu.addEventListener('click', () => {
        container.removeChild(container.lastChild);
        container.appendChild(_Menu);
    });
    aboutUs.addEventListener('click', () => {
        container.removeChild(container.lastChild);
        container.appendChild(_About);
    });


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
                image.src = apostrophe;
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
    // Generates Menu
    function genMenu() {
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
                    mDishImageOne.src = dish3;
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
                    mDishImageTwo.src = dish4;
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
                    cardImageOne.src = dish1;
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
                    cardImageTwo.src = dish2;
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
                    cardImageThree.src = dish3;
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
                    cardImageFour.src = dish4;
                    cardFour.appendChild(cardImageFour);
                    // <h3>porta eu mi sed</h3>
                    const cardNameFour = document.createElement('h3');
                    cardNameFour.textContent = 'prote eu mi sed';
                    cardFour.appendChild(cardNameFour);
        return menuContent;
    }
    // Generates "About Us"
    function genAboutUs(){
        const aboutContent = document.createElement('div');
        aboutContent.classList.add('content');
        aboutContent.classList.add('about-us');

        // <div class="left-about">
            const leftDiv = document.createElement('div');
            leftDiv.classList.add('left-about');
            aboutContent.appendChild(leftDiv);
                //<h1>About Us</h1>
                const headerOne = document.createElement('h1');
                headerOne.textContent = 'About Us';
                leftDiv.appendChild(headerOne);
                // <p>Aliquam fermentum eu nulla nec eleifend. Maecenas iaculis auctor urna id vulputate. Integer commodo fringilla sagittis. Maecenas pulvinar gravida nisl, in consequat orci aliquet non. Aenean nec leo nisi. Nunc rhoncus sem ac bibendum eleifend. Vestibulum congue iaculis lorem, quis tempus magna ultricies nec. </p>
                const aboutDescription = document.createElement('p');
                aboutDescription.textContent = 'Aliquam fermentum eu nulla nec eleifend. Maecenas iaculis auctor urna id vulputate. Integer commodo fringilla sagittis. Maecenas pulvinar gravida nisl, in consequat orci aliquet non. Aenean nec leo nisi. Nunc rhoncus sem ac bibendum eleifend. Vestibulum congue iaculis lorem, quis tempus magna ultricies nec.';
                leftDiv.appendChild(aboutDescription);
                // <h2>Contact Us</h2>
                const headerTwo = document.createElement('h2');
                headerTwo.textContent = 'Contact Us';
                leftDiv.appendChild(headerTwo);
                // <p>Our Emailing Address is:</p>
                const emailAddress = document.createElement('p');
                emailAddress.textContent = 'Our Emailing Address is: abc@something.com';
                leftDiv.appendChild(emailAddress);
                // <p>152A Charlotte Street</p>
                const cityAddress = document.createElement('p');
                cityAddress.textContent = '152A Charlotte Street';
                leftDiv.appendChild(cityAddress);
                // <p>Peterborough ON</p>
                const provinceAddress = document.createElement('p');
                provinceAddress.textContent = 'Peterborough ON';
                leftDiv.appendChild(cityAddress);
                // <p>Phone:123-456-789</p>
                const phoneNumber = document.createElement('p');
                phoneNumber.textContent = 'Phone:123-456-789101';
                leftDiv.appendChild(phoneNumber);
            
            const rightDiv = document.createElement('div');
            rightDiv.classList.add('right-about');
            aboutContent.appendChild(rightDiv);
        return aboutContent;
    }
    return container;
 }
document.body.appendChild(component());