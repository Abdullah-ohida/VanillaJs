const input = document.getElementById("input");
const btn = document.getElementById("btn");
const alert = document.getElementById("alert");

btn.addEventListener('click', () =>{
        copyToClipboard(input.value);
        showAlert();
});

const copyToClipboard = () =>{
        input.select();
      document.execCommand('copy');  
     
}

function showAlert(){
        setInterval(() => {
                alert.textContent = `copied to cliboard`;
                alert.style.display = "block";
        }, 2000);    
}


