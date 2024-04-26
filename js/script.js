
const toggleMobileMenu = (menu) => {
    menu.classList.toggle('open')
}

// rendering books

const Books = [{
    image: 'booksimg/c++.webp',
    name: `C++`,

},
{
    image: 'booksimg/how to win every argument.jpg',
    name: "How to win every argument"
},
{
    image: 'booksimg/how child learn.jpg',
    name: "How your child learns best"
},
{
    image: 'booksimg/loving what is.jpg',
    name: "Loving what is"
},
{
    image: 'booksimg/share that grow.jpg',
    name: "Shares that grow"
},
{
    image: 'booksimg/superfood.jpg',
    name: "Super foods"
},
{
    image: 'booksimg/the explosive child.jpg',
    name: "The explosive child"
},
{
    image: 'booksimg/the laws of human.jpg',
    name: "The laws of human nature"
},
{
    image: 'booksimg/the tiger.jpg',
    name: "The Tiger"
},
]

listItems = ''
Books.forEach((Book => {
    listItems += `  
        <div class="card cardholder">
    <img src="${Book.image}" class="card-img-top book_img" style="height:50vh" alt="books">
    <div class="card-body"> 
        <h5 class="card-title text-center">${Book.name}</h5> 
        <div class="d-flex justify-content-center"> 
            <a class="btn btn-primary m-2" href="books/${Book.name}.pdf" download>Download</a>
            <a class="btn btn-secondary m-2" href="#" onclick="openPdf('books/${Book.name}.pdf')">Read Only</a>
        </div> 
    </div> 
</div>
    `

}))

function openPdf(pdfUrl) {
    var pdfWindow = window.open(pdfUrl, '_blank');
    if (!pdfWindow || pdfWindow.closed || typeof pdfWindow.closed == 'undefined') {
        alert('Please allow popups for this site to view the PDF.');
    }
}

document.querySelector('.containers').innerHTML = listItems