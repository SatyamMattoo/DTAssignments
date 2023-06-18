

fetch("./tasks.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log(data.tasks[0].task_title);


    document.getElementById('mainHeading').innerHTML=data.title;

    document.getElementById('exploreWorld').innerHTML=data.tasks[0].task_title;
    document.getElementById('exploreDescription').innerHTML=data.tasks[0].task_description;
    
    document.getElementById('tmpHeading').innerHTML=data.tasks[0].assets[0].asset_title;
    document.getElementById('tmpDescription').innerHTML=data.tasks[0].assets[0].asset_description;

    let imageElement = document.getElementById('meeting');
    imageElement.src = data.tasks[0].assets[0].asset_content;

    document.getElementById('tbHeading').innerHTML=data.tasks[0].assets[1].asset_title;
    document.getElementById('tbDescription').innerHTML=data.tasks[0].assets[1].asset_description;
    
    document.getElementById('sypHeading').innerHTML=data.tasks[0].assets[2].asset_title;
    document.getElementById('sypDescription').innerHTML=data.tasks[0].assets[2].asset_description;

    document.getElementById('sa4Heading').innerHTML=data.tasks[0].assets[3].asset_title;
    document.getElementById('sa4Description').innerHTML=data.tasks[0].assets[3].asset_description;
  });
