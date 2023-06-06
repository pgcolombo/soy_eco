const categorias = document.querySelectorAll('#categorias .categoria');
const cont_preguntas = document.querySelectorAll('.cont_preguntas')
let categoriaactiva = null

categorias.forEach((categoria) => {
    categoria.addEventListener('click', (e) => {
        categorias.forEach((elemento) => {
            elemento.classList.remove('activa')
        })

        e.currentTarget.classList.toggle('activa')

        categoriaactiva = categoria.dataset.categoria

        cont_preguntas.forEach((conenedor) => {
            if(conenedor.dataset.categoria === categoriaactiva){
                conenedor.classList.add('activa')
            }
            else{
                conenedor.classList.remove('activa')
            }
        })
    })
})

const preguntas = document.querySelectorAll('.preguntas .cont_pregunta')
preguntas.forEach((pregunta) => {
    pregunta.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('activa')

        const respuesta = pregunta.querySelector('.respuesta')
        const alturaresp = respuesta.scrollHeight
        
        if(!respuesta.style.maxheigth){
            respuesta.style.maxheigth = alturaresp
        }
        else{
            respuesta.style.maxheigth = null
        }
    })
})