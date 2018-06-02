# EasydemoJS 
![avatar](https://avatars2.githubusercontent.com/u/29268642?s=400&u=d105b7fe6646dd6422afec08022872ad521edeb0&v=4)

EasydemoJS is a JavaScript library. It contains many methods which can make your JavaScript demo easier ! Sometimes developers just want to write down a simple demo to test if their code can run normally or just need to watch a simple effect rendered from CSS or JS code. But debug tools such as Chrome DevTool are not very suitable for everyone. This library has many convinient ways to finish some simple examples using JavaScript file.

_Writer's Personal Website:_ 
 [个人网站](http://119.23.244.156:39111)


 ## Examples

 ### Selector

 ```javascript
//like Jquery, if you want to select any dom element:

//id = catty;

let dom = cat.el('#catty');

//class = cats;

let dom = cat.el('.cat');

//if you want to select element(s) with two or more common class: cats, dogs

let doms = cat.el('.cats dogs')
```

Remember: if selector return more than one htmldom, you'll get an array of htmldoms



### Method


#### cat.eachInnerHTML(domArr, innerHtml)    

 ```javascript
 // set innerHTML to every element return from selector
 let cats = cat.el('.cats') 

 cat.eachInnerHTML(cats, '<p>hello, we are cats !</p>')
```


#### cat.eachDomAttr(domArr, attr, val)   

 ```javascript
 // set attribute to every element return from selector
 let cats = cat.el('.cats') 

 cat.eachDomAttr(cats, 'title', 'manyCats')
 ```


#### cat.attr(dom, attr, val)   

 ```javascript
 // set attribute to specific element return from selector
 let cat = cat.el('#cat') 

 cat.attr(cats, 'title', 'singleCat')
 ```


#### cat.class(dom, val)   

 ```javascript
 // set class name to specific element return from selector
 let cat = cat.el('#cat') 

 cat.attr(cats, 'catty')
 ```


#### cat.addStyle(dom(s), style, val) & cat.addStyle(dom(s), {styleObject})   

 ```javascript
 // set style to specific element or dom array return from selector. if there's only two arguments, the second one must an object
 let cat = cat.el('#cat')

 let dogs = cat.el('.dogs') 

 cat.addStyle(cat, 'height', '100px')

 cat.addStyle(dogs, {
 	'height': '100px',
 	'width': '100px',
 	'background-color': 'blue'
 })
 ```


#### cat.getAllKeys(obj)   

 ```javascript
 // return all keys from specific object including Symbol value
 let cat = Symbol('animal')

 const animals = {
 	[cat]: 'meow',
 	dog: 'bark'
 }

 Object.keys(animals)		//["dog"]

 cat.getAllKey(animals)		//[symbol[animal],"dog"]
 ``` 


#### cat.iterable(obj)  

 ```javascript
 // make specific object iterable
 const animals = {
 	cat: 'meow',
 	dog: 'bark'
 }

 for(let i of animals){
 	console.log(i)		//{cat: 'meow', dog: 'bark'}
 }
 ``` 	