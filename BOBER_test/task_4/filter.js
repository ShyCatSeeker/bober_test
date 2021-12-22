//Подготовка DOM-документов
$(document).ready(function()
{

	//Обработчик клика на кнопку "Применить"
    $('#apply').click(function()
    {
    	var value = $('#input').val().toLowerCase(); //заполняю переменную данными из инпута и привожу к нижнему регистру
    	var dateB = $('#date-b').val().split('-'); //создаю массив из данных инпута даты, в порядке год-месяц-день
    	var dateE = $('#date-e').val().split('-');
    	var fixedDate = $('#fixed-date').val(); //заполняю переменную данными из выпадающего списка
    	var objDateB = new Date(dateB[0],dateB[1]-1,dateB[2]); //создаю новые обьекты дат
    	var objDateE = new Date(dateE[0],dateE[1]-1,dateE[2]);

    	if (dateB == '' && dateE == '') //если фильтр дат не заполнен
    	{
    		$('#tbody tr').each(function()
    		{
    			var status = $(this).children('.status').text().toLowerCase(); //получаю и записываю в переменную статус из строки таблицы

    			if (status != value)
    			{
    				$(this).toggle(false); //прячу несовпадающие строки
    			}
    			else
    			{
    				$(this).toggle(true); //показываю совпадающие
    			}
    		});
    	}

    	if (value.length === 0) //если поле со статусом заявки неактивно
    	{
    		$('#tbody tr').each(function()
    		{
    			var date = $(this).children('.date').text().split('.');
    			var tableDate = new Date(date[2],date[1]-1,date[0]);

    			if (tableDate >= objDateB && tableDate <= objDateE)
    			{
    				$(this).toggle(true);
    			}
    			else
    			{
    				$(this).toggle(false);
    			}
    		});
        }

    	if (value.length === 0 && dateB == '' && dateE == '') //если другие фильтры неактивны
    	{
    		$('#tbody tr').each(function()
    		{
    			var newDate = new Date(); //создаю новый обьект даты

    			var today = newDate.getDate() + "-" + (newDate.getMonth()+1) + "-" + newDate.getFullYear(); //заполняю переменные данным из этого обьекта 
                var yesterday = (newDate.getDate()-1) + "-" + (newDate.getMonth()+1) + "-" + newDate.getFullYear();
                var weekBefore = (newDate.getDate()-7) + "-" + (newDate.getMonth()+1) + "-" + newDate.getFullYear();
                var monthBefore = newDate.getDate() + "-" + (newDate.getMonth()+1-1) + "-" + newDate.getFullYear();

    			var tableDate = $(this).children('.date').text().split('.');
    			var tableDate1 = new Date(tableDate[2],tableDate[1]-1,tableDate[0]);
    			var tableDate2 = tableDate1.getDate() + "-" + (tableDate1.getMonth()+1) + "-" + tableDate1.getFullYear();

    			switch (fixedDate) //в зависимости от выбранной позиции
    			{
    				case 'Сегодня':
    				{
    					if (tableDate2 != today)
    					{
    						$(this).toggle(false);
    					}
    					else
    					{
    						$(this).toggle(true);
    					}

    					break;
    				}

    				case 'Вчера':
    				{
    					if (tableDate2 != yesterday)
    					{
    						$(this).toggle(false);
    					}
    					else
    					{
    						$(this).toggle(true);
    					}

    					break;
    				}

    				/* case 'За неделю':
    				{
    					console.log(weekBefore <= tableDate2);
    					if (weekBefore <= tableDate2 && tableDate2 <= today)
    					{
    						$(this).toggle(true);
    					}
    					else
    					{
    						$(this).toggle(false);
    					}

    					break;
    				}

    				case 'За месяц':
    				{
    					if (monthBefore <= tableDate2 && monthBefore <= today)
    					{
    						$(this).toggle(true);
    					}
    					else
    					{
    						$(this).toggle(false);
    					}

    					break;
    				} */
    			}

    		});
        }

    });

    //Кнопка сброса фильтра
    $('#reset').click(function()
    {
    	var value = $('#input').val(''); //обнуляю поля ввода
    	var dateB = $('#date-b').val('');
    	var dateE = $('#date-e').val('');

    	$('#tbody tr').each(function() //показываю все скрытые строки таблицы
    	{
    		if ($(this).is(":hidden"))
    		{
    			$(this).toggle();
    		}
    	});
    });

});