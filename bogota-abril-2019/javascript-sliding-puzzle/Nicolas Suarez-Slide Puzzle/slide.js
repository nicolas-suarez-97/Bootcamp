var tam = 4;
var matrix = [];

var con = 1;
for(var i=0; i<tam; i++) {
    matrix[i] = new Array(tam);    
    for (var j=0; j<tam; j++){
        matrix[i][j]=con;
        if(con != tam*tam){
            document.getElementById("button"+con).innerHTML=con;        
            if(con=="2"||con=="4"||con=="5"||con=="7"||con=="10"||con=="12"||con=="13"||con=="15"){
                document.getElementById("button"+con).style.backgroundColor="red";
                document.getElementById("button"+con).style.color="white";
            }
        }else{
            document.getElementById("button"+con).style.backgroundColor="white";
        }
        con+=1;
    }
}

function move(val){
    console.log(val);
}


function rand(){
    console.log("rand");
    for(var i=0;i<tam;i++){
        matrix[i].sort(() => Math.random() - 0.5);
    }
    matrix.sort(() => Math.random() - 0.5);
    fill(matrix);
    console.log(matrix);
}

function fill(array){
    var con = 1;
    for(var i=0; i<tam; i++) {         
        for (var j=0; j<tam; j++){            
            if(con != tam*tam){
                document.getElementById("button"+con).innerHTML=array[i][j];        
                if(array[i][j]=="2"||array[i][j]=="4"||array[i][j]=="5"||array[i][j]=="7"||array[i][j]=="10"||array[i][j]=="12"||array[i][j]=="13"||array[i][j]=="15"){
                    document.getElementById("button"+con).style.backgroundColor="red";
                    document.getElementById("button"+con).style.color="white";
                }else{
                    document.getElementById("button"+con).style.backgroundColor="white";
                    document.getElementById("button"+con).style.color="black";
                }
            }else{
                document.getElementById("button"+con).style.backgroundColor="white";
            }
            con+=1;
        }
    }
}