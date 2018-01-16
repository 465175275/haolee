requirejs.config({
    baseUrl: 'static/scripts/',
    paths: {
        /** 配置JQ路径，CDN回退到自己服务器上面的路径 */
        'jquery': [
            'https://cdn.bootcss.com/jquery/1.8.3/jquery.min',
            'lib/jquery-1.8.3.min'
        ],
        /** require CSS文件 */
        'css': 'css.min',
        /** 缓动js文件 */
        'ease': 'https://cdn.bootcss.com/jquery-easing/1.4.1/jquery.easing.min',
        /** SuperScrollorama.min.js CDN */
        'SuperScrollorama': 'https://cdn.bootcss.com/SuperScrollorama/1.0.3/jquery.superscrollorama.min',
        /** TweenMax.min.js CDN */
        'tweenMax': 'https://cdn.bootcss.com/gsap/latest/TweenMax.min',
        /** Swiper CDN */
        'Swiper': 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min',
        /** echarts路径 */
        'echarts': 'lib/echarts.min',
        /** 中国地图js文件 */
        'china': 'lib/china',
        /** 视差效果js文件 */
        'parallax': 'parallax',
        /** wow CDN */
        'wow': 'https://cdn.bootcss.com/wow/1.1.2/wow.min',
        /** aos CDN */
        'aos': 'https://cdn.bootcss.com/aos/2.2.0/aos'
    },
    shim: {
        /** 引入swiper依赖css文件 */
        'Swiper': ['css!https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/css/swiper.min.css'],
        'SuperScrollorama': ['jquery'],
        /** 引入缓动js文件依赖 */
        'ease': ['jquery'],
        /** 引入wow依赖css文件 */
        'wow': ['css!../styles/lib/animate.css'],
        /** 引入aos依赖css文件 */
        'aos': ['css!https://cdn.bootcss.com/aos/2.2.0/aos.css', 'ease']
    }
})