import * as AWS from "@aws-sdk/client-appconfig";
export type CreateAppParams = {
    Name: string;
    Description?: string;
} & AWS.CreateApplicationCommandInput;
