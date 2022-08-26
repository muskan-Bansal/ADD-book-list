// Book constructor
function Book(title,author,isbn){
   this.title=title;
   this.author=author;
   this.isbn=isbn;
}

// UI constructor
function UI(){}

UI.prototype.addBookToList=function(book){ 
  const list= document.querySelector('#book-list');
  // create tr element
  const row=document.createElement('tr');
  // insert cols
  row.innerHTML='<td>'+book.title+'</td>'+'<td>'+book.author+'</td><td>'+book.isbn+'</td><td><a href="#" class="delete text-danger" style="text-decoration: none;">X</a></br>';
  list.appendChild(row);
}
// showAlert  cn=className
UI.prototype.showAlert=function(msg,cn){
   const $div=document.createElement('div'); 
   $div.className=' alert  text-white  '+ cn;
  //  add text
  $div.appendChild(document.createTextNode(msg));
  // dom parent
  const container=document.querySelector('.container');
  // set form
  const form=document.querySelector('#book-form');
  // insert alert
  container.insertBefore($div,form);
  // alert timer 3 sec
  setTimeout(function(){
     $div.remove();
  },3000);
}
  // delete book
  // UI.prototype.deltbuk=function(target) { 
  //   if(target.classList.contains('delete'))
  //   console.log('dbcdbc')
  //     // target.parentElement.parentElement.remove();
      
  // }
// clear fields
UI.prototype.clearfields=function(book){
document.querySelector('#title').value=''; 
document.querySelector('#author').value='';
document.querySelector('#isbn').value='';

     // cant do directly with the variables
// book.title='';delete text-danger
// book.author='';
// book.isbn='';
}

// Event listener to add book
document.querySelector('#book-form').addEventListener('submit',function(e){
// GET FORM VALUES
  const title = document.querySelector('#title').value ;
  const  author= document.querySelector('#author').value;
  const isbn= document.querySelector('#isbn').value;
  //  console.log(title,author,isbn);

  //  Instantiating book
    const book =new Book(title,author,isbn); 
  // Instantiating UI
    const ui=new UI();
    
 console.log(ui);
    
    // if no data given
    if(title==='' || author==='' || isbn==='')
    // if(NaN(title)||NaN(author)||NaN(isbn) )
    {
      ui.showAlert('Please fill in the fields','error');
    }else{
       // Add a book to the list
       ui.addBookToList(book);
        // SUccess alert
        ui.showAlert('Book added!!!','success')

       // clear fields
       ui.clearfields(book);
    }
       
    

  e.preventDefault();
});

// Event Listener for delete
document.querySelector('#book-list').addEventListener('click',function(e){ 
  // const ui=new UI();
  // ui.deltbuk('e.taregt');
  // ui.showAlert('Book removed','success')
  //  e.preventDefault();
  if(e.target.className==='delete text-danger'){
        
      e.target.parentElement.parentElement.remove();
  }
  
  e.preventDefault();
});
