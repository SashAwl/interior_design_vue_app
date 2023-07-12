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
        tegs: [
            { name: 'Kitchen', tegChecked: false },
            { name: 'Building', tegChecked: false },
            { name: 'Architecture', tegChecked: false },
            { name: 'Bedroom', tegChecked: false },
            { name: 'Kitchen Planning', tegChecked: false },
            { name: 'All', tegChecked: false },
        ],
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
            this.tegs.forEach(itemTeg => { itemTeg.tegChecked = false });
            teg.tegChecked = true;
            if (teg.name === 'All') {
                this.filter = this.articlesFull
            } else {
                this.filter = this.articlesFull.filter((item) => item.teg === teg.name)
            }
        }
    }
})