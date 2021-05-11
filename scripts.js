url = 'https://ergast.com/api/f1/2021.json';

const raceList = document.querySelector("ul");

function createList(data){
    let races = data.MRData.RaceTable.Races;
    for(let i = 0; i < races.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = `${races[i].raceName} | ${races[i].date}`;
        raceList.appendChild(listItem);
    }
}



fetch(url)
.then(function(response){
    console.log(response);
    return response.json();
    
})
.then(function(json){
    createList(json);
    
})