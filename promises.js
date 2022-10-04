//Something is going to happen but we don't know when is it going to happen.
// const promise = new Promise(function (resolve, reject) {
//     return('hey!')
// });

const cats = 1;

const countCats = new Promise(function(resolve, reject) {
    if (cats > 10) {
        resolve('We have all the cats');
    } else {
        reject('We have lost few cats');
    }
});

countCats.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

