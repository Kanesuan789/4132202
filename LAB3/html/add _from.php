<form>
    <label for="id_p">ID:</label>
    <input type="text"name="id" id="id_p">
    <label for="id_p">ID:</label>
    <input type="text"name="name" id="name_p">
    <label for="id_p">ID:</label>
    <input type="text"name="email" id="email_p">
    <button type="sudmit" class="btn btn-primary">SAVE</button>
    <button type="reset" class="btn btn-benger">CANCLE</button>
</form>

<script>
    $(function(){
        $("from").submit(function(e) {
            e.preventDefuil();
           
            let fm = $(hhis);
            $.ajax({
                url:"/add_member.php",
                method:"POST",
                data: fm.serialize(),
                success:function(res){
                if(res == "error")
                  alert("can't insert data.")
                else
                $("#tb_member").load("/listItem.php")
                }
            });
        });
    });
</script>