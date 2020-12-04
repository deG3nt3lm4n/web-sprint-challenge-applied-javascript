// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
{/* <div class="card">
  <div class="headline">{Headline of article}</div>
  <div class="author">
    <div class="img-container">
      <img src={url of authors image} />
    </div>
    <span>By {author's name}</span>
  </div>
</div> */}
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(res => {
    const d = res.data.articles
    console.log(d)

    for(const articles in d){
      const arrOfArticles = d[articles]

      document.addEventListener('click', e => {
        let bb = e.target.innerHTML;

        if(bb === articles){
          document.querySelector('.cards-container').innerHTML = ''
          createArticle(arrOfArticles)
        }

      })

      createArticle(arrOfArticles)

    }


  })
  .catch(err => {
    console.log(err)
  })

function createArticle(arr){


  let html = '';

  arr.forEach(arr => {
    // console.log(arr, 'single card', typeof arr)
    html +=  `
    <div class="card">
      <div class="headline">${arr.headline}</div>
        <div class="author">
          <div class="img-container">
          <img src=${arr.authorPhoto} />
        </div>
        <span>By ${arr.authorName}</span>
      </div>
    </div>
    `

  })


  document.querySelector('.cards-container').innerHTML += html;
  document.querySelector('.card').addEventListener('click', e => {
    console.log(e.target.parentNode.children[0].innerText)
  })
}

