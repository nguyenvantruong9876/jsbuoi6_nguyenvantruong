// bài 1 số nguyên dương nhỏ nhất
function songuyennhonhat() {
    var i = 0;
    var num = 0;

    for (var i = 0; num <= 10000; i++) {

        num = num + i;
        document.getElementById("txtResultnhonhat").innerHTML = "Số nguyên dương nhỏ nhất :" + i;
    }

}
document.getElementById("btnbatdau").onclick = songuyennhonhat;

// bài 2 Tính tổng
function tinhtong() {
    var x = document.getElementById("nhapsox").value;
    var n = document.getElementById("nhapson").value;

    var tong = 0;

    for (var i = 1; i <= n; i++) {
        tong += Math.pow(x, i);

        document.getElementById("txtResulttinhtong").innerHTML = tong;
    }

}
document.getElementById("btntinh").onclick = tinhtong;

// bài 3 Tính Giai thừa
function tinhtong() {
    var giaithua = document.getElementById("nhapgiaithua").value;
    var ketqua = 1

    for (var i = 1; i <= giaithua; i++) {
        ketqua = ketqua * i;

        document.getElementById("txtResultgiaithua").innerHTML = ketqua;
    }

}
document.getElementById("btngioithua").onclick = tinhtong;


// bài 4 Tạo thẻ div
function taothediv() {
    var div = '';
    var xdiv = '';
    for (var i = 1; i <= 10; i++) {
        if (div = i % 2 == 0){
            <div class='bg-danger text-white p-2'>Div chẵn</div>
        }else{
            <div class='bg-primary text-white  p-2'>Div lẻ </div>
        }
            xdiv += div;
        document.getElementById("txtResulttaothe").innerHTML = xdiv;
    }

}
document.getElementById("btntaothe").onclick = taothediv;