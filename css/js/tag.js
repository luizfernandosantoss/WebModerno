const colors =  {
    ul:'#32CD32	',
    ol:'#7FFFD4',
    span:'#FFFF00',
    body: '#000080',
    padrao: '#FF0000',
    get(color){
        return this[color] ? this[color] : this.padrao;
    }
}
document.querySelectorAll('.tag').forEach(elemento => {
    let tagName = elemento.tagName.toLowerCase();
    elemento.style.borderColor = colors.get(tagName); 
    if(!elemento.classList.contains('nolabel')){
        let label = document.createElement('label');
        label.innerText = tagName;
        label.style.backgroundColor =colors.get(tagName);
        elemento.insertBefore(label,elemento.childNodes[0]);
    }
});