(function(elem) {
    'use strict';

    var lunchLocations = [
        {
            name: 'Whataburger',
            emoji: 'hamburger'
        },
        {
            name: 'Five Guys',
            emoji: 'hamburger'
        },
        {
            name: 'Taco Bell',
            emoji: 'bell'
        },
        {
            name: 'Ted\'s',
            emoji: 'cocktail'
        },
        {
            name: 'Panda Express',
            emoji: 'panda_face'
        },
        {
            name: 'Red Robin',
            emoji: 'hamburger'
        },
        {
            name: 'Subway',
            emoji: 'bread'
        },
        {
            name: 'Jason\'s Deli',
            emoji: 'bread'
        },
        {
            name: 'Apple Barrel',
            emoji: 'apple'
        },
        {
            name: 'Fat Guy\'s Burger Bar',
            emoji: 'hamburger'
        },
        {
            name: 'Bricktown Brewery',
            emoji: 'hamburger'
        },
        {
            name: 'Cotton Patch',
            emoji: 'poultry_leg'
        },
        {
            name: 'Mr. Mambo\'s',
            emoji: 'dancer'
        },
        {
            name: 'Qdoba',
            emoji: 'cactus'
        },
        {
            name: 'Rib Crib',
            emoji: 'meat_on_bone'
        },
        {
            name: 'Oklahoma Joe\'s',
            emoji: 'meat_on_bone'
        },
        {
            name: 'Slim Chicken\'s',
            emoji: 'poultry_leg'
        },
        {
            name: 'Cici\'s',
            emoji: 'pizza'
        },
        {
            name: 'Raising Cane\'s',
            emoji: 'poultry_leg'
        },
        {
            name: 'Los Cabos',
            emoji: 'palm_tree'
        },
        {
            name: 'Old School Bagel Cafe',
            emoji: 'doughnut'
        },
        {
            name: 'Ron\'s',
            emoji: 'hamburger'
        }
    ];

    var selectedSpot = lunchLocations[~~(Math.random() * lunchLocations.length)];
    elem.innerHTML = '<i class="emo-' + selectedSpot.emoji + '"></i> ' + selectedSpot.name;

})(document.querySelector('h1'));