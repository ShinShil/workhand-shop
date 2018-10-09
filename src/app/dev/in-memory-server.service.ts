export class InMemoryServerService {
    createDb(reqInfo?: any) {
        const goods: IGood[] = [
            {
                cost: 10,
                id: 1,
                name: 'Jacket',
                shortDescription: 'Amzing jacket that is for you'
            },
            {
                cost: 20,
                id: 2,
                name: 'Toy ccat',
                shortDescription: 'Your children will be happy'
            },
            {
                cost: 15,
                id: 3,
                name: 'Knife',
                shortDescription: 'Good knife for salads'
            },
            {
                cost: 17,
                id: 4,
                name: 'Table',
                shortDescription: 'Hand mad table, that will be look good'
            },
            {
                cost: 19,
                id: 5,
                name: 'Hand',
                shortDescription: 'Hand fot fans of the football'
            }
        ];

        goods.forEach((good, index) => {
            good.previewImageUrl = this.getGoodPreviewImageUrl(good.id);
            good.userId = index < 3 ? 1 : 2
        });

        const users = [
            {
                id: 1,
                login: 'user',
                password: '123456'
            }
        ]

        return { goods, users };
    }

    private getGoodPreviewImageUrl(goodId: number) {
        return `/assets/images/good_${goodId}.jpg`;
    }
}