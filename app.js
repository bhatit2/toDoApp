(function(){
    document.getElementById("create-list").addEventListener("click", createList);
    document.getElementById("form-btn").addEventListener("click", addItem);
    document.getElementById("list-btn").addEventListener("click", addList);
    function createList(e){
        document.getElementById("create-list").style.display = "none";
        document.getElementById("list-form").style.display = "block";
    }
    function addItem(e){
        e.preventDefault();
        let val = document.getElementById("item").value;
        if(val){
            let node = document.getElementById("list-of-task");
            let ele = document.createElement('div');
            let ele1 = document.createElement('input');
            ele1.setAttribute('type', 'checkbox');
            var textnode = document.createTextNode(val);         
            ele1.value = val; 
            ele.appendChild(ele1);
            ele.appendChild(textnode);                 
            node.appendChild(ele);
            document.getElementById("item").value = "";
        } else {
            alert("Cannot add empty value");
        }
    }

    function addList(e){
        e.preventDefault();
        let parent = document.getElementById("newList");
        let childN = document.getElementById("list-of-task");
        let child = childN.cloneNode(true);
        
        parent.appendChild(child);
        childN.innerHTML = '';
        document.getElementById("create-list").style.display = "block";
        document.getElementById("list-form").style.display = "none";
    }
}());
