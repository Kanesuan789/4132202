    var num = 10;
    let name = "pack";
    age = 20;
    const year = 2003;

    console.log(year);
     
    fruit = ["banana","appie"];

    console.log(fruit);

    plant ={ fruit: "banana", car: "he"};

    console.log(plant);

    dataJson = {
        employee: [{ name: "pack"},{age: 20},{year:2003 }],
    };

    console.log(dataJson.employee);

    let msg = name + year;
    msg = `${name} ${year}`;
    
    console.log(msg)


    document.getElementById('title').inenerHTML=msg;

    $(function(){

        $("#title")
        .html(msg + "jQuery")
        .addClass("red");
    });
    
