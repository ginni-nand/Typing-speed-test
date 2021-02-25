const setofwords=[
    "Greedy is an algorithmic paradigm that builds up a solution piece by piece, always choosing the next piece that offers the most obvious and immediate benefit. So the problems where choosing locally optimal also leads to global solution are best fit for Greedy.",
    "With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!",
    "An external style sheet is used to define the style for many HTML pages."
];
const m=document.getElementById('msg');
const mw=document.getElementById('mywords');
const btn=document.getElementById('btn');
let st,et;
const playGame=()=>
    {
        let rn=Math.floor(Math.random()*setofwords.length);
        m.innerText=setofwords[rn];
        let date=new Date();
        st=date.getTime();
        btn.innerText="Done";

    }

    const endPlay=()=>
    {
        let date=new Date();
        et=date.getTime();
        let tt=((et-st)/1000);
        let ts=mw.value;
        let wc=wordc(ts);

      let speed=Math.floor((wc/tt)*60);

let fm="You typed total at "+speed+" words per min";
fm+=comparew(m.innerText,ts);
m.innerText=fm;

    }
    const comparew=(str1,str2)=>
    {
      let w1=str1.split(" ");
      let w2=str2.split(" ");
      let cu=0;
      w1.forEach(function(item,index)
      {
        if(item==w2[index])
        {
            cu++;
        }
      })
      let ew=(w1.length-cu);
      return (" "+cu+" correct out of "+w1.length +" words and the total number of error are "+ew+" .");
    }
    const wordc=(str)=>
    {
        let res=str.split(" ").length;
        console.log(res);
        return res;
    }
btn.addEventListener('click',function(){
    
    if(this.innerText=='Start')
    {
        mw.disabled=false;
        playGame();
    }
    else if(this.innerText=="Done")
    {
        mw.disabled="true";
        btn.innerText="Start";
        endPlay();
        
    }
})
