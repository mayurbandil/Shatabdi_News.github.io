console.log('this is the news api');
// 5b9bbc60d2094597a7af44982a8be023
// grab the news container 
let newsAccordion = document.getElementById('newsAccordion');


// create a get request 
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apikey=5b9bbc60d2094597a7af44982a8be023', true);

xhr.onload = function() {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    console.log(json);
    let articles = json.articles;
    console.log(articles);
    let newshtml = "";
   articles.forEach(function(element, index) {
    // yaha par collapse ke baad index isiliye lagaya kyunki ek ek karke collapse karana hai 
     let news =`<p>
     <button
     class="btn btn-primary"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#collapse${index}"
     aria-expanded="false"
     aria-controls="collapse${index}"
     >
     ${element.title}
     </button>
     </p>
     <div class="collapse" id="collapse${index}">
     <img src="${element.urlToImage}" class="img-thumbnail" alt="...">
     <div class="card card-body">
     ${element.content}.
     <a href = "${element.url}" target = "_blank"> Read more </a>
     </div>
     </div>
     <hr>`
    //  to open any link in new tab just do target = "_blank"
     newshtml += news;
    });
    //  if you want that the url should open i new tab then use target = "_blank"
    
    newsAccordion.innerHTML = newshtml;
  }
  else{
    console.log('some error occured')
  }
}

xhr.send();