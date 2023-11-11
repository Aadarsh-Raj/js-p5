const tableList = [
  { name: "New York", country: "USA" },
  { name: "London", country: "UK" },
  { name: "Paris", country: "France" },
  { name: "Tokyo", country: "Japan" },
  { name: "Beijing", country: "China" },
  { name: "Cairo", country: "Egypt" },
  { name: "Los Angeles", country: "USA" },
  { name: "Sydney", country: "Australia" },
  { name: "Rio de Janeiro", country: "Brazil" },
  { name: "Berlin", country: "Germany" },
  { name: "Rome", country: "Italy" },
  { name: "Moscow", country: "Russia" },
  { name: "Toronto", country: "Canada" },
  { name: "Seoul", country: "South Korea" },
  { name: "Dubai", country: "UAE" },
  { name: "Hanoi", country: "Vietnam" },
  { name: "Delhi", country: "India" },
  { name: "Mumbai", country: "India" },
  { name: "Bangalore", country: "India" },
  { name: "Kolkata", country: "India" },
  { name: "Chennai", country: "India" },
];

const searchBar = document.getElementById("search-bar");
const table = document.getElementById("tbody");
const createRows = () => {
  let x = "";
  for (let i = 0; i < tableList.length; i++) {
    const y = `<tr class="rows"> <td class="left-col">${tableList[i].name} </td>
     <td class="right-col">${tableList[i].country} </td>
      </tr>`;
    x += y;
  }
  table.innerHTML = x;
};
createRows();
searchBar.addEventListener("keyup", (e) => {
  const input = e.target.value.toLowerCase();
  
  const filteredItems = tableList.filter((items) => {
    // items.name.toLowerCase().includes(input);
    if (
      items.name.toLowerCase().includes(input) ||
      items.country.toLocaleLowerCase().includes(input)
    ) {
      return true;
    } else {
      return false;
    }
  });
  let x = "";
  table.innerHTML = "";
  for (let i = 0; i < filteredItems.length; i++) {
    const y = `<tr class="rows"> <td class="left-col"> ${filteredItems[i].name} </td> 
        <td class="right-col"> ${filteredItems[i].country} </td> 
        </tr>`;
    x += y;
  }

  table.innerHTML = x;
  console.log(table);
});
