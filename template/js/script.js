$( document ).on("mousedown", ".inputRange", function() {
	$( document ).on("mousemove", ".inputRange", function() {
		let rangeVal = $( this ).val(),
			classesNew;

		switch( rangeVal ) {
            case "1":
				$(".inputCount").text( rangeVal );
				classesNew = $(".main .card").parent().attr("class").replace(/col-md-\d*/, "col-md-12");
				$(".main .card").parent().attr("class", classesNew);
				break;
            case "2":
				$(".inputCount").text( rangeVal );
				classesNew = $(".main .card").parent().attr("class").replace(/col-md-\d*/, "col-md-6");
				$(".main .card").parent().attr("class", classesNew);
				break;
            case "3":
				$(".inputCount").text (rangeVal );
				classesNew = $(".main .card").parent().attr("class").replace(/col-md-\d*/, "col-md-4");
				$(".main .card").parent().attr("class", classesNew);
				break;
		}

	});
});

$( document ).on("mouseup", ".inputRange", function() {
	$( this ).off("mousemove");
});