import * as AWS from "@aws-sdk/client-appconfig";

import { IAppConfig } from "../Interface/appconfig.interface";
import { CreateAppParams } from "../types/appConfig.types";

export class AWSAppConfigClient implements IAppConfig {
    public static instance: AWSAppConfigClient | undefined = undefined;
    public static getInstance(
        configuration: AWS.AppConfigClientConfig
    ): AWSAppConfigClient {
        if (this.instance !== undefined) return this.instance;
        this.instance = new AWSAppConfigClient(configuration);
        return this.instance;
    }
    public appConfig: AWS.AppConfig;
    constructor(configuration: AWS.AppConfigClientConfig) {
        this.appConfig = new AWS.AppConfig(configuration);
    }

    createApplication = async (params: AWS.CreateApplicationCommandInput) => {
        try {
            const response = await this.appConfig.createApplication(params);
            return response;
        } catch (err) {
            throw new Error(err);
        }
    };
    createEnvironment = async (params: AWS.CreateEnvironmentCommandInput) => {
        try {
            const response = await this.appConfig.createEnvironment(params);
            return response;
        } catch (err) {
            throw new Error(err);
        }
    };
    createConfigurationProfile = async (
        params: AWS.CreateConfigurationProfileCommandInput
    ) => {
        try {
            const response = await this.appConfig.createConfigurationProfile(
                params
            );
            return response;
        } catch (err) {
            throw new Error(err);
        }
    };
    listApplication = async (params: AWS.ListApplicationsCommandInput) => {
        try {
            const response = await this.appConfig.listApplications(params);
            return response;
        } catch (err) {
            throw new Error(err);
        }
    };
}

const createParams: CreateAppParams = {
    Name: "demo",
    Description: "this is demo",
};

const AppConfigClientInstance = AWSAppConfigClient.getInstance({
    region: "us-east-1",
});
const run = async () => {
    const create = await AppConfigClientInstance.createApplication(
        createParams
    );
    console.log("=======created application====");
    console.log(create);
    const envParams: AWS.CreateEnvironmentCommandInput = {
        ApplicationId: create.Id,
        Name: "demo_env",
        Description: "this is demo env",
    };
    const env = await AppConfigClientInstance.createEnvironment(envParams);
    console.log("=========env created========");
    console.log(env);
    // const configureParams: AWS.CreateConfigurationProfileCommandInput = {
    //     ApplicationId: create.Id,
    //     LocationUri: "s3://appconfigzode/appConfig.json",
    //     Name: "demo configure",
    //     RetrievalRoleArn: "arn:aws:iam::428082319859:user/appConfig",
    // };
    // const config = await AppConfigClientInstance.createConfigurationProfile(
    //     configureParams
    // );
    // console.log("=====configuration profile created=======");
    // console.log(config);
    const listParams: AWS.ListApplicationsCommandInput = {};
    const list = await AppConfigClientInstance.listApplication(listParams);
    console.log("=========display list created=========");
    console.log(list);
};
run();
