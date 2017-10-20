
$('document').ready(function(){

    $('button.btn.btn-outline-success').click(function(){
       var item=$('input.form-control').val();


         $.ajax({
            type:'POST',
            url:'/',
            data:{item},
            success: function(data){

            location.reload();
            }
        });

    });

    $('li button.btn.btn-danger').click(function(){
        
        var id=$(this).attr('id');
        var that=$(this);
        console.log(id);
        if(id){
            $.ajax({
                url:'/',
                method:'DELETE',
                data:{id},
                success:function(data){
                    if(data.status){
                    that.parent().remove();
                    }
                }
            })
        }
    })

});