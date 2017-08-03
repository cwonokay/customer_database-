
let template = '';
for (var i = 0; i < customers.results.length; i++) {

  template += `
  <article>
  <div class="picture">
    <img src="${customers.results[i].picture.large}">
      <h2>${customers.results[i].name.first} ${customers.results[i].name.last}</h2>
      <h4>${customers.results[i].email}</h4>

      <p>${customers.results[i].location.street}</p>
      <p>${customers.results[i].location.city}
       ${customers.results[i].location.state}
       ${customers.results[i].location.postcode}</P>
      <P>  ${customers.results[i].phone}</p>
  </div>
 </article>
  `;

}
document.querySelector('.container').innerHTML = template
