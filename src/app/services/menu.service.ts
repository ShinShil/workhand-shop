export class MenuService {
    getTopMenu(): IMenuItem[] {
        return [
            this.getLink('Home', '/home'),
            this.getLink('Goods', '/goods')
        ];
    }

    getLink(title: string, href: string): IMenuItem {
        return { title, href };
    }
}