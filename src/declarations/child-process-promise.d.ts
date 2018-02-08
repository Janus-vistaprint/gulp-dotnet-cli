declare module "child-process-promise" {
    export function spawn(command: string, arguments: string[], options: any): Promise<any>;
}
