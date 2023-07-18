// meme
const inputImagen = document.getElementById('url')
const img = document.getElementById('container-meme');

console.log(img);
console.log(inputImagen);


const changeBackground = () => {
    img.style.backgroundImage = `url('${inputImagen.value}')`
    console.log('hola')
}
inputImagen.addEventListener('input', () => changeBackground())






// filtro

const brightInput = document.getElementById('brightness');
console.log(brightInput)
const opacidad = document.getElementById('opacity');

const contraste = document.getElementById('contrast');
const desenfoque = document.getElementById('blur');
const escalaEscalaGrices = document.getElementById('grayscale');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue-rotation');
const saturacion = document.getElementById('saturation');
const negativo = document.getElementById('invert');

const filtros = () => {
    img.style.filter = `brightness(${brightInput.value}) opacity(${opacidad.value}) blur(${desenfoque.value}px) contrast(${contraste.value}%) grayscale(${escalaEscalaGrices.value}0%) hue-rotate(${hue.value}deg) sepia(${sepia.value}0%) saturate(${saturacion.value}%) invert(${negativo.value})`
}


brightInput.addEventListener('input', () => filtros());
contraste.addEventListener('input', () => filtros());
opacidad.addEventListener('input', () => filtros());
desenfoque.addEventListener('input', () => filtros());
escalaEscalaGrices.addEventListener('input', () => filtros());
sepia.addEventListener('input', () => filtros());
hue.addEventListener('input', () => filtros());
saturacion.addEventListener('input', () => filtros());
negativo.addEventListener('input', () => filtros());



// aside image-----------------------------------

const botonImagen = document.getElementById('list-image');
console.log(botonImagen);
const asideImage = document.getElementById('modo-claro-aside-image');
console.log(asideImage);

botonImagen.addEventListener('click', () => ocultarImg());

const ocultarImg = () => {
    asideText.classList.add('hidden');
    asideImage.classList.remove('hidden');
}
botonImagen.addEventListener('click', () => mostrarImg());
console.log(botonImagen)
const mostrarImg = () => {
    botonImagen.classList.add = ('panel')
}




// aside texto--------------------------------
const botonText = document.getElementById('list-text');

const asideText = document.getElementById('modo-claro-aside-text');


botonText.addEventListener('click', () => ocultarText());

const ocultarText = () => {
    asideImage.classList.add('hidden');
    asideText.classList.remove('hidden');
}

// botonText.addEventListener('click', () => Mostrarpanel());
// console.log(botonText)

// // modo Oscuro------------------------------------
const botonOscuro = document.getElementById('list-oscuro');

const header = document.getElementById('modo-claro-header');

const main = document.getElementById('modo-claro-main');

botonOscuro.addEventListener('click', () => modoOscuro());

const modoOscuro = () => {
    header.classList.toggle('modo-claro-header');
    main.classList.toggle('modo-claro-main');
    asideText.classList.toggle('modo-claro-aside-text');
    asideImage.classList.toggle('modo-claro-aside-image');

    // cambio de nombre de boton modo claro---------------------------

    if (header.classList.contains('modo-claro-header')) {
        botonOscuro.innerText = " 🌅Modo claro";
    } else {
        botonOscuro.innerHTML = '<i class="fa-regular fa-lightbulb icon"></i> Modo oscuro';
    }

}

// boton color-------------------------------
const inputColor1 = document.getElementById('fondo-img');

const inputColor2 = document.getElementById('colour')

const inputColor3 = document.getElementById('found')


const spanColor = document.getElementsByClassName('span-colour')



const color = () => {
    let colorSeleccionado1 = inputColor1.value;

    let colorSeleccionado2 = inputColor2.value;

    let colorSeleccionado3 = inputColor3.value;

    spanColor[0].innerHTML = `${colorSeleccionado1}`
    spanColor[1].innerHTML = `${colorSeleccionado2}`
    spanColor[2].innerHTML = `${colorSeleccionado3}`


}
inputColor1.addEventListener("input", () => color());
inputColor2.addEventListener("input", () => color());
inputColor3.addEventListener("input", () => color());

// cambio de fondo meme



const cambioColorFondo = () => {
    img.style.backgroundColor = `${inputColor1.value}`
}
inputColor1.addEventListener('input', () => cambioColorFondo())

// cambio de fuentes------------------------------------
const textSuperior = document.getElementById('toptext');

const textInferior = document.getElementById('botomtext');


const colorFuentes = () => {
    textSuperior.style.color = `${inputColor2.value}`
    textInferior.style.color = `${inputColor2.value}`
}
inputColor2.addEventListener("input", () => colorFuentes());

// cambio de color al box-------------------------------------------


const boxColor = () => {
    textSuperior.style.backgroundColor = `${inputColor3.value}`
    textInferior.style.backgroundColor = `${inputColor3.value}`
}
inputColor3.addEventListener("input", () => boxColor());

// cambio de color a imagen-----------------------------------------------

const inpuSuperior = document.getElementById('superior');
const inpuInferior = document.getElementById('mensagge-2');

const text = () => {
    textSuperior.innerText = `${inpuSuperior.value}`;
    textInferior.innerText = `${inpuInferior.value}`;
}

inpuSuperior.addEventListener("input", () => text());

inpuInferior.addEventListener("input", () => text());


// selector de fuentes------------------------------------------------

const fontFamily = document.getElementById('select');

const fuente = () => {
    textSuperior.style.fontFamily = `${fontFamily.value}`
    textInferior.style.fontFamily = `${fontFamily.value}`
}
fontFamily.addEventListener("change", () => fuente());


// cambio de select

const inputFondo = document.getElementById('select-matiz')
const blendMolde = () => {
    img.style.backgroundBlendMode = `${inputFondo.value}`
}

inputFondo.addEventListener("change", () => blendMolde());


// checked 

const chekedTexSup = document.getElementById('checkeo');


const chekedTexinfe = document.getElementById('checked-2');


const chekin = () => {
    if (chekedTexSup.checked) {
        textSuperior.classList.add("hidden");
        textInferior.classList.remove('hidden');
    } else {
    } if (chekedTexinfe.checked) {
        textInferior.classList.add('hidden');
        textSuperior.classList.remove("hidden");
    }

}
chekedTexSup.addEventListener("change", () => chekin());
chekedTexinfe.addEventListener("change", () => chekin());

// button centrado

const left = document.getElementById('left');

const center = document.getElementById('center');
const right = document.getElementById('right');

const leftTex = () => {
    textSuperior.style.textAlign = "left";
    textInferior.style.textAlign = "left";
}
left.addEventListener("click", () => leftTex());

const centerTex = () => {
    textSuperior.style.textAlign = 'center';
    textInferior.style.textAlign = 'center';
}
center.addEventListener("click", () => centerTex());

const rightTex = () => {
    textSuperior.style.textAlign = 'right';
    textInferior.style.textAlign = 'right';
}
right.addEventListener("click", () => rightTex());

// espaciado

const espaciado = document.getElementById("number");



const espaciadoText = () => {
    textSuperior.style.padding = `${espaciado.value}px`;
    textInferior.style.padding = `${espaciado.value}px`;
}

espaciado.addEventListener("input", () => espaciadoText());

// interlineado txts------------------------------------------------------

const inter = document.getElementById("Inter");
inter.addEventListener("change", () => interllineadoText());

const interllineadoText = () => {
    textSuperior.style.lineHeight = `${inter.value}`;
    textInferior.style.lineHeight = `${inter.value}`;
    console.log(inter.value)
}


// botones box shadow
const buttonNone = document.getElementById('button-outline');


buttonNone.addEventListener("click", () => botonNone());

const botonNone = () => {
    console.log(buttonNone.value)
    textSuperior.style.textShadow = "none";
    textInferior.style.textShadow = "none";
}

// buttton dark-------------------------------

const buttondark = document.getElementById('button-outline3');


const botonDark = () => {

    textSuperior.style.textShadow = '1px 1px 10px black';
    textInferior.style.textShadow = "1px 1px 10px black";
}
buttondark.addEventListener("click", () => botonDark());

// button light---------------------
const buttonlight = document.getElementById('button-outline2');


const botonlight = () => {
    textSuperior.style.textShadow = '2px 2px 10px pink';
    textInferior.style.textShadow = "2px 2px 10px pink";
}
buttonlight.addEventListener("click", () => botonlight());








// descarga meme

const descargaButton = document.getElementById("descarga-Button");
const meme = document.getElementById("meme");



descargaButton.addEventListener("click", () => downloadMeme());

const downloadMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
        window.saveAs(blob, "mi-meme.png");
    })
        ;
};

const tamaño = document.getElementById('number-icon');


const tamañoFuente = () => {
    textSuperior.style.fontSize = `${tamaño.value}px `;

}
tamaño.addEventListener("input", () => tamañoFuente());


// cheked transparente

const tranparente = document.getElementById('checked-3');
console.log(tranparente)

const tranparerenteCheked = () => {
    if (tranparente.checked) {
        textSuperior.style.backgroundColor = 'transparent';
        textSuperior.style.zIndex= 1 
        textInferior.style.backgroundColor = 'transparent';
        textInferior.style.zIndex= 1
        textSuperior.style.color= 'white';
        textInferior.style.color='white';
        meme.style.position = 'relative';
        textSuperior.style.position = 'absolute';
        textInferior.style.position = 'absolute';
        textSuperior.style.top = "0";
        textInferior.style.bottom = "0";

    } else {
        textSuperior.style.backgroundColor = '#ffffff';
        textInferior.style.backgroundColor = '#ffffff';
        textSuperior.style.position = 'static';
        textInferior.style.position = 'static';
        textSuperior.style.color= 'black';
        textInferior.style.color= 'black';


    }

}
tranparente.addEventListener('input', () => tranparerenteCheked());


// restabecer filtros

const rese = document.getElementById('reset');

rese.addEventListener('click', () => filtros());



// boton aside text

const botonCerrar = document.getElementById('fa-mark');

const botonCerrartex = document.getElementById('fa-xmark-text');

const cerrar = () => {
    asideImage.classList.add('hidden');
    asideText.classList.add('hidden');
}

botonCerrar.addEventListener('click', () => cerrar());
botonCerrartex.addEventListener('click', () => cerrar());
// ------------------------------------------------------------

const resizeWindow = () => {

    if (document.body.getBoundingClientRect().width < 1024) {
        //    si la condicion se cumple se ejecuta este codigo
        asideImage.classList.add('hidden');
        asideText.classList.add('hidden');



    }
}
window.addEventListener("resize", resizeWindow)

































