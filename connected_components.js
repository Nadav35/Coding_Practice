/*
You are given a file which looks like so:

AA BB
DD FF
CC EE
EE DD

Each line of the file contains a pair of strings. Each string represents is the name of a vertex. The line represents an edge connecting two vertices.

Your task is to find the connected components of the graph. A connected component is a subset of vertices all connected to each other. In this example, the connected components are [["AA", "BB"], ["CC", "DD", "EE", "FF"]].

You don't have to return the elements of the components in any particular order.
*/
const connectedComponents = (arr) => {
  
  let matrix = {};
  arr.forEach(el => {
    el = el.split(' ');
    let v1 = el[0];
    let v2 = el[1];
    matrix[v1] = matrix[v1] || [];
    matrix[v1].push(v2);
    matrix[v2] = matrix[v2] || [];
    matrix[v2].push(v1);
    
  });
  
  let components = [];
  while (Object.keys(matrix).length > 0){
    let firstKey = Object.keys(matrix)[0];
    let queue = [firstKey];
    let component = [];
    while (queue.length > 0) {
      let key = queue.shift();
      if (matrix[key] === undefined) continue;
      let neighbors = matrix[key];
      delete matrix[key];
      component.push(key);
      queue = queue.concat(neighbors);
    }
    components.push(component);
  }
  console.log(components);
  
  
  
};

connectedComponents(['AA BB', 'DD FF', 'CC EE', 'EE DD']);

