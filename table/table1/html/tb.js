   <script type="text/javascript">
   var dataSet=[
["avartar", "Nguyễn văn a" , "Nam"," Nguyenvan@gmail.com","01637447283"],
["avartar", "Lê thị a" , "Nữ"," Leth@gmail.com","01637247283"],
["avartar", "Nguyễn văn a" , "nam"," Nguyenvan@gmail.com","01637447283"]
];  
$(document).ready(function(){
    $('#myTable').DataTable( {
        data: dataSet,
        columns: [
            { title: "vartar" },
            { title: "Name" },
            { title: "Sex" },
            { title: "Email." },
            { title: "PhoneNumber" }
        ]
    } );
} );
    </script>