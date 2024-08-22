const chunkArray = (arr, sizes) => {
  const result = [];
  let start = 0;
  for (const size of sizes) {
    result.push(arr.slice(start, start + size));
    start += size;
  }
  return result;
};

// Define sizes for each dropdown
const dropdownSizes = [9, 20, 8, 10,2]; // Total should equal the number of items in `data`
const chunks = chunkArray(entries, dropdownSizes);
const buttonName = ['Before 2022','VNL2022','WC2022','2023','2024'];

buttonName.forEach((e,index)=>{
  var dropdownMenu = document.getElementById('dropdownMenu'+(index+1).toString());

  chunks[index].forEach(entry => {
      var li = document.createElement('li');
      var button = document.createElement('button');
      button.className = 'btn btn-light dropdown-item'; // Bootstrap button class
      button.innerHTML = '<img width="18" height="18" src="'+ buttomImg[entry.sourceName] +'" />'+' '+entry.label;
      button.type = 'button';
      button.addEventListener('click', ()=>showVideo(entry.url));
      li.appendChild(button);
      dropdownMenu.appendChild(li);
  });

})

function showVideo(link){
  document.getElementById('myIframe').src = link;
}