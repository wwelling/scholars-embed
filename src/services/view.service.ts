import { RestService } from './rest.service';
import { configService } from './config.service';

class ViewService extends RestService {

    public getDisplayView(name: string): Promise<any> {
        return this.get(`${configService.getServiceUrl()}/displayViews/search/findByName?name=${name}`);
    }

}

export const viewService = new ViewService();
