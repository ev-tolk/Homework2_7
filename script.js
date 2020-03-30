document.getElementById('all_info').style.display = 'none';
document.getElementById('create_person').style.display = 'none';


function displayCreatePerson(){
    let form = document.getElementById('create_person').getElementsByTagName('form');
    form[0].innerHTML='<br>';

    //<div><input type="radio" id="radio_ext1" name="radioOneExt" value="fern" checked>Папоротник</div>
    //<div><input type="radio" id="radio_ext2" name="radioOneExt" value="spruce">Ель</div>

    form[0].innerHTML+= `
    <h2>Изменение информации о растении</h2>
    <div class="radio_btn">
    <select id="radioOneExt">
        <option value="fern">Папоротник</option>
        <option value="spruce">Ель</option>
    </select>
    </div>
    <span>Название:</span><input type="text" id="textName" value="" required><br>
    <span>Возраст: </span><input type="text" id="textAge" value="" required><br>
    <span>Цвет: </span><input type="text" id="textColor" value="" required><br>
    <span>Высота: </span><input type="text" id="textHeight" value="" required><br>
    <span>Ареал обитания: </span><input type="text" id="textRange" value="" required><br>
    <span>Тип растения: </span><input type="text" id="textPlantType" value="" required><br>`;
    
    form[0].innerHTML+=`<div id="supFern" style="display: none;"><span>Открыватель: </span><input type="text" id="textDiscoverer" value="" required><br>
        <span>Описание: </span><input type="text" id="textDescription" value="" required><br></div>`;
    
    form[0].innerHTML+=`<div id="supSpruce" style="display: none;"><span>Тип иголок: </span><input type="text" id="textNeedles" value="" required><br>
        <span>Выделяет ли смолу: </span><input type="text" id="textResinRelease" value="" required><br></div>`;
    form[0].innerHTML+= `<input type="button" id="createPers" class="buttons" value="Добавить нового в подразделение">
    <input type="button" id="mainMenu" class="buttons" value="Главная страницы">`;
    display('create_person');
}


/*let radioButtons = document.getElementsByName('radioOneExt');
var myFun = function(){
    alert("1");
};

//radioButtons.onclick = myFun;

addEventListener('click', function(){
   //alert('1');
});*/

// редактирование данных в одной персоне
//обращается к данным из индекса, чтобы менять данные и отображать информацию

function editPlants(i){
    
    displayCreatePerson();
    document.getElementById('radioOneExt').value = arrPlants[i].type;
    document.getElementById('textName').value = arrPlants[i].name;
    document.getElementById('textAge').value = arrPlants[i].age;
    document.getElementById('textColor').value = arrPlants[i].color;
    document.getElementById('textHeight').value = arrPlants[i].height;
    document.getElementById('textRange').value = arrPlants[i].range;
    document.getElementById('textPlantType').value = arrPlants[i].plantType;
    document.getElementById('textDiscoverer').value = arrPlants[i].discoverer;
    document.getElementById('textDescription').value = arrPlants[i].description;
    document.getElementById('textNeedles').value = arrPlants[i].needles;
    document.getElementById('textResinRelease').value = arrPlants[i].resinRelease;
    document.getElementById('mainMenu').style.display = 'none';
    checkRadio();
    switchType();
    document.getElementById('createPers').addEventListener('click', function(){
       // document.getElementById('mainMenu').style.display = '';
        
        let name = document.getElementById('textName').value;
        let age = document.getElementById('textAge').value;
        let color = document.getElementById('textColor').value;
        let height = document.getElementById('textHeight').value;
        let range = document.getElementById('textRange').value;
        let plantType = document.getElementById('textPlantType').value;
        let discoverer = document.getElementById('textDiscoverer').value;
        let description = document.getElementById('textDescription').value;
        let needles = document.getElementById('textNeedles').value;
        let resinRelease = document.getElementById('textResinRelease').value;
        if (document.getElementById('supFern').style.display == "block"){
            arrPlants[i] = new Fern(name, age, color, height, range, plantType, discoverer, description);
            //arrPlants.splice(i, 1, arrPlants[arrPlants.length[i]]);
            //arrPlants[arrPlants.length] = ;
            //arrPlants.splice(i, 1, new Fern(name, age, color, height, range, plantType, discoverer, description));
            printInfo(arrPlants);
            display('information');
            alert('Отредактировано папоротник');
        } else{
            arrPlants[i] = new Spruce(name, age, color, height, range, plantType, needles, resinRelease);
            //arrPlants[arrPlants.length] = new Spruce(name, age, color, height, range, plantType, needles, resinRelease);
            //arrPlants.splice(i, 1, arrPlants[arrPlants.length[i]]);
            printInfo(arrPlants);
            display('information');
            alert('Отредактировано ель');
        }
    });

}

function deletePlants(i, arrPlants){
    arrPlants.splice(i, 1);
    printInfo(arrPlants);
}

//вывод всей информации на странице о выбранной персоне в id all_info

function printDefaultInfo(i){
    let form = document.getElementById('all_info').getElementsByTagName('form');
    //первый инпут в форме
    form[0].innerHTML='<br><br>';
    form[0].innerHTML+= `<div class="deatailedInfo">
    <h2>Подробная информация о выбранном растении</h2>
        <div class="details">
            <table id="m_table" cellspacing="25">
                <tr><div class="text_name" id="details${i}"> <span>Название растения: </span> ${arrPlants[i].name}</div></tr>
                <tr><div class="text_age" id="details${i}"> <span>Возраст растения: </span> ${arrPlants[i].age}</div></tr>
                <tr><div class="text_color" id="details${i}"> <span>Цвет растения: </span> ${arrPlants[i].color}</div></tr>
                <tr><div class="text_height" id="details${i}"> <span>Высота растения: </span> ${arrPlants[i].height}</div></tr>
                <tr><div class="text_range" id="details${i}"> <span>Ареал обитания растения: </span> ${arrPlants[i].range}</div></tr>
                <tr><div class="text_plantType" id="details${i}"> <span>Тип растения: </span> ${arrPlants[i].plantType}</div></tr>
            </table>
        </div>
        </div>`;
    if (arrPlants[i].type == 'fern'){
        form[0].innerHTML+=` <tr><div class="text_discoverer" id="details${i}"> <span>Открыватель растения: </span> ${arrPlants[i].discoverer}</div></tr>
                <tr><div class="text_description" id="details${i}"> <span>Описание растения: </span>  ${arrPlants[i].description}</div></tr>`;
    } else  {form[0].innerHTML+=`<tr><div class="text_needles" id="details${i}"> <span>Тип иголок: </span> ${arrPlants[i].needles}</div></tr>
    <tr><div class="text_resinRelease" id="details${i}"> <span>Выделение смолы: </span>  ${arrPlants[i].resinRelease}</div></tr>`;}
    form[0].innerHTML += `<input type="button" class="buttons" id="mainMenu2" value="Главное меню">`;
        
        document.getElementById('mainMenu2').addEventListener('click', function(){
            display('information');
        });
}




//отрисовка информации о всех растениях

function printInfo(arrPlants){
    let form = document.getElementById('information').getElementsByTagName('form');
    form[0].innerHTML = '<br><h1>Таблица растений</h1><br>';
    //Первая (верхняя) строка таблицы
    form[0].innerHTML+= `
        <div class="text_description1">
        <table id="m_table" cellspacing="25">
        <tr><td width="200" align="center"><div class="text_name strong"> Название растения </div></td>
        <td width="200" align="center"><div class="text_age strong"> Возраст растения  </div></td>
        <td width="200" align="center"><div class="text_color strong"> Цвет растения </div></td>
        <td width="200" align="center"><div class="text_height strong"> Высота растения </div></td>
        <td width="200" align="center"><div class="text_range strong"> Ареал обитания растения </div></td>
        <td width="200" align="center"><div class="text_plantType strong"> Тип растения </div>
        </td></tr></table></div>`;
    for(let i = 0; i < arrPlants.length; i++){
        // каждое i - информация о персоне
        form[0].innerHTML+= `<div class="text_description">
        <table id="m_table" cellspacing="25">
        <tr><td width="200" align="center"><div class="text_name" id="details${i}"> ${arrPlants[i].name}</div></td>
        <td width="200" align="center"><div class="text_age" id="details${i}"> ${arrPlants[i].age}</div></td>
        <td width="200" align="center"><div class="text_color" id="details${i}"> ${arrPlants[i].color}</div></td>
        <td width="200" align="center" ><div class="text_height" id="details${i}"> ${arrPlants[i].height}</div></td>
        <td width="200" align="center"><div class="text_range" id="details${i}"> ${arrPlants[i].range}</div></td>
        <td width="200" align="center"><div class="text_plantType" id="details${i}"> ${arrPlants[i].plantType}</div></td>
        <td width="200" align="center"><div class="text_name" id="edit${i}">Редактировать</div></td>
        <td width="200" align="center"><div class="text_name" id="remove${i}">Удалить</div></td></tr>
        </table>
        </div>`
    }
    form[0].innerHTML+='<br>'+
    '<input type="button" id="newPlantButton" class="buttons" value="Добавить новое растение">';

    // добавим обработчики

    for(let i = 0; i < arrPlants.length; i++){
        let edit = `edit${i}`;
        let remove = `remove${i}`;
        let details = `details${i}`;
        document.getElementById(edit).style.color = 'white';
        document.getElementById(remove).style.color = 'white';
        document.getElementById(details).style.color = 'white';

        document.getElementById(details).addEventListener('click', function(){
            printDefaultInfo(i, arrPlants);
            display('all_info');
        })

        document.getElementById(edit).addEventListener('click', function(){
            editPlants(i);
        })

        document.getElementById(remove).addEventListener('click', function(){
            if(confirm(`Точно удаляем информацию? о ${arrPlants[i].name}`)){
                deletePlants(i, arrPlants);
            } else{

            }
        })
    }

    document.getElementById('newPlantButton').addEventListener('click', function(){
        displayCreatePerson();
        document.getElementById('mainMenu').addEventListener('click', function(){
            display('information');
        });
        checkRadio();
        switchType();
        document.getElementById('createPers').addEventListener('click', function(){
            document.getElementById('mainMenu').style.display = '';
            let name = document.getElementById('textName').value;
            let age = document.getElementById('textAge').value;
            let color = document.getElementById('textColor').value;
            let height = document.getElementById('textHeight').value;
            let range = document.getElementById('textRange').value;
            let plantType = document.getElementById('textPlantType').value;
            let discoverer = document.getElementById('textDiscoverer').value;
            let description = document.getElementById('textDescription').value;
            let needles = document.getElementById('textNeedles').value;
            let resinRelease = document.getElementById('textResinRelease').value;
            if (document.getElementById('supFern').style.display == "block"){
                arrPlants[arrPlants.length] = new Fern(name, age, color, height, range, plantType, discoverer, description);
                printInfo(arrPlants);
                display('information');
                alert('Добавили нового');
            } else{
                arrPlants[arrPlants.length] = new Spruce(name, age, color, height, range, plantType, needles, resinRelease);
                printInfo(arrPlants);
                display('information');
                alert('Добавили нового');
            }
        });
    });
}

/*Выбирать либо "information" лмбо "all_info" либо create_person */
// display flex чтобы отобразить нужный блок
function display(visibleId){
    switch(visibleId){
        case  'create_person':
        document.getElementById('information').style.display = 'none';
        document.getElementById('all_info').style.display = 'none';
        document.getElementById('create_person').style.display = 'flex';
        break;
        case  'all_info':
        document.getElementById('information').style.display = 'none';
        document.getElementById('all_info').style.display = 'flex';
        document.getElementById('create_person').style.display = 'none';
        break;
        case  'information':
        document.getElementById('information').style.display = 'flex';
        document.getElementById('all_info').style.display = 'none';
        document.getElementById('create_person').style.display = 'none';
        break;
    }
}

// родительский класс с геттером и сеттером
// свойства родительского класса: имя, возраст, цвет, высота, ареал обитания, тип растения

class Plants{
    constructor(name, age, color, height, range, plantType){
        this._name = name;
        this._age = age;
        this._color = color;
        this._height = height;
        this._range = range;
        this._plantType = plantType;
    }

    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get color(){
        return this._color;
    }
    get height(){
        return this._height;
    }
    get range(){
        return this._range;
    }
    get plantType(){
        return this._plantType;
    }

    set name(value){
        if(value.length == ''){
            alert('Введите название растения');
        } else {
            this._name = value
        }
    }
    set age(value){
        if(value.length == ''){
            alert('Введите возраст растения');
        } else {
            this._age = value
        }
    }
    set color(value){
        if(value.length == ''){
            alert('Введите цвет растения');
        } else {
            this._color = value
        }
    }
    set height(value){
        if(value.length == ''){
            alert('Введите высоту растения');
        } else {
            this._height = value
        }
    }
    set range(value){
        if(value.length == ''){
            alert('Введите ареал обитания');
        } else {
            this._range = value
        }
    }
    set plantType(value){
        if(value.length == ''){
            alert('Введите типа растения');
        } else {
            this._plantType = value;
        }
    }
}

// классы наследники

class Fern extends Plants{
    constructor(name, age, color, height, range, plantType, discoverer, description){
        super(name, age, color, height, range, plantType);
        this._discoverer = discoverer;
        this._description = description;
        this.type = 'fern';
    }

    get discoverer(){
        return this._discoverer;
    }
    get description(){
        return this._description;
    }
    set discoverer(value){
        if(value.length == ''){
            alert('Введите открывателя');
        } else {
            this._discoverer = value
        }
    }
    set description(value){
        if(value.length == ''){
            alert('Введите описание');
        } else {
            this._description = value;
        }
    }

    /**methods... */
}


class Spruce extends Plants{
    constructor(name, age, color, height, range, plantType, needles, resinRelease){
        super(name, age, color, height, range, plantType);
        this.type = 'spruce';
        this._needles = needles;
        this._resinRelease = resinRelease;
    }

    get needles(){
        return this._needles;
    }
    get resinRelease(){
        return this._resinRelease;
    }
    set needles(value){
        if(value.length == ''){
            alert('Введите тип иголок');
        } else {
            this._needles = value
        }
    }
    set resinRelease(value){
        if(value.length == ''){
            alert('Введите, выделяет ли растение смолу');
        } else {
            this._resinRelease = value;
        }
    }

    /**methods... */
}

//проверка на то какая радио-кнопка и возвразаем его value

function checkRadio(){
    document.getElementById('radioOneExt').addEventListener('change', switchType);
}

function switchType(){
    switch(document.getElementById('radioOneExt').value){
        case 'fern':
            document.getElementById('supFern').style.display = "block";
            document.getElementById('supSpruce').style.display = "none"; 
        break;
        case 'spruce':
            document.getElementById('supSpruce').style.display = "block";
            document.getElementById('supFern').style.display = "none";
        break;
    }
}




let arrPlants = [];  //массив из персон

let plant1 = new Fern('Папоротник', '17 лет', 'темно зеленый', '67 см', 'Европа', 'папоротник еловый', 'Артур Иван', 'высажен в грунт');
arrPlants.push(plant1);
let plant2 = new Fern('Кветка', '8 лет', 'зеленый', '37 см', 'Америка', 'папоротник черновой', 'Мария Шпанникова', 'высажен в грунт');
arrPlants.push(plant2);
let plant3 = new Spruce('Ива', '6 месяцев', 'светлозеленый', '17 см', 'Азия', 'ель обыкновенная', 'колющие', 'да');
arrPlants.push(plant3);
display('infornation');
printInfo(arrPlants);

// главная страница готова
// с кнопками CRUD-операции

/** listeners */

// на главное меню


