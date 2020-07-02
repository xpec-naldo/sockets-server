export class HttpStatus {

    constructor(
        public ok:number = 200,
        public badRequest:number = 400,
        public unauthorized:number = 401,
        public forbidden:number = 403,
        public notFound:number = 404,
        public serverError:number = 500
    ) {

    }

}
