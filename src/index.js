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
		} else if ([39, 40, 13].indexOf(keyCode) !== -1) {
			// 右 下 回车
			go(+1);
		}
	});

	// 历史记录
	function go(num) {
		if (num === 0 || isNaN(num)) {
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
		// 设置下方进度条  vw不需要处理window resize 可以自适应
		document.querySelector('.process-bar').style.width = ~~(pageNum / totalPage * 100) + 'vw';
	}

	function getCurrentPage() {
		return +window.location.hash.substr(1);
	}

	// 初始化
	let currentPage = getCurrentPage();
	goToPage(currentPage)
})();
