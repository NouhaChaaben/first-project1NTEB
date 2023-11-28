import { Product } from "./product";

export const PRODUCTS: Product[]=[
    {
        reference : "prod01",
        name: "Monica Side Wingback Chair, Pink",
        stockQte : 20,
        unitPrice:200.500,
        image :"pinkChair.png",
        category : "Chairs",
        comments: [
            {
                rating: 5,
                comment: 'I think its great. Great value for the price',
                date: '2020-12-31T20:38:28.547094Z'
            },
            {
                rating: 4,
                comment: 'Its sturdy, color is great, and smaller like we wanted. ',
                date: '2021-09-25T14:07:13.556094Z'
            },
            {
                rating: 3,
                comment: ' It looks as expected as in the image.',
                date: '2022-06-13T05:33:09.348884Z'
            }
        ]
    },
    {
        reference : "prod02",
        name: "Mainstays Wood Rectangle Coffee Table",
        stockQte : 50,
        unitPrice:120.750,
        image :"coffeTable1.png",
        category : "Tables",
        comments: [
            {
                rating: 5,
                comment: 'I think its great. Great value for the price',
                date: '2020-12-31T20:38:28.547094Z'
            },
            {
                rating: 4,
                comment: 'Its sturdy, color is great, and smaller like we wanted. ',
                date: '2021-09-25T14:07:13.556094Z'
            }
        ]
    },
    {
        reference : "prod03",
        name: "Kinley Lounge Arm Chair, Navy",
        stockQte : 70,
        unitPrice:350.000,
        image :"blueChair.png",
        category : "Chairs",
        comments: [
            {
                rating: 5,
                comment: 'I think its great. Great value for the price',
                date: '2020-12-31T20:38:28.547094Z'
            },
            {
                rating: 3,
                comment: ' It looks as expected as in the image.',
                date: '2022-06-13T05:33:09.348884Z'
            }
        ]
    },
    
    {
        reference : "prod04",
        name: "Noble House Wood Coffee Table",
        stockQte : 35,
        unitPrice:240.000,
        image :"coffeTable2.png",
        category : "Tables",
        comments: [
            {
                rating: 5,
                comment: 'I think its great. Great value for the price',
                date: '2020-12-31T20:38:28.547094Z'
            },
            {
                rating: 4,
                comment: 'Its sturdy, color is great, and smaller like we wanted. ',
                date: '2021-09-25T14:07:13.556094Z'
            },
            {
                rating: 3,
                comment: ' It looks as expected as in the image.',
                date: '2022-06-13T05:33:09.348884Z'
            }
        ]
    }
];