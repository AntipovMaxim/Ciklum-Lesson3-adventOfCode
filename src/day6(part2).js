import { input } from './data';

export default () => {

    const data = input.split('\n');

    const actions = data.map(action => {
        const i = action.split(' ');
        return {
            act: i[0] == 'toggle' ? i[0] : `${i[0]} ${i[1]}`,
            start: i[0] == 'toggle' ? i[1].split(',') : i[2].split(','),
            end: i[0] == 'toggle' ? i[3].split(',') : i[4].split(',')
        }
    });

    let matrix = [];
    for (let i = 0; i < 1000; i++) {
        matrix[i] = [];
        for (let j = 0; j < 1000; j++) {
            matrix[i][j] = 0;
        }
    }

    actions.forEach( action => {
        for (let i = +action.start[0]; i <= +action.end[0]; i++) {
            for (var j = +action.start[1]; j <= +action.end[1]; j++) {
                switch (action.act) {

                    case "turn on":
                        matrix[i][j] += 1;
                        break;

                    case "turn off":
                        if( matrix[i][j] > 0 ){
                            matrix[i][j] -= 1;
                        }
                        break;

                    case "toggle":
                        matrix[i][j] += 2;

                }
            }
        }
    });

    let brightness = 0;

    for ( let i of matrix ){
        for ( let j of i ){
            if ( j > 0) {
                brightness += j;
            }
        }
    }

    document.getElementById('bright').innerHTML = brightness;
}


