//spliting the arrays according to given length
// ex- chunkArray([1,2,3,4,5,6], 3) === [[1,2,3],[4 5 6]]


const chunkArray = (array, len) => {

    const chunkedArr = [];

    array.forEach(val => {

        const last = chunkedArr[chunkedArr.length - 1];

        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });

    return chunkedArr;
}

module.exports = chunkArray;