<?php
extract($_POST);
extract($_FILES['image']);
//هقل الصوره للفلدر من المسار بتاعها و اتاك ان هي صوره 

$ext = pathinfo($name)['extension'];
$allow_ext=["jpg" , "png" , "jepg" , "bmb"];
if( !in_array($ext , $allow_ext))
{
echo "the file must be image";
exit();
}
// بنغير الاسم عشان مينفعش ارفع نفس الاسم باختلاف الناس اللي هتسجل  يبقا في نفس الاسم في الفولدر
$new_image_name = time()."-".rand(0 , 1000).$ext;
// ننقل الصوره للقلدر الخاص بالداتا  
// الباميتر الاول بيبقا الملف اللي هنقلمنه الصوره و التاني المكان اللي هنقله ليه الصوره 
move_uploaded_file($tmp_name , "..images/$new_image_name");  
?>