const app = new Vue({
    el: '#app',
    data: {
        articles: [
            { id: 1, type: 'Kitchen Design', src: 'image/articles/articles1.jpg', headText: 'Let’s Get Solution For Building Construction Work', data: '26 December,2022 ' },
            { id: 2, type: 'Living Design', src: 'image/articles/articles2.jpg', headText: 'Low Cost Latest Invented Interior Designing Ideas.', data: '26 December,2022 ' },
            { id: 3, type: 'Interior Design', src: 'image/articles/articles3.jpg', headText: 'Best For Any Office & Business Interior Solution', data: '26 December,2022 ' },
            { id: 4, type: 'Kitchen Design', src: 'image/articles/articles4.jpg', headText: 'Let’s Get Solution For Building Construction Work', data: '26 December, 2022 ' },
            { id: 5, type: 'Living Design', src: 'image/articles/articles5.jpg', headText: 'Low Cost Latest Invented Interior Designing Ideas.', data: '26 December, 2022 ' },
            { id: 6, type: 'Interior Design', src: 'image/articles/articles6.jpg', headText: 'Best For Any Office & Business Interior Solution', data: '26 December, 2022 ' }
        ]
    }
})

const appArticles = new Vue({
    el: '#appArticles',
    data: {
        articlesFull: [
            { name: 'article-full-kitchen', teg: 'Kitchen' },
            { name: 'article-full-planning-kitchen', teg: 'Kitchen Planning' },
            { name: 'article-full-architecture', teg: 'Architecture' },
            { name: 'article-full-building', teg: 'Building' },
            { name: 'article-full-bedroom', teg: 'Bedroom' },
            { name: 'article-full-bedroom2', teg: 'Bedroom' }
        ],
        tegs: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'All'],
        filter: [
            { name: 'article-full-kitchen', teg: 'Kitchen' },
            { name: 'article-full-planning-kitchen', teg: 'Kitchen Planning' },
            { name: 'article-full-architecture', teg: 'Architecture' },
            { name: 'article-full-building', teg: 'Building' },
            { name: 'article-full-bedroom', teg: 'Bedroom' },
            { name: 'article-full-bedroom2', teg: 'Bedroom' }
        ]
    },
    methods: {
        getFilter(teg) {
            if (teg === 'All') {
                this.filter = this.articlesFull
            } else {
                this.filter = this.articlesFull.filter((item) => item.teg === teg)
            }
        }
    }
})