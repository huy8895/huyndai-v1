import {data_forklift} from './data/data_forklift.js';
import {data_generator} from './data/data_generator.js';
import {data_agricultural} from './data/data_agricultural.js';
import {data_marine} from './data/data_marine.js';

getCurrentFileName();

function getCurrentFileName(){
    let path = window.location.pathname;
    let page = path.split("/").pop();
    switch (page){
        case 'product-forklift.html':
            initContainerForForklift(data_forklift);
            break;
        case 'product-generator.html':
            initContainerForGenerator(data_generator);
            break;
        case 'product-agricultural.html':
            initContainerForForklift(data_agricultural);
            break;
        case 'product-marine.html':
            initContainerForForklift(data_marine);
            break;
        default:
            console.log("error")
    }
}

function initContainerForForklift(data) {
    Object.keys(data).forEach(engineName => {
        document.getElementById('main-container').innerHTML = document.getElementById('main-container').innerHTML + generateContainerForForklift(data[engineName]);
        generateTable(data[engineName])
    })
}

function initContainerForGenerator(data) {
    Object.keys(data).forEach(engineName => {
        document.getElementById('main-container').innerHTML = document.getElementById('main-container').innerHTML + generateContainerForGenerator(data[engineName]);
        generateTable(data[engineName])
    })
}


function generateThread(array) {
    console.log('generateThread: ', array)
    let keyPair = getKeyPair(0, array);
    if (keyPair.key === 'Engine model [Code]'){
        return `<thead>
          <tr>
            <th>${keyPair.key}</th>
            <th>${keyPair.value}</th>
          </tr>
          </thead>`
    }
    return `
          <tr>
            <td>${keyPair.key}</td>
            <td>${keyPair.value}</td>
          </tr>
          `
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
    let imgTemplate = '';
    listImgs.forEach(imgSource => {
        imgTemplate += `<div class="item">
            <img loading="lazy" class="img-fluid" src="${imgSource}" alt="project-image"/>
          </div>`
    })
    return imgTemplate;
}


function generateContainerForForklift(engine) {
    return `
  <div class="container border">
        <div class="row text-center">
        <div class="col-lg-12 project-area solid-bg">
          <h2 class="section-title">${engine.description}</h2>
          <h3 class="column-title ">${engine.title}</h3>
        </div>
    </div>
    
    <div class="row">
      <div class="col-lg-8">
        <div id="page-slider" class="page-slider small-bg">
          ${initImages(engine.images)}
        </div><!-- Page slider end -->
      </div>
      <div class="col-lg-4 mt-5 mt-lg-0">
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
function generateContainerForGenerator(engine) {
    return `
  <div class="container border">
      <div class="row text-center">
        <div class="col-lg-12 project-area solid-bg">
          <h2 class="section-title">${engine.description}</h2>
          <h3 class="column-title ">${engine.title}</h3>
        </div>
    </div>
    
    <div class="row">
    
      <div class="col-lg-8">
        <div id="page-slider" class="page-slider small-bg">
          ${initImages(engine.images)}
        </div><!-- Page slider end -->
      </div>
      <div class="col-lg-4 mt-5 mt-lg-0">
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
        
        <p><b>• Flywheel & Flywheel housing</b></p>
        <table class="table table-sm table-striped " id="${engine.name}_Flywheel">
        </table>

        
      </div>

      <div class="col-lg-6 mt-5 mt-lg-0">
        <p><b>• Fuel system</b></p>
        <table class="table table-sm table-striped " id="${engine.name}_Fuel">
        </table>
        
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


