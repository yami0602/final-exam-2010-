const dog_api = 'https://dog.ceo/api/breeds/list/all'
const dog_api_random = 'https://dog.ceo/api/breed/${breed name}/images'



$.ajax({
    type: 'GET', 
    dataType: 'json',
    url: dog_api,
    async: true,
    success: function(data){
    console.log(data)
    
    $('#selectBreed').html('');
    for(let i= 0; i<dog_api.length; i++){
        $('#selectBreed').prepend(`<option> ${dog_api} </option>`)
        
    console.log()
    }
    
    }
});


console.clear();





