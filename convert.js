const numbers = require('./number');
function nr_dyshifror(year) {
    let nr_dhjetor = '';
    let nr_tek = '';
    numbers.map((nr) => {
        year.split('')[0] == nr.nr ?
            nr_dhjetor = nr.string : null
        year.split('').slice(-1)[0] == nr.nr ?
            nr_tek = nr.string : null
    });
    return (nr_dhjetor == 'nje' && nr_tek ?
        nr_tek + 'mbedhjete' :
        nr_dhjetor == 'nje' && !nr_tek
            ? 'dhjete' : nr_dhjetor == 'dy'
                ? `njezet ${nr_tek ? 'e ' + nr_tek : ''}` :
                nr_dhjetor == 'kater' ?
                    `dyzet ${nr_tek ? 'e ' + nr_tek : ''}` :
                    !nr_dhjetor ? `${nr_tek ? '' + nr_tek : ''}` :
                        nr_dhjetor + 'dhjete'
                        + `${nr_tek ? ' e ' + nr_tek : ''}`);

}
const nr_treshifror = (year) => {
    let nr = nr_dyshifror(year.split('').slice(1, 3).toString().replace(',', ''));
    let qindeshe = '';
    numbers.map((nr) => {
        year.split('')[0] == nr.nr ? qindeshe = nr.string : null
    });
    return (qindeshe ?
        qindeshe + 'qind' + ` ${nr ? 'e ' + nr : ''}`
        : `${nr ? nr : ''}`);
}
const viti_plote = (year) => {
    let nr = nr_treshifror(year.split('').slice(1, 4).toString().replace(/,/g, ""));
    let mijshe = '';
    numbers.map((nr) => {
        year.split('')[0] == nr.nr ? mijshe = nr.string : null
    });
    return (mijshe + ' mije ' + `${nr ? 'e ' + nr : ''}`);
}
function converter(year) {
    if (year.toString().length == 2)
        return nr_dyshifror(year.toString())
    else if (year.toString().length == 3)
        return nr_treshifror(year.toString())
    else if (year.toString().length == 4)
        return viti_plote(year.toString())
    else return 'Kujdes - Vitet nuk duhet te kalojne vlerat katershifrore ose me te vogla se 2'
}

module.exports = converter