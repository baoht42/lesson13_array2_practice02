//bai 1
function doEx1() {
    let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
    for (let index in a) {
        document.write("row"+ index + "<br>");
        for (let j in a){
            document.write(" "+ a[index][j]+"<br>");
        }
    }
}

//bai 2

function doEx2(){

// let outputArr = array2.reverse();
    document.write("Mang ban dau: " + array2.join(", ") + "<br/>");
    let outputArr = array2.reverse();
    document.write(`Mang dao nguoc la: ${outputArr.join(", ")}`);

}

//bai 3
function doEx3(){
    const array3 = [ 'c', 's', 'c', '2', '6', '1' ];
    document.write(`Kich thuoc cua mang la: ${array3.length} `);
}
//bai 4
function doEx4(){d

}