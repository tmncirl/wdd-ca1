const factRefreshButton = document.querySelector('.ix-refresh-fact-button');

const factTitleElem = document.querySelector('.ix-fact-title');
const factBodyElem = document.querySelector('.ix-fact-body');

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
    }
]

factRefreshButton.addEventListener('click', () => giveRandomFact());

// Manipulation of DOM #1
function giveRandomFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];

    factTitleElem.textContent = randomFact.title;
    factBodyElem.textContent = randomFact.body;
}

giveRandomFact();