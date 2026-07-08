const button = document.querySelector('.btn')
const banner = document.querySelector('.banner')
const image = document.querySelector('.img')
button.addEventListener('click',function(){

    const api =  'https://api.github.com/users/hiteshchoudhary'
        const xhr =  new XMLHttpRequest();
        xhr.open('GET',api)
        console.log(xhr.readyState);
        xhr.onreadystatechange = function(){
            if(xhr.readyState ===4){
                const data = JSON.parse(this.responseText)
                console.log(typeof data);
                banner.innerHTML = `Followers Count = ${data.followers}`
                image.src = 'https://avatars.githubusercontent.com/u/11613311?v=4'
            }
            
            
        }
        xhr.send()
})
    