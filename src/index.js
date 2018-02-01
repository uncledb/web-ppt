(function () {
	// 获取元素
	let pages = document.getElementsByClassName('page');

	let minPage = 1;
	let totalPage = pages.length;

	// 设置锚
	let index = 1;
	for (let page of pages) {
		page.setAttribute('id', String(index));
		index++;
	}

	// 添加事件
	window.addEventListener('keydown', function (e) {
		let keyCode = e.keyCode;
		if ([37, 38].indexOf(keyCode) !== -1) {
			// 左 上
			go(-1);
		} else if ([39, 40].indexOf(keyCode) !== -1) {
			// 右 下
			go(+1);
		}
	});

	// 历史记录
	function go(num) {
		if (num === 0) {
			goToPage(1);
			return false;
		}
		let willGoPage = getCurrentPage() + num;
		if (willGoPage < minPage || willGoPage > totalPage) {
			console.log('到达边缘啦...');
		} else {
			goToPage(willGoPage);
		}
	}

	// 跳转到指定的页
	function goToPage(pageNum) {
		window.location.hash = pageNum;
	}

	function getCurrentPage() {
		return +window.location.hash.substr(1);
	}

	// 初始化
	let currentPage = getCurrentPage();
	if (currentPage === 0 || isNaN(currentPage)) {
		go(0);
	}
})();

// let currentPage = 1;
// let clientHeight = document.documentElement.clientHeight;
//
// window.addEventListener('keydown', function (e) {
// 	let keyCode = e.keyCode;
// 	if ([37, 38].indexOf(keyCode) !== -1) {
// 		// 左 上
// 		pre();
// 	} else if ([39, 40].indexOf(keyCode) !== -1) {
// 		// 右 下
// 		next();
// 	}
// });
//
// function next() {
// 	currentPage++;
// 	document.body.style.transform = "translate(0px," + -currentPage * clientHeight + "px)";
// }
//
// function pre() {
// 	currentPage--;
// 	document.body.style.transform = "translate(0px," + -currentPage * clientHeight + "px)";
// }
