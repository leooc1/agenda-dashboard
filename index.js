function day(){
    let ld = document.getElementById('day')
    if(ld.classList.contains('ativo')){}
    else{
        let vet = ['6.4','7.2','2','1.6','0.8','1.4','0.8','1','1','2','0.4','0.4',]
        let span = document.querySelectorAll('span')
        for(let i in span){
            span[i].innerText = vet[i]
        }
        
        let lw = document.getElementById('week')
        let lm = document.getElementById('month')
        
        ld.classList.add('ativo')
        ld.style.color = '#FFF'
        if(lw.classList.contains('ativo')){
            lw.classList.remove('ativo')
            lw.style.color = 'var(--DesaturatedBlue)'
        }
        if(lm.classList.contains('ativo')){
            lm.classList.remove('ativo')
            lm.style.color = 'var(--DesaturatedBlue)'
        }
    }
}

function week(){
    let vet = ['32','36','10','8','4','7','4','5','5','10','2','2',]
    let span = document.querySelectorAll('span')
    for(let i in span){
        span[i].innerText = vet[i]
    }

    let lw = document.getElementById('week')
    let ld = document.getElementById('day')
    let lm = document.getElementById('month')
        
        lw.style.color = '#fff'
        lw.classList.add('ativo')
        if(ld.classList.contains('ativo')){
            ld.classList.remove('ativo')
            ld.style.color = 'var(--DesaturatedBlue)'
        }
        if(lm.classList.contains('ativo')){
            lm.classList.remove('ativo')
            lm.style.color = 'var(--DesaturatedBlue)'
        }
}

function month(){
    let vet = ['128','144','40','32','16','28','16','20','20','40','8','8']
    let span = document.querySelectorAll('span')
        for(let i in span){
            span[i].innerText = vet[i]
        }
        
    let lw = document.getElementById('week')
    let ld = document.getElementById('day')
    let lm = document.getElementById('month')

    lm.style.color = '#fff'
        lm.classList.add('ativo')
        if(ld.classList.contains('ativo')){
            ld.classList.remove('ativo')
            ld.style.color = 'var(--DesaturatedBlue)'
        }
        if(lw.classList.contains('ativo')){
            lw.classList.remove('ativo')
            lw.style.color = 'var(--DesaturatedBlue)'
        }
}