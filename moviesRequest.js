
async function fetchData(substr) {
  let pageNum = 1;
  let movieArray = [];
  let url = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + "&page=" + pageNum;
  let fetchUrl = await fetch(url);
  let parsedRes = await fetchUrl.json();
  
  let numPages = parsedRes.total_pages;
  let movies = parsedRes.data;
  movies.forEach(movie => movieArray.push(movie.Title));
  for (let i = 2; i <= numPages; i++) {
    let newUrl = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + "&page=" + i;
    fetchUrl = await fetch(newUrl);
    parsedRes = await fetchUrl.json();
    newMovies = parsedRes.data;
    newMovies.forEach(movie => movieArray.push(movie.Title));

  }
  console.log(movieArray.sort());
  
  
  
  
  // fetch(url)
  //   .then(res => {
  //     return res.json();
      
      
  //   }).then(jsonRes => {
  //     let numPages = jsonRes.total_pages;
  //     let movies = jsonRes.data;
      
  //     movies.forEach(a => {
  //       movieArray.push(a.Title);
  //     });
  //     for (let i = 2; i <= numPages; i++) {
  //       // console.log('here');
        
  //       let newUrl = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=' + substr + "&page=" + i;
  //       fetch(newUrl)
  //         .then(res => {
  //           return res.json();
  //         }).then(res2 => {
  //           let newMovies = res2.data;
  //           for (let j = 0; j < newMovies.length; j++) {
  //             movieArray.push(newMovies[j].Title);
  //           }
  //           console.log(movieArray.sort());
            
  //         });
  //     }
      
  //   });
}

fetchData('spiderman');