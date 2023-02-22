/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Agrimo Infra LTD. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

interface IWebComponents {

    /**
     * Called when the component has been connected to the Dom
     */
    connectedCallback(): void;

    /**
     * Called when the component has been removed from the Dom
     */
    disconnectedCallback(): void;

    /**
     * Called everytime an attribute has changed
     * 
     * @todo
     *  implement the static function
     * observedAttributes @returns [attributes]
     * 
     * 
     * @param attributeName Name of the attribute that has changed
     * @param oldValue The Previous value of the attribute
     * @param newValue The new value of the attribute
     * @param namespace The document Namespace the attribute
     */
    attributeChangedCallback(attributeName:string,oldValue:string,newValue:string,namespace?:any): void;
}

//Used to add WebComponents functions to the HTMLELement as an interface;
interface HTMLElement extends IWebComponents { }