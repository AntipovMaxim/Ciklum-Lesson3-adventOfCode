import { str } from './data';

export default () => {

    const data = str.split('\n');

    const distances = {};

//create an object  in which will be information on distances
    for (let value of data) {

        const from = value.split( ' ' )[0];
        const to = value.split( ' ' )[2];
        const dist = value.split( ' ' )[4];

        distances[from] = distances[from] || {};
        distances[from][to] = Number(dist);

        distances[to] = distances[to] || {};
        distances[to][from] = Number(dist);

    }

    let permArr = [];
    let usedChars = [];

//cities permutation function
    function permute(input) {
        let change;
        for ( let i = 0; i < input.length; i++) {
            change = input.splice(i, 1)[0];
            usedChars.push(change);
            if (input.length == 0) {
                permArr.push(usedChars.slice());
            }
            permute(input);
            input.splice(i, 0, change);
            usedChars.pop();
        }
        return permArr
    };



    const routes = permute(Object.keys(distances));//all possible combinations of routes

//this function creates an array of distances for each combination
    function getArrOfDist(data){
        var arrOfDist = [];
        for (let i = 0; i < data.length-1; i++){
            arrOfDist.push(distances[data[i]][data[i+1]]);
        }
        return arrOfDist;
    }


    var route = routes.map( route => {
        return getArrOfDist(route)
            .reduce((sum, cur) => {
                return sum + cur;
            })
    });



    const minRoute = Math.min(...route);
    const maxRoute = Math.max(...route);

    document.getElementById('short').innerHTML = minRoute;
    document.getElementById('long').innerHTML = maxRoute;
}

