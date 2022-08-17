// https://calculator.swiftutors.com/chord-length-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const chordLengthRadio = document.getElementById('chordLengthRadio');
const circleRadiusRadio = document.getElementById('circleRadiusRadio');
const perpendicularDistancefromCentertoChordRadio = document.getElementById('perpendicularDistancefromCentertoChordRadio');

let chordLength;
let circleRadius = v1;
let perpendicularDistancefromCentertoChord = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

chordLengthRadio.addEventListener('click', function() {
  variable1.textContent = '(r) Circle Radius';
  variable2.textContent = '(t) Perpendicular Distance from Center to Chord';
  circleRadius = v1;
  perpendicularDistancefromCentertoChord = v2;
  result.textContent = '';
});

circleRadiusRadio.addEventListener('click', function() {
  variable1.textContent = '(c) Chord Length';
  variable2.textContent = '(t) Perpendicular Distance from Center to Chord';
  chordLength = v1;
  perpendicularDistancefromCentertoChord = v2;
  result.textContent = '';
});

perpendicularDistancefromCentertoChordRadio.addEventListener('click', function() {
  variable1.textContent = '(c) Chord Length';
  variable2.textContent = '(r) Circle Radius';
  chordLength = v1;
  circleRadius = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(chordLengthRadio.checked)
    result.textContent = `Chord Length = ${computeChordLength().toFixed(2)}`;

  else if(circleRadiusRadio.checked)
    result.textContent = `Circle Radius = ${computeCircleRadius().toFixed(2)}`;

  else if(perpendicularDistancefromCentertoChordRadio.checked)
    result.textContent = `Perpendicular Distance from Center to Chord = ${computePerpendicularDistancefromCentertoChord().toFixed(2)}`;
})

// calculation

function computeChordLength() {
  return 2 * Math.sqrt(Math.pow(Number(circleRadius.value), 2) - Math.pow(Number(perpendicularDistancefromCentertoChord.value), 2));
}

function computeCircleRadius() {
  return Math.sqrt((Math.pow(Number(chordLength.value), 2) / 4) + Math.pow(Number(perpendicularDistancefromCentertoChord.value), 2));
}

function computePerpendicularDistancefromCentertoChord() {
  return Math.sqrt(Math.pow(Number(circleRadius.value), 2) - (Math.pow(Number(chordLength.value), 2) / 4));
}