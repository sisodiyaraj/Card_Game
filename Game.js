function position(number)
{
    window.guess = parseInt(number);
    play();
}
function pack()
{
    document.getElementById("balance").value=window.balance;
    document.getElementById("divisionOne").style.backgroundImage = 'url(back.jpg)';
    document.getElementById("divisionOne").style.backgroundPosition ='center';
    document.getElementById("divisionOne").style.backgroundRepeat='no-repeat';
    document.getElementById("divisionTwo").style.backgroundImage = 'url(back.jpg)';
    document.getElementById("divisionTwo").style.backgroundPosition ='center';
    document.getElementById("divisionTwo").style.backgroundRepeat='no-repeat';
    document.getElementById("divisionThree").style.backgroundImage = 'url(back.jpg)';
    document.getElementById("divisionThree").style.backgroundPosition ='center';
    document.getElementById("divisionThree").style.backgroundRepeat='no-repeat';
}

window.balance=100;

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    //document.getElementById("initial").value=100s
    document.getElementById("balance").value=window.balance;
    document.getElementById("divisionOne").style.backgroundImage = 'url(back.jpg)';
    document.getElementById("divisionOne").style.backgroundPosition ='center';
    document.getElementById("divisionOne").style.backgroundRepeat='no-repeat';
    document.getElementById("divisionTwo").style.backgroundImage = 'url(back.jpg)';
    document.getElementById("divisionTwo").style.backgroundPosition ='center';
    document.getElementById("divisionTwo").style.backgroundRepeat='no-repeat';
    document.getElementById("divisionThree").style.backgroundImage = 'url(back.jpg)';
    document.getElementById("divisionThree").style.backgroundPosition ='center';
    document.getElementById("divisionThree").style.backgroundRepeat='no-repeat';
});


function play() 
{
    // document.getElementById("initial").value=100;

    //let initial_amount=100;
    let win ="Hurray! you won";
    let loose="Oops! you lost"
    let bet = parseInt(document.getElementById("bet").value);

    //let balance=initial_amount;
    //let guess = document.getElementById("guess").value;
    //window.alert(bet+window.guess);
    let i=0;
    let array=[];
    array[0]='J';
    array[1]='K';
    array[2]='Q';

    var imgArray = new Array();

    imgArray[0] = new Image();
    imgArray[0].src = 'jack.jpg';

    imgArray[1] = new Image();
    imgArray[1].src = 'king.jpg';

    imgArray[2] = new Image();
    imgArray[2].src = 'queen.jpg';
   
    //document.getElementById("balance").value=initial_amount;
    if((window.balance<bet) || (window.balance == 0))
    {
       document.getElementById("result").value= "you have insufficient balance";
       window.alert("Looks like you have insufficient balance!!\nTry again with less amount!");
    }
    else
    {
        //window.balance=window.balance-bet;
        for(i=0;i<10;i++)
        {
            let x=Math.random();
            let y=Math.random();
            x=parseInt((x*100)%3);
            y=parseInt((y*100)%3);
            let temp=array[x];
            array[x]=array[y];
            array[y]=temp; 
            let temp1=imgArray[x];
            imgArray[x]=imgArray[y];
            imgArray[y]=temp1;  
        }
        let f=imgArray[0].src;
        let s=imgArray[1].src;
        let t=imgArray[2].src;


        document.getElementById("divisionOne").style.backgroundImage = 'url('+f+')';
        document.getElementById("divisionOne").style.backgroundPosition ='center';
        document.getElementById("divisionOne").style.backgroundRepeat='no-repeat';
        document.getElementById("divisionTwo").style.backgroundImage = 'url('+s+')';
        document.getElementById("divisionTwo").style.backgroundPosition ='center';
        document.getElementById("divisionTwo").style.backgroundRepeat='no-repeat';
        document.getElementById("divisionThree").style.backgroundImage = 'url('+t+')';
        document.getElementById("divisionThree").style.backgroundPosition ='center';
        document.getElementById("divisionThree").style.backgroundRepeat='no-repeat';


        if(array[window.guess-1]=='Q')
        {
            document.getElementById("result").value= win;
            window.balance=window.balance+bet*3;
        }
        else
        {
            document.getElementById("result").value= loose;
            window.balance=window.balance-bet;
        }
        //window.alert(array);
        document.getElementById("balance").value=window.balance;



    }
    //document.getElementById("result").value= win;
    //document.getElementById("result").value= "sorry!! unsufficient balance"

    //document.form.textview.value="";

}