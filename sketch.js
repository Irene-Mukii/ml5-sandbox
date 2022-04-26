
let classifier;
let vid;
let img;
let label='';

function preload(){
    classifier = ml5.imageClassifier('MobileNet');
    //img = loadImage('images/download.jpeg')
    vid = createCapture(VIDEO)
    vid.hide();
}

function setup(){
    createCanvas (600,550);
    classifier.classify(vid, gotResult); 
}

function draw(){
    //image(img,0,0, width, height);
    background(0)
    image(vid, 0,0);
    fill(255);
    textSize(32);
    text(label, 10, height - 20);
}

function gotResult(error, results){
    if (error){
       console.log(error);
    }else {
        console.log(results)
        // createDiv(`Label: ${results[0].label}`);
        // createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
        label = results[0].label;
        // let prob = result[0].probability;
        classifier.classify(vid, gotResult);
    }
}
console.log('ml5 version:', ml5.version)
