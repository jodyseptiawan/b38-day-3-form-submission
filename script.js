// 1. Get data form ✅
// 2. Validation value ✅
// 3. Display Mail Software ✅
// 4. Object

function submitForm() {
    // Get data form
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('choose-subject').value
    let message = document.getElementById('input-message').value

    console.log(name);
    
    console.log(email);
    
    console.log(phone);
    
    console.log(subject);
    
    console.log(message);
    

    // // Validation value
    // if(name == ''){
    //     console.log('Nama harus diisi bro...');
    //     return
    // } 
    // if(email == ''){
    //     console.log('Email harus diisi bro...');
    //     return
    // } 
    // if(phone == ''){
    //     console.log('Nomor HP harus diisi bro...');
    //     return
    // } 
    // if(subject == ''){
    //     console.log('Subject harus diisi bro...');
    //     return
    // } 
    // if(message == ''){
    //     console.log('Pesan harus diisi bro...');
    //     return
    // } 

    // console.log('Semua form telah diisi ✅');

    // // Display Mail Software
    // console.log('Open Mail');

    // const a = document.createElement('a')
    // let emailReceiver = 'jody.septiawan5@gmail.com'
    // a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo my name ${name}, <br> ${message}, my phone number ${phone}`
    // a.click();

    // Object

    const dataObject = {
        name,
        email,
        phone,
        subject,
        message
    }

    console.log(dataObject);
}