// Data Load to Ajax Methods... Data Load to Ajax Methods....
var myRequest = new XMLHttpRequest();
myRequest.open('GET','https://jsonplaceholder.typicode.com/users');
myRequest.onload = function(){
    
    var myData = JSON.parse(myRequest.responseText)
    var mama = document.getElementById('people-name');

    for(var i = 0; i < myData.length; i++){
        var element = myData[i];
        var element = element.name;
        var li = document.createElement('li')
        li.innerText = element;
        mama.appendChild(li);
    }
    var counter = document.getElementById('count');
    let totalCount = myData.length;
    counter.innerHTML = `Total User Count : ${totalCount}`;
    

// Data load by forEach loop..
    dataLoad(myData);
    function dataLoad(myData){
    let lists = '';
        myData.forEach(user => {
            lists = lists + `
                <div class = 'container information'>
                <p> My ID : ${user.id}</p>
                <p> My Name : ${user.name}</p>
                <p> My User Name : ${user.username}</p>
                <p> My Email : ${user.email}</p>
                <p> My Number : ${user.phone}</p>
                <div class = 'address'>
                <h3>My Home Address :</h3>
                <ul class = 'UL'>
                    <li>Street : ${user.address.street}</li>
                    <li>Suite : ${user.address.suite}</li>
                    <li>City : ${user.address.city }</li>
                    <li>Zipcode : ${user.address.zipcode}</li>
                    <li>Lat : ${user.address.geo.lat}</li>
                    <li>Lng : ${user.address.geo. lng}</li>
                </ul>

                <h3>My Company :</h3>
                <ul class = 'UL'>
                    <li>Name : ${user.company.name}</li>
                    <li>Phrase : ${user.company.catchPhrase}</li>
                    <li>Bs : ${user.company.bs }</li>
                </ul>
                </div>
                <p> My Website : ${user.website}</p>
                </div>            
                `
        });
        
        let ul = document.getElementById('user-list');
        ul.innerHTML = lists;
    }
}

myRequest.send();
