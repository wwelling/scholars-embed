import { RestService } from './rest.service';
import { EmbedConfig } from '../embed.config';

import { getSelfBaseUrl } from '../utilities/document.utility';

class ConfigService extends RestService {

    private embedConfig: EmbedConfig;

    public getConfig(): Promise<EmbedConfig> {
        const promise = this.get(`${getSelfBaseUrl()}/embedConfig.json`);
        promise.then((embedConfig: EmbedConfig) => {
            this.embedConfig = embedConfig;
        });
        return promise;
    }

    public getServiceUrl(): string {
        return this.embedConfig.serviceUrl;
    }

    public getUiUrl(): string {
        return this.embedConfig.uiUrl;
    }

    public getVivoUrl(): string {
        return this.embedConfig.vivoUrl;
    }

}

export const configService = new ConfigService();
