//What is asynchronism.
//callbacks are key to work asynchronism with javascript, basicamente es pasar una funcion como argumento de otra.

//Let's see how asynchronism works: 

const datospelis = [{
    id: 1,
    title: 'Iron man',
    year: 2008
 },{
   id: 2,
   title: 'Spiderman 3',
   year: 2009
 },{
   id: 3,
   title: 'Avengers: Infinitive war',
   year: 2018
 }];


// const getDatos = () => {
//   return datospelis;
// }

const getDatos = () => {
    return new promise((resolve, reject)) => {
      if (datos.length === 0) {
        reject(new Error('No existen datos'));
      }
      setTimeout(() => {
        resolve(datospelis);
      }, 1500);
    });
}   
  
  async function fetchingData () {
    try {
      const datosfetched = await getDatos();
      console.log(datosFetched)
    } catch (err) {
      console.log(err);
    }
  }
  
  fetchingData();