{
    let products = [
        { name: 'cucumber', type: 'vegetable' },
        { name: 'banana', type: 'fruit' },
        { name: 'celery', type: 'vegetable' },
        { name: 'orange', type: 'fruit' },
        { name: 'apple', type: 'fruit' },
    ];

    let filteredProducts = [];
    // ES5 style
    for (let i = 0; i < products.length; i++) {
        if (products[i].type === "fruit") {
            filteredProducts.push(products[i]);
        }
    }

    console.log(filteredProducts);

    /* Output:
    [
      { name: 'banana', type: 'fruit' },
      { name: 'orange', type: 'fruit' },
      { name: 'apple', type: 'fruit' }
    ]
     */

    //ES6 style using filter

    let filterProducts = products.filter(product => {
        return product.type === "fruit";
    });  // Should always return true or false. If returns true that will get added in array

    console.log(filterProducts);
    /* Output:
    [
      { name: 'banana', type: 'fruit' },
      { name: 'orange', type: 'fruit' },
      { name: 'apple', type: 'fruit' }
    ]
     */
}


let products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 1 },
    { name: 'banana', type: 'fruit', quantity: 10, price: 15 },
    { name: 'celery', type: 'vegetable', quantity: 30, price: 8 },
    { name: 'orange', type: 'fruit', quantity: 3, price: 5 },
    { name: 'apple', type: 'fruit', quantity: 4, price: 6 },
    { name: 'broccoli', type: 'vegetable', quantity: 40, price: 23 },
];

//Type is 'vegetable', quantitly is greater than 0, price is less than 10

let filterProducts = products.filter(product => {
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10;
});

console.log(filterProducts); //Output : [ { name: 'celery', type: 'vegetable', quantity: 30, price: 8 } ]

//-------------------------------------------------------------------------------------

//Find out comments of the given post

let post = { id: 4, title: 'New Post' };
let comments = [
    {id:1, postId:4, content:'nice post'},
    {id:2, postId:6, content:'it is ok'},
    {id:3, postId:4, content:'neat'},
    {id:4, postId:2, content:'Awesome post'},
];

let filteredComments = comments.filter(comment =>{
    return comment.postId === post.id;
});

console.log(filteredComments);
/** Output:
[
  { id: 1, postId: 4, content: 'nice post' },
  { id: 3, postId: 4, content: 'neat' }
] 
 */

