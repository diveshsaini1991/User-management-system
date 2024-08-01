

$("#add_user").submit(event=>{
    alert("Data added Sucessfully !!!");
    window.location.href="/";
})

$("#update_user").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['name']] = n['value']
    })
    
    data.id = $(this).find('input[name="id"]').val();

    var request = {
        "url" : `http://localhost:3001/api/user/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })

})

if(window.location.pathname == "/"){
    $ondelete = $("#hlo td a.delete");
    $ondelete.click((e)=>{
        var $deleteLink = $(e.target).closest('.delete');
        var id = $deleteLink.attr("dataid");
        var request = {
            "url" : `http://localhost:3001/api/user/${id}`,
            "method" : "DELETE"
        }

        if(confirm("DO YOU REALLY WANT TO DELETE THIS RECORD")){
            $.ajax(request).done((response)=>{
                alert("Data deleted Sucessfully")
                location.reload();
            })
        }

    })
}