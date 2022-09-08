let input_voice = document.querySelector("input");
let button_voice = document.querySelectorAll("button");
let p_voice = document.querySelector("p");
let myvoice = new p5.Speech();
let myRec = new p5.SpeechRec(); 
let btn1= button_voice[0];
let btn2=  button_voice[1];
btn1.addEventListener('click',function(){
    myvoice.speak(input_voice.value);
    p_voice.innerHTML=input_voice.value;
})
btn2.addEventListener('click',function(){
    myRec.onResult = showResult;
    myRec.start();  
})
function showResult()
	{
		if(myRec.resultValue==true) {
            p_voice.innerHTML = myRec.resultString;
            document.body.style.background="green";
            if(myRec.resultString=="جوجل"){
                window.open("https://www.google.com");
            }
            else if(myRec.resultString=="واتساب"){
                window.open("https://www.whatsapp.com");
            }
            else
            {
                window.open("https://www.google.com/search?q="+ myRec.resultString);  
            }
        }
        else if(myRec.resultValue==false) { 
            p_voice.innerHTML = "i didn't hear anything";
        }
        console.log(`what : ${myRec.resultString}`);
	}




