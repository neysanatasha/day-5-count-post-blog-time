let namaId = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

// Ngecek
let nodeJs = namaId('nodeJs')
let javaScript = namaId('javascript')
let reactJs = namaId('reactJs')
let typeScript = namaId('typeScript')

const data = []
let endDate = namaId('end-date')

function addData(event){
    event.preventDefault()
    let title = namaId('input-title').value
    let content = namaId('input-content').value
    let image = namaId('input-upload').files
    let gambar = URL.createObjectURL(image[0])
    console.log("gambar path ", gambar)
    let startDate = namaId('start-date').value
    let endDate = namaId('end-date').value

    // Menyimpan gambar utk dipanggil
    let iconNodeJs = ''
    let iconjavaScript = ''
    let iconReactJs = ''
    let icontypeScript = ''

    // Mengecek kondisi jika benar isi let diatas
    if(nodeJs.checked === true)
    {
        iconNodeJs = 'assets/img/nodejs.png'
    }
    if(javaScript.checked === true)
    {
        iconjavaScript = 'assets/img/javaScript.png'
    }
    if(reactJs.checked === true)
    {
        iconReactJs = 'assets/img/reactJs.png'
    }
    if(typeScript.checked === true)
    {
        icontypeScript = 'assets/img/typeScript.png'
    }

    // Menampung data buat dikirim ke array data
    let blog = {
        title,
        content,
        gambar,
        iconNodeJs,
        iconReactJs,
        iconjavaScript,
        icontypeScript,
        startDate,
        endDate
    }
    data.push(blog)
    console.log(data)
    renderBlog()
}

function renderBlog(){
    namaId('content').innerHTML = ''
    for(let index = 0; index < data.length; index++)
    {
        namaId('content').innerHTML +=
        `<div class="card-myproject">
            <img src="${data[index].gambar}" alt="">
            <h3>${data[index].title}</h3>
            <p>Durasi:  ${rangeTime(data[index].startDate, data[index].endDate)}</p>
            <p>${data[index].content}</p>
            <div class="icon-myproject">
                <img src="${data[index].iconNodeJs}" alt="">
                <img src="${data[index].iconjavaScript}" alt="">
                <img src="${data[index].iconReactJs}" alt="">
                <img src="${data[index].icontypeScript}" alt="">
            </div>
            <div class="custom-myproject">
           <button> <a href="projectdetail.html" style="text-decoration:none; color:white;">Edit</a></button>
                <button>Delete</button>
            </div>
        </div>`
    }
    function rangeTime(startDate, endDate){
        
        let start = startDate
        let end = endDate
    
        let dateStart = new Date (start)
        let dateEnd = new Date(end)

        let minTime = dateEnd - dateStart
        let millSecond = 1000
    
        let distanceDay = Math.floor(minTime / (millSecond * 60 * 60 * 24))
        console.log(distanceDay)
        let distanceMonth = Math.floor(minTime / (millSecond * 60 * 60 * 24 * 30))
    
        if(distanceMonth > 0){
            return `${distanceMonth} Month`
        } else {
            return `${distanceDay} Days`
        }
    }
}