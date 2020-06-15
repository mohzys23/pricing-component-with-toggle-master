var display = window.innerWidth;
function switchVisible(){
     if(display < 440 ){
            if (document.getElementById('Div1').style.display == 'none') {
                document.getElementById('Div1').style.display = 'block';
                document.getElementById('Div2').style.display = 'none';
            } else {
                document.getElementById('Div1').style.display = 'none';
                document.getElementById('Div2').style.display = 'block';
            }
     }else{
       if (document.getElementById('Div1')) {
            if (document.getElementById('Div1').style.display == 'none') {
                    document.getElementById('Div1').style.display = 'flex';
                    document.getElementById('Div2').style.display = 'none';
            }else {
                    document.getElementById('Div1').style.display = 'none';
                    document.getElementById('Div2').style.display = 'flex';
            }
        }
    }
}
