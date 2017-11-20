angular
	.module("myApp")
	.controller("historyListController", function(){
		var ctrl = this;
		ctrl.defaultState = 'Сортировать по:';

		ctrl.filterStates = [
			{
				type: 0,
				name: 'new',
				text: 'Новые'
			},
			{
				type: 1,
				name: 'awaiting',
				text: 'В ожидании'
			},
			{
				type: 2,
				name: 'approved',
				text: 'Подтвержденные'
			},
			{
				type: 3,
				name: 'all',
				text: 'Все'
			}
		];

		ctrl.filter = function(item){
			switch (item.name) {
				case "new":
					console.log('new');
					break;
				case "awaiting":
					console.log('awaiting');
					break;
				case "approved":
					console.log('approved');
					break;
				case "all":
					console.log('all');
					break;
			}
			// if (item.name = "awaiting"){
			// 	$http.get("awaiting",function(){
			// 		DefaultState = item.text;
			// 	})
			// }
			// if (item.name = "confirmed"){
			// 	$http.get("confirmed",function(){
			// 		DefaultState = item.text;
			// 	})
			// }
			// if (item.name = "all"){
			// 	$http.get("all",function(){
			// 		DefaultState = item.text;
			// 	})
			// }
			ctrl.defaultState = item.text;
		}
		ctrl.result = [
			{
				type: 'Уход за ногтями',
				subtype1: 'Наращивание ногтей',
				subtype2: 'Быстрое наращивание',
				date: '16.04',
				time: '16:30',
				price: 6000
			},
			{
				type: 'Уход за волосами',
				subtype1: 'Укладка',
				subtype2: 'Покраска',
				date: '17.04',
				time: '13:30',
				price: 3500
			},
			{
				type: 'Уход за телом',
				subtype1: 'Массаж',
				subtype2: 'Пилинг',
				date: '11.11',
				time: '07:00',
				price: 2300
			},
			{
				type: 'Уход за ногтями',
				subtype1: 'Наращивание ногтей',
				subtype2: 'Быстрое наращивание',
				date: '16.04',
				time: '16:30',
				price: 6000
			},
			{
				type: 'Уход за волосами',
				subtype1: 'Укладка',
				subtype2: 'Покраска',
				date: '17.04',
				time: '13:30',
				price: 3500
			},
			{
				type: 'Уход за телом',
				subtype1: 'Массаж',
				subtype2: 'Пилинг',
				date: '11.11',
				time: '07:00',
				price: 2300
			}
		]
	})