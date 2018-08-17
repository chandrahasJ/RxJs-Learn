
import { Observable } from "rxjs/Observable";

//Observable 
/* var observable = Observable.create((observer:any) =>{     
    observer.next("I AM CJ");
    observer.next("Trying To Learn RxJS");
});

//Observer
observable.subscribe((x:any)=> {
    console.log(x);
    addItem(x);
}); */

/* var observable = Observable.create((observer:any) =>{         
    observer.next("I AM CJ");
    observer.next("Trying To Learn RxJS");
    observer.complete(); 
    observer.next("This Line should not show up as we have added complete() in above line");
});

//Observer
observable.subscribe((x:any)=> {
    console.log(x);
    addItem(x);
}); */

/* var observable = Observable.create((observer:any) =>{         
    try{
        observer.next("I AM CJ");
        observer.next("Trying To Learn RxJS");
        observer.complete(); 
        observer.next("This Line should not show up as we have added complete() in above line");
    }
    catch(error){   
        observer.error(error);
    }
});

//Observer
observable.subscribe(
    (x:any)=> {
        console.log(x);
        addItem(x);
    },
    (error:any)=>{
        console.log(error);
        addItem(error);
    },
    () => {
        console.log("Observer has been completed");
        addItem("Observer has been completed");
    }
);  */

// UnSubsribe
/* var observable$ = Observable.create((observer:any) =>{         
    try{
        observer.next("I AM CJ");
        observer.next("Trying To Learn RxJS");
        setInterval(() => {
            observer.next("consistency is the key"); 
        },2000);
       // observer.next("This Line should not show up as we have added complete() in above line"); 
       // observer.complete(); 
      
    }
    catch(error){   
        observer.error(error);
    }
});



//Observer
var observer$ = observable$.subscribe(
    (x:any)=> {
        console.log(x);
        addItem(x);
    },
    (error:any)=>{
        console.log(error);
        addItem(error);
    },
    () => {
        console.log("Observer has been completed");
        addItem("Observer has been completed");
    }
);

setTimeout(() => {
    observer$.unsubscribe("");
},8000); */

var observable$ = Observable.create((observer:any) =>{         
    try{
        observer.next("I AM CJ");
        observer.next("Trying To Learn RxJS");
        setInterval(() => {
            observer.next("consistency is the key"); 
        },2000);
       // observer.next("This Line should not show up as we have added complete() in above line"); 
       // observer.complete(); 
      
    }
    catch(error){   
        observer.error(error);
    }
});



//Observer
var observer$ = observable$.subscribe(
    (x:any)=> {
        console.log(x);
        addItem(x);
    },
    (error:any)=>{
        console.log(error);
        addItem(error);
    },
    () => {
        console.log("Observer has been completed");
        addItem("Observer has been completed");
    }
);

var observer2$ = observable$.subscribe(
    (x:any)=> {
        console.log(x);
        addItem("observer2$:> "+x);
    },
    (error:any)=>{
        console.log(error);
        addItem(error);
    },
    () => {
        console.log("Observer has been completed");
        addItem("Observer has been completed");
    }
);

observer$.add(observer2$);


setTimeout(() => {
    //observer$.unsubscribe(); // Observer$ & Observer2$ will be unsubsribed as unsubsribe was called on parent observer
    //observer2$.unsubscribe(); // Only Observer2$ will be unsubsribed as it is a child subsribation
},8000);

function addItem(val:any){
    var node = document.createElement("li");
    var textNode = document.createTextNode(val);
    node.appendChild(textNode);
    document.getElementById("output").appendChild(node);
}