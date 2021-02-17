const weightSlider = document.getElementById("sliderWeight");
const weightOutput = document.getElementById("weightOutput");

weightOutput.innerHtml = weightSlider.value;

weightSlider.oninput = function () {
  weightOutput.innerHtml = this.value;
};

function showValueWeight(newVal) {
  weightSlider.value = newVal;
}

weightSlider.addEventListener("input", updateValueOutPutWeight );

function updateValueOutPutWeight(e) {
  weightOutput.value = e.srcElement.value;
}

const heightSlider = document.getElementById("sliderHeight");
const heightOutput = document.getElementById("heightOutput");

heightOutput.innerHtml = heightSlider.value;

heightSlider.oninput = function () {
  heightOutput.innerHtml = this.value;
};

function showValueHeight(newVal) {
  heightSlider.value = newVal;
}

heightSlider.addEventListener("input", updateValueOutPutHeight );

function updateValueOutPutHeight(e) {
  heightOutput.value = e.srcElement.value;
}

// imc = peso em kg / (altura em metros X altura em metros)

const button = document.getElementById('btnCalcular');
button.addEventListener('click', function() {
  let peso = document.getElementById("weightOutput").value;
  let altura = document.getElementById('heightOutput').value;
  let alturaEmMetros = (altura / 100);
  let alturaAoQuadrado = (alturaEmMetros * alturaEmMetros);
  
  let imc = (peso / alturaAoQuadrado);
  
  let resultadoParagrafo = document.querySelector('#resultado p');
  resultadoParagrafo.innerHTML = imc.toFixed(2);
});
