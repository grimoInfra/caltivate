/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Agrimo Infra LTD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export class HostMain {

    public async startup() {
        console.log('didInitializeHostMain-Pius')
    }

};


export const Host = new HostMain();

Host.startup();