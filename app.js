//  All import items

import LsStorage from "./src/LsStorage.js";

//  All Dom Selects

const staff_add_form = document.getElementById('staff_add_form');
const fild_alart = document.getElementById('fild_alart');
const staff_data_view = document.getElementById('staff_data_view');



staff_add_form.addEventListener('submit', function(e){
    e.preventDefault();
    
    let staff_data = new FormData(e.target);
    let data = Object.fromEntries(staff_data.entries());

    let {name, phone, photo, location, gender} = data;

    if(name == "" || phone == "" || location == "" || gender == ""){

        fild_alart.innerHTML= `hi`

    }else{

        LsStorage.dataSend("staffs", data);
        staff_add_form.reset();
        datashow();
    }

});



datashow();
function datashow(){
    let data = LsStorage.dataGet('staffs');
    let dataview = '';

    data.map(( data, index ) =>{

        let {name, phone, photo, location, gender} = data;

        dataview +=`
            <tr>
                <td>${index + 1}</td>
                <td>${name}</td>
                <td>${phone}</td>
                <td>${location}</td>
                <td>${gender}</td>
                <td>
                <img class="rounded-circle" style="width: 50px; height: 50px; object-fit: cover;" src="${ photo ? photo : 'assets/media/img/avatar.jpg'}" alt="Avatar">
                </td>
                <td>
                <button onclick="view_info(${index})" class="btn btn-primary btn-sm"><i class="fa fa-eye"></i></button>
                <button class="btn btn-info btn-sm"><i class="fa fa-edit "></i></button>
                <button class="btn btn-danger btn-sm"><i class="fa fa-trash "></i></button>
                </td>
            </tr>
        
        `
        staff_data_view.innerHTML = dataview;

    });
}



function view_info(id){
    alert(id);
    
}

// function my_fields_alart(field){
    
//     if(`${field}` == ""){
//         `${field}`.classList.add("alert");
//         `${field}`.classList.add("alert-danger");
//     }

// }

/* <p class="alart alert-danger d-flex justify-content-between">All Fields are required<button class="btn-close" data-bs-dismiss="alart" aria-label="Close"></button></p> */