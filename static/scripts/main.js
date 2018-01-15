requirejs.config({
    baseUrl: 'static/scripts/',
    paths: {
        /** 配置JQ路径，CDN回退到自己服务器上面的路径 */
        'jquery': [
            'https://cdn.bootcss.com/jquery/1.8.3/jquery.min',
            'lib/jquery-1.8.3.min'
        ],
        'SuperScrollorama': 'https://cdn.bootcss.com/SuperScrollorama/1.0.3/jquery.superscrollorama.min',
        'tweenMax': 'https://cdn.bootcss.com/gsap/latest/TweenMax.min',
        'Swiper': 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.7/js/swiper.min',
        'echarts': 'lib/echarts.min',
        'china': 'lib/china',
        'parallax': 'parallax'
    },
    shim: {
        'SuperScrollorama': ['jquery']
    }
})