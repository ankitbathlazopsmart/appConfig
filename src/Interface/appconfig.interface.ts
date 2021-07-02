import * as AWS from "@aws-sdk/client-appconfig";
export interface IAppConfig {
    createApplication: (
        params: AWS.CreateApplicationCommandInput
    ) => Promise<AWS.CreateApplicationCommandOutput>;
    createEnvironment: (
        params: AWS.CreateEnvironmentCommandInput
    ) => Promise<AWS.CreateEnvironmentCommandOutput>;
    createConfigurationProfile: (
        params: AWS.CreateConfigurationProfileCommandInput
    ) => Promise<AWS.CreateConfigurationProfileCommandOutput>;
    listApplication: (
        params: AWS.ListApplicationsCommandInput
    ) => Promise<AWS.ListApplicationsCommandOutput>;
}
