function enterKey(event) {
	event.preventDefault();
	document.getElementById("text-change").addEventListener("keyup", (event) => {
		if (event.key === "Enter") {
				document.getElementById("bio").innerText = document.getElementById("text-change").value;
		}
	});
}

function editFunc()
{
	if(document.getElementById("edit-button").innerHTML === "Edit")
	{
		var loc = document.getElementById("location");
		var locedit = document.getElementById("location-edit");
		var bio = document.getElementById("personal-bio");
		var text = document.getElementById("text-change");
		var special = document.getElementById("personal-specialities");
		var bioedit = document.getElementById("bio-edit");
		var specialedit = document.getElementById("specialities-edit");
		var biotext = document.getElementById("bio-text");
		loc.style.display = 'none';
		bio.style.display = 'none';
		special.style.display = 'none';
		locedit.style.display = 'block';
		bioedit.style.display = 'block';
		specialedit.style.display = 'block';
		var button = document.getElementById("edit-button").innerHTML = "Save";

	}
	else {
		var loc = document.getElementById("location");
		var locedit = document.getElementById("location-edit");
		var locbox = document.getElementById("location-box");
		var bio = document.getElementById("personal-bio");
		var text = document.getElementById("text-change");
		var special = document.getElementById("personal-specialities");
		var speciallist = document.getElementById("personal-checks");
		var bioedit = document.getElementById("bio-edit");
		var specialedit = document.getElementById("specialities-edit");
		while (loc.firstChild) {
        loc.removeChild(loc.firstChild);
    }

		var newloc = document.createElement("p");
		newloc.setAttribute("id","bio-text");
		newloc.innerHTML = "Location: " + locbox.value;
		loc.appendChild(newloc);
		while (bio.firstChild) {
        bio.removeChild(bio.firstChild);
    }
		var newbio = document.createElement("p");
		newbio.setAttribute("id","bio-text");
		newbio.innerHTML = text.value;
		bio.appendChild(newbio);
		while (speciallist.firstChild) {
        speciallist.removeChild(speciallist.firstChild);
    }
		if(document.getElementById("pediatric").checked === true)
		{
			var pediatric = document.createElement("li");
			pediatric.innerHTML = "Pediatric";
			speciallist.appendChild(pediatric);
		}
		if(document.getElementById("geriatric").checked === true)
		{
			var geriatric = document.createElement("li");
			geriatric.innerHTML = "Geriatric";
			speciallist.appendChild(geriatric);
		}
		if(document.getElementById("cardiovascular").checked === true)
		{
			var cardiovascular = document.createElement("li");
			cardiovascular.innerHTML = "Cardiovascular";
			speciallist.appendChild(cardiovascular);
		}
		if(document.getElementById("psychiatric").checked === true)
		{
			var psychiatric = document.createElement("li");
			psychiatric.innerHTML = "Psychiatric";
			speciallist.appendChild(psychiatric);
		}
		if(document.getElementById("other").checked === true)
		{
			var other = document.createElement("li");
			other.innerHTML = "Other";
			speciallist.appendChild(other);
		}
		loc.style.display = 'block';
		bio.style.display = 'block';
		special.style.display = 'block';
		locedit.style.display = 'none';
		bioedit.style.display = 'none'
		specialedit.style.display = 'none'
		var button = document.getElementById("edit-button").innerHTML = "Edit";


	}


}
