var renderer, camera, scene, light, light1, geometry, mesh;
var enemy, ally, enemy2;
var missile1, missile2;
var table_rows, table_cells;
var r_random;
var afsh = [];

function f_random(v) {
    switch (v) {
        case 4:
            r_random = Math.floor(Math.random() * 6) + 1;
            return [
                [4, r_random],
                [4, r_random + 1],
                [5, r_random],
                [5, r_random + 1]
            ];
            break;
        case 3:
            r_random = Math.floor(Math.random() * 6) + 7;
            return [
                [11, r_random],
                [11, r_random + 1],
                [12, r_random]
            ];
            break;
        case 2:
            r_random = Math.floor(Math.random() * 4) + 4;
            return [
                [2, r_random],
                [2, r_random + 1]
            ];
            break;
        case "mp":
            r_random = Math.floor(Math.random() * 2);
            return r_random == 0 ? "L" : "R";
            break;
    }
}

function $(v) {
    return document.querySelector(v);
}
window.onload = function () {
    console.log = function () {};
    var nt = "";
    table_rows = 19;
    table_cells = 15;
    for (var i = 0; i < table_rows - 1; i++) {
        nt += "<tr>";
        afsh[i] = [];
        for (var j = 0; j < table_cells - 1; j++) {
            nt += "<td></td>";
            afsh[i][j] = "white";
        }
        nt += "</tr>";
    }
    $("body").innerHTML += "<table id='t' border='0' align='center'>" + nt + "</table>";

    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('myCanvas'),
        antialias: true
    });
    renderer.setClearColor(0x000000);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    scene = new THREE.Scene();
    light = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(light);
    light1 = new THREE.PointLight(0xffffff, 0.5);
    scene.add(light1);
    geometry = new THREE.BoxGeometry(15, 15, 15);
    for (var qz = 0; qz < 18; qz++) {
        for (var qx = 0; qx < 14; qx++) {
            mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
                color: afsh[qz][qx]
            }));
            mesh.position.set(150 - (qx * 20 + 10), 200 - (qz * 20 + 10), -400);
            scene.add(mesh);
        }
    }
    renderer.render(scene, camera);

    /* var object=new obj(position, speed, movement pattern, enemy or ally) */
    enemy = new obj(f_random(4), 2, "D", "enemy");
    ally = new obj(f_random(2), 2, f_random("mp"), "ally");
    enemy2 = new obj(f_random(3), 1, "U", "enemy");

    /* var missile=new missile(speed, power, movement pattern) */
    missile1 = new missile(2, 2, "U");
    missile2 = new missile(4, 2, "U");

    setInterval(cont, 1500);
}

function obj(vps, vsp, vmn, vea) {
    this.pos = vps;
    this.speed = vsp;
    this.mov = vmn;
    this.eora = vea;
}

function missile(v1, v2, v3) {
    this.speed = v1;
    this.power = v2;
    this.mov = v3;
}

function cont() {
    clear_t();

    st(enemy);
    st(ally);
    st(enemy2);

    destroy_enemy();
    destroy_enemy2();

    show_t();
}

function show_t() {
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }
    scene.add(light);
    scene.add(light1);
    for (var k = 0; k < table_rows - 1; k++) {
        for (var l = 0; l < table_cells - 1; l++) {
            mesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
                color: afsh[k][l] ? afsh[k][l] : "white"
            }));
            mesh.position.set(150 - (l * 20 + 10), 200 - (k * 20 + 10), -400);
            scene.add(mesh);
        }
    }
    renderer.render(scene, camera);
}

function clear_t() {
    for (var k = 0; k < afsh.length; k++) {
        for (var l = 0; l < afsh.length; l++) {
            afsh[k][l] = "white";
        }
    }
}

function sl(v1, v2, v3) {
    try {
        afsh[v1][v2] = v3;
    } catch (err) {}
}

function st(v) {
    if (v.d) {
        return;
    }
    if (v.eora == "enemy") {
        tmp = "blue";
    }
    if (v.eora == "ally") {
        tmp = "green";
    }
    for (var i = 0; i < v.pos.length; i++) {
        sl(v.pos[i][0], v.pos[i][1], tmp);
    }
    switch (v.mov) {
        case "L":
            for (var i = 0; i < v.pos.length; i++) {
                v.pos[i][1] -= v.speed;
            }
            break;

        case "R":
            for (var i = 0; i < v.pos.length; i++) {
                v.pos[i][1] += v.speed;
            }
            break;

        case "U":
            for (var i = 0; i < v.pos.length; i++) {
                v.pos[i][0] -= v.speed;
            }
            break;

        case "D":
            for (var i = 0; i < v.pos.length; i++) {
                v.pos[i][0] += v.speed;
            }
            break;
    }
}

function destroy_enemy() {
    var v = enemy;
    var fd = 0;
    if (missile1.d) {
        return
    }
    if (!missile1.used) {
        missile1.used = true;
        missile1.pos = [0, 0];
        missile1.pos[0] = table_rows - 2;
        missile1.pos[1] = v.pos[0][1];
    }
    try {
        if (afsh[missile1.pos[0]][missile1.pos[1]] == "blue") {
            v.d = true;
            missile1.d = true;
            new_en1();
        }
        afsh[missile1.pos[0]][missile1.pos[1]] = "red";
        missile1.pos[0] -= missile1.speed;
    } catch (err) {}
}

function destroy_enemy2() {
    var v = enemy2;
    var fd = 0;
    if (missile2.d) {
        return;
    }
    if (!missile2.used) {
        missile2.used = true;
        missile2.pos = [0, 0];
        missile2.pos[0] = table_rows - 2;
        missile2.pos[1] = v.pos[0][1];
    }
    try {
        if (afsh[missile2.pos[0]][missile2.pos[1]] == "blue") {
            v.d = true;
            missile2.d = true;
            new_en2();
        }
        afsh[missile2.pos[0]][missile2.pos[1]] = "red";
        missile2.pos[0] -= missile2.speed;
    } catch (err) {}
}

function new_en1() {
    setTimeout(new_enemy1, 2000);
}

function new_en2() {
    setTimeout(new_enemy2, 2000);
}

function new_enemy1() {
    enemy = new obj(f_random(4), 2, "D", "enemy");
    missile1 = new missile(2, 2, "U");
    ally = new obj(f_random(2), 2, f_random("mp"), "ally");
}

function new_enemy2() {
    enemy2 = new obj(f_random(3), 1, "U", "enemy");
    missile2 = new missile(4, 2, "U");
}