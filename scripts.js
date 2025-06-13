// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 为所有游戏卡片添加点击事件
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            // 移除其他卡片的活跃状态
            gameCards.forEach(c => c.classList.remove('active'));
            // 添加当前卡片的活跃状态
            this.classList.add('active');
        });
    });

    // 添加响应式处理
    function handleResize() {
        const gameFrames = document.querySelectorAll('.game-frame');
        const windowWidth = window.innerWidth;
        
        gameFrames.forEach(frame => {
            if (windowWidth <= 768) {
                frame.style.height = '300px';
            } else {
                frame.style.height = '400px';
            }
        });
    }

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);
    // 初始化时执行一次
    handleResize();
}); 