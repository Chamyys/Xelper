import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import {BuildOptions} from "./types/types";

export function buildDevServer(options:BuildOptions) : DevServerConfiguration{
    return {
        port: options.port ?? 3000,
        //open: options.open_web,
        //если раздовать статику через nginx то надо делать проксирование
        historyApiFallback:true,
        hot:true,
    }


}