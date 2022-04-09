img =  "";
status=""

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("turqouise")
    text("Banana", 45, 75);
    noFill();
    stroke("lime")
    rect(30, 60, 450, 350 );

    fill("turqouise")
    text("cat", 320, 120);
    noFill();
    stroke("lime")
    rect(300, 90, 270, 320);
}

function modelLoaded()
{
    console.log("Model Loaded!")
    Status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, result)
{
    if (error)
    {
        console.log(error)
    }
    console.log(results);
    objects = results;
}