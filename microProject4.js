let text=document.getElementById('textBox');
function appendToDisplay(value) {
    text.value += value;
  }

  function clearDisplay(){
    text.value="";
  }

  function result(){
    if(text.value.includes('/0')){
        text.value="div with zero not poosible";
    }
    else{
      try{
        text.value= eval(document.getElementById('textBox').value);
      }
      catch(error){
        text.value= "invalid";
      }
    }
  }

  function deleteOneDigitRight(){
    text.value = text.value.slice(0,(text.value).length-1);
  }