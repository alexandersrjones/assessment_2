var color = document.getElementById('con_color');
var number_but = document.getElementById('number_but');
var range1 = document.getElementById('con_range1');
var range2 = document.getElementById('con_range2');
var range3 = document.getElementById('con_range3');
var range4 = document.getElementById('con_range4');
var hair = document.getElementById('hair');
var eyes = document.getElementById('eyes');
var nose = document.getElementById('nose');
var mouth = document.getElementById('mouth');
var hair_count = 1;
var eyes_count = 1;
var nose_count = 1;
var mouth_count = 1;
var plus_but = document.getElementById('add_but');
var preview= document.getElementById('preview');
var auto_rand_but = document.getElementById('auto_rand_but');
var stop_auto_but = document.getElementById('stop_auto_but');
var time_rand = null;

function createFace() {
    new_div = document.createElement('div');
    new_div.className='ndiv';
    new_div.style.backgroundColor=preview.style.backgroundColor;
    display.appendChild(new_div);
    
    new_hair = document.createElement('img');
    new_hair.style.left='0px';
    new_hair.style.right='0px';
    new_hair.style.margin='auto';
    new_hair.style.width=hair.style.width;
    new_hair.style.height=hair.style.height;
    new_hair.style.position='absolute';
    new_hair.style.top='0%';
    new_hair.src=hair.src;
    new_div.appendChild(new_hair);
    
    new_eyes = document.createElement('img');
    new_eyes.style.left='0px';
    new_eyes.style.right='0px';
    new_eyes.style.margin='auto';
    new_eyes.style.width=eyes.style.width;
    new_eyes.style.height=eyes.style.height;
    new_eyes.style.position='absolute';
    new_eyes.style.top='40%';
    new_eyes.src=eyes.src;
    new_div.appendChild(new_eyes);
    
    new_nose = document.createElement('img');
    new_nose.style.left='0px';
    new_nose.style.right='0px';
    new_nose.style.margin='auto';
    new_nose.style.width=nose.style.width;
    new_nose.style.height=nose.style.height;
    new_nose.style.position='absolute';
    new_nose.style.top='55%';
    new_nose.src=nose.src;
    new_div.appendChild(new_nose);
    
    new_mouth = document.createElement('img');
    new_mouth.style.left='0px';
    new_mouth.style.right='0px';
    new_mouth.style.margin='auto';
    new_mouth.style.width=mouth.style.width;
    new_mouth.style.height=mouth.style.height;
    new_mouth.style.position='absolute';
    new_mouth.style.top='75%';
    new_mouth.src=mouth.src;
    new_div.appendChild(new_mouth);
}

function randomFace() {
    var random_num = Math.floor(Math.random()*3)+1;
    hair.src='img/hair'+random_num+'.png';
    eyes.src='img/eyes'+random_num+'.png';
    nose.src='img/nose'+random_num+'.png';
    mouth.src='img/mouth'+random_num+'.png';
    
    hair.style.width=(Math.floor(Math.random()*70)+1)+'%';
    eyes.style.width=(Math.floor(Math.random()*40)+1)+'%';
    nose.style.width=(Math.floor(Math.random()*30)+1)+'%';
    mouth.style.width=(Math.floor(Math.random()*35)+1)+'%';
    
    preview.style.backgroundColor='rgb('+(Math.floor(Math.random()*256))+','+(Math.floor(Math.random()*256))+','+(Math.floor(Math.random()*256))+')';
}

function changeType(type) {
    document.getElementById('con_range1').type=type;
    document.getElementById('con_range2').type=type;
    document.getElementById('con_range3').type=type;
    document.getElementById('con_range4').type=type;
}

color.addEventListener('change', function() {
    document.getElementById('preview').style.backgroundColor = color.value;
});

number_but.addEventListener('click', function() {
    changeType('number');
});

range_but.addEventListener('click', function() {
    changeType('range');
});

range1.addEventListener('change', function() {
    hair.style.width=range1.value+'%';
});

range2.addEventListener('change', function() {
    eyes.style.width=range2.value+'%';
});

range3.addEventListener('change', function() {
    nose.style.width=range3.value+'%';
});

range4.addEventListener('change', function() {
    mouth.style.width=range4.value+'%';
});

hair.addEventListener('click', function() {
    if (hair_count == 1){
        hair.src='img/hair2.png';
        hair_count=2;
    }
    else if (hair_count == 2){
        hair.src='img/hair3.png';
        hair_count=3;
    }
    else if (hair_count == 3){
        hair.src='img/hair1.png';
        hair_count=1;
    }
});

eyes.addEventListener('click', function() {
    if (eyes_count == 1){
        eyes.src='img/eyes2.png';
        eyes_count=2;
    }
    else if (eyes_count == 2){
        eyes.src='img/eyes3.png';
        eyes_count=3;
    }
    else if (eyes_count == 3){
        eyes.src='img/eyes1.png';
        eyes_count=1;
    }
});

nose.addEventListener('click', function() {
    if (nose_count == 1){
        nose.src='img/nose2.png';
        nose_count=2;
    }
    else if (nose_count == 2){
        nose.src='img/nose3.png';
        nose_count=3;
    }
    else if (nose_count == 3){
        nose.src='img/nose1.png';
        nose_count=1;
    }
});

mouth.addEventListener('click', function() {
    if (mouth_count == 1){
        mouth.src='img/mouth2.png';
        mouth_count=2;
    }
    else if (mouth_count == 2){
        mouth.src='img/mouth3.png';
        mouth_count=3;
    }
    else if (mouth_count == 3){
        mouth.src='img/mouth1.png';
        mouth_count=1;
    }
});

plus_but.addEventListener('click', function() {
    createFace();
});

document.getElementById('random_but').addEventListener('click', function() {
    randomFace();
});

auto_rand_but.addEventListener('click', function() {
    if (time_rand == null){
        timer = setInterval(function(){
            randomFace();
            createFace();
        }, 500);
    }
});

stop_auto_but.addEventListener('click', function() {
    clearInterval(timer);
        time_rand = null;
});


