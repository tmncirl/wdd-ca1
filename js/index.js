// Query selector grabs an element like you would in CSS
const largeTextElem = document.querySelector('.ix-hero-text');
const heroVideoElem = document.querySelector('.ix-hero-video');

// Manipulation of DOM #2
largeTextElem.addEventListener('click', () => {
    if (largeTextElem.textContent === 'CLIMATE ACTION') {
        // Already transformed
        return;
    }

    largeTextElem.textContent = 'CLIMATE ACTION';
    heroVideoElem.src = '/video/IX/climateaction.mp4';
});

const factRefreshButton = document.querySelector('.ix-refresh-fact-button');

const factTitleElem = document.querySelector('.ix-fact-title');
const factBodyElem = document.querySelector('.ix-fact-body');

// Use of JS Arrays
const facts = [
    {
        title: 'Sea level rise',
        body: 'The sea level rises by about 2.5mm per year due to the melting ice glaciers caused by global warming.',
        source: 'https://earthobservatory.nasa.gov/images/150192/tracking-30-years-of-sea-level-rise'
    },
    {
        title: 'Food waste',
        body: 'The average Irish citizen throws out about 146kg of food waste per year, which is one of the highest in the EU.',
        source: 'https://www.epa.ie/our-services/monitoring--assessment/waste/national-waste-statistics/food/'
    },
    {
        title: 'Economic cost',
        body: 'By 2060, unchecked climate change will cost the global economy over $44 trillion.',
        source: 'https://www.globalgiving.org/learn/climate-change-facts'
    },
    {
        title: 'Underfunding',
        body: 'Most local climate action groups are severely underfunded, and are therefore very limited in what they can do, so any amount of donation can help.',
        source: 'https://www.globalgiving.org/learn/local-climate-change-solutions/'
    }
];

factRefreshButton.addEventListener('click', () => giveRandomFact());

// Manipulation of DOM #1
function giveRandomFact() {
    // Use of JS randomisation
    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    // To make sure we do not show the same fact and make it look like it didnt do anything
    if (factTitleElem.textContent == randomFact.title) {
        giveRandomFact();
        return;
    }

    factTitleElem.textContent = randomFact.title;
    factBodyElem.textContent = randomFact.body;
}

// So we load a fact right after the page is loaded
giveRandomFact();