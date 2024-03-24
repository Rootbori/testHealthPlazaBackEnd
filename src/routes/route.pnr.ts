import { Router } from 'express';

export interface Routes {
    path?: string;
    router: Router;
    pathNotify?: string;
}

import TestController from '../controllers/test.controller';

class Routing implements Routes {
    public router = Router()
    public testController = new TestController()

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes() {
        this.router.post(`/list`, this.testController.list)

    }
}

export default Routing;
