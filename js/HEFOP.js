function loadHeaderContent() {
        axios.get('../assest/headerpage.html')
            .then(response => {
            document.getElementById('headerContainer').innerHTML = response.data;
            })
            .catch(error => console.error('حدث خطأ: ', error));
        }

    document.addEventListener('DOMContentLoaded', loadHeaderContent);

    axios.get('../assest/footerpage.html')
    .then(response => {
        document.getElementById('footercontaienr').innerHTML = response.data;
    })
    .catch(error => console.error('حدث خطأ: ', error));


    

    // let htmlDocument = document.implementation.createHTMLDocument();
    //             htmlDocument.body.innerHTML = response.data;
    //             let headerContent;
    //             let dir = localStorage.getItem('lang');
    //             console.log(dir)
    //             if (dir === 'en') {
    //                 headerContent = htmlDocument.getElementById('index').innerHTML;
    //                 console.log(true);
    //                 // localStorage.setItem('lang',true);
    //             } else {
    //                 headerContent = htmlDocument.getElementById('english').innerHTML;
    //                 // localStorage.setItem('lang',true);
    //             }
    //             document.getElementById('headerContainer').innerHTML = headerContent;
    //             console.log(response);
    //         })
    //         .catch(error => console.error('حدث خطأ: ', error));