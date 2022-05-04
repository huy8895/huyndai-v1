import {data_forklift} from './data/data_forklift.js';
import {data_generator} from './data/data_generator.js';

getCurrentFileName();

function getCurrentFileName(){
    let path = window.location.pathname;
    let page = path.split("/").pop();
    switch (page){
        case 'forklift.html':
            initContainer(data_forklift);
            break;
        case 'generator.html':
            initContainer(data_generator);
            break;
        default:
            console.log("error")
    }
}

function initContainer(data) {
    Object.keys(data).forEach(engineName => {
        document.getElementById('main-container').innerHTML = document.getElementById('main-container').innerHTML + generateContainer(data[engineName]);
        generateTable(data[engineName])
    })
}


function generateThread(array) {
    console.log('generateThread: ', array)
    let keyPair = getKeyPair(0, array);
    return `<thead>
          <tr>
            <th>${keyPair.key}</th>
            <th>${keyPair.value}</th>
          </tr>
          </thead>`
}

function generateRow(key, value) {
    return `<tr>
            <td>${key}</td>
            <td>${value}</td>
          </tr>
          `
}

function getKeyPair(indexOfData, array) {
    let length = array.length;
    return {
        key: array[indexOfData],
        value: array[indexOfData + length / 2]
    }
}

function generateRows(array) {
    console.log('generateRows: ' + array)
    let rows = '';
    for (let i = 1; i < array.length / 2; i++) {
        let keyPair = getKeyPair(i, array);
        rows += generateRow(keyPair.key, keyPair.value);
    }
    return rows;
}

function generateBody(array) {
    return `<tbody>
          ${generateRows(array)}
        </tbody>`;
}

function generateEachTable(tableId, arrayData) {
    let thread = generateThread(arrayData);
    let body = generateBody(arrayData);
    document.getElementById(tableId).innerHTML = thread + body;
}

function generateTableId(engineName, fieldName) {
    return engineName + '_' + fieldName;
}

function generateTable(engine) {
    Object.keys(engine.data).forEach(field => {
        let tableId = generateTableId(engine.name, field);
        let arrayDatum = engine.data[field];
        generateEachTable(tableId, arrayDatum);
    })
}

function initImages(listImgs) {
    //imgSource = images/products/3-forklift/ks95/slide.png
    let imgTemplate = '';
    listImgs.forEach(imgSource => {
        imgTemplate += `<div class="item">
            <img loading="lazy" class="img-fluid" src="${imgSource}" alt="project-image"/>
          </div>`
    })
    return imgTemplate;
}

//D4HB (KS95) 65ps / 24kg·m
//4D 3.9 Forklift engine
function generateContainer(engine) {
    return `
  <div class="container">
    <div class="row">
      <div class="col-lg-8">
        <div id="page-slider" class="page-slider small-bg">
          ${initImages(engine.images)}
        </div><!-- Page slider end -->
      </div>
      <div class="col-lg-4 mt-5 mt-lg-0">
        <h3 class="column-title mrt-0">${engine.title}</h3>
        <p>${engine.description}</p>
        <p><b>• General Specification</b></p>
        <table class="table table-sm table-striped " id="${engine.name}_General">
        </table>
      </div>

    </div>
    <div class="row">
      <div class="col-lg-6 mt-5 mt-lg-0">
        <p><b>• Lubrication system</b></p>
        <table class="table table-sm table-striped " id="${engine.name}_Lubrication">
        </table>

        <p><b>• Cooling system</b></p>
        <table class="table table-sm table-striped " id="${engine.name}_Cooling">
        </table>

        <p><b>• Engine speed</b></p>
        <table class="table table-sm table-striped " id="${engine.name}_Engine">
        </table>

        <p><b>• Fuel system</b></p>
        <table class="table table-sm table-striped " id="${engine.name}_Fuel">
        </table>
      </div>

      <div class="col-lg-6 mt-5 mt-lg-0">
        <p><b>• Starting & electrical system</b></p>
        <table class="table table-sm table-striped " id="${engine.name}_Starting">
        </table>

        <p><b>• Certification information</b></p>
        <table class="table table-sm table-striped " id="${engine.name}_Certification">
        </table>

        <p><b>• Application</b></p>
        <table class="table table-sm table-striped " id="${engine.name}_Application">
        </table>

        <p><b>• Notice</b></p>
        <table class="table table-sm table-striped " id="${engine.name}_Notice">
        </table>
      </div>
    </div>

  </div>
<div class="mt-4"></div>`
}


