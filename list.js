//to make the todo grey and line through them
//$("li").click(function(){
	/*if($(this).css("color") === "rgb(0, 0, 0)"){

	$(this).css({
		color: "grey",
		textDecoration: "line-through"


	});
}
else
{
	$(this).css({
		color:"black",
		textDecoration:"none"
	});
}

});*/
$("ul").on("click","li",function(){
	$(this).toggleClass("connected");
});
//remove and fadeout the the individual list
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();

	});
	event.stopPropagation(); });
 //to to get the value whem u type enter and the value of the input inito the ul
$("input[type='text']").keypress(function(event)
	{if(event.which===13)
		{
			var todotext=$(this).val();//getter
			$(this).val("")//removes the value fron input but adds the li in ul
			$("ul").append("<li><i class='far fa-trash-alt'></i>"+todotext+"</li>"); }

});
$("#toggleform").click(function(){
	$("input[type='text']").fadeToggle();

});
		 