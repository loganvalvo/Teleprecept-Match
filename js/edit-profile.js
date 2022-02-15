function editFunc()
{
	if(document.getElementById("edit-button").innerHTML === "Edit")
	{
		var bio = document.getElementById("personal-bio").style.display = 'none';
		var special = document.getElementById("personal-specialities").style.display = 'none';
		var bioedit = document.getElementById("bio-edit").style.display = 'block';
		var specialedit = document.getElementById("specialities-edit").style.display = 'block';
		var button = document.getElementById("edit-button").innerHTML = "Save";
	}
	else {
		var bio = document.getElementById("personal-bio").style.display = 'block';
		var special = document.getElementById("personal-specialities").style.display = 'block';
		var bioedit = document.getElementById("bio-edit").style.display = 'none';
		var specialedit = document.getElementById("specialities-edit").style.display = 'none';
		var button = document.getElementById("edit-button").innerHTML = "Edit";
	}


}
