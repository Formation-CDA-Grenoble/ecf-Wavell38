export class CreateBookDTO {
    readonly title: string;
    readonly categories: any[];
    readonly chapters: [{
    	title: string,
    	text:string
    }];
}