/*bapak mohon maaf ya, saya membuat dua file JavaScript karena
file java pertama saya tdk dapat digunakan untuk edit selanjutnyaaa.
saya bingung akhirnya pilihan terakhir saya adalah buat file js baru. mohon maaf ya pakk*/
/*ini file js khusus page test.html pakkk. khusus untuk page quizzz*/

var next = document.getElementById('next');
var score = document.getElementById('score');
var totalScore = document.getElementById('totalScore');
var count = 0;
var scoreCount = 0; 
var qaSet = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');

next.addEventListener('click',function(){ /*JS untuk button next ke soal yang berikutnya*/
    step();
})

qaAnsRow.forEach( function(qaAnsRowSingle){
    qaAnsRowSingle.addEventListener('click',function(){
        setTimeout(function(){
            step();
        },500)

        var valid = this.getAttribute("valid");
        if(valid == "valid"){
            scoreCount +=10; /*score akan bertambah sebanyak 10 point jika jawaban valid/benar*/
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }else{
            scoreCount +=0; /*score tidak akan bertambah / bernilai 0 jika jawaban tidak valid/salah*/
            score.innerHTML = scoreCount;
            totalScore.innerHTML = scoreCount;
        }
    })
});

function step(){
    count += 1;
    for(var i = 0; i <qaSet.length; i++){
        qaSet[i].className= 'qa_set';
    }
    qaSet[count].className= 'qa_set active';
    if(count == 10){ /*question active berjumlah 10 (butir quiz)*/
        next.style.display = 'none';
    }
}