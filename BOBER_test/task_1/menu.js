function show_menu()
{
	var visibilty = document.getElementById('menu');

	if (visibilty.style.display == 'block')
	{
		visibilty.style.display = 'none';
	}
	else
	{
		visibilty.style.display = 'block';
	}
}

function show_submenu()
{
	var subVisibilty = document.getElementById('submenu');

	if (subVisibilty.style.display == 'block')
	{
		subVisibilty.style.display = 'none';
	}
	else
	{
		subVisibilty.style.display = 'block';
	}
}

window.onload = function()
{

	document.getElementById('catalogue-btn').onclick = function()
	{
		show_menu();
	};

	document.getElementById('h-submenu').onmouseenter = function()
	{
		show_submenu();
	};

	document.getElementById('h-submenu').onmouseleave = function()
	{
		show_submenu();
	}

}